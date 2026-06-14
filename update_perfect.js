const fs = require('fs'); 
const path = require('path'); 

// 1. Update layout.tsx
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 

// Replace Google Fonts link
lc = lc.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Outfit.*? \/>/, '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />');
// Also ensure Fontshare is there for Clash Display
if(!lc.includes('api.fontshare.com')) {
    lc = lc.replace('</head>', '  <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet" />\n      </head>');
}

// Replace body class
lc = lc.replace(/<body className={`font-outfit/g, '<body className={`font-inter antialiased');
lc = lc.replace(/<span className="font-space font-bold/g, '<span className="font-sora font-bold');

// Make navbar links clearer and cooler
lc = lc.replace(/text-\[#94A3B8\]/g, 'text-gray-300'); // Brighter text
// Better hover animation: scale + glow
lc = lc.replace(/hover:bg-white\/10 hover:scale-110 active:scale-95 transition-all duration-300/g, 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300');

fs.writeFileSync(l, lc);

// 2. Update globals.css
const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');
const newFonts = `
.font-inter { font-family: 'Inter', sans-serif; }
.font-sora { font-family: 'Sora', sans-serif; }
.font-clash { font-family: 'Clash Display', sans-serif; }
`;
if(!gc.includes('font-inter')) {
    gc += newFonts;
}
gc = gc.replace(/font-family: 'Space Grotesk'.*?;/g, "font-family: 'Clash Display', sans-serif;");
fs.writeFileSync(g, gc);

// 3. Update all page.tsx text descriptions
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Brighter description text
  c = c.replace(/text-\[#94A3B8\]/g, 'text-gray-300');
  c = c.replace(/font-outfit font-light/g, 'font-inter font-normal');
  
  // Ensure title uses Clash
  c = c.replace(/className="hero-title/g, 'className="hero-title font-clash');
  
  fs.writeFileSync(p, c); 
});

console.log("Updated to perfect clear fonts and colors!");
