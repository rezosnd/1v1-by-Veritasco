const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/39a174c1-4517-424c-910e-bcc135a83151/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const startIndex = content.indexOf('<!DOCTYPE html>');
if (startIndex !== -1) {
    const endIndex = content.indexOf('</html>', startIndex);
    if (endIndex !== -1) {
        const html = content.substring(startIndex, endIndex + 7);
        // Also extract the script / JS parts they pasted
        const webflowHtml = `export const webflowHtml = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;`;
        const webflowCss = `export const webflowCss = \`<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />\`;`;
        const webflowJs = `export const webflowJs = \`<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>\`;`;
        
        const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}`;
        fs.writeFileSync('src/app/webflow_html.ts', finalContent);
        console.log('Successfully recovered webflow_html.ts');
    } else {
        console.log('Could not find </html>');
    }
} else {
    console.log('Could not find <!DOCTYPE html>');
}
