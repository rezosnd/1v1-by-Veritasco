const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Remove old function
  c = c.replace(/const playHoverSound = \(\) => \{[\s\S]*?catch\(e\) \{\}\n\};\n/, '');
  c = c.replace(/onMouseEnter=\{playHoverSound\}/g, '');
  
  // Add new function
  const soundFn = `
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
`;
  if(!c.includes('playClickSound')) {
    c = c.replace('export default function ComingSoon() {', soundFn + 'export default function ComingSoon() {'); 
  }
  
  // Add onClick to button
  c = c.replace('<button className="w-full sm:w-auto px-8', '<button onClick={playClickSound} className="w-full sm:w-auto px-8');
  c = c.replace('<button  className="w-full sm:w-auto px-8', '<button onClick={playClickSound} className="w-full sm:w-auto px-8');
  
  fs.writeFileSync(p, c); 
});

console.log("Updated sound effects!");
