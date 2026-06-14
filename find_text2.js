const fs = require('fs');
const data = fs.readFileSync('webflow2.html', 'utf8');

const rawText = data.replace(/<[^>]*>/g, '');

const index = rawText.indexOf('PIXELS');
if (index !== -1) {
    console.log(rawText.substring(index - 50, index + 100));
} else {
    console.log("Not found even without tags");
}
