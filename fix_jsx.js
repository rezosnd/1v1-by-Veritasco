const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Replace the closing motion.div that follows the h1 tag
  c = c.replace(/<\/h1>\s*<\/motion\.div>/g, '</h1>\n          </div>');
  
  fs.writeFileSync(p, c); 
});

console.log("Fixed JSX syntax errors!");
