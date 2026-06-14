"use client";

import { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, XCircle, Code2, Cpu, User, Loader2, Sparkles, Terminal } from "lucide-react";
import { io, Socket } from "socket.io-client";

interface UserProfile {
  id: string;
  username: string;
  elo: number;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  examples: any;
  constraints: string;
  initialCode?: string;
}

export default function MatchPage() {
  const params = useParams();
  const router = useRouter();
  const [socket, setSocket] = useState<Socket | null>(null);
  
  const [code, setCode] = useState<string>("// Connect to matchmaking to receive problem...");
  const [language, setLanguage] = useState("javascript");
  const [timer, setTimer] = useState(0);
  
  const [matchStatus, setMatchStatus] = useState("connecting"); // connecting, queue, countdown, in_progress, finished
  const [countdown, setCountdown] = useState(10);
  
  const [problem, setProblem] = useState<Problem | null>(null);
  const [opponent, setOpponent] = useState<UserProfile | null>(null);
  const [me, setMe] = useState<UserProfile | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(true);
  const [verdict, setVerdict] = useState<any>(null);

  // Initialize Socket Connection
  useEffect(() => {
    // Determine WS URL relative to current host
    const socketUrl = typeof window !== "undefined" ? window.location.origin : "";
    const socketInstance = io(socketUrl, {
      path: "/api/socketio",
      addTrailingSlash: false,
    });

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      setMatchStatus("queue");
      const tempUser = {
        id: `user_${Math.random().toString(36).substring(7)}`,
        username: "Guest_" + Math.floor(Math.random() * 1000),
        elo: 1000
      };
      setMe(tempUser);
      socketInstance.emit("join_queue", tempUser);
    });

    socketInstance.on("match_found", (data) => {
      setMatchStatus("countdown");
      setOpponent(data.opponent);
      setProblem(data.problem);
      setTimer(data.duration);
      if (data.problem?.initialCode) {
         setCode(data.problem.initialCode);
      } else {
         setCode(`function solve() {\n  // Write your code here\n}`);
      }
    });

    socketInstance.on("countdown", (count) => {
      setCountdown(count);
      if (count === 0) setMatchStatus("in_progress");
    });

    socketInstance.on("timer_update", (timeRemaining) => {
      setTimer(timeRemaining);
    });

    socketInstance.on("opponent_disconnected", () => {
      alert("Opponent disconnected! You win.");
      router.push("/dashboard");
    });

    socketInstance.on("match_finished", (data) => {
      setMatchStatus("finished");
      alert(`Match Finished! Winner: ${data.winnerId}`);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [router]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSubmit = async () => {
    if (!problem) return;
    setIsSubmitting(true);
    setConsoleOpen(true);
    setVerdict(null);

    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_code: code,
          language_id: language === "javascript" ? 63 : 71, // 63 is JS, 71 is Python in Judge0 CE
          expected_output: problem.examples?.[0]?.output || "", // rudimentary check
        })
      });
      const data = await res.json();
      setVerdict(data);
      
      if (data.verdict === "Accepted" && socket) {
         socket.emit("submission", { matchId: params.id, status: "Accepted" });
      }
      
    } catch (error) {
      console.error(error);
      setVerdict({ verdict: "Internal Error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // UI Overlays for Matchmaking
  if (matchStatus === "connecting" || matchStatus === "queue") {
    return (
      <div className="min-h-screen bg-[#010101] flex flex-col items-center justify-center text-white font-sans selection:bg-[#A855F7]/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/5 to-transparent blur-3xl pointer-events-none" />
        <div className="billo-card p-12 text-center max-w-md w-full relative overflow-hidden flex flex-col items-center shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/10 to-transparent pointer-events-none" />
           <Loader2 className="w-16 h-16 text-[#A855F7] animate-spin mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
           <h2 className="text-3xl font-bold mb-2">Matchmaking</h2>
           <p className="text-gray-400">Searching for an opponent near {me?.elo || 1000} ELO...</p>
        </div>
      </div>
    );
  }

  if (matchStatus === "countdown") {
    return (
      <div className="min-h-screen bg-[#010101] flex flex-col items-center justify-center text-white font-sans relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/10 to-transparent blur-3xl pointer-events-none" />
        <motion.div 
          key={countdown}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="text-[15rem] font-black text-[#A855F7] drop-shadow-[0_0_50px_rgba(168,85,247,0.5)] leading-none"
        >
          {countdown}
        </motion.div>
        <h2 className="text-3xl font-bold text-white mt-8 tracking-wide">Prepare for Battle</h2>
        <p className="text-gray-400 mt-2">Opponent Found: {opponent?.username}</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#010101] text-white overflow-hidden selection:bg-[#A855F7]/30 font-sans">
      
      {/* LEFT SIDEBAR: Problem Description */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[400px] border-r border-white/5 bg-[#0A0A0A] flex flex-col z-10 shadow-2xl relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A855F7] to-purple-600"></div>
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#A855F7]/20 flex items-center justify-center text-[#A855F7]">
              <Code2 className="w-4 h-4" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">{problem?.title || "Problem Name"}</h1>
          </div>
          <span className={`px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold ${problem?.difficulty === "Hard" ? "text-red-400" : problem?.difficulty === "Medium" ? "text-orange-400" : "text-green-400"}`}>
            {problem?.difficulty || "Easy"}
          </span>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 scrollbar-hide">
          <div dangerouslySetInnerHTML={{ __html: problem?.description || "Description loading..." }} />
          
          <h3 className="text-white font-bold mt-8 mb-4">Constraints:</h3>
          <div className="text-gray-400 text-sm space-y-2 font-mono bg-white/5 p-4 rounded-xl border border-white/5">
             {problem?.constraints}
          </div>
        </div>
        
        <div className="p-4 border-t border-white/5 bg-[#010101]">
          <button className="w-full py-3 bg-[#A855F7]/10 hover:bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/30 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" /> Request AI Hint (-10 Coins)
          </button>
        </div>
      </motion.div>

      {/* CENTER & RIGHT: Editor + Opponent */}
      <div className="flex-1 flex flex-col relative bg-[#111]">
        
        {/* TOP BAR */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-16 border-b border-white/5 bg-[#010101]/80 backdrop-blur-md flex items-center justify-between px-6 z-20 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:border-[#A855F7] transition-colors cursor-pointer text-white hover:bg-white/5"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div className="flex items-center gap-8">
            {/* Player Info (You) */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-white">You</div>
                <div className="text-xs text-[#A855F7]">{me?.elo || 1000} ELO</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#A855F7] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] border-2 border-[#A855F7]/50 text-black">Y</div>
            </div>

            {/* Timer */}
            <motion.div 
              animate={timer < 60 && timer > 0 ? { scale: [1, 1.05, 1], color: ["#fff", "#ef4444", "#fff"] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-2xl font-black font-mono tracking-wider px-6 py-1.5 bg-white/5 rounded-xl border border-white/10 text-[#A855F7] shadow-inner"
            >
              {formatTime(timer)}
            </motion.div>

            {/* Opponent Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center font-bold shadow-[0_0_15px_rgba(239,68,68,0.2)] border-2 border-red-500/50 text-red-400">O</div>
              <div className="text-left hidden md:block">
                <div className="text-sm font-bold text-white">{opponent?.username || "Opponent"}</div>
                <div className="text-xs text-red-400">{opponent?.elo || 1000} ELO</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-bold transition-all flex items-center gap-2 text-gray-400 hover:text-white">
              <Play className="w-4 h-4" /> Run
            </button>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting || matchStatus === "finished"}
              className="px-6 py-2 bg-[#A855F7] hover:bg-[#008ba6] rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] text-black hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Cpu className="w-4 h-4" /> {isSubmitting ? "Judging..." : "Submit"}
            </button>
          </div>
        </motion.div>

        {/* EDITOR AREA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 pt-4 pl-4 bg-[#010101]">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 15,
                fontFamily: "JetBrains Mono, monospace",
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
                formatOnPaste: true,
                padding: { top: 20 },
              }}
            />
          </div>
        </motion.div>

        {/* BOTTOM PANEL (Console) */}
        <motion.div 
          initial={false}
          animate={{ height: consoleOpen ? "250px" : "48px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="border-t border-white/10 bg-[#0A0A0B] flex flex-col z-20"
        >
          <div 
            className="h-12 px-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
            onClick={() => setConsoleOpen(!consoleOpen)}
          >
            <div className="flex items-center gap-4">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="font-bold text-sm">Execution Console</span>
              {isSubmitting && (
                <span className="flex items-center gap-2 text-xs text-[#A855F7]">
                  <Loader2 className="w-3 h-3 animate-spin" /> Evaluating on Judge0...
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500 font-mono hover:text-white transition-colors">{consoleOpen ? "▼ Minimize" : "▲ Expand"}</span>
          </div>
          
          {consoleOpen && (
            <div className="flex-1 p-6 overflow-y-auto bg-[#010101] border-t border-white/5">
              {isSubmitting ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                  <Loader2 className="w-8 h-8 animate-spin text-[#A855F7]" />
                  <p className="font-mono text-sm">Executing against hidden test cases...</p>
                </div>
              ) : verdict ? (
                <div className="space-y-4">
                  <div className={`p-4 border rounded-xl bg-opacity-10 ${verdict.verdict === "Accepted" ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50"}`}>
                    <h4 className={`font-bold flex items-center gap-2 mb-2 ${verdict.verdict === "Accepted" ? "text-green-400" : "text-red-400"}`}>
                      {verdict.verdict === "Accepted" ? <CheckCircle2 className="w-4 h-4"/> : <XCircle className="w-4 h-4"/>} 
                      {verdict.verdict}
                    </h4>
                    {verdict.time && <p className="text-sm font-mono text-gray-300">Runtime: {verdict.time} s</p>}
                    {verdict.memory && <p className="text-sm font-mono text-gray-300">Memory: {verdict.memory} KB</p>}
                    {verdict.compile_output && (
                      <pre className="mt-2 text-xs text-red-300 bg-red-950/30 p-3 rounded-lg overflow-x-auto border border-red-500/20">
                        {atob(verdict.compile_output)}
                      </pre>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-600 font-mono text-sm">
                  Run or Submit your code to see the output here.
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
