const fs = require('fs');

let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// The webflow export has: <div data-animation-type="spline" data-spline-url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"><canvas></canvas></div>
// We want to replace it completely with spline-viewer
data = data.replace(
    /<div[^>]*data-spline-url="https:\/\/prod\.spline\.design\/mFnZxSV0j4KZp6WS\/scene\.splinecode"[^>]*><canvas><\/canvas><\/div>/g,
    `<div class="spline_orb" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
       <spline-viewer url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"></spline-viewer>
     </div>`
);

// We also need to fix the Webflow text. Wait, earlier I said:
// data.includes('DESIGN BEYOND PIXELS') was false! Let's check what the text actually is.
