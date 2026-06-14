const fs = require('fs'); 
const path = require('path'); 

// 1. Update layout.tsx with Space Mono
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
if(!lc.includes('Space+Mono')) {
    lc = lc.replace('family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&family=Caveat:wght@400;700&display=swap', 'family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&family=Space+Mono:wght@400;700&display=swap');
    fs.writeFileSync(l, lc);
}

// 2. Update all page.tsx footers to use Space Mono
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooterRegex = /\{\/\* Sleek Minimal Footer \*\/\}[\s\S]*?<\/div>\n    <\/div>/;
  const newFooter = `{/* Sleek Monospace Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center text-[10px] md:text-[11px] text-[#94A3B8]/60 hover:text-[#00D4FF] transition-all duration-300 cursor-pointer tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span className="relative">
            <span className="text-[#00D4FF]/40">&lt;</span>
            design_by
            <span className="text-[#00D4FF]/40">/&gt;</span>
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4FF]/50 transition-all duration-500 group-hover:w-full"></div>
          </span>
          <span className="opacity-0 -ml-2 text-[#00D4FF] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500">
            rezosnd
          </span>
        </a>
      </div>
    </div>`;
  
  if (c.match(oldFooterRegex)) {
    c = c.replace(oldFooterRegex, newFooter);
    fs.writeFileSync(p, c); 
  }
});

console.log("Fixed mono footer!");
