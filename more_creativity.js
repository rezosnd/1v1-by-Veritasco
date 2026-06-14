const fs = require('fs');
const file = 'src/app/webflow_html.ts';
let content = fs.readFileSync(file, 'utf8');

const creativeStyles = `
<style>
  /* Floating Background Symbols */
  .floating-symbols-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }
  .floating-symbol {
    position: absolute;
    color: rgba(171, 130, 235, 0.15);
    font-family: monospace;
    font-size: 2rem;
    font-weight: bold;
    animation: floatUp linear infinite;
  }
  @keyframes floatUp {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
  }

  /* Animated Hero Text Gradient */
  .animated-gradient-text {
    background: linear-gradient(
      to right,
      #5B76DB,
      #AB82EB,
      #F89F1B,
      #5B76DB
    );
    background-size: 300% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
  }
  @keyframes shine {
    to {
      background-position: 300% center;
    }
  }

  /* Glowing divider */
  .glow-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(171, 130, 235, 0.8) 50%, transparent 100%);
    box-shadow: 0 0 15px rgba(171, 130, 235, 0.5);
    margin: 40px 0;
  }
</style>
`;

const floatingSymbolsHTML = `
<div class="floating-symbols-container">
  <div class="floating-symbol" style="left: 10%; animation-duration: 15s; animation-delay: 0s;">{}</div>
  <div class="floating-symbol" style="left: 30%; animation-duration: 20s; animation-delay: 5s;">&lt;/&gt;</div>
  <div class="floating-symbol" style="left: 70%; animation-duration: 18s; animation-delay: 2s;">()</div>
  <div class="floating-symbol" style="left: 85%; animation-duration: 22s; animation-delay: 7s;">;</div>
  <div class="floating-symbol" style="left: 50%; animation-duration: 25s; animation-delay: 10s; font-size: 3rem;">[]</div>
  <div class="floating-symbol" style="left: 20%; animation-duration: 19s; animation-delay: 12s;">=&gt;</div>
  <div class="floating-symbol" style="left: 80%; animation-duration: 16s; animation-delay: 15s;">&amp;&amp;</div>
</div>
`;

// Inject styles right after the aurora styles
content = content.replace('</style>', creativeStyles + '\n</style>');

// Inject symbols container into the hero section
content = content.replace('<!-- Aurora Glows -->', floatingSymbolsHTML + '\n<!-- Aurora Glows -->');

// Add the animated gradient text class to the hero heading
content = content.replace(
  '<h1 letters-fade-in-delay="" text-split="" class="heading-1">',
  '<h1 letters-fade-in-delay="" text-split="" class="heading-1 animated-gradient-text">'
);

// Add glowing dividers between major sections
content = content.replace(
  '<section class="section_home-wegotyou">',
  '<div class="glow-divider"></div><section class="section_home-wegotyou">'
);
content = content.replace(
  '<section class="section_home-services">',
  '<div class="glow-divider"></div><section class="section_home-services">'
);
content = content.replace(
  '<section class="section_home-project">',
  '<div class="glow-divider"></div><section class="section_home-project">'
);

fs.writeFileSync(file, content, 'utf8');
console.log('More creativity added!');
