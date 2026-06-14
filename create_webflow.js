const fs = require('fs');

const html = fs.readFileSync('webflow2.html', 'utf8');

// The black screen on refresh is caused by Webflow's preloader overlay getting stuck
let cleanedHtml = html.replace(/<div class="preloader[^>]*>[\s\S]*?<\/div>/, '');

// Rebrand to VeritasCo 1v1
cleanedHtml = cleanedHtml.replace(/BilloDesign/g, 'VeritasCo');
cleanedHtml = cleanedHtml.replace(/CodeDuel/g, 'VeritasCo 1v1');
cleanedHtml = cleanedHtml.replace(/CodeHelp/g, 'VeritasCo 1v1');

const bodyStart = cleanedHtml.indexOf('<body');
const bodyStartEnd = cleanedHtml.indexOf('>', bodyStart) + 1;
const bodyEnd = cleanedHtml.lastIndexOf('</body>');

let bodyHtml = cleanedHtml;
if (bodyStart !== -1 && bodyEnd !== -1) {
    bodyHtml = cleanedHtml.substring(bodyStartEnd, bodyEnd);
}

// Replace ` and $
const escapedHtml = bodyHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');
const webflowHtml = `export const webflowHtml = \`${escapedHtml}\`;`;

const webflowCss = 'export const webflowCss = `<link href="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/css/billodesign.webflow.shared.ed7e29851.css" rel="stylesheet" type="text/css" />`;';
const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';

const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}\n`;
fs.writeFileSync('src/app/webflow_html.ts', finalContent);
console.log('Successfully created webflow_html.ts from webflow2.html!');
