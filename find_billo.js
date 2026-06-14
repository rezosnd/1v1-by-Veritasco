const fs = require('fs');
const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');
const start = content.indexOf('billodesign.webflow.io');
if (start !== -1) {
    const docStart = content.lastIndexOf('<html', start);
    const docStartEscape = content.lastIndexOf('\\u003Chtml', start);
    const docStartLt = content.lastIndexOf('&lt;html', start);
    
    console.log('docStart:', docStart, 'escape:', docStartEscape, 'lt:', docStartLt);
    
    let actualStart = docStart;
    if (docStart === -1) {
        // Just take the substring from 1000 chars before
        actualStart = start - 1000;
    }
    console.log(content.substring(actualStart, start + 200));
}
