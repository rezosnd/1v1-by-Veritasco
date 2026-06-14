const fs = require('fs');
const path = require('path');

// 1. Update layout.tsx (Login Button)
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

layoutCode = layoutCode.replace(
  /<a href="\/login" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300" suppressHydrationWarning>Login<\/a>/g,
  `<a href="/login"><LiquidMetalButton className="px-4 py-2 text-sm">Login</LiquidMetalButton></a>`
);

fs.writeFileSync(layoutPath, layoutCode);

// 2. Update page.tsx (Coming Soon Badge)
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Replace COMING SOON text with a giant LiquidMetalButton badge
  c = c.replace(
    /<h1 className="hero-title font-clash text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4 sm:mb-6 shimmer-text drop-shadow-2xl leading-tight hero-title">\s*Coming Soon\s*<\/h1>/g,
    `<div className="mb-6 sm:mb-10 animate-[reveal_1s_ease_forwards]"><LiquidMetalButton className="px-10 py-5 sm:px-16 sm:py-6 rounded-full text-4xl sm:text-5xl md:text-7xl font-clash font-bold tracking-tight shadow-[0_0_40px_rgba(123,97,255,0.5)] cursor-default">COMING SOON</LiquidMetalButton></div>`
  );
  
  // Also try replacing it if the regex failed due to formatting
  c = c.replace(
    /<div className="overflow-hidden p-2">\s*<h1 className="hero-title[\s\S]*?Coming Soon\s*<\/h1>\s*<\/div>/g,
    `<div className="overflow-hidden p-4 flex justify-center w-full"><LiquidMetalButton className="px-10 py-4 sm:px-16 sm:py-6 rounded-full text-3xl sm:text-5xl md:text-7xl font-clash font-bold tracking-tight shadow-[0_0_50px_rgba(0,212,255,0.4)] cursor-default hover:scale-105 transition-transform duration-500 w-full sm:w-auto text-center">COMING SOON</LiquidMetalButton></div>`
  );

  fs.writeFileSync(p, c); 
});

console.log("Updated Login and Coming Soon to Liquid Metal!");
