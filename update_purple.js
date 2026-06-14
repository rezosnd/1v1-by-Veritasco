const fs = require('fs');
const path = require('path');

// Colors
const PURPLE = '#7B61FF';
const LIGHT_PURPLE = '#A88DFF';
const WHITE = 'white';

// 1. Update globals.css
const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');

// Replace Cyan (#00D4FF) with Light Purple
gc = gc.replace(/#00D4FF/g, LIGHT_PURPLE);
fs.writeFileSync(g, gc);

// 2. Update LiquidMetalButton.tsx
const btnPath = path.join(process.cwd(), 'src/components/LiquidMetalButton.tsx');
if (fs.existsSync(btnPath)) {
  let btnCode = fs.readFileSync(btnPath, 'utf8');
  btnCode = btnCode.replace(/#00D4FF/g, LIGHT_PURPLE);
  btnCode = btnCode.replace(/rgba\(0, 212, 255, 0\.3\)/g, 'rgba(123, 97, 255, 0.4)');
  fs.writeFileSync(btnPath, btnCode);
}

// 3. Update layout.tsx
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

// Change navbar links to white
layoutCode = layoutCode.replace(/text-gray-300/g, 'text-white');
// Change drop shadow from cyan to purple
layoutCode = layoutCode.replace(/rgba\(0,212,255,0\.8\)/g, 'rgba(123,97,255,0.8)');
// Replace cyan with light purple
layoutCode = layoutCode.replace(/#00D4FF/g, LIGHT_PURPLE);

fs.writeFileSync(layoutPath, layoutCode);

// 4. Update page.tsx and other routes
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Replace text-gray-300 with text-white
  c = c.replace(/text-gray-300/g, 'text-white');
  c = c.replace(/text-gray-400/g, 'text-white/80');
  c = c.replace(/placeholder:text-gray-300\/70/g, 'placeholder:text-white/60');
  
  // Replace any cyan drop shadows or colors
  c = c.replace(/#00D4FF/g, LIGHT_PURPLE);
  c = c.replace(/rgba\(0,212,255,0\.4\)/g, 'rgba(123,97,255,0.4)');

  fs.writeFileSync(p, c); 
});

console.log("Updated theme to strict Purple and White!");
