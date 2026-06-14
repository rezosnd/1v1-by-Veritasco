const fs = require('fs');
const path = require('path');

// 1. REWRITE LAYOUT.TSX to match CodeHelp's clean full-width navbar
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = `import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VeritasCo 1v1 | Competitive Coding",
  description: "Real-time competitive coding platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased bg-[#0a0a0a] text-white">
        
        {/* CodeHelp-Style Clean Minimal Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-5 bg-transparent backdrop-blur-sm border-b border-white/5">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-sora font-semibold text-xl tracking-tight text-white">
              VeritasCo<span className="text-gray-400">1v1</span>
            </span>
          </div>
          
          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/arena" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Arena ⌄</a>
            <a href="/problems" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Problems ⌄</a>
            <a href="/leaderboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Leaderboard ⌄</a>
            <a href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white hidden sm:block">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            </button>
            <button className="text-gray-400 hover:text-white hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <a href="/login" className="w-8 h-8 rounded-full bg-[#E57373] text-white flex items-center justify-center text-xs font-bold font-sora cursor-pointer hover:opacity-90">
              RE
            </a>
          </div>
        </nav>

        {children}

        {/* CodeHelp @paper-design injected via script if needed in future */}
        <Script src="https://cdn.jsdelivr.net/npm/@paper-design/shaders@latest/dist/paper-shaders.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
`;
fs.writeFileSync(layoutPath, layoutCode);

// 2. REWRITE PAGE.TSX to match CodeHelp's exact landing page styling
const pagePath = path.join(process.cwd(), 'src/app/page.tsx');
const pageCode = `"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// CodeHelp Style Particles (Concentrated at the bottom glow)
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
          One Subscription.<br/>
          <span className="text-gray-200 font-normal">Infinite Learning</span>
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
            Buy VeritasCo One
          </button>
        </motion.div>
        
      </main>

    </div>
  );
}
`;
fs.writeFileSync(pagePath, pageCode);

console.log("Successfully stripped out 3D noise and applied CodeHelp ultra-minimal UI.");
