const fs = require('fs');
const data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');
const match = data.match(/class="[^"]*chat[^"]*"/ig);
console.log(match ? [...new Set(match)] : 'no match');
