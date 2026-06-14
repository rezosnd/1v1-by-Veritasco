const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooterRegex = /\{\/\* Sleek Monospace Footer \*\/\}[\s\S]*?<\/div>\n    <\/div>/;
  const newFooter = `{/* Simple Red Heart Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs md:text-sm font-sora text-[#94A3B8]/60 hover:text-white transition-colors duration-300"
        >
          <span>Designed with</span>
          <span className="text-red-500 animate-pulse text-[10px] md:text-xs">❤️</span>
          <span>by Rezosnd @r_e_z_o_s_nd</span>
        </a>
      </div>
    </div>`;
  
  if (c.match(oldFooterRegex)) {
    c = c.replace(oldFooterRegex, newFooter);
    fs.writeFileSync(p, c); 
  }
});

console.log("Fixed simple heart footer!");
