const fs = require('fs');
const path = require('path');

// 1. Clean up layout.tsx
const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

layoutCode = layoutCode.replace(
  /<a href="\/login"><LiquidMetalButton className="px-4 py-2 text-sm">Login<\/LiquidMetalButton><\/a>/g,
  `<a href="/login" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300" suppressHydrationWarning>Login</a>`
);
fs.writeFileSync(layoutPath, layoutCode);

// 2. Clean up LiquidMetalButton.tsx to prevent text wrapping
const btnPath = path.join(process.cwd(), 'src/components/LiquidMetalButton.tsx');
let btnCode = fs.readFileSync(btnPath, 'utf8');
btnCode = btnCode.replace(
  /className={\`relative inline-flex items-center justify-center group cursor-pointer overflow-hidden rounded-full \$\{className\}\`}/g,
  `className={\`relative inline-flex items-center justify-center group cursor-pointer overflow-hidden rounded-full whitespace-nowrap \${className}\`}`
);
fs.writeFileSync(btnPath, btnCode);

// 3. Clean up page.tsx (Revert COMING SOON)
const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Replace the giant WebGL pill with a sleek text gradient
  c = c.replace(
    /<div className="overflow-hidden p-4 flex justify-center w-full"><LiquidMetalButton className="px-10 py-4 sm:px-16 sm:py-6 rounded-full text-3xl sm:text-5xl md:text-7xl font-clash font-bold tracking-tight shadow-\[0_0_50px_rgba\(0,212,255,0\.4\)\] cursor-default hover:scale-105 transition-transform duration-500 w-full sm:w-auto text-center">COMING SOON<\/LiquidMetalButton><\/div>/g,
    `<div className="overflow-hidden p-2">
            <h1 className="hero-title font-clash text-5xl sm:text-6xl md:text-8xl tracking-tight mb-4 sm:mb-6 font-bold leading-tight shimmer-text drop-shadow-2xl">
              COMING SOON
            </h1>
          </div>`
  );

  c = c.replace(
    /<div className="mb-6 sm:mb-10 animate-\[reveal_1s_ease_forwards\]"><LiquidMetalButton className="px-10 py-5 sm:px-16 sm:py-6 rounded-full text-4xl sm:text-5xl md:text-7xl font-clash font-bold tracking-tight shadow-\[0_0_40px_rgba\(123,97,255,0\.5\)\] cursor-default">COMING SOON<\/LiquidMetalButton><\/div>/g,
    `<div className="overflow-hidden p-2">
            <h1 className="hero-title font-clash text-5xl sm:text-6xl md:text-8xl tracking-tight mb-4 sm:mb-6 font-bold leading-tight shimmer-text drop-shadow-2xl">
              COMING SOON
            </h1>
          </div>`
  );

  // Ensure Notify Me has proper padding to prevent squishing
  c = c.replace(
    /<LiquidMetalButton onClick=\{playClickSound\} className="w-full sm:w-auto px-8 py-3\.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-\[0_0_20px_rgba\(171,130,235,0\.4\)\]">/g,
    `<LiquidMetalButton onClick={playClickSound} className="w-full sm:w-auto px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-[0_0_20px_rgba(171,130,235,0.4)]">`
  );

  fs.writeFileSync(p, c); 
});

console.log("Uncluttered the interface!");
