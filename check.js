const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');
console.log('Muhammad matches:', data.match(/Muhammad/ig));
console.log('Mohammad matches:', data.match(/Mohammad/ig));
console.log('Billo matches:', data.match(/billo/ig));
