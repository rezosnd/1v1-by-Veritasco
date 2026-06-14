const fs = require('fs'); 
const path = require('path'); 

// 1. Add epic animations to globals.css
const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');

const epicCSS = `
/* ========================================= */
/* EPIC CYBER ANIMATIONS                     */
/* ========================================= */

/* 1. Shimmer Text Sweep */
@keyframes shimmerSweep {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.shimmer-text {
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #ffffff 35%,
    #00D4FF 50%,
    #ffffff 65%,
    #ffffff 100%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerSweep 4s linear infinite;
}

/* 2. Hacker Glitch on Hover */
@keyframes glitch-anim {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 1px) }
  40% { transform: translate(-1px, -1px) }
  60% { transform: translate(2px, 1px) }
  80% { transform: translate(1px, -1px) }
  100% { transform: translate(0) }
}
.glitch-hover:hover {
  animation: glitch-anim 0.3s infinite;
  text-shadow: 2px 0 #00D4FF, -2px 0 #7B61FF;
}

/* 3. Animated Gradient Border Button */
@keyframes borderGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.btn-epic {
  background: linear-gradient(90deg, #00D4FF, #7B61FF, #00D4FF);
  background-size: 200% auto;
  animation: borderGlow 3s linear infinite;
}
.btn-epic:hover {
  background-size: 300% auto;
  box-shadow: 0 0 25px rgba(0, 212, 255, 0.6);
}
`;

if (!gc.includes('EPIC CYBER ANIMATIONS')) {
  gc += epicCSS;
  fs.writeFileSync(g, gc);
}

// 2. Update layout.tsx to add glitch to Logo and epic button to Sign Up
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
// Add glitch-hover to 1v1
lc = lc.replace(/<span className="text-\[#7B61FF\]">1v1<\/span>/g, '<span className="text-[#7B61FF] glitch-hover inline-block">1v1</span>');
// Make Sign Up button epic
lc = lc.replace(/bg-gradient-to-r from-\[#00D4FF\] to-\[#7B61FF\]/g, 'btn-epic');
fs.writeFileSync(l, lc);

// 3. Update all page.tsx to add shimmer to Coming Soon and epic button to Notify Me
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Apply Shimmer Text to COMING SOON
  // The structure is usually: <h1 className="hero-title font-clash text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
  c = c.replace(/text-white">([\s\S]*?)COMING SOON/g, 'shimmer-text">$1COMING SOON');
  // Just in case, replace text-white with shimmer-text if the title is COMING SOON
  c = c.replace(/className="hero-title font-clash text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"/g, 'className="hero-title font-clash text-5xl md:text-7xl font-bold mb-6 tracking-tight shimmer-text"');

  // Make Notify Me button epic
  c = c.replace(/bg-\[#00D4FF\]/g, 'btn-epic');
  c = c.replace(/bg-gradient-to-r from-\[#00D4FF\] to-\[#7B61FF\]/g, 'btn-epic');

  fs.writeFileSync(p, c); 
});

console.log("Injected 100000X animations!");
