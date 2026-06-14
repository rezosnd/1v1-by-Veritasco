"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Swords, Trophy, Target, History, Sparkles, LogOut, Code2, Flame, Crown } from "lucide-react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  // Mock data for UI demonstration
  const user = {
    username: "veritasco",
    rank: "Diamond",
    elo: 2450,
    coins: 1250,
    winRate: 68,
    streak: 5,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent/30 p-4 md:p-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <nav className="flex justify-between items-center max-w-7xl mx-auto mb-12 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center glow-accent shadow-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">CodeDuel</span>
        </div>
        <button onClick={() => signOut()} className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 font-medium">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </nav>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
      >
        {/* LEFT COLUMN: Profile & Stats */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full group-hover:bg-accent/30 transition-colors" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {user.username[0].toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{user.username}</h2>
                <div className="flex items-center gap-2 text-accent font-bold mt-1 bg-accent/10 w-fit px-3 py-1 rounded-lg">
                  <Crown className="w-4 h-4" /> {user.rank}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                <p className="text-sm text-text-secondary mb-1">Global ELO</p>
                <p className="text-3xl font-black text-blue-400">{user.elo}</p>
              </div>
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                <p className="text-sm text-text-secondary mb-1">Win Rate</p>
                <p className="text-3xl font-black text-success">{user.winRate}%</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/20 to-orange-500/20 rounded-2xl border border-accent/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg"><Sparkles className="w-5 h-5 text-accent" /></div>
                <span className="font-bold text-white">Available Coins</span>
              </div>
              <span className="text-2xl font-black text-accent">{user.coins}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2"><Target className="w-5 h-5 text-blue-400"/> Daily Missions</h3>
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">Resets in 4h</span>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Win 3 Matches", progress: 2, total: 3, reward: 50 },
                { title: "Solve a Hard Problem", progress: 0, total: 1, reward: 100 },
              ].map((mission, i) => (
                <div key={i} className="bg-black/40 p-4 rounded-2xl border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-sm">{mission.title}</span>
                    <span className="text-accent font-bold text-xs flex items-center gap-1">+{mission.reward} <Sparkles className="w-3 h-3"/></span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-text-secondary mt-2">{mission.progress}/{mission.total}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Play & History */}
        <div className="lg:col-span-8 space-y-8">
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/match/queue?type=ranked">
              <div className="glass-panel p-8 rounded-3xl border-accent/30 bg-gradient-to-br from-[#111214] to-[#1a1205] group hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden h-full flex flex-col justify-between min-h-[240px]">
                <div className="absolute -right-4 -top-4 text-accent/10 group-hover:text-accent/20 transition-colors">
                  <Trophy className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(248,159,27,0.3)] group-hover:scale-110 transition-transform">
                    <Swords className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Ranked Duel</h3>
                  <p className="text-text-secondary">Risk 5 coins. Gain ELO. Show them who's boss.</p>
                </div>
                <div className="mt-8 font-bold text-accent flex items-center gap-2 relative z-10">
                  Enter Queue <span className="text-lg">→</span>
                </div>
              </div>
            </Link>

            <Link href="/match/queue?type=casual">
              <div className="glass-card p-8 rounded-3xl group hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden h-full flex flex-col justify-between min-h-[240px]">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Casual Practice</h3>
                  <p className="text-text-secondary">Free entry. No ELO loss. Perfect for warming up.</p>
                </div>
                <div className="mt-8 font-bold text-blue-400 flex items-center gap-2 relative z-10">
                  Start Practice <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2"><History className="w-5 h-5 text-text-secondary"/> Recent Matches</h3>
              <button className="text-sm font-medium text-text-secondary hover:text-white transition-colors">View All</button>
            </div>
            
            <div className="space-y-3">
              {[
                { opponent: "john_doe", result: "Victory", eloChange: "+24", time: "2 hours ago", diff: "Medium" },
                { opponent: "coder123", result: "Defeat", eloChange: "-15", time: "5 hours ago", diff: "Hard" },
                { opponent: "alice99", result: "Victory", eloChange: "+18", time: "1 day ago", diff: "Easy" },
              ].map((match, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-12 rounded-full ${match.result === 'Victory' ? 'bg-success' : 'bg-danger'}`} />
                    <div>
                      <p className="font-bold text-white mb-1">vs {match.opponent}</p>
                      <p className="text-xs text-text-secondary">{match.time} • {match.diff}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-black ${match.result === 'Victory' ? 'text-success' : 'text-danger'}`}>{match.result}</p>
                    <p className={`text-sm font-bold ${match.result === 'Victory' ? 'text-success' : 'text-danger'}`}>{match.eloChange} ELO</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
