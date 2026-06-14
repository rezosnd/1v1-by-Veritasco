const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// I will insert a glassmorphic 1v1 match floating card near the main text.
// Let's find "CODE BEYOND"
// Actually we can inject it right after the `<body>` or inside `.page-wrapper`.
// `data-w-id` wrappers might be easier. Let's just find the first `<div class="container-large">` in the page wrapper.

const glassmorphicBadge = `
<!-- 1V1 Glassmorphic Floating Badge -->
<div style="position: absolute; top: 20%; left: 10%; z-index: 10; padding: 15px 25px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(248, 159, 27, 0.3); border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 0 10px rgba(248, 159, 27, 0.1); animation: float-slow 6s ease-in-out infinite;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="width: 40px; height: 40px; background: radial-gradient(circle, #F89F1B, #8A4F00); border-radius: 50%; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size:12px; border:2px solid rgba(255,255,255,0.2);">P1</div>
    <div style="color: #F89F1B; font-weight: 900; font-style: italic; font-size: 24px;">VS</div>
    <div style="width: 40px; height: 40px; background: radial-gradient(circle, #2A2A35, #000); border-radius: 50%; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size:12px; border:2px solid rgba(255,255,255,0.2);">P2</div>
  </div>
  <div style="margin-top: 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; text-align: center; color: rgba(255,255,255,0.6);">Real-time Arena</div>
</div>

<!-- VeritasCo Official Tag -->
<div style="position: absolute; bottom: 20%; left: 15%; z-index: 10; padding: 10px 20px; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(10px); border-left: 3px solid #F89F1B; border-radius: 4px; animation: float-slow 8s ease-in-out infinite reverse;">
  <div style="font-size: 11px; color: #A1A1AA; letter-spacing: 1px;">Powered by</div>
  <div style="display:flex; align-items:center; gap:8px; margin-top:2px;">
    <img src="/veritasco.png" style="height: 16px; object-fit:contain;" />
    <span style="font-weight: bold; font-size: 16px; color: #FFF;">VeritasCo</span>
  </div>
</div>

<style>
@keyframes float-slow {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
</style>
`;

const insertIndex = data.indexOf('<div class="page-wrapper">') + '<div class="page-wrapper">'.length;
if (data.indexOf('<div class="page-wrapper">') !== -1) {
    data = data.substring(0, insertIndex) + glassmorphicBadge + data.substring(insertIndex);
    fs.writeFileSync('src/app/webflow_html.ts', data);
    console.log('Injected floating glassmorphic 1v1 and VeritasCo badges!');
} else {
    console.log('Could not find page-wrapper');
}

// Ensure the main text also reflects CodeDuel / 1v1
data = data.replace(/CODE BEYOND LIMITS\./g, '1V1 CODING BATTLES.');
data = data.replace(/COMPETE IN REAL-TIME\./g, 'PROVE YOUR LOGIC.');
fs.writeFileSync('src/app/webflow_html.ts', data);
