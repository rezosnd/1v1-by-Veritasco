const fs = require('fs');
const path = require('path');

const NEW_COLOR = 'lab(30.6017% 56.7637 -64.4751)';
const TAILWIND_NEW_COLOR = 'bg-[lab(30.6017%_56.7637_-64.4751)]';

// 1. Update layout.tsx
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');
layoutCode = layoutCode.replace(/bg-\[#130927\]/g, TAILWIND_NEW_COLOR);
layoutCode = layoutCode.replace(/bg-\[#130927\]\/50/g, 'bg-[lab(30.6017%_56.7637_-64.4751)]/50');
fs.writeFileSync(layoutPath, layoutCode);

// 2. Update page.tsx and other routes
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  c = c.replace(/bg-\[#130927\]/g, TAILWIND_NEW_COLOR);
  c = c.replace(/bg-\[#130927\]\/50/g, 'bg-[lab(30.6017%_56.7637_-64.4751)]/50');
  fs.writeFileSync(p, c); 
});

// 3. Update globals.css
const globalsPath = path.join(process.cwd(), 'src/app/globals.css');
let globalsCode = fs.readFileSync(globalsPath, 'utf8');
globalsCode = globalsCode.replace(/--background: #130927;/g, `--background: ${NEW_COLOR};`);
globalsCode = globalsCode.replace(/--color-background: #130927;/g, `--color-background: ${NEW_COLOR};`);
fs.writeFileSync(globalsPath, globalsCode);

// 4. Update LiquidMetalButton.tsx gradient to use this color
const btnPath = path.join(process.cwd(), 'src/components/LiquidMetalButton.tsx');
if (fs.existsSync(btnPath)) {
  let btnCode = fs.readFileSync(btnPath, 'utf8');
  btnCode = btnCode.replace(/linear-gradient\(#130927, #241145\)/g, `linear-gradient(${NEW_COLOR}, #241145)`);
  fs.writeFileSync(btnPath, btnCode);
}

console.log("Applied specific lab() purple 800 theme!");
