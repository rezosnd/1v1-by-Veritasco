const fs = require('fs');

let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// Replace the native webflow spline div with the direct spline-viewer component
data = data.replace(
    /<div data-hover2="" class="spline_orb" data-w-id="26cbbd1b-6ef0-aa56-5e83-0f1d60cdf44c" data-spline-url="https:\/\/prod\.spline\.design\/iWcKkXhK6-i-6oF9\/scene\.splinecode"><canvas><\/canvas><\/div>/g,
    `<div class="spline_orb" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
       <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js"></script>
       <spline-viewer url="https://prod.spline.design/iWcKkXhK6-i-6oF9/scene.splinecode"></spline-viewer>
     </div>`
);

// Remove the Awwwards Nominee ribbons
data = data.replace(/<div id="w-node[^>]*>\s*<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>\s*<\/div>/ig, '');
data = data.replace(/<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>/ig, '');

// Change the main text to their content!
data = data.replace(/DESIGN BEYOND PIXELS\.<br\/>BUILD BEYOND LIMITS\./gi, 'INDIA\'S #1<br/>CODING COMMUNITY.');
data = data.replace(/DESIGN BEYOND PIXELS\./gi, 'INDIA\'S #1 CODING COMMUNITY.');
data = data.replace(/BUILD BEYOND LIMITS\./gi, 'REAL-TIME 1v1 BATTLES.');
data = data.replace(/Webflow sites that don’t just look stunning —<br\/>they think, scale, and convert\./gi, 'Get your first job with VeritasCo 1v1.<br/>Battle developers in real-time and climb the leaderboard.');

// There are multiple instances of the text for different viewports or duplicate animations. Let's do generic replaces:
data = data.replace(/DESIGN BEYOND PIXELS/gi, "INDIA'S #1");
data = data.replace(/BUILD BEYOND LIMITS/gi, "CODING COMMUNITY");
data = data.replace(/Webflow sites that don(’|')t just look stunning —/gi, "Get your first job with VeritasCo ONE —");
data = data.replace(/they think, scale, and convert\./gi, "battle developers and climb the leaderboard.");

// Also the "BilloDesign" text in the actual Webflow navbar
data = data.replace(/<img src="https:\/\/cdn\.prod\.website-files\.com\/68f3884d9e35f473a885d321\/68f44ff53e9cd01683bbd73c_Logo\.svg"[^>]*>/gi, '<img src="/veritasco.png" style="height: 40px" alt="VeritasCo 1v1">');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Orb fixed and Text replaced!');
