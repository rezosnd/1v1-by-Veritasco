const fs = require('fs');
const html = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

const regex = /https:\/\/[^'"]*spline[^'"]*/gi;
const matches = html.match(regex);
console.log("Spline URLs found:");
if (matches) {
  [...new Set(matches)].forEach(m => console.log(m));
} else {
  console.log("None");
}
