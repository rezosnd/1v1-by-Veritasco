const fs = require('fs'); 
const path = require('path'); 

const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');

// Update pencil-effect CSS width to match the new shorter text "Rezosnd @r_e_z_o_s_nd" (21 chars)
gc = gc.replace(/width: 33ch/g, 'width: 21ch');
gc = gc.replace(/steps\(33/g, 'steps(21');
fs.writeFileSync(g, gc);

// Update all page.tsx footers
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooterRegex = /\{\/\* Simple Red Heart Footer \*\/\}[\s\S]*?<\/div>\n    <\/div>/;
  const newFooter = `{/* Typed Heart Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs md:text-sm font-sora text-[#94A3B8]/80 hover:text-white transition-colors duration-300"
        >
          <span>Designed with</span>
          <span className="text-red-500 animate-pulse text-[10px] md:text-xs">❤️</span>
          <span>by</span>
          <span className="pencil-effect text-white ml-0.5">Rezosnd @r_e_z_o_s_nd</span>
        </a>
      </div>
    </div>`;
  
  if (c.match(oldFooterRegex)) {
    c = c.replace(oldFooterRegex, newFooter);
    fs.writeFileSync(p, c); 
  }
});

console.log("Restored typed animation with red heart!");
