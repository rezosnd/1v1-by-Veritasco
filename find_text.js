const fs = require('fs');
const data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// Strip all HTML tags to see what the raw text is
const rawText = data.replace(/<[^>]*>/g, '');

const index = rawText.indexOf('DESIGN BEYOND');
if (index !== -1) {
    console.log(rawText.substring(index - 50, index + 100));
} else {
    console.log("Not found even without tags");
}
