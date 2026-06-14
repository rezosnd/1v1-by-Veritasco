import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { Server } from 'socket.io'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id)

    socket.on('Queue Joined', (data) => {
      console.log('User joined queue:', data)
      // Logic for matching players
      // For demo, immediately start match
      setTimeout(() => {
        socket.emit('Match Found', { matchId: 'demo-match-123' })
        socket.emit('Countdown Started', { duration: 10 })
      }, 2000)
    })

    socket.on('Submission Update', (data) => {
      // Logic for sending submission to Judge0
      console.log('Received submission:', data)
    })

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)
    })
  })

  server.once('error', (err) => {
    console.error(err)
    process.exit(1)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
