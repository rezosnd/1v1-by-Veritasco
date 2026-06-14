const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Use a much more robust replacement strategy.
  // Find the start of the footer comment, and replace everything from there to the end of the file, then append the closing tags.
  const commentMatch = c.match(/\{\/\*\s*(Pencil Effect Footer|Sleek Minimal Footer|Sleek Monospace Footer|Typed Heart Footer|Simple Red Heart Footer|Clean Static Footer)\s*\*\/\}/);
  
  if (commentMatch) {
    const startIndex = commentMatch.index;
    c = c.substring(0, startIndex); // Keep everything before the footer
    
    // Add the correct, final static red heart footer, and close the main div
    c += `{/* Simple Red Heart Footer */}
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
    </div>
  );
}
`;
    fs.writeFileSync(p, c); 
  }
});

console.log("FORCE UPDATED ALL FOOTERS!");
