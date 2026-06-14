const fs = require('fs');

let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// Replace the H1 content properly
data = data.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>/gi,
    `<h1 letters-fade-in-delay="" text-split="" class="heading-1">India's #1<br/>Coding Community.</h1>`
);

// Replace the H2/Paragraph content
data = data.replace(
    /Webflow sites that don’t just look stunning —<br\/>they think, scale, and convert\./gi,
    `Get your first job with VeritasCo ONE.<br/>Battle developers and climb the leaderboard.`
);

// Also handle alternative text cases
data = data.replace(
    /Webflow sites that don't just look stunning —<br\/>they think, scale, and convert\./gi,
    `Get your first job with VeritasCo ONE.<br/>Battle developers and climb the leaderboard.`
);

// We still need to replace the native webflow spline div with the direct spline-viewer component if not already done.
// In the previous step I used `data-spline-url="https:\/\/prod\.spline\.design\/mFnZxSV0j4KZp6WS\/scene\.splinecode"`
data = data.replace(
    /<div[^>]*data-spline-url="https:\/\/prod\.spline\.design\/mFnZxSV0j4KZp6WS\/scene\.splinecode"[^>]*><canvas><\/canvas><\/div>/g,
    `<div class="spline_orb" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
       <spline-viewer url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"></spline-viewer>
     </div>`
);

// Remove the Awwwards Nominee ribbons completely
data = data.replace(/<div id="w-node[^>]*>\s*<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>\s*<\/div>/ig, '');
data = data.replace(/<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>/ig, '');
data = data.replace(/w\.<br\/>Nominee/gi, '');
data = data.replace(/<div class="nominee-text[^>]*>[\s\S]*?<\/div>/ig, '');

// Ensure VeritasCo branding
data = data.replace(/Muhammad/gi, 'CodeDuel Team');
data = data.replace(/BilloDesign/g, 'VeritasCo 1v1');
data = data.replace(/Hey there\.\.\. Welcome to<br\/>VeritasCo 1v1 👋/gi, 'Hey coder... Welcome to<br/>VeritasCo 1v1 👋');
data = data.replace(/Hey there\.\.\. Welcome to<br\/>VeritasCo 👋/gi, 'Hey coder... Welcome to<br/>VeritasCo 1v1 👋');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Orb fixed and Text replaced!');
