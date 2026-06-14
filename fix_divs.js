const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// The current HTML has: 
// <div class="spline_orb-wrapper" style="...">...</div><div id="orbTypingHero"
// We want it to be:
// <div class="spline_orb-wrapper" style="..."><div class="spline_orb-inner-wrap"> ... </div><div id="orbTypingHero"

// Let's replace the closing </div> of our laptop SVG with <div class="spline_orb-inner-wrap"> so that orbTypingHero is inside it, and the extra </div></div> at the end perfectly close spline_orb-inner-wrap and spline_orb-wrapper.

// Actually, it's easier to just find the exact spot. 
// My previous script injected:
//   </style>
// </div>
// <div id="orbTypingHero"
data = data.replace(/<\/style>\s*<\/div>\s*<div id="orbTypingHero"/g, '</style><div id="orbTypingHero"');
data = data.replace(/<div class="spline_orb-wrapper" style="display:flex; justify-content:center; align-items:center;">/g, '<div class="spline_orb-wrapper" style="display:flex; justify-content:center; align-items:center;"><div class="spline_orb-inner-wrap">');

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Fixed extra divs!');
