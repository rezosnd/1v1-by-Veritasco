import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { Server } from 'socket.io'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['info'] })
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

interface Player {
  socketId: string;
  userId: string;
  elo: number;
  joinedAt: number;
  type: string;
}

const queue: Player[] = [];
const activeMatches = new Map();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url!, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
  })

  // Production Matchmaking Loop - Runs every 2 seconds
  setInterval(async () => {
    const now = Date.now();
    for (let i = 0; i < queue.length; i++) {
      for (let j = i + 1; j < queue.length; j++) {
        const p1 = queue[i];
        const p2 = queue[j];
        if (p1.type !== p2.type) continue; // Ranked vs Casual

        const maxWait = Math.max((now - p1.joinedAt) / 1000, (now - p2.joinedAt) / 1000);
        
        // ELO queue expansion logic
        let eloRange = 100;
        if (maxWait > 30) eloRange = 200;
        if (maxWait > 60) eloRange = 300;
        if (maxWait > 120) eloRange = 2000; // Force match after 2 mins

        if (Math.abs(p1.elo - p2.elo) <= eloRange) {
          const matchId = `match_${now}_${Math.random().toString(36).substring(2, 9)}`;
          queue.splice(j, 1);
          queue.splice(i, 1);
          
          let difficulty = 'EASY';
          const avgElo = (p1.elo + p2.elo) / 2;
          if (avgElo > 1500) difficulty = 'MEDIUM';
          if (avgElo > 2000) difficulty = 'HARD';
          
          try {
            // Find random problem for match from DB
            const problems = await prisma.problem.findMany({ where: { difficulty } });
            const selected = problems[Math.floor(Math.random() * problems.length)] || { id: 'fallback', title: 'Two Sum', description: 'Return the indices of the two numbers that sum to the target.' };
            
            activeMatches.set(matchId, { p1, p2, problem: selected, status: 'starting' });

            io.to(p1.socketId).emit('Match Found', { matchId, opponent: p2.userId, problem: selected });
            io.to(p2.socketId).emit('Match Found', { matchId, opponent: p1.userId, problem: selected });
            
            io.sockets.sockets.get(p1.socketId)?.join(matchId);
            io.sockets.sockets.get(p2.socketId)?.join(matchId);
            
            io.to(matchId).emit('Countdown Started', { duration: 10 });
            i--; // Adjust index after splice
            break;
          } catch (e) {
            console.error("Match creation failed", e);
          }
        }
      }
    }
  }, 2000);

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)

    socket.on('Queue Joined', (data: { userId: string, elo: number, type: string }) => {
      console.log('Player queued:', data.userId)
      if (!queue.find(p => p.userId === data.userId)) {
        queue.push({ socketId: socket.id, userId: data.userId, elo: data.elo || 1000, joinedAt: Date.now(), type: data.type || 'casual' });
      }
    })

    socket.on('Queue Left', (userId: string) => {
      const idx = queue.findIndex(p => p.userId === userId);
      if (idx !== -1) queue.splice(idx, 1);
    })

    socket.on('Submit Code', async (data) => {
      io.to(data.matchId).emit('Submission Update', { userId: data.userId, status: 'Evaluating...' });
      
      try {
        // Forward code to Judge0 via our Next.js API or direct execution
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/execute`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source_code: data.code, language_id: data.languageId })
        });
        
        if (!response.ok) throw new Error("Judge0 integration error");
        
        const result = await response.json();
        io.to(data.matchId).emit('Submission Result', { userId: data.userId, result: result.verdict });
        
        // Winner Logic: 1st accepted wins
        if (result.verdict === 'Accepted') {
          io.to(data.matchId).emit('Match Finished', { winner: data.userId });
          activeMatches.delete(data.matchId);
        }
      } catch (err) {
        console.error("Execution Error:", err);
      }
    })

    socket.on('disconnect', () => {
      const idx = queue.findIndex(p => p.socketId === socket.id);
      if (idx !== -1) queue.splice(idx, 1);
      
      // Auto-loss logic if they disconnect mid-match
      activeMatches.forEach((match, matchId) => {
        if (match.p1.socketId === socket.id) io.to(matchId).emit('Opponent Disconnected', { winner: match.p2.userId });
        if (match.p2.socketId === socket.id) io.to(matchId).emit('Opponent Disconnected', { winner: match.p1.userId });
      });
    })
  })

  server.once('error', (err: any) => {
    console.error(err)
    process.exit(1)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
