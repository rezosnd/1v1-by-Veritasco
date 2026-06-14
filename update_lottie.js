const fs = require('fs'); 
const path = require('path'); 

const l = path.join(process.cwd(), 'src/app/layout.tsx'); 
let lc = fs.readFileSync(l, 'utf8'); 
if (!lc.includes('dotlottie-player.mjs')) { 
  lc = lc.replace('</head>', '  <script type="module" src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"></script>\n      </head>'); 
  fs.writeFileSync(l, lc); 
}

const dirs = ['arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 
dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  let c = fs.readFileSync(p, 'utf8'); 
  
  // Add JSX declaration
  if (!c.includes('"dotlottie-player": any;')) {
    c = c.replace('"spline-viewer": any;', '"spline-viewer": any;\n      "dotlottie-player": any;');
  }

  // Replace spline viewer block
  const splineRegex = /<div className="absolute inset-0 z-0 pointer-events-auto opacity-70 flex items-center justify-center">[\s\S]*?<\/div>/;
  const lottieMarkup = `<div className="absolute inset-0 z-0 pointer-events-none opacity-80 flex items-center justify-center">
        <dotlottie-player 
          src="/0945f68c-118c-11ee-a57d-7bf3c977581c.lottie"
          background="transparent" 
          speed="1" 
          style={{ width: '600px', height: '600px', filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))' }} 
          loop 
          autoplay
        ></dotlottie-player>
      </div>`;
  
  c = c.replace(splineRegex, lottieMarkup);
  
  fs.writeFileSync(p, c); 
});

console.log("Updated lottie files!");
