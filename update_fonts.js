const fs = require('fs'); 
const path = require('path'); 

const dirs = ['.', 'arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Apply .particle-star
  c = c.replace('className="absolute rounded-full bg-white"', 'className="absolute rounded-full bg-white particle-star"');
  
  // Apply .orb to the 3d/lottie wrapper
  c = c.replace('opacity-70 flex items-center justify-center"', 'opacity-70 flex items-center justify-center orb"');
  c = c.replace('opacity-80 flex items-center justify-center"', 'opacity-80 flex items-center justify-center orb"');
  
  // Apply .aurora-bg to the first glow div instead of mixBlendMode and manual blur?
  // User asked for "Behind the text: background: radial-gradient...". Let's put aurora-bg as an absolute div behind everything.
  if(!c.includes('aurora-bg')) {
    const auroraMarkup = `<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] aurora-bg -z-10 pointer-events-none rounded-full blur-[60px]"></div>`;
    // Insert behind main content
    c = c.replace('{/* Main Content */}', auroraMarkup + '\n\n      {/* Main Content */}');
  }

  // Apply .notify-btn
  c = c.replace('className="w-full sm:w-auto px-8', 'className="notify-btn w-full sm:w-auto px-8');

  // Apply .hero-title and Clash Display
  // Remove framer motion wrapper around h1 and just put hero-title on h1
  // We need to replace the motion.div wrapper with just a standard div or add hero-title to h1
  c = c.replace(/<motion\.div\s*initial={{ opacity: 0, scale: 0\.95 }}\s*animate={{ opacity: 1, scale: 1 }}\s*transition={{ duration: 0\.8, ease: "easeOut" }}\s*>\s*<h1 className="([^"]+)">/m, 
    '<div className="overflow-hidden p-2">\n            <h1 className="$1 hero-title">');
  // Need to also replace the closing tag of that specific motion div. This is tricky with regex. 
  // Let's just do a string replace for the exact h1 line
  c = c.replace('text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight', 'hero-title text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight');
  
  fs.writeFileSync(p, c); 
});

console.log("Updated animations and fonts!");
