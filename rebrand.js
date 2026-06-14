const fs = require('fs');

let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// Replace standard freelance/portfolio copy with CodeDuel platform copy
data = data.replace(/Muhammad/g, 'CodeDuel Team');
data = data.replace(/Mohammad/g, 'CodeDuel Team');
data = data.replace(/Hey human 👋 I’ll deliver you/g, 'Hey coder 👋 I’ll deliver you');
data = data.replace(/We got you/gi, 'The Arena Awaits');
data = data.replace(/My Services/gi, 'Platform Features');
data = data.replace(/Selected Projects/gi, 'Live Matches');
data = data.replace(/UI\/UX Design/gi, 'Real-time Matchmaking');
data = data.replace(/Web Development/gi, 'Judge0 Code Execution');
data = data.replace(/Brand Identity/gi, 'Dynamic ELO Ranking');
data = data.replace(/Figma, Webflow, React/gi, 'C++, Python, Java, JavaScript, Go');
data = data.replace(/Scroll down and I'll guide you/gi, 'Enter the arena. Compete. Code. Conquer.');

data = data.replace(/<div id="w-node[^>]*>\s*<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>\s*<\/div>/ig, '');

// Suppress form issue
data = data.replace(/<form id="email-form"([^>]*)>/g, '<form id="email-form"$1 action="#" onsubmit="event.preventDefault();">');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Rebranded webflow html without losing layout!');
