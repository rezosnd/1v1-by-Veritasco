const fs = require('fs');
const path = require('path');

const NEW_BG = '#0a0a0a';
const NEW_GLOW = 'lab(30.6017% 56.7637 -64.4751)';
const NEW_GLOW_TW = 'bg-[lab(30.6017%_56.7637_-64.4751)]';

// 1. Update layout.tsx
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');
layoutCode = layoutCode.replace(/bg-\[#130927\]/g, `bg-[${NEW_BG}]`);
layoutCode = layoutCode.replace(/bg-\[#130927\]\/50/g, `bg-[${NEW_BG}]/50`);
fs.writeFileSync(layoutPath, layoutCode);

// 2. Update page.tsx and other routes
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Background
  c = c.replace(/bg-\[#130927\]/g, `bg-[${NEW_BG}]`);
  c = c.replace(/bg-\[#130927\]\/50/g, `bg-[${NEW_BG}]/50`);
  
  // Bottom glow aura - replace generic purple with specific lab color
  c = c.replace(/bg-\[#7B61FF\]/g, NEW_GLOW_TW);
  
  // Make sure Spline orb uses mixBlendMode screen so it doesn't block the background
  c = c.replace(/<div className="absolute inset-0 z-0 pointer-events-auto opacity-70 flex items-center justify-center orb">/, 
    '<div className="absolute inset-0 z-0 pointer-events-auto opacity-70 flex items-center justify-center orb" style={{ mixBlendMode: \'screen\' }}>');

  // Same for Lottie if it exists
  c = c.replace(/<div className="absolute inset-0 z-0 pointer-events-none opacity-80 flex items-center justify-center orb">/, 
    '<div className="absolute inset-0 z-0 pointer-events-none opacity-80 flex items-center justify-center orb" style={{ mixBlendMode: \'screen\' }}>');

  fs.writeFileSync(p, c); 
});

// 3. Update globals.css
const globalsPath = path.join(process.cwd(), 'src/app/globals.css');
let globalsCode = fs.readFileSync(globalsPath, 'utf8');
globalsCode = globalsCode.replace(/--background: #130927;/g, `--background: ${NEW_BG};`);
globalsCode = globalsCode.replace(/--background: #0A0A0B;/g, `--background: ${NEW_BG};`);
globalsCode = globalsCode.replace(/--color-background: #130927;/g, `--color-background: ${NEW_BG};`);
globalsCode = globalsCode.replace(/--color-background: #0A0A0B;/g, `--color-background: ${NEW_BG};`);
fs.writeFileSync(globalsPath, globalsCode);

console.log("Successfully restored Original UI layout with specific lab purple bottom glow and charcoal background!");
