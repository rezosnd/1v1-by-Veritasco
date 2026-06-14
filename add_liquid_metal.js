const fs = require('fs');
const path = require('path');

// 1. Create the LiquidMetalButton component
const componentPath = path.join(process.cwd(), 'src/components/LiquidMetalButton.tsx');
const componentCode = `"use client";

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
      className={\`relative inline-flex items-center justify-center group cursor-pointer overflow-hidden rounded-full \${className}\`}
      style={{
        background: 'linear-gradient(#222, #000)',
        boxShadow: 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* WebGL Canvas Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full z-0 mix-blend-screen"
        style={{ borderRadius: 'inherit' }}
      />
      
      {/* Animated Conic Outline (Reveals on Hover) */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full"
        style={{
          padding: '2px',
          background: 'conic-gradient(from 180deg, #00D4FF, #7B61FF, #00D4FF, #7B61FF, #00D4FF)',
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
`;

// Ensure components dir exists
if (!fs.existsSync(path.join(process.cwd(), 'src/components'))) {
  fs.mkdirSync(path.join(process.cwd(), 'src/components'));
}
fs.writeFileSync(componentPath, componentCode);

// 2. Update layout.tsx
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

if (!layoutCode.includes('PaperShaders')) {
  layoutCode = layoutCode.replace('</head>', `  <script type="module" dangerouslySetInnerHTML={{ __html: \`
            import { liquidMetalFragmentShader, ShaderMount } from "https://esm.sh/@paper-design/shaders";
            window.PaperShaders = { liquidMetalFragmentShader, ShaderMount };
          \`}} />
      </head>`);
}

// Ensure layout imports LiquidMetalButton if replacing Sign Up button
if (!layoutCode.includes('import LiquidMetalButton')) {
  layoutCode = `import LiquidMetalButton from "@/components/LiquidMetalButton";\n` + layoutCode;
}

// Replace Sign Up button
layoutCode = layoutCode.replace(
  /<a href="\/signup" className="px-5 py-2 rounded-full btn-epic text-white font-semibold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-\[0_0_15px_rgba\(123,97,255,0\.4\)\]" suppressHydrationWarning>Sign Up<\/a>/g,
  `<a href="/signup"><LiquidMetalButton className="px-5 py-2 text-sm">Sign Up</LiquidMetalButton></a>`
);

fs.writeFileSync(layoutPath, layoutCode);

// 3. Update page.tsx
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  if (!c.includes('LiquidMetalButton')) {
    // Add import statement at the top after 'use client' if it's there
    if (c.includes('"use client";')) {
      c = c.replace('"use client";', '"use client";\nimport LiquidMetalButton from "@/components/LiquidMetalButton";');
    } else {
      c = 'import LiquidMetalButton from "@/components/LiquidMetalButton";\n' + c;
    }
  }

  // Replace Notify Me button
  c = c.replace(
    /<button\s+onClick=\{playClickSound\}\s+className="absolute right-1 top-1 bottom-1 px-6 rounded-lg btn-epic text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-all"\s*>\s*Notify Me\s*<\/button>/g,
    `<LiquidMetalButton onClick={playClickSound} className="absolute right-1 top-1 bottom-1 px-6 rounded-lg text-sm sm:text-base">Notify Me</LiquidMetalButton>`
  );

  fs.writeFileSync(p, c); 
});

console.log("Successfully added Liquid Metal buttons!");
