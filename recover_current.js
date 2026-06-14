const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/39a174c1-4517-424c-910e-bcc135a83151/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const start = content.indexOf('<!DOCTYPE html>');
const end = content.lastIndexOf('</html>');

if (start !== -1 && end !== -1) {
    const html = content.substring(start, end + 7);
    
    const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
    const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
    
    // Replace ` and $ to avoid template string interpolation issues
    const escapedHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const webflowHtml = `export const webflowHtml = \`${escapedHtml}\`;`;
    
    const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}`;
    fs.writeFileSync('src/app/webflow_html.ts', finalContent);
    console.log('Recovered!');
} else {
    console.log('Could not find HTML tags', start, end);
}
