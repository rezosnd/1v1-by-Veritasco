const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  c = c.split('#0A0A0A').join('#050816'); 
  c = c.split('#5B76DB').join('#00D4FF'); 
  c = c.split('#AB82EB').join('#7B61FF'); 
  c = c.split('text-white/80').join('text-[#94A3B8]'); 
  c = c.split('text-white/50').join('text-[#94A3B8]/70'); 
  c = c.split('text-white/40').join('text-[#94A3B8]/50'); 
  c = c.split('hue-rotate(220deg)').join('hue-rotate(180deg)'); 
  
  if(!c.includes('playHoverSound')) { 
    const soundFn = `\nconst playHoverSound = () => {\n  try {\n    const ctx = new (window.AudioContext || window.webkitAudioContext)();\n    const osc = ctx.createOscillator();\n    const gain = ctx.createGain();\n    osc.connect(gain);\n    gain.connect(ctx.destination);\n    osc.type = 'sine';\n    osc.frequency.setValueAtTime(300, ctx.currentTime);\n    osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.1);\n    gain.gain.setValueAtTime(0.05, ctx.currentTime);\n    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);\n    osc.start();\n    osc.stop(ctx.currentTime + 0.1);\n  } catch(e) {}\n};\n`; 
    c = c.replace('export default function ComingSoon() {', soundFn + 'export default function ComingSoon() {'); 
    c = c.split('<button className=\"w-full sm:w-auto px-8').join('<button onMouseEnter={playHoverSound} className=\"w-full sm:w-auto px-8'); 
  } 
  fs.writeFileSync(p, c); 
});

const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
lc = lc.split('#010101').join('#050816'); 
lc = lc.split('#0a0a0a').join('#050816'); 
lc = lc.split('#5B76DB').join('#00D4FF'); 
lc = lc.split('#AB82EB').join('#7B61FF'); 
lc = lc.split('rgba(171,130,235,0.4)').join('rgba(123,97,255,0.4)'); 
lc = lc.split('rgba(171,130,235,0.1)').join('rgba(123,97,255,0.1)'); 
lc = lc.split('text-white/80').join('text-[#94A3B8]'); 
fs.writeFileSync(l, lc);
