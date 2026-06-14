const fs = require('fs'); 
const path = require('path'); 

// 1. Update layout.tsx with Outfit and Space Grotesk
const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
lc = lc.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter.*?" rel="stylesheet" \/>/g, '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />');
// Replace Clash Display link with nothing if we are removing it, but let's just leave it or remove it.
lc = lc.replace(/<link href="https:\/\/api\.fontshare\.com.*? \/>/g, '');
// Use font-outfit for the body and navbar links
lc = lc.replace(/font-sora/g, 'font-outfit');
// For the logo, use Space Grotesk
lc = lc.replace(/<span className="font-outfit font-bold text-xl/g, '<span className="font-space font-bold text-xl');
fs.writeFileSync(l, lc);

// 2. Update globals.css to add the new font classes
const g = path.join(process.cwd(), 'src/app/globals.css');
let gc = fs.readFileSync(g, 'utf8');
const newFonts = `
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.font-space {
  font-family: 'Space Grotesk', sans-serif;
}
`;
if(!gc.includes('font-outfit')) {
    gc += newFonts;
}
// Update hero-title to use Space Grotesk
gc = gc.replace(/font-family: 'Clash Display', sans-serif;/g, "font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em;");
fs.writeFileSync(g, gc);

// 3. Update all page.tsx text descriptions
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Make sure description uses outfit and slightly larger, clearer text
  c = c.replace(/className="text-lg sm:text-xl text-\[#94A3B8\] max-w-2xl mx-auto mb-8 sm:mb-12 font-medium leading-relaxed"/g, 'className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8 sm:mb-12 font-outfit font-light leading-relaxed tracking-wide"');
  
  fs.writeFileSync(p, c); 
});

console.log("Updated to Outfit and Space Grotesk!");
