"use client";
import LiquidMetalButton from "@/components/LiquidMetalButton";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": any;
    }
  }
}

// Drifting particles component
const Particles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white particle-star"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + 50 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [0, -Math.random() * 800 - 200],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [Math.random() * 0.5 + 0.1, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};



const playClickSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    // Nice high tech blip
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch(e) {
    console.error("Audio error:", e);
  }
};
export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#050816] min-h-screen" />;

  return (
    <div className="relative h-screen w-full bg-[#050816] text-white flex flex-col overflow-hidden selection:bg-[#7B61FF]/30">
      
      {/* 3D Spline Background - Color matched to purple theme */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70 flex items-center justify-center orb">
        <spline-viewer 
          url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"
          className="w-full h-full block"
          style={{ 
            width: '100%', 
            height: '100%',
            // Sepia forces a base color, hue-rotate shifts it to purple, saturate makes it pop
            filter: 'sepia(1) hue-rotate(180deg) saturate(400%) brightness(1.2)'
          }}
        ></spline-viewer>
      </div>

      {/* Bottom Purple Glow Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none z-0 flex flex-col items-center justify-end">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-[-10%] w-[120%] sm:w-[800px] h-[150px] bg-[#7B61FF]/40 blur-[80px]" 
          style={{ mixBlendMode: 'screen' }} 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 w-[80%] sm:w-[400px] h-[300px] bg-[#7B61FF]/30 blur-[100px]" 
          style={{ mixBlendMode: 'screen' }} 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-10 w-[40%] sm:w-[150px] h-[400px] bg-gradient-to-t from-[#7B61FF]/50 to-transparent blur-[60px]" 
          style={{ mixBlendMode: 'screen' }} 
        />
      </div>

      {/* Drifting Particles */}
      <Particles />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] aurora-bg -z-10 pointer-events-none rounded-full blur-[60px]"></div>

      {/* Main Content */}
      <main className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-3xl mx-auto pointer-events-none">
        <div className="pointer-events-auto w-full flex flex-col items-center">
          
          <div className="overflow-hidden p-2">
            <h1 className="hero-title font-clash text-5xl sm:text-6xl md:text-8xl tracking-tight mb-4 sm:mb-6 font-bold leading-tight shimmer-text drop-shadow-2xl">
              COMING SOON
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl font-medium drop-shadow-md px-2"
          >
            The ultimate 1v1 coding battleground is arriving shortly. 
            Join the elite and be the first to enter the arena.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-5 py-3.5 sm:py-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl outline-none focus:border-[#7B61FF]/60 transition-all text-white placeholder:text-gray-300/70 text-sm sm:text-base shadow-lg"
            />
            <LiquidMetalButton onClick={playClickSound} className="w-full sm:w-auto px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-[0_0_20px_rgba(171,130,235,0.4)]">
              Notify Me
            </LiquidMetalButton>
          </motion.div>

        </div>
      </main>

      {/* Simple Red Heart Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs md:text-sm font-sora text-gray-300/60 hover:text-white transition-colors duration-300"
        >
          <span>Designed with</span>
          <span className="text-red-500 animate-pulse text-[10px] md:text-xs">❤️</span>
          <span>by Rezosnd @r_e_z_o_s_nd</span>
        </a>
      </div>
    </div>
  );
}
