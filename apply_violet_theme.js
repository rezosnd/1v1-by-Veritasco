const fs = require('fs');
const path = require('path');

// 1. Update layout.tsx and page.tsx background from #050816 to #130927 (Deep Violet)
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');
layoutCode = layoutCode.replace(/bg-\[#050816\]/g, 'bg-[#130927]');
layoutCode = layoutCode.replace(/bg-\[#050816\]\/50/g, 'bg-[#130927]/50');
fs.writeFileSync(layoutPath, layoutCode);

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Update background color
  c = c.replace(/bg-\[#050816\]/g, 'bg-[#130927]');
  
  // Update Particles to be '+' and 'x' shapes to match the image
  if (c.includes('const Particles = () => {') && d === '.') {
    const newParticles = `// Drifting particles component
const Particles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/30 font-mono text-[8px] sm:text-[10px] leading-none flex items-center justify-center"
          style={{
            top: Math.random() * 100 + 30 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -Math.random() * 800 - 200],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [Math.random() * 0.4 + 0.1, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {i % 2 === 0 ? '+' : '×'}
        </motion.div>
      ))}
    </div>
  );
};`;
    
    // Replace the old Particles component
    c = c.replace(/\/\/ Drifting particles component[\s\S]*?const playClickSound/g, newParticles + '\n\nconst playClickSound');
  }

  fs.writeFileSync(p, c); 
});

// 2. Make the LiquidMetalButton perfectly match the deep purple instead of looking washed out
const btnPath = path.join(process.cwd(), 'src/components/LiquidMetalButton.tsx');
if (fs.existsSync(btnPath)) {
  let btnCode = fs.readFileSync(btnPath, 'utf8');
  // Change the background container to match the deep violet
  btnCode = btnCode.replace(/background: 'linear-gradient\(#050816, #0A0A2A\)'/g, "background: 'linear-gradient(#130927, #241145)'");
  // Change the overlay to use color blend mode for a richer purple
  btnCode = btnCode.replace(/mix-blend-overlay bg-gradient-to-r from-\[#A88DFF\] to-\[#7B61FF\] opacity-70/g, 'mix-blend-color bg-[#7B61FF] opacity-100');
  fs.writeFileSync(btnPath, btnCode);
}

console.log("Applied deep violet background and plus/cross particles!");
