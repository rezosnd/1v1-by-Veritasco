const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

// We are looking for <!DOCTYPE html><!-- This site was created in Webflow. https://webflow.com
const startStr = '<!DOCTYPE html><!-- This site was created in Webflow';
const start = content.indexOf(startStr);

if (start !== -1) {
    const end = content.indexOf('</html>', start);
    if (end !== -1) {
        let html = content.substring(start, end + 7);
        console.log("Found BilloDesign HTML! Length:", html.length);
        
        // Remove preloader
        html = html.replace(/<div class="preloader[^>]*>[\s\S]*?<\/div>/, '');
        
        // Remove <head> entirely since we inject the body
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
        
        const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
        const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
        
        const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}\n`;
        fs.writeFileSync('src/app/webflow_html.ts', finalContent);
        console.log('Restored BilloDesign successfully!');
    } else {
        console.log('Found start but no </html>');
    }
} else {
    console.log('Could not find BilloDesign HTML in log');
}
