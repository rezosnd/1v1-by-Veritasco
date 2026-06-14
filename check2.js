const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

const printContext = (str, word) => {
  let index = 0;
  while ((index = str.toLowerCase().indexOf(word.toLowerCase(), index)) !== -1) {
    console.log(`Match for ${word}: ...${str.substring(Math.max(0, index - 30), Math.min(str.length, index + 30))}...`);
    index += word.length;
  }
}

printContext(data, 'muhammad');
printContext(data, 'mohammad');
printContext(data, 'billo');
