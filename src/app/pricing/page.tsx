"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// CodeHelp Style Particles (Concentrated at the bottom glow)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": any;
    }
  }
}

const Particles = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] z-0 overflow-visible pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            bottom: Math.random() * 30 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -Math.random() * 300 - 100],
            opacity: [0, Math.random() * 0.8 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden font-inter">
      
      {/* Bottom Center Purple Glow (Using the exact lab color requested) */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[lab(30.6017%_56.7637_-64.4751)] opacity-70 blur-[120px] pointer-events-none rounded-[100%]" />
      
      {/* Drifting Star Particles */}
      <Particles />

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mt-[-5%] pointer-events-auto">
        
        {/* Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-xs sm:text-sm font-medium text-gray-300">India's #1 Coding Community</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-6 leading-[1.1] font-inter"
        >
          Coming Soon.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          Unlock every VeritasCo course, current and future, with one simple plan designed to save you time, money, and effort
        </motion.p>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center w-full"
        >
          <button className="px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#7a81ff] to-[#a674ff] hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(166,116,255,0.4)]">
            Enter Pro Plans
          </button>
        </motion.div>
        
      </main>

    </div>
  );
}
