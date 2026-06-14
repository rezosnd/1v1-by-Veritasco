const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// 1. Remove Awwwards ribbon
data = data.replace(/<div id="w-node[^>]*>\s*<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>\s*<\/div>/ig, '');
// Just in case it's not wrapped
data = data.replace(/<a href="https:\/\/www\.awwwards\.com[^>]*>[\s\S]*?<\/a>/ig, '');

// 2. Change Typed string "Scroll down and I’ll guide you."
data = data.replace(/'Scroll down and I’ll guide you\.'/g, "'Enter the arena.'");
data = data.replace(/Let’s build beyond pixels\./g, 'Compete. Code. Conquer.');

// 3. Replace text logo "CodeDuel" with a cool SVG icon
const logoSvg = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 8px rgba(168,85,247,0.8));"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`;
data = data.replace(/CodeDuel<\/a>/g, `${logoSvg}</a>`);
data = data.replace(/style="text-decoration:none; font-size: 24px; font-weight: bold; color: white;"/g, 'style="display:flex; align-items:center;"');

// 4. Change background to a cool glassmorphism/gradient instead of pure black
const bgStyles = `
/* Custom CodeDuel Background */
body {
  background: radial-gradient(circle at 50% 0%, #2a0a4a 0%, #050505 70%, #000000 100%) !important;
  color: #fff !important;
}
.page-wrapper {
  background: transparent !important;
}
`;
// inject before </style>
data = data.replace(/<\/style>/, `${bgStyles}</style>`);

// 5. Replace the Spline Orb with a Laptop/Coding Animation SVG
// Find spline_orb-wrapper and replace it
const laptopSvgHtml = `
<div class="spline_orb-wrapper" style="display:flex; justify-content:center; align-items:center;">
  <div style="position:relative; width: 100%; max-width: 600px; animation: float 6s ease-in-out infinite;">
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Glow effect -->
      <circle cx="400" cy="300" r="200" fill="#A855F7" filter="blur(100px)" opacity="0.4"/>
      <!-- Laptop Base -->
      <rect x="100" y="450" width="600" height="30" rx="15" fill="#1A1A24" stroke="#A855F7" stroke-width="2"/>
      <path d="M70 465 L100 450 L700 450 L730 465 Z" fill="#2A2A35"/>
      <!-- Screen Screen -->
      <rect x="150" y="150" width="500" height="300" rx="10" fill="#0D0D12" stroke="#A855F7" stroke-width="4"/>
      <!-- Code lines -->
      <rect x="180" y="180" width="120" height="8" rx="4" fill="#A855F7" opacity="0.8"/>
      <rect x="180" y="210" width="200" height="8" rx="4" fill="#00E5FF" opacity="0.8"/>
      <rect x="200" y="240" width="150" height="8" rx="4" fill="#FF007F" opacity="0.8"/>
      <rect x="200" y="270" width="250" height="8" rx="4" fill="#A855F7" opacity="0.6"/>
      <rect x="180" y="300" width="180" height="8" rx="4" fill="#00E5FF" opacity="0.8"/>
      <rect x="180" y="330" width="100" height="8" rx="4" fill="#A855F7" opacity="0.8"/>
      <!-- Floating brackets -->
      <text x="600" y="300" font-family="monospace" font-size="80" fill="#00E5FF" opacity="0.3" font-weight="bold">}</text>
      <text x="100" y="200" font-family="monospace" font-size="80" fill="#FF007F" opacity="0.3" font-weight="bold">{</text>
      <text x="650" y="200" font-family="monospace" font-size="60" fill="#A855F7" opacity="0.5" font-weight="bold">&lt;/&gt;</text>
    </svg>
  </div>
  <style>
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  </style>
</div>
`;
data = data.replace(/<div class="spline_orb-wrapper">[\s\S]*?<\/canvas><\/div>/, laptopSvgHtml);

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Design updated!');
