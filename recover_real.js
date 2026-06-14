const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

// The file was written using a python script in the previous conversation?
// Or I can just find `export const webflowHtml = \`<div id="startSound"`
const startStr = 'export const webflowHtml = `<div id="startSound"';
const start = content.indexOf(startStr);

if (start !== -1) {
    // Find the end of the template literal: it should end with `</div>`;` or `\n`;`
    // Let's just find the first occurrence of `;` after the last </div>
    const end = content.indexOf('</div>`;', start);
    if (end !== -1) {
        const webflowHtmlString = content.substring(start, end + 8);
        
        const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
        const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
        
        const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtmlString}\n`;
        fs.writeFileSync('src/app/webflow_html.ts', finalContent);
        console.log('Successfully recovered original webflow_html.ts! Length:', finalContent.length);
    } else {
        console.log('Found start but not end');
    }
} else {
    console.log('Could not find start string');
}
