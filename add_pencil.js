const fs = require('fs'); 
const path = require('path'); 

// 1. Update layout.tsx with Caveat font
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
if(!lc.includes('Caveat')) {
    lc = lc.replace('family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap', 'family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&family=Caveat:wght@400;700&display=swap');
    fs.writeFileSync(l, lc);
}

// 2. Update globals.css with pencil-effect classes
const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');
if(!gc.includes('pencil-effect')) {
    const pencilCss = `
.font-caveat {
  font-family: 'Caveat', cursive;
}
.pencil-effect {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  animation: pencilDraw 4s steps(40, end) infinite alternate;
  border-right: 2px solid #00D4FF;
  padding-right: 4px;
}
@keyframes pencilDraw {
  0% { width: 0; border-color: #00D4FF; }
  40% { width: 100%; border-color: transparent; }
  100% { width: 100%; border-color: transparent; }
}
`;
    fs.appendFileSync(g, pencilCss);
}

// 3. Update all page.tsx footers
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  const oldFooter = /\{\/\* Clean Static Footer \*\/\}[\s\S]*?<\/div>/;
  const newFooter = `{/* Pencil Effect Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center pointer-events-auto">
        <a 
          href="https://instagram.com/r_e_z_o_s_nd" 
          target="_blank" 
          rel="noreferrer"
          className="relative inline-block font-caveat text-2xl md:text-3xl text-[#94A3B8] hover:text-[#00D4FF] transition-colors duration-300 cursor-pointer group"
        >
          <span className="pencil-effect">Design by Rezosnd @r_e_z_o_s_nd</span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-500 group-hover:w-full"></div>
        </a>
      </div>`;
  
  c = c.replace(oldFooter, newFooter);
  
  fs.writeFileSync(p, c); 
});

console.log("Added pencil effect footer!");
