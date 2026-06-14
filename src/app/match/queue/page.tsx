"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { io, Socket } from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, Loader2 } from "lucide-react";

let socket: Socket;

export default function QueuePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const matchType = searchParams.get("type") || "casual";
  const [status, setStatus] = useState("Connecting to server...");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    // Timer for time spent in queue
    let timeInterval: NodeJS.Timeout;
    if (countdown === null) {
      timeInterval = setInterval(() => setElapsed(e => e + 1), 1000);
    }
    return () => clearInterval(timeInterval);
  }, [countdown]);

  useEffect(() => {
    socket = io();

    socket.on("connect", () => {
      setStatus(`Finding ${matchType} match...`);
      socket.emit("Queue Joined", { type: matchType });
    });

    socket.on("Match Found", () => {
      setStatus("Opponent found! Get ready...");
    });

    socket.on("Countdown Started", (data) => {
      setCountdown(data.duration);
      let timeLeft = data.duration;
      const interval = setInterval(() => {
        timeLeft -= 1;
        setCountdown(timeLeft);
        if (timeLeft <= 0) {
          clearInterval(interval);
          router.push(`/match/${data.matchId || "demo-match-123"}`);
        }
      }, 1000);
    });

    return () => {
      socket.disconnect();
    };
  }, [matchType, router]);

  const formatElapsed = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
          className={`w-[300px] h-[300px] rounded-full blur-[50px] ${matchType === 'ranked' ? 'bg-accent/40' : 'bg-blue-500/40'}`} 
        />
        <motion.div 
          animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeOut" }}
          className={`absolute w-[300px] h-[300px] rounded-full blur-[50px] ${matchType === 'ranked' ? 'bg-accent/40' : 'bg-blue-500/40'}`} 
        />
      </div>

      <div className="z-10 relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          {countdown === null ? (
            <motion.div 
              key="searching"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center"
            >
              <div className="relative mb-12">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center border-2 border-white/10 glass-panel relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
                  <Search className={`w-10 h-10 ${matchType === 'ranked' ? 'text-accent' : 'text-blue-400'}`} />
                </div>
                {/* Orbiting element */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/5"
                >
                  <div className={`w-4 h-4 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_10px_currentColor] ${matchType === 'ranked' ? 'bg-accent text-accent' : 'bg-blue-400 text-blue-400'}`} />
                </motion.div>
              </div>

              <h2 className="text-3xl font-bold mb-2">{status}</h2>
              <p className="text-text-secondary font-mono tracking-widest uppercase">
                Time in queue: {formatElapsed(elapsed)}
              </p>
              
              <button 
                onClick={() => router.push('/dashboard')}
                className="mt-12 px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm text-text-secondary hover:text-white"
              >
                Cancel Matchmaking
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="found"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-success to-emerald-600 mb-8 mx-auto shadow-[0_0_50px_rgba(34,197,94,0.5)]">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-4">MATCH FOUND!</h2>
              <p className="text-xl text-text-secondary mb-12">Prepare yourself. Battle starts in...</p>
              <motion.div 
                key={countdown}
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              >
                {countdown}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
