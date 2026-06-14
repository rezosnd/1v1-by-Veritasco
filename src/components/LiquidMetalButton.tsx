"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LiquidMetalButton({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let mount: any;
    
    const checkShaders = setInterval(() => {
      if ((window as any).PaperShaders) {
        clearInterval(checkShaders);
        const { liquidMetalFragmentShader, ShaderMount } = (window as any).PaperShaders;
        
        try {
          mount = new ShaderMount(
            containerRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 1.5,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: 100,
              u_scale: 1.5,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1
            },
            undefined,
            0.6
          );
        } catch(e) {
          console.error("Shader load failed:", e);
        }
      }
    }, 100);

    return () => clearInterval(checkShaders);
  }, []);

  return (
    <button 
      onClick={onClick}
      className={`relative inline-flex items-center justify-center group cursor-pointer overflow-hidden rounded-full whitespace-nowrap ${className}`}
      style={{
        background: 'linear-gradient(lab(30.6017% 56.7637 -64.4751), #241145)',
        boxShadow: 'inset 0 2px 4px 0 rgba(123, 97, 255, 0.4)',
      }}
    >
      {/* WebGL Canvas Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full z-0 mix-blend-screen opacity-90"
        style={{ borderRadius: 'inherit' }}
      />
      
      {/* Electric Blue/Purple Tint Layer */}
      <div className="absolute inset-0 z-[5] mix-blend-color bg-[#7B61FF] opacity-100 pointer-events-none rounded-full" />
      
      {/* Animated Conic Outline (Reveals on Hover) */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full"
        style={{
          padding: '2px',
          background: 'conic-gradient(from 180deg, #A88DFF, #7B61FF, #A88DFF, #7B61FF, #A88DFF)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
        }}
      />

      {/* Content */}
      <div className="relative z-20 drop-shadow-md text-white font-semibold">
        {children}
      </div>
    </button>
  );
}
