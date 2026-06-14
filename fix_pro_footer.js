const fs = require('fs'); 
const path = require('path'); 

// Update all page.tsx footers
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooter = /\{\/\* Pencil Effect Footer \*\/\}[\s\S]*?<\/div>\n    <\/div>/;
  const newFooter = `{/* Sleek Minimal Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center text-[10px] md:text-xs font-inter font-medium text-white/30 hover:text-[#00D4FF] transition-all duration-300 cursor-pointer uppercase tracking-[0.2em]"
        >
          <span className="relative">
            Design by Rezosnd
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4FF]/50 transition-all duration-500 group-hover:w-full"></div>
          </span>
          <span className="opacity-0 -ml-2 text-[#00D4FF] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500">
            @r_e_z_o_s_nd
          </span>
        </a>
      </div>
    </div>`;
  
  c = c.replace(oldFooter, newFooter);
  
  fs.writeFileSync(p, c); 
});

console.log("Fixed professional footer!");
