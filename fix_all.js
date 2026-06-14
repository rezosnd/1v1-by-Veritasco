const fs = require('fs');

const html = fs.readFileSync('webflow2.html', 'utf8');

// The black screen on refresh is caused by Webflow's preloader overlay getting stuck
// We eradicate it completely.
let cleanedHtml = html.replace(/<div data-w-id="3b91a9df-cdd8-2dc8-c232-e89d9dbb75bf"[^>]*class="c-preloader">[\s\S]*?<div class="spline_orb-wrapper">/g, '<div class="spline_orb-wrapper">');

// Eradicate awwwards badge
cleanedHtml = cleanedHtml.replace(/<div id="awwwards"[^>]*>[\s\S]*?<\/svg><\/a><\/div>/g, '');

// Eradicate Webflow Nav
cleanedHtml = cleanedHtml.replace(/<div data-w-id="396176c6-906a-9f74-c6d0-8a4663dfdea9"[^>]*class="nav_component w-nav">[\s\S]*?<\/nav>/g, '');
// Since the nav might not end at </nav>, let's just strip the whole div if we can, or just use CSS to hide it in layout.tsx.
// Wait, the easiest way to remove nav is:
cleanedHtml = cleanedHtml.replace(/<div[^>]*class="nav_component w-nav"[\s\S]*?<\/nav><div class="nav_overlay[^>]*><\/div><\/div>/g, '');

// Rebrand Text
cleanedHtml = cleanedHtml.replace(/Muhammad/g, 'CodeDuel Team');
cleanedHtml = cleanedHtml.replace(/Mohammad/g, 'CodeDuel Team');
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

// Replace the H1 content properly
bodyHtml = bodyHtml.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/gi,
    `<h1 letters-fade-in-delay="" text-split="" class="heading-1">India's #1<br/>Coding Community.</h1>`
);

// Replace the H2/Paragraph content
bodyHtml = bodyHtml.replace(
    /Webflow sites that don’t just look stunning —<br\/>they think, scale, and convert\./gi,
    `Get your first job with VeritasCo ONE.<br/>Battle developers and climb the leaderboard.`
);

// Replace the native webflow spline div with the direct spline-viewer component
bodyHtml = bodyHtml.replace(
    /<div[^>]*data-spline-url="https:\/\/prod\.spline\.design\/mFnZxSV0j4KZp6WS\/scene\.splinecode"[^>]*><canvas><\/canvas><\/div>/g,
    `<div class="spline_orb" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
       <spline-viewer url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"></spline-viewer>
     </div>`
);

// Replace ` and $
const escapedHtml = bodyHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');
const webflowHtml = `export const webflowHtml = \`${escapedHtml}\`;`;

const webflowCss = 'export const webflowCss = `<link href="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/css/billodesign.webflow.shared.ed7e29851.css" rel="stylesheet" type="text/css" />`;';
const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';

const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}\n`;
fs.writeFileSync('src/app/webflow_html.ts', finalContent);
console.log('Successfully created ultra clean webflow_html.ts!');
