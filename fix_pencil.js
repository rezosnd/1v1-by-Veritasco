const fs = require('fs'); 
const path = require('path'); 

const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');

// Replace old pencil-effect CSS with a better one
gc = gc.replace(/\.pencil-effect \{[\s\S]*?\}\s*@keyframes pencilDraw \{[\s\S]*?\}/, `
.pencil-effect {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  border-right: 2px solid rgba(255,255,255,0.5);
  animation: type 4s steps(33, end) infinite alternate, blink 0.5s step-end infinite alternate;
  width: 33ch;
  color: rgba(255, 255, 255, 0.6);
}
@keyframes type {
  0% { width: 0; }
  20% { width: 0; } /* Pause at start */
  80% { width: 33ch; }
  100% { width: 33ch; } /* Pause at end */
}
@keyframes blink {
  50% { border-color: transparent; }
}
`);
fs.writeFileSync(g, gc);

// Update all page.tsx footers
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooter = /\{\/\* Pencil Effect Footer \*\/\}[\s\S]*?<\/div>\n      <\/div>/;
  const newFooter = `{/* Pencil Effect Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="relative inline-block text-lg md:text-xl transition-colors duration-300 cursor-pointer group"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          <span className="pencil-effect">Design by Rezosnd @r_e_z_o_s_nd</span>
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 transition-all duration-500 group-hover:w-full"></div>
        </a>
      </div>
    </div>`;
  
  c = c.replace(oldFooter, newFooter);
  
  fs.writeFileSync(p, c); 
});

console.log("Fixed footer!");
