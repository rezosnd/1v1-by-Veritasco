const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

data = data.replace(/Muhammad/ig, 'the CodeDuel Team');
data = data.replace(/Mohammad/ig, 'the CodeDuel Team');
data = data.replace(/Hey, I’m the CodeDuel Team\./g, 'Welcome to CodeDuel.');
data = data.replace(/I'm a Web designer and Webflow Certified Partner  obsessed with blending design, code, and intelligence\. Whether you're building a brand or reinventing a platform, I help you craft digital experiences that work hard — and look alive\./g, 'We are a dedicated team obsessed with competitive programming. We built CodeDuel to provide the ultimate arena for developers to test their skills, climb the ranks, and push their limits in real-time battles.');
data = data.replace(/billodesign/ig, 'codeduel');

// Also replace the specific chatbot responses
data = data.replace(/the CodeDuel Team's work, projects, or skills/ig, "CodeDuel's features, matchmaking, or platform");
data = data.replace(/the CodeDuel Team's Arena AI assistant/ig, "CodeDuel's Arena AI assistant");
data = data.replace(/straight to the CodeDuel Team/ig, 'straight to our team');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Replaced all traces of Muhammad/Billo successfully!');
