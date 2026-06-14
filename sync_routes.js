const fs = require('fs');
const path = require('path');

const mainPagePath = path.join(process.cwd(), 'src/app/page.tsx');
const mainPageCode = fs.readFileSync(mainPagePath, 'utf8');

const dirs = ['arena', 'problems', 'leaderboard', 'pricing', 'login', 'signup']; 

dirs.forEach(d => { 
  const p = path.join(process.cwd(), 'src/app', d, 'page.tsx'); 
  if(!fs.existsSync(p)) return; 
  
  // Customize the headline based on the route
  let routeTitle = d.charAt(0).toUpperCase() + d.slice(1);
  if (d === 'arena') routeTitle = 'The Arena';
  if (d === 'pricing') routeTitle = 'Pro Plans';
  if (d === 'login') routeTitle = 'Welcome Back';
  if (d === 'signup') routeTitle = 'Join Elite';

  let newPageCode = mainPageCode;
  
  // Replace "One Subscription." with the route title
  newPageCode = newPageCode.replace(/One Subscription\./g, routeTitle + '.');
  
  // Replace "Buy VeritasCo One" with "Notify Me" or "Enter"
  newPageCode = newPageCode.replace(/Buy VeritasCo One/g, "Enter " + routeTitle);

  fs.writeFileSync(p, newPageCode); 
});

console.log("Copied the clean CodeHelp UI to all sub-routes!");
