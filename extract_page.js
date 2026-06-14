const fs = require('fs');
const log = fs.readFileSync('C:/Users/KIIT0001/.gemini/antigravity/brain/39a174c1-4517-424c-910e-bcc135a83151/.system_generated/logs/overview.txt', 'utf8');
const match = log.match(/"CodeContent":"([^"]*export default function LandingPage[^"]*)"/);
if (match) {
    console.log("Found match!");
    let code = match[1];
    code = code.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    fs.writeFileSync('restored_page.tsx', code);
} else {
    console.log("Not found.");
}
