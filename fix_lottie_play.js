const fs = require('fs'); 
const path = require('path'); 

const dirs = ['arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Update imports to include useRef
  if (!c.includes('useRef')) {
    c = c.replace('import { useEffect, useState } from "react";', 'import { useEffect, useState, useRef } from "react";');
  }

  // Add ref declaration
  if (!c.includes('const lottieRef = useRef')) {
    c = c.replace('const [mounted, setMounted] = useState(false);', 'const lottieRef = useRef<any>(null);\n  const [mounted, setMounted] = useState(false);');
  }

  // Update useEffect to call play
  if (!c.includes('lottieRef.current.play()')) {
    c = c.replace('setMounted(true);\n  }, []);', 'setMounted(true);\n    setTimeout(() => {\n      try { if (lottieRef.current) lottieRef.current.play(); } catch(e){}\n    }, 500);\n  }, []);');
  }

  // Add ref to dotlottie-player
  if (!c.includes('ref={lottieRef}')) {
    c = c.replace('<dotlottie-player', '<dotlottie-player ref={lottieRef}');
  }

  fs.writeFileSync(p, c); 
});

// Also fix layout.tsx imports
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
if(!lc.includes('import Script')) {
    lc = lc.replace('import "./globals.css";', 'import "./globals.css";\nimport Script from "next/script";');
    fs.writeFileSync(l, lc);
}
console.log("Updated Lottie refs!");
