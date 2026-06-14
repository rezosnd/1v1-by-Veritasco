const fs = require('fs');
const path = require('path');

const SPLINE_CODE = `
      {/* 3D Spline Background - Kept with mixBlendMode screen to preserve the #0a0a0a background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 flex items-center justify-center orb" style={{ mixBlendMode: 'screen' }}>
        <spline-viewer 
          url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"
          className="w-full h-full block"
          style={{ 
            width: '100%', 
            height: '100%',
            filter: 'sepia(1) hue-rotate(180deg) saturate(400%) brightness(1.2)'
          }}
        ></spline-viewer>
      </div>
`;

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 

dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  
  let c = fs.readFileSync(p, 'utf8'); 
  
  // 1. Change text to "Coming Soon."
  c = c.replace(/<motion\.h1[\s\S]*?>[\s\S]*?<\/motion\.h1>/g, `<motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight mb-6 leading-[1.1] font-inter"
        >
          Coming Soon.
        </motion.h1>`);

  // 2. Ensure Spline component is declared globally
  if (!c.includes('declare global {')) {
    c = c.replace(/const Particles/, `declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": any;
    }
  }
}

const Particles`);
  }

  // 3. Re-inject 3D Spline if it's not there
  if (!c.includes('spline-viewer')) {
    c = c.replace(/<div className="relative min-h-screen w-full bg-\[#0a0a0a\] text-white flex flex-col items-center justify-center overflow-hidden font-inter">/, 
      `<div className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden font-inter">
${SPLINE_CODE}`);
  }

  fs.writeFileSync(p, c); 
});

console.log("Restored 3D Spline and updated text to Coming Soon.");
