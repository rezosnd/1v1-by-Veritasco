const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const start = content.indexOf('<!DOCTYPE html>');
if (start !== -1) {
    const end = content.indexOf('</html>', start);
    if (end !== -1) {
        let html = content.substring(start, end + 7);
        
        // Remove preloader to avoid black screen on refresh
        html = html.replace(/<div class="preloader[^>]*>[\s\S]*?<\/div>/, '');
        
        // Change text based on previous rebranding
        html = html.replace(/BilloDesign/g, 'VeritasCo');
        html = html.replace(/CodeDuel/g, 'VeritasCo 1v1');
        
        // We know webflow JS and CSS from the template
        const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
        const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
        
        // Extract only the <body> inner HTML if possible, or just inject the whole thing.
        // Wait, the previous implementation had `export const webflowHtml = \`<div id="startSound"...`
        // which means I extracted the body content. Let's do that!
        const bodyStart = html.indexOf('<body');
        const bodyStartEnd = html.indexOf('>', bodyStart) + 1;
        const bodyEnd = html.lastIndexOf('</body>');
        
        let bodyHtml = html;
        if (bodyStart !== -1 && bodyEnd !== -1) {
            bodyHtml = html.substring(bodyStartEnd, bodyEnd);
        }
        
        // Replace ` and $
        const escapedHtml = bodyHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        const webflowHtml = `export const webflowHtml = \`${escapedHtml}\`;`;
        
        const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}`;
        fs.writeFileSync('src/app/webflow_html.ts', finalContent);
        console.log('Restored the original BilloDesign 3D layout! Length:', finalContent.length);
    }
}
