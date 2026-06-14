const fs = require('fs');

let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// Section Titles
data = data.replace(/We got your back!/g, 'The Arena Awaits!');
data = data.replace(/Custom-built\. Speed-optimized\. AI-ready\./g, 'Code. Compete. Conquer.');
data = data.replace(/Let your site evolve with your vision\./g, 'Real-time 1v1 coding battles with Judge0 execution.');
data = data.replace(/What I( | )Build/g, 'Platform Features');
data = data.replace(/Tools I used/g, 'Supported Languages');
data = data.replace(/Selected Work/g, 'Recent Battles');

// Feature Cards
data = data.replace(/<h3>Web Design<\/h3>/g, '<h3>1v1 Matchmaking</h3>');
data = data.replace(/UI\/UX design that feels intuitive, accessible, and perfectly aligned with your brand’s goals\./g, 'Intelligent ELO-based matchmaking system that pairs you with opponents of similar skill levels.');

data = data.replace(/<h3>Webflow Development<\/h3>/g, '<h3>Judge0 Execution</h3>');
data = data.replace(/Bringing designs to life with Webflow, creating fast, scalable, and easy-to-manage websites\./g, 'Lightning-fast code execution supporting 40+ languages with strict isolated environments.');

data = data.replace(/<h3>Performance &amp; SEO<\/h3>/g, '<h3>Global Leaderboards</h3>');
data = data.replace(/Optimizing websites for speed and search engines, ensuring your brand stands out and ranks higher\./g, 'Climb the global ranks, earn badges, and prove you are the best competitive coder.');

// Headers
data = data.replace(/Services/g, 'Features');
data = data.replace(/Tech Stack/g, 'Languages');
data = data.replace(/Projects/g, 'Arena');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Content fully replaced!');
