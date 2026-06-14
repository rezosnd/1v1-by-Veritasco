export const webflowCss = `<link href="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/css/billodesign.webflow.shared.ed7e29851.css" rel="stylesheet" type="text/css" />`;
export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;
export const webflowHtml = `
<style>
  @keyframes orbit {
    from { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle))); }
    to { transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--angle) + 360deg))); }
  }
  @keyframes hero-blur-fade {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 0.6; transform: scale(1); }
  }
  .animate-orbit {
    animation: orbit calc(var(--duration) * 1s) linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .aurora-glow {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: plus-lighter;
    filter: blur(80px);
    animation: hero-blur-fade 2s ease-out forwards;
    z-index: 0;
    pointer-events: none;
  }
  .aurora-1 { width: 400px; height: 400px; background: rgba(91, 118, 219, 0.4); top: 10%; left: 20%; }
  .aurora-2 { width: 500px; height: 500px; background: rgba(171, 130, 235, 0.3); top: 30%; right: 10%; animation-delay: 0.5s; }
  .aurora-3 { width: 300px; height: 300px; background: rgba(0, 175, 205, 0.4); bottom: 10%; left: 30%; animation-delay: 1s; }
  
  .glass-orbit-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(30, 30, 30, 0.6);
    box-shadow: inset 0.8px 0.8px 10px rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: #AB82EB;
  }
  .glass-orbit-icon svg { width: 28px; height: 28px; stroke: currentColor; }

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

</style>

<div id="startSound" data-activate-sound="" data-bgSound="" class="page-wrapper"><div class="spline_orb-wrapper"><div class="spline_orb-inner-wrap"><div class="spline_orb" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
       <spline-viewer url="https://prod.spline.design/mFnZxSV0j4KZp6WS/scene.splinecode"></spline-viewer>
     </div><div id="orbTypingHero" data-w-id="b862c286-6993-7708-9d96-2993b4a133b2" class="orb_text-box"><p id="typer-hero" class="orb_text">Hey there... Welcome to VeritasCo 1v1 👋</p></div></div></div><div class="sound_button_wrap"><div id="sound" data-w-id="3cd39303-6eec-b41b-b3a7-495cfc754662" class="sound_button"><img style="opacity:1" loading="lazy" alt="sound turned on button icon" src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907252714e095ebae57738d_SOUND.svg" class="unmute_icon"/><img style="opacity:0" loading="lazy" alt="sound turned off button icon" src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907252714e095ebae57738e_Group%2044.svg" class="mute_icon"/></div></div><main data-w-id="b1592e21-6777-9375-b286-99115c9dd8af" class="main-wrapper"><section class="section_home-hero">
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; z-index: 0;">
  
<div class="floating-symbols-container">
  <div class="floating-symbol" style="left: 10%; animation-duration: 15s; animation-delay: 0s;">{}</div>
  <div class="floating-symbol" style="left: 30%; animation-duration: 20s; animation-delay: 5s;">&lt;/&gt;</div>
  <div class="floating-symbol" style="left: 70%; animation-duration: 18s; animation-delay: 2s;">()</div>
  <div class="floating-symbol" style="left: 85%; animation-duration: 22s; animation-delay: 7s;">;</div>
  <div class="floating-symbol" style="left: 50%; animation-duration: 25s; animation-delay: 10s; font-size: 3rem;">[]</div>
  <div class="floating-symbol" style="left: 20%; animation-duration: 19s; animation-delay: 12s;">=&gt;</div>
  <div class="floating-symbol" style="left: 80%; animation-duration: 16s; animation-delay: 15s;">&amp;&amp;</div>
</div>

<!-- Aurora Glows -->
  <div class="aurora-glow aurora-1"></div>
  <div class="aurora-glow aurora-2"></div>
  <div class="aurora-glow aurora-3"></div>
  
  <!-- Orbiting Icons -->
  <div style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; transform: translate(-50%, -50%);">
    <div class="animate-orbit" style="--duration: 40; --radius: 350px; --angle: 0deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
      </div>
    </div>
    <div class="animate-orbit" style="--duration: 40; --radius: 350px; --angle: 120deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon" style="color: #AB82EB;">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      </div>
    </div>
    <div class="animate-orbit" style="--duration: 40; --radius: 350px; --angle: 240deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon" style="color: #FF5F56;">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      </div>
    </div>
    
    <!-- Outer Orbit -->
    <div class="animate-orbit" style="--duration: 60; --radius: 500px; --angle: 60deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon" style="color: #FFBD2E;">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
      </div>
    </div>
    <div class="animate-orbit" style="--duration: 60; --radius: 500px; --angle: 180deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon" style="color: #27C93F;">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
      </div>
    </div>
    <div class="animate-orbit" style="--duration: 60; --radius: 500px; --angle: 300deg; margin-top: -30px; margin-left: -30px;">
      <div class="glass-orbit-icon" style="color: #6EA8FF;">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
      </div>
    </div>
  </div>
</div>
<div class="padding-global"><div class="container-large"><div><header class="hero_home-content"><h1 letters-fade-in-delay="" text-split="" class="heading-1 animated-gradient-text">VeritasCo 1v1</h1><p letters-fade-in-random-delay="" text-split="" class="hero_home-paragraph" style="font-size:1.2em; line-height:1.5;">One Problem. Two Coders. One Winner.<br/><br/>Challenge developers worldwide in live coding battles.<br/>Solve the same problem, outthink your opponent, gain rating, unlock rewards, and climb the global rankings.<br/><br/><span style="font-size:0.7em; opacity:0.8">Trusted by Competitive Programmers, Students, and Developers</span></p><a data-click-formOpen="" data-hover="" data-w-id="a484803e-4f9b-07a3-053c-5175fa7d8223" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" href="#" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>Start Your First Duel</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a></header></div></div></div></section><div class="glow-divider"></div><section class="section_home-wegotyou"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="wegotyou_content-wrap"><div class="heading_wrap z-index-1"><div><h2 data-w-id="36c3d7f2-7ea6-9896-b06e-8ebbf1dcc401" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Value Proposition</h2><h3 scrub-each-word="" text-split="">Coding Practice Was Never This Competitive<br/><br/><span style="font-size:0.6em; line-height:1.4; display:block">Most platforms let you solve problems alone. Veritasco 1v1 lets you compete against real developers in real time.<br/><br/>Every duel tests your:<br/>• Problem Solving • Speed • Accuracy • Strategy • Consistency</span></h3></div></div>
<div class="absolute_position glass-panel" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(0, 175, 205, 0.3); border-radius: 20px; overflow: hidden; position: absolute; top: 0; left: 0; box-shadow: 0 8px 32px 0 rgba(171, 130, 235, 0.2);">
  <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(1.1);">
    <style>
      @keyframes floaty {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(1deg); }
      }
      @keyframes pulse-ring {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 25px rgba(0, 175, 205, 0.9)); }
        100% { transform: scale(0.9); opacity: 0.8; }
      }
      @keyframes drawCode {
        0% { stroke-dashoffset: 150; opacity: 0;}
        20% { opacity: 1; }
        80% { stroke-dashoffset: 0; opacity: 1;}
        100% { stroke-dashoffset: 0; opacity: 0;}
      }
    </style>
    
    <g style="animation: floaty 6s ease-in-out infinite;">
      <rect x="60" y="80" width="380" height="240" rx="16" fill="rgba(10, 10, 15, 0.7)" stroke="rgba(0, 175, 205, 0.5)" stroke-width="2" style="backdrop-filter: blur(5px);"/>
      <!-- Window controls -->
      <circle cx="85" cy="105" r="6" fill="#FF5F56"/>
      <circle cx="105" cy="105" r="6" fill="#FFBD2E"/>
      <circle cx="125" cy="105" r="6" fill="#27C93F"/>
      <line x1="60" y1="125" x2="440" y2="125" stroke="rgba(0, 175, 205, 0.3)" stroke-width="1"/>
      
      <!-- Code lines -->
      <g stroke-linecap="round" stroke-width="6">
        <path d="M85 155 L180 155" stroke="#AB82EB" stroke-dasharray="150" style="animation: drawCode 4s infinite linear;"/>
        <path d="M85 185 L320 185" stroke="#6EA8FF" stroke-dasharray="250" style="animation: drawCode 4s infinite linear 0.5s;"/>
        <path d="M110 215 L260 215" stroke="#FFFFFF" stroke-dasharray="150" style="animation: drawCode 4s infinite linear 1s; opacity: 0.7;"/>
        <path d="M110 245 L200 245" stroke="#AB82EB" stroke-dasharray="100" style="animation: drawCode 4s infinite linear 1.5s;"/>
        <path d="M85 275 L140 275" stroke="#FFBD2E" stroke-dasharray="60" style="animation: drawCode 4s infinite linear 2s;"/>
      </g>

      <!-- Rating / Score circle right side -->
      <g style="transform-origin: 350px 210px; animation: pulse-ring 3s infinite;">
        <circle cx="350" cy="210" r="45" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="8"/>
        <path d="M350 165 A 45 45 0 0 1 395 210" fill="none" stroke="#AB82EB" stroke-width="8" stroke-linecap="round"/>
        <path d="M395 210 A 45 45 0 0 1 350 255" fill="none" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round"/>
        <text x="350" y="218" fill="white" font-size="24" font-family="monospace" text-anchor="middle" font-weight="bold">VS</text>
      </g>
    </g>
  </svg>
</div>
</div></div></div></div></section><div class="glow-divider"></div><section class="section_home-services"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="content_wrapper"><div class="heading_wrap-small-width"><div><h2 data-w-id="9dd57b4a-b51b-5b87-49b5-7c8344b1c8b9" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Features</h2><div style="background: linear-gradient(to right, #5B76DB, #AB82EB); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(171, 130, 235, 0.3); display: inline-block; margin-bottom: 12px; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase;">Elite Features</div><h3>Built For Competitive Coders</h3></div><p scrub-each-word="" text-split="">Face real opponents and solve the same challenge under pressure with our AI Coding Assistant, Dynamic Rating System, and Smart Matchmaking.</p></div><div class="service_card-wrap"><div class="service_card-grid"><div data-w-id="82b43a68-3da9-2389-02ed-e46febcbf892" class="service_card"><div class="service_icon-1x1 w-embed"><svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_50_1122" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
<rect width="90" height="90" fill="url(#pattern0_50_1122)"/>
</mask>
<g mask="url(#mask0_50_1122)">
<path d="M0 0H90V90H0V0Z" fill="url(#paint0_radial_50_1122)"/>
</g>
<defs>
<pattern id="pattern0_50_1122" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_50_1122" transform="scale(0.0111111)"/>
</pattern>
<radialGradient id="paint0_radial_50_1122" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(45)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<image id="image0_50_1122" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAED0lEQVR4nO2dS4iNURzAf67HMGwMMwxKSp4LiaKEZKGUsGAhsfDMY8qzFDUbYkF5ZdRsWNBssFAWWNB4RSgreRYbDMMwjMSnU2dqmu79Xvd89zvf+f6/+jebe7/zP7++e+55/L87IAiCIAju0x8YChTSTsRVxgIXgU7AA34AzUBN2om5xFzgsxbcOx4BA9JO0AVWAr9KSO6OdWknmXV2A38DJKs4l3aiWaUvcCqE4O5QY7UQkWrgSgTJKtZGbSTvDANaI0p+CQxMO/EsMUFLiyL5t56RCCGZDXyMKPkfsCZsAwIsB35GlKxin4nGq4DtwH29AvIyFl3AqhD93BFy+tY7mkxIHg08tUCWFzPUCm5+QB/VPsXxmNe/CvQzcSdnWfJrYFJAHwcBl2JeXy23h2CABgtkeTHjATAioH+1wL2Y138DjMQQDywQ5sWIy3qh4cd44EUZw9FkDPLdAmlexDiul8x+zAI+xLy+misvxDClGssyy3rsIXsx5sqrk0jKNdENMadv3bEnqcRcEd0HaCxzSDqbZIIuiK7SR07lSDYyV3ZZdA1wu0zJD4HBSSeaVdF1wGLgeZmSX+lrJU6WRA8H9uqV7L8yBatoAyb6tFeTN9HVwCHDm13q8HVOwLh/K0+iZ+iPt2cw1PRvRcAM5oJpDzaLXhLi2D9O7Axo92ASHmwVvUAvhZNYvvuxPikPNoqu119USWxE+dXPLQL+5El0S4CwZ8Am/Tes5Ht6X7oU04BvSXqwTfRUn6mbutt29di5qw95iv1C70v78S5pD7aJbvaZKSwt8vpxwHuffnzS+9Kpe7BJdMGnBOCYz/um+IzpYUu3ciV6ps+QEXSk9KTEe9VKMgy5Er3G54A07rg+L2TbuRLdWCIXtUorhdravFnifW36sYgw5Er0kYgb8mp5fr2MxUluRR8ukUurLsdSX4jngRshDl679DMomRWtdtJOA18DOuqlHPsT9hCZqA00WSDRC4hrIcoRyvUQmSgNFGJWYXoVlhznWEpEEy7UduqBGHdyHA+5HDo+AUeBMRX2kHgDagfsJNBeYaFdwFs9A2nRdc7TDT42bJ1oV/FEdGUQ0RVCRFcIEV0hRLTroiUQ0Z6IxrlwSnQHsEGXBNTpmo0OC/JyTvSGInltsiAv50TXFsmr1jXRNjxnWFckr5EW5KVKxIxx34IObSyS12YL8rprUvQ2CzrUocfkOv1s92ZLPmlbTIpWP5T32IJOeZbFowg1IaEZJbLpLVlVqiaCurO36nHJho+tV+FQfb6jhwvjd7IgCIIgCEL2qLagyrRd/zSx32NumafJgrmw0V9dtJGCZcWPna7+h4mCiM7n0HEGhxmUUpVpz/gCnHD9y1AQBEEQBEEQBEEQBIEE+Q/Qknk8+tL2RgAAAABJRU5ErkJggg=="/>
</defs>
</svg></div><h3>Live 1v1 Battles & Smart Matchmaking</h3><p>Get paired with players close to your skill level and solve the same challenge under pressure.</p><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse2"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse1"/></div><div data-w-id="574b060d-8e30-5804-55ce-346124f0a1e7" class="service_card"><div class="service_icon-1x1 w-embed"><svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_50_1131" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
<rect width="90" height="90" fill="url(#pattern0_50_1131)"/>
</mask>
<g mask="url(#mask0_50_1131)">
<rect width="90" height="90" fill="url(#paint0_radial_50_1131)"/>
</g>
<defs>
<pattern id="pattern0_50_1131" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_50_1131" transform="scale(0.0111111)"/>
</pattern>
<radialGradient id="paint0_radial_50_1131" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(45)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<image id="image0_50_1131" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIAUlEQVR4nO1daYwVRRD+VhbwCKyLGm6VyyvgsUZjjFE5DJcCJir+UIyIcggiKBgjcgkRj8iRYFB+GEUXL6I/AMErKqxAICJsFA+u5TLKoaioHPJMmXrJy8tUTc90z87M2/mSTsi+mequmpnuqq+qGyBDhgwZMmTIkKGhogJALwCjAMwDsBJALYDtAA4BOMbtEP+tlq+Zx/fQvc3jViKJaATgJgCzAKwDcAJAzrKdYFlPs+GpjwaLS9i4PzkwrF/bB2AugCo0EJQB6A+gph6MK7XVAPrxWEoStwL4KkYDFzcayyCUEDoD+CABhpXapwAuRorRBMB0AP+EUH4ngDcAPAHgdgCXAegAoBJAY26V/Df67Q4Ak/ieuhD90RinsdxU4Xxe9YN4CcsB3Aego4P+OwEYBmBFQC9mDYDzkKK5+JChYtsBPAKgdYTjIdmPAthhOCYa+0AkHGS0kwbKfAPgbgDl9Tg2mhbuAbDFYHykwzgkEOQqTTVQ4FcAY2MOIE4BMATAAYPxzk2SG0gDWWgw6GoALZEctALwlsG4X06KsZ/1Gejf/BYnFfR2H/HRgSLY2OdkbYDbAHRF8nGpwWIZ25w9yGfh28ifZ1rQBsAmnwVyQBx+subCrWK6M204k7kQSa+D9elnk5v0pTKYzRy1pRXN+WuU9FvHUW/kmO4zJ6dputCmEW3OJlc2UnRhL0LyLoh3KBV0BfCXwo1cGGXny5WnPBSlh+GKvpQ+i4zDkDpdjNLFO4rekXghG4TODkdMCsWNVkwdSMkDp1Fjf+WpUua51DFW0b+vy45qFBauIWSYywF8J9iA/G5nq6/0NInqbCi4V7FDNxcdPK+Q9vXJJ8eNxopv/Yyt8HKuifASToRSEFwN4GcAnwOYAKCF5di6sYIbOTR+KeD9LXkcnwDYC+B9g3smCLbYYzuF9hIEHw/haTQrIqF+B/BwiFW7krntf4vG9GGAN3OmBzU60DBilHKQN8ICswShVD4QBnUespYEyD535jDfa0w/Gj4kr4V9d4BpcKXQPz280JAy2ZStDoMVgrxFhv6sxj8c9fl8TwewVrh3SgAdHhBkENEWChXKZxK2JOAFxVC3KfeV+YT/+XauImOBMg22C6BDZ0VOqCrWnkpxS1gMU4xE5bcS7jQwMrXrhfuvU+4xWQSLsUuQ1T2ELDwoCHsd4XGtj6Gu9LiHpoOthoamcgIvaGR+nxB6VAuyRoaQ9X9ht5cwKtOyyWDklHa/kDIzMbI011Yp19eFdMsmC/Jmh5Alrq5UC2eDfYrilFEvRpACyVc97p+vXP94SB0Gu/TGagVhl8MOHyuKFwcd7QLWzlEwVFwss1fxUsLWmVQpabzA2CkIs01OzgvAa08SrpMIHlqkCnGN0hcVz9gkp71kkvsZGAcFYbah80hF+aVFLt1W4U28S7ifosWmhsU9PSx0OEuQuT+MsKOCMNsM8A2K8l8UXNdduOZd9uMlGeTn5vG9EkXaEPZNlFxiYgx9tmKkrwuuWyRc0589BWl8tMPLj94db6lDU5eGjmrqIPyiUK/5qPSID0smva0UIhOeVIxxDqJ5Wfa7XAy1MNcUnwmyqZSWMMKAuFkqXEN7C6FsTHrNwfg7+LwoiXDvCC8qfIFEZp3kupI8Zgsy3mTPSKoLpHDcFk7du6gCFsJDyvx5laGPPFq4bi3z3F6/fesoay1xL0R8OfN3ybe1RS/F0NWGPEZv4bp8FsfrN3o4LjDFZQgukUq0xcwWrRVDHxNqR87w2HklyfCKJo8w1+ICi12SSlHQpIUw3bmVYx67GOXCQ5EarQuusNslTVrBi5OXQHqbbLHa0EBUaNhekCG5eF4uHYXNLtBF6OM450WdprKIwLfFQkMjPaXIWGYowyqfZ1j4GDqVBfZJvYRS7s8W4wwMtKGIuyjGHAMZ5E+fCnf4SOhnho3QnspiY1vY2NvHQHUGTOFoAxmupgxCW48yByflBo0Uop62/dqgvWKgWsN1oI8iY7NjIxMmCn3tYe7bCs8p3KvNaQBlXERTKPMPnq5Os8hI/8YnFWhTThg0VmgJ65KwfOlV0GSoKd7jRaSaiwiJ5w2Cct7bTUUxr3DRZVQHVw1V7OBsL6Xkim1pQGW7Pyhb/Zyhn/I0x6D0Md5xuYKK9UJHh7n4r1TRiud9yXV0viF/UESJzqRjiaL3LVF1uixg8UvaMSqO7W95d0rb0OkiKZAUdPPZ0HlB1AOYpjzlHSUyX7f1OW0sSJmvlatT4xPVpXnTfQVn42PfdA/mIDQ+ebVDkr0+UelzcsMBR8npQBjoczDKppRNI22VhHSOyaSb4xqcH9W5IyUnHlxhcAIkJZRjhbShqJQOr5qJBKCMjyzL+bS3E7Y5v41PMJJvC5JyHFuQAwb/BPBYzDtuy/kLO5y2AwYLMUbJQOQK2jZW1jVn7McnD1FqqwvbSQeJjcgxQCmQzBW1nbztt03E3sREhbT3cuFi8y7C+NlrDBXLcQ5yJVeCFtY325QEDOdEqskXlm81cfjJLj7VqQo3klPaLq4Gmswbc6q4+LwFR2VN+N8d+bfBfO1ipbjFzzOaksaDugvRyXDXa1yNTje4CCWEAcq5THG09VHyyUlA3wDlYFG0VVGkn5L+H95MDXAkvE3byz4xhdoNFo24CnMmM2dSYWWQdpxlzeAKIuvillJEM94DOIJr61YwE7iN/fOj3A7y3zbx1uA5fE8Pm6rODBkyZMiQIUMGpBr/AYY+kxOJargHAAAAAElFTkSuQmCC"/>
</defs>
</svg></div><h3>Dynamic Rating System & Leaderboards</h3><p>Earn rating points, prove your skill through competitive play, and compete against developers worldwide.</p><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse2"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse1"/></div><div data-w-id="e1e4db0b-23cf-1a78-5d15-3826765d8090" class="service_card"><div class="service_icon-1x1 w-embed"><svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_50_1142" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
<rect width="90" height="90" fill="url(#pattern0_50_1142)"/>
</mask>
<g mask="url(#mask0_50_1142)">
<rect width="90" height="90" fill="url(#paint0_radial_50_1142)"/>
</g>
<defs>
<pattern id="pattern0_50_1142" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_50_1142" transform="scale(0.0111111)"/>
</pattern>
<radialGradient id="paint0_radial_50_1142" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(45)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<image id="image0_50_1142" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLUlEQVR4nO2cSYhdRRSGv1YT0RCIiZrOYIM4a+KEMyJRDKI4YcxCXblQDC5EezJ0xwFRFI1jqwsFN+4FERV1ESFqHGMWCooGjAOaaGIUtDud5MiR0xAer9+7Vbfqvrqv64MfQtP3niH3VtU9daohk8lkMplMJpPJZDKZTCYTkwXAZcAa4FngHWAL8D3wBzAOTAK/288+s995EbgLuAI4otNBpMgsYAXwMPApsA+QktJ7fAk8A6wEDmYGcxrwJLA9QGLbabs98ecwQ+gBbgQ+qiC502kjsLqbn/LLbTyVRPS1JVz/87uCZcAHCSS21ROuPtZ6krsPmAiUEL3PELDYNBz43g8Ch1IzTrElWcgnb7iJneHANjYDx1MTrgR2RXjFFzWx1RvBzm4bu5Olx56wEOtgaSIdLhpZEsnWfuABEk3yWIEA9gLrgD5gKTBqP/MdOu4teK3aGDGbfeZDEbtPAQeRUJJfKBjw2ibXjzhMWMOek+FICbsvp7AE7LEvrqKvZG+TeyyO9PqHtKtPdkdZ6xjwwoomtBh2m70VlXC1x8Q32OQ+QxUkeqCJ3UHHe2is19KBdfJuj4AngX7gKGC+/XuygkRP2Z1vtgc87WrMJ1eV5EMSq1lIxdLy6+wqEn1/AsFKh6Wf61FZHrC+IDWWDjtnxUz0hwkEKYloQ6wkX5NAcJKYbojxYbJ5GmN7bT290DRY0UpCEtA3oXdqVrcwpnWDRvoTSIJUpFUhE91qh0QLNY0cWeMn9F1gj8M1m0LuVksXJ3qX1WvOP8D/lY73OPBab55uY0RLnXUbOvZZ083NwGHTxP2Lw/20RFyK2dYdVKTWu8Qmw6GEJ8Pv7ME4psBb7FLH2WF7pN6sSCA5UlJ/A68AlxSsK58H/OxhR1vRvHkkgUSJp7Qeczsw1yHem4B/PO09USbRdSsebQMe8tjJ1rXw4yVt666/F/MjbrRKQOl88BpwlefHwzzgrUAbutoJ23Xj84/Ao7bZ6ssJ1hoWyidtN3ZmTQLJlAbpG/a69fGV3TDVN+DPwP5pf7YzzyWQWDFp8/nzwImEYcihzcFFL/k4814CCRbgJ+DMQAnWj5NXI/r6ho9TWxJ5kpcHSvJSO1EQ09+PfRzb2oGuTonUT3Gh4ye1b7x6psaZHR3s6hTTueVzzK32Zvj64BLvXz4Ojjs0G8bqNjocf2YV7AdsJ5d49avSmYkEEj3Hx3Fr8d0YyAeXeHW56MzOCF2dUkGd9yLPopAEiPc3D3////IK3dUpjtK1vAt3RPDFJV6ttTjzVaTkiYPGC/ZPzI28Po5aWHozAcfFhoEzWvh5NvBtAn6KFbecCTFjh9IeG0YusJXIPFsbj5VcuoXWep9E352A41Iz3emT6EsTcFxqJi0tOzMn4U1WSVATZT6wvkggAKmJtMnIm/UJBCA1ke72eHNxAgFIN4/PU+hhxl8LNtDoKaejS5wPkYSWkv0WS6/F1m43ZluIg59jHsfCUm8JkxZS3xsZbXPNYwRgWZc3OUqDtM2ikb4215xOIN6fQYle4JhozU0wVjk2og8kkDDx1D1N4lkXq+fO9WjFiBXbFyXeTSoFNGnHQ6biGW3RsfU5kY4kdzoJkpiuJxIbEghOEtHbREQ7hf5NIEjpsLQ0exKRyUeUqebPAOlxi08SCFY6pE1lj1G40Gd/7VZmmHYCx1Ix19WkUV0Cab8d0+4It5Q48yE1W1vfRoc5znqXtzqeOJUaJPcHO9F1aqeTnMlkMplMJpPJZDKZTCZDQvwH3l3PZXG7N2cAAAAASUVORK5CYII="/>
</defs>
</svg></div><h3>AI Coding Assistant</h3><p>Receive hints, code reviews, complexity analysis, and learning recommendations.</p><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse2"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif" loading="lazy" alt="" class="elipse1"/></div></div></div><div class="shadow_title">Features</div></div></div></div></div></section><section class="section_home-tech-stack"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="content_wrapper is-center"><div class="heading_wrap-small-width"><div><h2 data-w-id="cbed7ec7-5ec6-8df2-f0e5-6db28dabdbc7" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Languages</h2><h3>Multiple Programming Languages</h3></div></div><p style="color: #fff; font-size: 1.2rem; text-align: center; max-width: 800px; margin: 2rem auto;">Compete using Python, C++, Java, JavaScript, TypeScript, or Go.</p><div data-w-id="7c221dc5-5e90-ddb1-be34-ef8a37f06949" data-is-ix2-target="1" class="tech_stack-lottie" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4c14bfb4e0d94b51e7428_tech-stack%20lottie.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="2.683333333333333" data-loading="eager"></div></div></div></div></div></section><div class="glow-divider"></div><section class="section_home-project"><div class="padding-global"><div class="container-large"><div class="padding-section-large overflow-hidden"><div id="portfolio" class="content_wrapper"><div class="heading_wrap-small-width"><div><h2 data-w-id="575f5ffa-af06-4353-f902-5eccad5fed7b" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Arena</h2><h3>Choose Your Challenge</h3></div><p scrub-each-word="" text-split="">Casual Duels, Ranked Duels, Friend Challenges, Tournament Arenas, and Community Events.</p></div><div class="shadow_title">Game Modes</div><div class="projects_wrap"><div data-delay="4000" data-animation="slide" class="projects_slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="4" data-duration="500" data-infinite="true"><div class="projects_mask w-slider-mask"><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/personal-brand-it-portfolio" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="https://fadialibrahim.com/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Casual Duel</h4><p class="slider_project-description">Practice without affecting your rating. Perfect for learning and trying new strategies.</p><div class="spacer-medium hide-mobile-landscape"></div><a href="https://billodesign.webflow.io/projects/personal-brand-it-portfolio" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="White stylized letter W on a blue square background."/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="Figma company logo consisting of overlapping colorful circles and rounded shapes."/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="Illustration of a yellow bird perched on a gray circular branch against a white background."/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/orbitai" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="https://orbitaix.webflow.io/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Ranked Duel</h4><p class="slider_project-description">Fight for rating points and leaderboard positions. Show the world what you are made of.</p><div class="spacer-medium hide-mobile-landscape"></div><a href="https://billodesign.webflow.io/projects/orbitai" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="White stylized letter W on a blue square background."/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="Figma company logo consisting of overlapping colorful circles and rounded shapes."/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="Illustration of a yellow bird perched on a gray circular branch against a white background."/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/elegantnast" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="https://elegantnast2.webflow.io/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Elegantnast </h4><p class="slider_project-description">Luxury Beauty Brand Website - Created a multilingual luxury website for Elegantnast, focusing on elegance and premium brand aesthetics.</p><div class="spacer-medium hide-mobile-landscape"></div><a href="https://billodesign.webflow.io/projects/elegantnast" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/handwerkerseiten" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="https://handwerkerseiten.at/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Handwerkerseiten.at</h4><p class="slider_project-description">Luxury Beauty Brand Website - Created a multilingual luxury website for Elegantnast, focusing on elegance and premium brand aesthetics.</p><div class="spacer-medium hide-mobile-landscape"></div><a href="https://billodesign.webflow.io/projects/handwerkerseiten" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/timms-team-landing-page" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="https://www.timms-team.de/energiesanierung" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Timms-Team </h4><p class="slider_project-description">High-Converting Landing Page designed and developed for Timms Team, a German renovation and interior construction company. </p><div class="spacer-medium hide-mobile-landscape"></div><a href="https://billodesign.webflow.io/projects/timms-team-landing-page" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><a href="https://billodesign.webflow.io/projects/macrostate-landing-page" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a><div class="slide_card-content"><a href="http://macrostate.au/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Macrostate Landing Page</h4><p class="slider_project-description">I designed and developed a high-converting solution landing page for MacroState in Webflow, showcasing their UniFi Door Access solutions...</p><div class="spacer-medium"></div><a href="https://billodesign.webflow.io/projects/macrostate-landing-page" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><div class="project_thumbnail-wrap"><a href="https://billodesign.webflow.io/projects/majer-sales---conversion-focused-webflow-website" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a></div><div class="slide_card-content"><a href="https://majer-sales.webflow.io/" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title"><strong>MAJER Sales – Conversion-Focused Webflow Website<br/></strong></h4><p class="slider_project-description">High converting landing page for MAJER Sales — licensing the “Automakler-System” (auto brokerage system) for partners in Germany.</p><div class="spacer-small"></div><a href="https://billodesign.webflow.io/projects/majer-sales---conversion-focused-webflow-website" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><div class="project_thumbnail-wrap"><a href="https://billodesign.webflow.io/projects/gwp" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a></div><div class="slide_card-content"><a href="https://www.greenwingpartnersus.com" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">GWP&#x27;S (Design, Webflow Development and SEO)</h4><p class="slider_project-description">For this project, I partnered with Bob to revolutionize the digital presence of a company specializing in commercial aerospace...</p><div class="spacer-medium"></div><a href="https://billodesign.webflow.io/projects/gwp" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20dd751135b7dd9534d_skill-icons_webflow.avif" loading="lazy" alt="webflow logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20df990d5665eaf6403_Frame%2038.avif" loading="lazy" alt="JavaScript logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><div class="project_thumbnail-wrap"><a href="https://billodesign.webflow.io/projects/flexibank---online-banking-mobile-app" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a></div><div class="slide_card-content"><a href="https://www.behance.net/gallery/222327415/FlexiBank-Online-Banking-Mobile-App" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Online Banking Mobile App</h4><p class="slider_project-description">FlexiBank is a modern mobile banking app designed to provide a seamless and secure digital banking experience....</p><div class="spacer-medium"></div><a href="https://billodesign.webflow.io/projects/flexibank---online-banking-mobile-app" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/></div></div></div></div></div><div class="project_slide w-slide"><div class="project_slide-card"><div class="slider_project-content"><div class="project_thumbnail-wrap"><a href="https://billodesign.webflow.io/projects/beelo-pure-honey" class="project_thumbnail-wrap w-inline-block">
<div class="project_thumbnail glass-panel" style="width: 100%; height: 100%; min-height: 250px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(0, 175, 205, 0.1) 0%, rgba(0,0,0,0.5) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(171, 130, 235, 0.2); border-radius: 12px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0, 175, 205, 0.1);">
  <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes slideRight {
        0% { transform: translateX(-50px); opacity: 0; }
        50% { transform: translateX(0px); opacity: 1; }
        100% { transform: translateX(50px); opacity: 0; }
      }
      @keyframes pulseLogo {
        0% { transform: scale(0.9); filter: brightness(0.8); }
        50% { transform: scale(1.1); filter: brightness(1.2) drop-shadow(0 0 10px #AB82EB); }
        100% { transform: scale(0.9); filter: brightness(0.8); }
      }
      .grid-line { stroke: rgba(255, 255, 255, 0.03); stroke-width: 1; }
    </style>
    
    <!-- Background Grid -->
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" class="grid-line"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    <!-- Glowing orb in background -->
    <circle cx="150" cy="100" r="60" fill="rgba(0, 175, 205, 0.1)" filter="blur(20px)" style="animation: pulseLogo 4s infinite alternate;"/>
    
    <!-- Code Bracket Icon -->
    <g style="transform-origin: 150px 100px; animation: pulseLogo 3s infinite ease-in-out;">
      <path d="M120 70 L90 100 L120 130" stroke="#AB82EB" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 70 L210 100 L180 130" stroke="#6EA8FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M160 60 L140 140" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Animated Data Streams -->
    <path d="M0 160 L300 160" stroke="rgba(0, 175, 205, 0.3)" stroke-width="2" stroke-dasharray="10 20" style="animation: slideRight 3s infinite linear;"/>
    <path d="M0 40 L300 40" stroke="rgba(110, 168, 255, 0.3)" stroke-width="2" stroke-dasharray="15 25" style="animation: slideRight 4s infinite linear reverse;"/>
  </svg>
</div>
</a></div><div class="slide_card-content"><a href="https://www.behance.net/gallery/220741841/Beelo-Honey" class="visit_roject-link w-inline-block"><div>Visit Site</div><div class="link_arrow"><div class="code-embed w-embed"><svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor"/>
<path d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z" fill="currentColor" fill-opacity="0.6"/>
</svg></div></div></a><h4 class="slider_project-title">Beelo Pure Honey</h4><p class="slider_project-description">Beelo Honey is a modern, visually engaging e-commerce website designed to showcase the purity and quality of organic honey products...</p><div class="spacer-medium"></div><a href="https://billodesign.webflow.io/projects/beelo-pure-honey" class="button is-icon w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>View Project</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="tech_used"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4d20d578a1e6baf84978a_logos_figma.avif" loading="lazy" alt="figma logo"/></div></div></div></div></div></div><div class="arrow is-left w-slider-arrow-left"><div class="project_arrow-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"/>
</svg></div></div><div class="arrow w-slider-arrow-right"><div class="project_arrow-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"/>
</svg></div></div><div class="slide_nav w-slider-nav"></div></div></div></div></div></div></div></section><section class="section_home-testimoinal"><div class="padding-global"><div class="container-large"><div class="padding-section-large overflow-hidden"><div class="content_wrapper is-center"><div class="heading_wrap-small-width"><div><h2 data-w-id="c16348b4-2974-9bac-6ca7-7d10abb5b7d5" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Testimonial</h2><div style="background: linear-gradient(to right, #5B76DB, #AB82EB); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(171, 130, 235, 0.3); display: inline-block; margin-bottom: 12px; font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase;">Testimonials</div><h3>What Coders Say</h3></div></div><div class="testimonial_slide-wrap"><div data-delay="4000" data-animation="slide" class="testimonial_slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="4" data-duration="500" data-infinite="true"><div class="testimonial_mask w-slider-mask"><div class="testimonial_slide w-slide"><div class="testimonial_slide-card"><div class="slider_project-content"><div class="testimonial_star w-embed"><svg width="100%" height="100%" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6623 18.9562L8.28324 21.5942C8.08979 21.7173 7.88754 21.77 7.6765 21.7524C7.46546 21.7348 7.2808 21.6645 7.12252 21.5414C6.96425 21.4183 6.84114 21.2646 6.75321 21.0803C6.66527 20.896 6.64769 20.6892 6.70045 20.4598L7.86116 15.474L3.98332 12.1238C3.80745 11.9655 3.69771 11.7851 3.6541 11.5825C3.61049 11.3799 3.6235 11.1822 3.69314 10.9894C3.76278 10.7967 3.8683 10.6384 4.0097 10.5146C4.1511 10.3908 4.34455 10.3117 4.59006 10.2772L9.70775 9.82873L11.6862 5.13312C11.7742 4.92208 11.9106 4.7638 12.0957 4.65828C12.2807 4.55276 12.4695 4.5 12.6623 4.5C12.855 4.5 13.0439 4.55276 13.2289 4.65828C13.4139 4.7638 13.5504 4.92208 13.6384 5.13312L15.6168 9.82873L20.7345 10.2772C20.9807 10.3124 21.1742 10.3915 21.3149 10.5146C21.4556 10.6377 21.5611 10.796 21.6315 10.9894C21.7018 11.1829 21.7152 11.3809 21.6715 11.5835C21.6279 11.7861 21.5178 11.9662 21.3413 12.1238L17.4634 15.474L18.6241 20.4598C18.6769 20.6884 18.6593 20.8953 18.5714 21.0803C18.4835 21.2653 18.3603 21.419 18.2021 21.5414C18.0438 21.6638 17.8591 21.7341 17.6481 21.7524C17.4371 21.7707 17.2348 21.718 17.0414 21.5942L12.6623 18.9562Z" fill="#AB82EB"/>
<path d="M38.8303 18.9562L34.4512 21.5942C34.2578 21.7173 34.0555 21.77 33.8445 21.7524C33.6334 21.7348 33.4488 21.6645 33.2905 21.5414C33.1322 21.4183 33.0091 21.2646 32.9212 21.0803C32.8332 20.896 32.8157 20.6892 32.8684 20.4598L34.0291 15.474L30.1513 12.1238C29.9754 11.9655 29.8657 11.7851 29.8221 11.5825C29.7785 11.3799 29.7915 11.1822 29.8611 10.9894C29.9308 10.7967 30.0363 10.6384 30.1777 10.5146C30.3191 10.3908 30.5125 10.3117 30.758 10.2772L35.8757 9.82873L37.8542 5.13312C37.9421 4.92208 38.0786 4.7638 38.2636 4.65828C38.4486 4.55276 38.6375 4.5 38.8303 4.5C39.023 4.5 39.2119 4.55276 39.3969 4.65828C39.5819 4.7638 39.7184 4.92208 39.8063 5.13312L41.7848 9.82873L46.9025 10.2772C47.1487 10.3124 47.3422 10.3915 47.4829 10.5146C47.6236 10.6377 47.7291 10.796 47.7994 10.9894C47.8698 11.1829 47.8831 11.3809 47.8395 11.5835C47.7959 11.7861 47.6858 11.9662 47.5092 12.1238L43.6314 15.474L44.7921 20.4598C44.8449 20.6884 44.8273 20.8953 44.7394 21.0803C44.6514 21.2653 44.5283 21.419 44.37 21.5414C44.2118 21.6638 44.0271 21.7341 43.8161 21.7524C43.605 21.7707 43.4028 21.718 43.2093 21.5942L38.8303 18.9562Z" fill="#AB82EB"/>
<path d="M65.0002 18.9562L60.6211 21.5942C60.4277 21.7173 60.2254 21.77 60.0144 21.7524C59.8034 21.7348 59.6187 21.6645 59.4604 21.5414C59.3021 21.4183 59.179 21.2646 59.0911 21.0803C59.0032 20.896 58.9856 20.6892 59.0383 20.4598L60.1991 15.474L56.3212 12.1238C56.1453 11.9655 56.0356 11.7851 55.992 11.5825C55.9484 11.3799 55.9614 11.1822 56.031 10.9894C56.1007 10.7967 56.2062 10.6384 56.3476 10.5146C56.489 10.3908 56.6824 10.3117 56.9279 10.2772L62.0456 9.82873L64.0241 5.13312C64.1121 4.92208 64.2485 4.7638 64.4335 4.65828C64.6186 4.55276 64.8074 4.5 65.0002 4.5C65.1929 4.5 65.3818 4.55276 65.5668 4.65828C65.7518 4.7638 65.8883 4.92208 65.9762 5.13312L67.9547 9.82873L73.0724 10.2772C73.3186 10.3124 73.5121 10.3915 73.6528 10.5146C73.7935 10.6377 73.899 10.796 73.9693 10.9894C74.0397 11.1829 74.0531 11.3809 74.0094 11.5835C73.9658 11.7861 73.8557 11.9662 73.6792 12.1238L69.8013 15.474L70.962 20.4598C71.0148 20.6884 70.9972 20.8953 70.9093 21.0803C70.8213 21.2653 70.6982 21.419 70.54 21.5414C70.3817 21.6638 70.197 21.7341 69.986 21.7524C69.7749 21.7707 69.5727 21.718 69.3792 21.5942L65.0002 18.9562Z" fill="#AB82EB"/>
<path d="M91.1682 18.9562L86.7891 21.5942C86.5956 21.7173 86.3934 21.77 86.1824 21.7524C85.9713 21.7348 85.7867 21.6645 85.6284 21.5414C85.4701 21.4183 85.347 21.2646 85.2591 21.0803C85.1711 20.896 85.1535 20.6892 85.2063 20.4598L86.367 15.474L82.4892 12.1238C82.3133 11.9655 82.2036 11.7851 82.16 11.5825C82.1163 11.3799 82.1294 11.1822 82.199 10.9894C82.2686 10.7967 82.3742 10.6384 82.5156 10.5146C82.657 10.3908 82.8504 10.3117 83.0959 10.2772L88.2136 9.82873L90.1921 5.13312C90.28 4.92208 90.4165 4.7638 90.6015 4.65828C90.7865 4.55276 90.9754 4.5 91.1682 4.5C91.3609 4.5 91.5498 4.55276 91.7348 4.65828C91.9198 4.7638 92.0563 4.92208 92.1442 5.13312L94.1227 9.82873L99.2404 10.2772C99.4866 10.3124 99.6801 10.3915 99.8208 10.5146C99.9614 10.6377 100.067 10.796 100.137 10.9894C100.208 11.1829 100.221 11.3809 100.177 11.5835C100.134 11.7861 100.024 11.9662 99.8471 12.1238L95.9693 15.474L97.13 20.4598C97.1828 20.6884 97.1652 20.8953 97.0772 21.0803C96.9893 21.2653 96.8662 21.419 96.7079 21.5414C96.5496 21.6638 96.365 21.7341 96.154 21.7524C95.9429 21.7707 95.7407 21.718 95.5472 21.5942L91.1682 18.9562Z" fill="#AB82EB"/>
<path d="M117.338 18.9562L112.959 21.5942C112.766 21.7173 112.563 21.77 112.352 21.7524C112.141 21.7348 111.957 21.6645 111.798 21.5414C111.64 21.4183 111.517 21.2646 111.429 21.0803C111.341 20.896 111.323 20.6892 111.376 20.4598L112.537 15.474L108.659 12.1238C108.483 11.9655 108.373 11.7851 108.33 11.5825C108.286 11.3799 108.299 11.1822 108.369 10.9894C108.439 10.7967 108.544 10.6384 108.685 10.5146C108.827 10.3908 109.02 10.3117 109.266 10.2772L114.384 9.82873L116.362 5.13312C116.45 4.92208 116.586 4.7638 116.771 4.65828C116.956 4.55276 117.145 4.5 117.338 4.5C117.531 4.5 117.72 4.55276 117.905 4.65828C118.09 4.7638 118.226 4.92208 118.314 5.13312L120.293 9.82873L125.41 10.2772C125.657 10.3124 125.85 10.3915 125.991 10.5146C126.131 10.6377 126.237 10.796 126.307 10.9894C126.378 11.1829 126.391 11.3809 126.347 11.5835C126.304 11.7861 126.194 11.9662 126.017 12.1238L122.139 15.474L123.3 20.4598C123.353 20.6884 123.335 20.8953 123.247 21.0803C123.159 21.2653 123.036 21.419 122.878 21.5414C122.72 21.6638 122.535 21.7341 122.324 21.7524C122.113 21.7707 121.911 21.718 121.717 21.5942L117.338 18.9562Z" fill="#AB82EB"/>
</svg></div><div class="testimonial_card-content"><p class="slider_testimonial-text">&quot;He is a very quick study and is very creative across many different skill sets which we used for this project. I would highly recommend VeritasCo 1v1 Team to anyone needing his services. He was joy to work with, was detailed oriented and always able to make excellent recommendations.&quot;</p><div class="avatar_detail-wrap">
<div class="testimonial_avatar" style="width: 79px; height: 79px; border-radius: 50%; background: linear-gradient(135deg, rgba(171, 130, 235, 0.2), rgba(0,0,0,0.8)); display: flex; align-items: center; justify-content: center; border: 2px solid rgba(0, 175, 205, 0.5); box-shadow: 0 0 15px rgba(0, 175, 205, 0.3);">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AB82EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
</div>
<div><h4>AlgorithmKing</h4><div>Grandmaster</div></div></div></div></div></div></div><div class="testimonial_slide w-slide"><div class="testimonial_slide-card"><div class="slider_project-content"><div class="testimonial_star w-embed"><svg width="100%" height="100%" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6623 18.9562L8.28324 21.5942C8.08979 21.7173 7.88754 21.77 7.6765 21.7524C7.46546 21.7348 7.2808 21.6645 7.12252 21.5414C6.96425 21.4183 6.84114 21.2646 6.75321 21.0803C6.66527 20.896 6.64769 20.6892 6.70045 20.4598L7.86116 15.474L3.98332 12.1238C3.80745 11.9655 3.69771 11.7851 3.6541 11.5825C3.61049 11.3799 3.6235 11.1822 3.69314 10.9894C3.76278 10.7967 3.8683 10.6384 4.0097 10.5146C4.1511 10.3908 4.34455 10.3117 4.59006 10.2772L9.70775 9.82873L11.6862 5.13312C11.7742 4.92208 11.9106 4.7638 12.0957 4.65828C12.2807 4.55276 12.4695 4.5 12.6623 4.5C12.855 4.5 13.0439 4.55276 13.2289 4.65828C13.4139 4.7638 13.5504 4.92208 13.6384 5.13312L15.6168 9.82873L20.7345 10.2772C20.9807 10.3124 21.1742 10.3915 21.3149 10.5146C21.4556 10.6377 21.5611 10.796 21.6315 10.9894C21.7018 11.1829 21.7152 11.3809 21.6715 11.5835C21.6279 11.7861 21.5178 11.9662 21.3413 12.1238L17.4634 15.474L18.6241 20.4598C18.6769 20.6884 18.6593 20.8953 18.5714 21.0803C18.4835 21.2653 18.3603 21.419 18.2021 21.5414C18.0438 21.6638 17.8591 21.7341 17.6481 21.7524C17.4371 21.7707 17.2348 21.718 17.0414 21.5942L12.6623 18.9562Z" fill="#AB82EB"/>
<path d="M38.8303 18.9562L34.4512 21.5942C34.2578 21.7173 34.0555 21.77 33.8445 21.7524C33.6334 21.7348 33.4488 21.6645 33.2905 21.5414C33.1322 21.4183 33.0091 21.2646 32.9212 21.0803C32.8332 20.896 32.8157 20.6892 32.8684 20.4598L34.0291 15.474L30.1513 12.1238C29.9754 11.9655 29.8657 11.7851 29.8221 11.5825C29.7785 11.3799 29.7915 11.1822 29.8611 10.9894C29.9308 10.7967 30.0363 10.6384 30.1777 10.5146C30.3191 10.3908 30.5125 10.3117 30.758 10.2772L35.8757 9.82873L37.8542 5.13312C37.9421 4.92208 38.0786 4.7638 38.2636 4.65828C38.4486 4.55276 38.6375 4.5 38.8303 4.5C39.023 4.5 39.2119 4.55276 39.3969 4.65828C39.5819 4.7638 39.7184 4.92208 39.8063 5.13312L41.7848 9.82873L46.9025 10.2772C47.1487 10.3124 47.3422 10.3915 47.4829 10.5146C47.6236 10.6377 47.7291 10.796 47.7994 10.9894C47.8698 11.1829 47.8831 11.3809 47.8395 11.5835C47.7959 11.7861 47.6858 11.9662 47.5092 12.1238L43.6314 15.474L44.7921 20.4598C44.8449 20.6884 44.8273 20.8953 44.7394 21.0803C44.6514 21.2653 44.5283 21.419 44.37 21.5414C44.2118 21.6638 44.0271 21.7341 43.8161 21.7524C43.605 21.7707 43.4028 21.718 43.2093 21.5942L38.8303 18.9562Z" fill="#AB82EB"/>
<path d="M65.0002 18.9562L60.6211 21.5942C60.4277 21.7173 60.2254 21.77 60.0144 21.7524C59.8034 21.7348 59.6187 21.6645 59.4604 21.5414C59.3021 21.4183 59.179 21.2646 59.0911 21.0803C59.0032 20.896 58.9856 20.6892 59.0383 20.4598L60.1991 15.474L56.3212 12.1238C56.1453 11.9655 56.0356 11.7851 55.992 11.5825C55.9484 11.3799 55.9614 11.1822 56.031 10.9894C56.1007 10.7967 56.2062 10.6384 56.3476 10.5146C56.489 10.3908 56.6824 10.3117 56.9279 10.2772L62.0456 9.82873L64.0241 5.13312C64.1121 4.92208 64.2485 4.7638 64.4335 4.65828C64.6186 4.55276 64.8074 4.5 65.0002 4.5C65.1929 4.5 65.3818 4.55276 65.5668 4.65828C65.7518 4.7638 65.8883 4.92208 65.9762 5.13312L67.9547 9.82873L73.0724 10.2772C73.3186 10.3124 73.5121 10.3915 73.6528 10.5146C73.7935 10.6377 73.899 10.796 73.9693 10.9894C74.0397 11.1829 74.0531 11.3809 74.0094 11.5835C73.9658 11.7861 73.8557 11.9662 73.6792 12.1238L69.8013 15.474L70.962 20.4598C71.0148 20.6884 70.9972 20.8953 70.9093 21.0803C70.8213 21.2653 70.6982 21.419 70.54 21.5414C70.3817 21.6638 70.197 21.7341 69.986 21.7524C69.7749 21.7707 69.5727 21.718 69.3792 21.5942L65.0002 18.9562Z" fill="#AB82EB"/>
<path d="M91.1682 18.9562L86.7891 21.5942C86.5956 21.7173 86.3934 21.77 86.1824 21.7524C85.9713 21.7348 85.7867 21.6645 85.6284 21.5414C85.4701 21.4183 85.347 21.2646 85.2591 21.0803C85.1711 20.896 85.1535 20.6892 85.2063 20.4598L86.367 15.474L82.4892 12.1238C82.3133 11.9655 82.2036 11.7851 82.16 11.5825C82.1163 11.3799 82.1294 11.1822 82.199 10.9894C82.2686 10.7967 82.3742 10.6384 82.5156 10.5146C82.657 10.3908 82.8504 10.3117 83.0959 10.2772L88.2136 9.82873L90.1921 5.13312C90.28 4.92208 90.4165 4.7638 90.6015 4.65828C90.7865 4.55276 90.9754 4.5 91.1682 4.5C91.3609 4.5 91.5498 4.55276 91.7348 4.65828C91.9198 4.7638 92.0563 4.92208 92.1442 5.13312L94.1227 9.82873L99.2404 10.2772C99.4866 10.3124 99.6801 10.3915 99.8208 10.5146C99.9614 10.6377 100.067 10.796 100.137 10.9894C100.208 11.1829 100.221 11.3809 100.177 11.5835C100.134 11.7861 100.024 11.9662 99.8471 12.1238L95.9693 15.474L97.13 20.4598C97.1828 20.6884 97.1652 20.8953 97.0772 21.0803C96.9893 21.2653 96.8662 21.419 96.7079 21.5414C96.5496 21.6638 96.365 21.7341 96.154 21.7524C95.9429 21.7707 95.7407 21.718 95.5472 21.5942L91.1682 18.9562Z" fill="#AB82EB"/>
<path d="M117.338 18.9562L112.959 21.5942C112.766 21.7173 112.563 21.77 112.352 21.7524C112.141 21.7348 111.957 21.6645 111.798 21.5414C111.64 21.4183 111.517 21.2646 111.429 21.0803C111.341 20.896 111.323 20.6892 111.376 20.4598L112.537 15.474L108.659 12.1238C108.483 11.9655 108.373 11.7851 108.33 11.5825C108.286 11.3799 108.299 11.1822 108.369 10.9894C108.439 10.7967 108.544 10.6384 108.685 10.5146C108.827 10.3908 109.02 10.3117 109.266 10.2772L114.384 9.82873L116.362 5.13312C116.45 4.92208 116.586 4.7638 116.771 4.65828C116.956 4.55276 117.145 4.5 117.338 4.5C117.531 4.5 117.72 4.55276 117.905 4.65828C118.09 4.7638 118.226 4.92208 118.314 5.13312L120.293 9.82873L125.41 10.2772C125.657 10.3124 125.85 10.3915 125.991 10.5146C126.131 10.6377 126.237 10.796 126.307 10.9894C126.378 11.1829 126.391 11.3809 126.347 11.5835C126.304 11.7861 126.194 11.9662 126.017 12.1238L122.139 15.474L123.3 20.4598C123.353 20.6884 123.335 20.8953 123.247 21.0803C123.159 21.2653 123.036 21.419 122.878 21.5414C122.72 21.6638 122.535 21.7341 122.324 21.7524C122.113 21.7707 121.911 21.718 121.717 21.5942L117.338 18.9562Z" fill="#AB82EB"/>
</svg></div><div class="testimonial_card-content"><p class="slider_testimonial-text">&quot;VeritasCo 1v1 Team did an awesome job. He was proactive with his communication, gave additional tips on SEO, and completed the task as expected. Great choice if you&#x27;re looking to get your SEO up an running&quot;</p><div class="avatar_detail-wrap">
<div class="testimonial_avatar" style="width: 79px; height: 79px; border-radius: 50%; background: linear-gradient(135deg, rgba(171, 130, 235, 0.2), rgba(0,0,0,0.8)); display: flex; align-items: center; justify-content: center; border: 2px solid rgba(0, 175, 205, 0.5); box-shadow: 0 0 15px rgba(0, 175, 205, 0.3);">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AB82EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
</div>
<div><h4>GraphWizard</h4><div>Diamond</div></div></div></div></div></div></div><div class="testimonial_slide w-slide"><div class="testimonial_slide-card"><div class="slider_project-content"><div class="testimonial_star w-embed"><svg width="100%" height="100%" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6623 18.9562L8.28324 21.5942C8.08979 21.7173 7.88754 21.77 7.6765 21.7524C7.46546 21.7348 7.2808 21.6645 7.12252 21.5414C6.96425 21.4183 6.84114 21.2646 6.75321 21.0803C6.66527 20.896 6.64769 20.6892 6.70045 20.4598L7.86116 15.474L3.98332 12.1238C3.80745 11.9655 3.69771 11.7851 3.6541 11.5825C3.61049 11.3799 3.6235 11.1822 3.69314 10.9894C3.76278 10.7967 3.8683 10.6384 4.0097 10.5146C4.1511 10.3908 4.34455 10.3117 4.59006 10.2772L9.70775 9.82873L11.6862 5.13312C11.7742 4.92208 11.9106 4.7638 12.0957 4.65828C12.2807 4.55276 12.4695 4.5 12.6623 4.5C12.855 4.5 13.0439 4.55276 13.2289 4.65828C13.4139 4.7638 13.5504 4.92208 13.6384 5.13312L15.6168 9.82873L20.7345 10.2772C20.9807 10.3124 21.1742 10.3915 21.3149 10.5146C21.4556 10.6377 21.5611 10.796 21.6315 10.9894C21.7018 11.1829 21.7152 11.3809 21.6715 11.5835C21.6279 11.7861 21.5178 11.9662 21.3413 12.1238L17.4634 15.474L18.6241 20.4598C18.6769 20.6884 18.6593 20.8953 18.5714 21.0803C18.4835 21.2653 18.3603 21.419 18.2021 21.5414C18.0438 21.6638 17.8591 21.7341 17.6481 21.7524C17.4371 21.7707 17.2348 21.718 17.0414 21.5942L12.6623 18.9562Z" fill="#AB82EB"/>
<path d="M38.8303 18.9562L34.4512 21.5942C34.2578 21.7173 34.0555 21.77 33.8445 21.7524C33.6334 21.7348 33.4488 21.6645 33.2905 21.5414C33.1322 21.4183 33.0091 21.2646 32.9212 21.0803C32.8332 20.896 32.8157 20.6892 32.8684 20.4598L34.0291 15.474L30.1513 12.1238C29.9754 11.9655 29.8657 11.7851 29.8221 11.5825C29.7785 11.3799 29.7915 11.1822 29.8611 10.9894C29.9308 10.7967 30.0363 10.6384 30.1777 10.5146C30.3191 10.3908 30.5125 10.3117 30.758 10.2772L35.8757 9.82873L37.8542 5.13312C37.9421 4.92208 38.0786 4.7638 38.2636 4.65828C38.4486 4.55276 38.6375 4.5 38.8303 4.5C39.023 4.5 39.2119 4.55276 39.3969 4.65828C39.5819 4.7638 39.7184 4.92208 39.8063 5.13312L41.7848 9.82873L46.9025 10.2772C47.1487 10.3124 47.3422 10.3915 47.4829 10.5146C47.6236 10.6377 47.7291 10.796 47.7994 10.9894C47.8698 11.1829 47.8831 11.3809 47.8395 11.5835C47.7959 11.7861 47.6858 11.9662 47.5092 12.1238L43.6314 15.474L44.7921 20.4598C44.8449 20.6884 44.8273 20.8953 44.7394 21.0803C44.6514 21.2653 44.5283 21.419 44.37 21.5414C44.2118 21.6638 44.0271 21.7341 43.8161 21.7524C43.605 21.7707 43.4028 21.718 43.2093 21.5942L38.8303 18.9562Z" fill="#AB82EB"/>
<path d="M65.0002 18.9562L60.6211 21.5942C60.4277 21.7173 60.2254 21.77 60.0144 21.7524C59.8034 21.7348 59.6187 21.6645 59.4604 21.5414C59.3021 21.4183 59.179 21.2646 59.0911 21.0803C59.0032 20.896 58.9856 20.6892 59.0383 20.4598L60.1991 15.474L56.3212 12.1238C56.1453 11.9655 56.0356 11.7851 55.992 11.5825C55.9484 11.3799 55.9614 11.1822 56.031 10.9894C56.1007 10.7967 56.2062 10.6384 56.3476 10.5146C56.489 10.3908 56.6824 10.3117 56.9279 10.2772L62.0456 9.82873L64.0241 5.13312C64.1121 4.92208 64.2485 4.7638 64.4335 4.65828C64.6186 4.55276 64.8074 4.5 65.0002 4.5C65.1929 4.5 65.3818 4.55276 65.5668 4.65828C65.7518 4.7638 65.8883 4.92208 65.9762 5.13312L67.9547 9.82873L73.0724 10.2772C73.3186 10.3124 73.5121 10.3915 73.6528 10.5146C73.7935 10.6377 73.899 10.796 73.9693 10.9894C74.0397 11.1829 74.0531 11.3809 74.0094 11.5835C73.9658 11.7861 73.8557 11.9662 73.6792 12.1238L69.8013 15.474L70.962 20.4598C71.0148 20.6884 70.9972 20.8953 70.9093 21.0803C70.8213 21.2653 70.6982 21.419 70.54 21.5414C70.3817 21.6638 70.197 21.7341 69.986 21.7524C69.7749 21.7707 69.5727 21.718 69.3792 21.5942L65.0002 18.9562Z" fill="#AB82EB"/>
<path d="M91.1682 18.9562L86.7891 21.5942C86.5956 21.7173 86.3934 21.77 86.1824 21.7524C85.9713 21.7348 85.7867 21.6645 85.6284 21.5414C85.4701 21.4183 85.347 21.2646 85.2591 21.0803C85.1711 20.896 85.1535 20.6892 85.2063 20.4598L86.367 15.474L82.4892 12.1238C82.3133 11.9655 82.2036 11.7851 82.16 11.5825C82.1163 11.3799 82.1294 11.1822 82.199 10.9894C82.2686 10.7967 82.3742 10.6384 82.5156 10.5146C82.657 10.3908 82.8504 10.3117 83.0959 10.2772L88.2136 9.82873L90.1921 5.13312C90.28 4.92208 90.4165 4.7638 90.6015 4.65828C90.7865 4.55276 90.9754 4.5 91.1682 4.5C91.3609 4.5 91.5498 4.55276 91.7348 4.65828C91.9198 4.7638 92.0563 4.92208 92.1442 5.13312L94.1227 9.82873L99.2404 10.2772C99.4866 10.3124 99.6801 10.3915 99.8208 10.5146C99.9614 10.6377 100.067 10.796 100.137 10.9894C100.208 11.1829 100.221 11.3809 100.177 11.5835C100.134 11.7861 100.024 11.9662 99.8471 12.1238L95.9693 15.474L97.13 20.4598C97.1828 20.6884 97.1652 20.8953 97.0772 21.0803C96.9893 21.2653 96.8662 21.419 96.7079 21.5414C96.5496 21.6638 96.365 21.7341 96.154 21.7524C95.9429 21.7707 95.7407 21.718 95.5472 21.5942L91.1682 18.9562Z" fill="#AB82EB"/>
<path d="M117.338 18.9562L112.959 21.5942C112.766 21.7173 112.563 21.77 112.352 21.7524C112.141 21.7348 111.957 21.6645 111.798 21.5414C111.64 21.4183 111.517 21.2646 111.429 21.0803C111.341 20.896 111.323 20.6892 111.376 20.4598L112.537 15.474L108.659 12.1238C108.483 11.9655 108.373 11.7851 108.33 11.5825C108.286 11.3799 108.299 11.1822 108.369 10.9894C108.439 10.7967 108.544 10.6384 108.685 10.5146C108.827 10.3908 109.02 10.3117 109.266 10.2772L114.384 9.82873L116.362 5.13312C116.45 4.92208 116.586 4.7638 116.771 4.65828C116.956 4.55276 117.145 4.5 117.338 4.5C117.531 4.5 117.72 4.55276 117.905 4.65828C118.09 4.7638 118.226 4.92208 118.314 5.13312L120.293 9.82873L125.41 10.2772C125.657 10.3124 125.85 10.3915 125.991 10.5146C126.131 10.6377 126.237 10.796 126.307 10.9894C126.378 11.1829 126.391 11.3809 126.347 11.5835C126.304 11.7861 126.194 11.9662 126.017 12.1238L122.139 15.474L123.3 20.4598C123.353 20.6884 123.335 20.8953 123.247 21.0803C123.159 21.2653 123.036 21.419 122.878 21.5414C122.72 21.6638 122.535 21.7341 122.324 21.7524C122.113 21.7707 121.911 21.718 121.717 21.5942L117.338 18.9562Z" fill="#AB82EB"/>
</svg></div><div class="testimonial_card-content"><p class="slider_testimonial-text">&quot;Amazing to work with VeritasCo 1v1 Team, next project is already in line&quot;<br/>&quot;thanks! It looks very good! You are the best, I am happy to work with you again!&quot;</p><div class="avatar_detail-wrap">
<div class="testimonial_avatar" style="width: 79px; height: 79px; border-radius: 50%; background: linear-gradient(135deg, rgba(171, 130, 235, 0.2), rgba(0,0,0,0.8)); display: flex; align-items: center; justify-content: center; border: 2px solid rgba(0, 175, 205, 0.5); box-shadow: 0 0 15px rgba(0, 175, 205, 0.3);">
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AB82EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
</div>
<div><h4>BinaryHunter</h4><div>Platinum</div></div></div></div></div></div></div></div><div class="arrow is-left w-slider-arrow-left"><div class="project_arrow-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"/>
</svg></div></div><div class="arrow w-slider-arrow-right"><div class="project_arrow-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"/>
</svg></div></div><div class="slide_nav w-slider-nav"></div></div></div></div></div></div></div></section><section class="section_home-bio"><div class="padding-global"><div class="container-large"><div id="about-me" class="padding-section-large"><div class="bio_grid"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f50f18c06e2f9d99e2ad06_Rectangle%205%20(1).avif" loading="lazy" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" data-w-id="91614232-9c86-1729-bb95-790e8d002e8d" alt="Portrait of a confident man with arms crossed, wearing a black t-shirt, on a dark abstract background."/><div class="bio_content-wrapper"><div class="heading_wrap-small-width"><div><h2 data-w-id="d01320b9-9a4c-58b2-682b-0bf1900a7ac3" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0">Pricing</h2><h3>Free Forever or Premium</h3></div></div><h4>Hey, I’m VeritasCo 1v1 Team.</h4><p scrub-each-word="" text-split="" class="paragraph_small">I&#x27;m a Web designer and Webflow Certified Partner  obsessed with blending design, code, and intelligence. Whether you&#x27;re building a brand or reinventing a platform, I help you craft digital experiences that work hard — and look alive.</p><div class="contact_email-wrap"><div class="email_icon w-embed"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_50_1264" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<path d="M31.5 6.75H4.5C3.90326 6.75 3.33097 6.98705 2.90901 7.40901C2.48705 7.83097 2.25 8.40326 2.25 9V27C2.25 27.5967 2.48705 28.169 2.90901 28.591C3.33097 29.0129 3.90326 29.25 4.5 29.25H31.5C32.0967 29.25 32.669 29.0129 33.091 28.591C33.5129 28.169 33.75 27.5967 33.75 27V9C33.75 8.40326 33.5129 7.83097 33.091 7.40901C32.669 6.98705 32.0967 6.75 31.5 6.75ZM31.5 13.5L18 20.25L4.5 13.5V9L18 15.75L31.5 9V13.5Z" fill="#42A5F5"/>
</mask>
<g mask="url(#mask0_50_1264)">
<rect width="36" height="36" fill="url(#paint0_radial_50_1264)"/>
</g>
<defs>
<radialGradient id="paint0_radial_50_1264" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18 18) rotate(90) scale(18)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
</defs>
</svg></div><h5 class="email_address">hello@veritasco.com</h5></div></div></div></div></div></div></section><section class="section_home-cta"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div id="contact" class="content_wrapper is-center"><div class="heading_wrap"><h3 letters-fade-in="" text-split="">Ready To Prove Your Skill?</h3><p scrub-each-word="" text-split="">Join thousands of developers competing in live coding battles. Challenge. Compete. Improve. Win.</p></div><a data-click-formOpen="" data-click="" data-hover="" data-w-id="a156b916-8f9c-16b9-3aec-f1299b9287cb" style="-webkit-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0" href="#" class="button is-icon open-modal w-inline-block"><div class="pulse_dot-parent"><div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1" class="pulse_dot-back"></div><div class="pulse_dot-front"></div></div><div>Start Battling Now</div><div class="icon-1x1-small hide w-embed"><svg aria-hidden="true" fill='currentColor' role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div></a><div class="social_icons-wrap"><a href="https://www.behance.net/muhammadsalman201" class="w-inline-block"><div class="social_icon w-embed"><svg width="100%" height="100%" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_50_1270" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
<g clip-path="url(#clip0_50_1270)">
<path d="M14.4067 14.3273C14.4067 12.2017 12.9609 12.2017 12.9609 12.2017H7.02344V16.7587H12.5928C13.5547 16.7587 14.4067 16.4499 14.4067 14.3273ZM12.9609 19.9085H7.02344V25.3651H12.6937C13.5458 25.3413 15.1222 25.0682 15.1222 22.711C15.1133 19.8907 12.9609 19.9085 12.9609 19.9085ZM28.1817 16.7587C25.0259 16.7587 24.5866 19.9056 24.5866 19.9056H31.2959C31.2959 19.9056 31.3375 16.7587 28.1817 16.7587Z" fill="black"/>
<path d="M33.0267 0.641113H4.97203C3.82327 0.641113 2.72156 1.09746 1.90926 1.90975C1.09697 2.72205 0.640625 3.82376 0.640625 4.97252V33.0242C0.640625 34.173 1.09697 35.2747 1.90926 36.087C2.72156 36.8993 3.82327 37.3556 4.97203 37.3556H33.0237C34.1725 37.3556 35.2742 36.8993 36.0865 36.087C36.8988 35.2747 37.3552 34.173 37.3552 33.0242V4.97252C37.3552 3.82427 36.8992 2.72301 36.0876 1.9108C35.2759 1.09859 34.175 0.6419 33.0267 0.641113ZM23.7078 9.77299H32.1331V12.2905H23.7078V9.77299ZM19.4477 22.9661C19.4477 29.2005 12.9609 28.9956 12.9609 28.9956H2.33281V8.57064H12.9609C16.1909 8.57064 18.7411 10.3519 18.7411 14.0094C18.7411 17.6669 15.6239 17.8955 15.6239 17.8955C19.7327 17.8955 19.4477 22.9661 19.4477 22.9661ZM35.2087 22.6336H24.64C24.64 26.4277 28.2352 26.1961 28.2352 26.1961C31.6284 26.1961 31.5008 23.9992 31.5008 23.9992H35.09C35.09 29.8299 28.1016 29.4291 28.1016 29.4291C19.7148 29.4291 20.2552 21.6213 20.2552 21.6213C20.2552 21.6213 20.2552 13.7749 28.1016 13.7749C36.3695 13.7689 35.2117 22.6336 35.2117 22.6336H35.2087Z" fill="black"/>
</g>
</mask>
<g mask="url(#mask0_50_1270)">
<rect width="38" height="38" fill="url(#paint0_radial_50_1270)"/>
</g>
<defs>
<radialGradient id="paint0_radial_50_1270" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19 19) rotate(90) scale(19)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<clipPath id="clip0_50_1270">
<rect width="38" height="38" fill="white"/>
</clipPath>
</defs>
</svg></div><div class="hide">Behance link</div></a><a href="https://www.linkedin.com/in/muhammad-salman-370223182" class="w-inline-block"><div class="social_icon w-embed"><svg width="100%" height="100%" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_50_1276" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="39">
<g clip-path="url(#clip0_50_1276)">
<path d="M37.8662 0.514921H4.6338C4.26024 0.509764 3.88931 0.577803 3.54221 0.715152C3.1951 0.8525 2.87861 1.05647 2.61082 1.31541C2.34303 1.57435 2.12917 1.88319 1.98147 2.22429C1.83377 2.56539 1.75512 2.93206 1.75 3.30338V36.7259C1.75512 37.0972 1.83377 37.4639 1.98147 37.805C2.12917 38.1461 2.34303 38.4549 2.61082 38.7139C2.87861 38.9728 3.1951 39.1768 3.54221 39.3141C3.88931 39.4515 4.26024 39.5195 4.6338 39.5144H37.8662C38.2398 39.5195 38.6107 39.4515 38.9578 39.3141C39.3049 39.1768 39.6214 38.9728 39.8892 38.7139C40.157 38.4549 40.3708 38.1461 40.5185 37.805C40.6662 37.4639 40.7449 37.0972 40.75 36.7259V3.30338C40.7449 2.93206 40.6662 2.56539 40.5185 2.22429C40.3708 1.88319 40.157 1.57435 39.8892 1.31541C39.6214 1.05647 39.3049 0.8525 38.9578 0.715152C38.6107 0.577803 38.2398 0.509764 37.8662 0.514921ZM13.5795 33.1575H7.69417V15.6077H13.5795V33.1575ZM10.6368 13.1507C9.82516 13.1507 9.04675 12.8303 8.47282 12.2598C7.89889 11.6893 7.57646 10.9156 7.57646 10.1088C7.57646 9.30201 7.89889 8.52828 8.47282 7.9578C9.04675 7.38732 9.82516 7.06683 10.6368 7.06683C11.0678 7.01824 11.5043 7.06069 11.9176 7.1914C12.331 7.32211 12.7119 7.53812 13.0354 7.82529C13.3589 8.11247 13.6178 8.46433 13.795 8.85784C13.9723 9.25135 14.0639 9.67764 14.0639 10.1088C14.0639 10.5399 13.9723 10.9662 13.795 11.3597C13.6178 11.7532 13.3589 12.1051 13.0354 12.3923C12.7119 12.6795 12.331 12.8955 11.9176 13.0262C11.5043 13.1569 11.0678 13.1993 10.6368 13.1507ZM34.8058 33.1575H28.9205V23.7391C28.9205 21.3796 28.077 19.8392 25.9386 19.8392C25.2769 19.844 24.6325 20.0503 24.0923 20.4303C23.5521 20.8104 23.1421 21.3458 22.9175 21.9646C22.764 22.4229 22.6975 22.9056 22.7213 23.3881V33.138H16.836V15.5882H22.7213V18.0647C23.256 17.1425 24.0336 16.3829 24.9704 15.8674C25.9072 15.352 26.9677 15.1004 28.0377 15.1397C31.9613 15.1397 34.8058 17.6552 34.8058 23.0566V33.1575Z" fill="black"/>
</g>
</mask>
<g mask="url(#mask0_50_1276)">
<rect x="0.25" y="0.514648" width="41.5" height="38" fill="url(#paint0_radial_50_1276)"/>
</g>
<defs>
<radialGradient id="paint0_radial_50_1276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 19.5146) rotate(90) scale(19 20.75)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<clipPath id="clip0_50_1276">
<rect width="41.5" height="38" fill="white" transform="translate(0.25 0.514648)"/>
</clipPath>
</defs>
</svg></div><div class="hide">Linkedin link</div></a><a href="#" class="w-inline-block"><div class="social_icon w-embed"><svg width="100%" height="100%" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_50_1280" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="39" height="38">
<g clip-path="url(#clip0_50_1280)">
<path d="M6.1287 0.174805C3.16201 0.174805 0.75 2.58682 0.75 5.5535V32.447C0.75 35.4137 3.16201 37.8257 6.1287 37.8257H33.0222C35.9889 37.8257 38.4009 35.4137 38.4009 32.447V5.5535C38.4009 2.58682 35.9889 0.174805 33.0222 0.174805H6.1287ZM31.0976 7.23435L22.3741 17.2018L32.6356 30.7662H24.6012L18.3148 22.5384L11.1124 30.7662H7.1204L16.4491 20.1012L6.60774 7.23435H14.8439L20.5335 14.7561L27.1056 7.23435H31.0976ZM27.9208 28.3794L13.6421 9.49508H11.2637L25.7021 28.3794H27.9124H27.9208Z" fill="black"/>
</g>
</mask>
<g mask="url(#mask0_50_1280)">
<rect x="0.75" y="0.485352" width="43.0296" height="37.0296" fill="url(#paint0_radial_50_1280)"/>
</g>
<defs>
<radialGradient id="paint0_radial_50_1280" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.2648 19.0002) rotate(90) scale(18.5148 21.5148)">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#737373"/>
</radialGradient>
<clipPath id="clip0_50_1280">
<rect width="37.6509" height="37.0296" fill="white" transform="translate(0.75 0.485352)"/>
</clipPath>
</defs>
</svg></div><div class="hide">X link</div></a></div><div id="orbTypingButton" data-w-id="e9b5c56e-9965-bbd7-221f-4fe0b41ca931" class="orb_text-box-button is-footer-button"><p id="typer-footer-button" class="orb_text">Yes Human! that button, press it NOW. thank you<strong>😉</strong>.</p></div><div id="orbTypingFooter" data-w-id="b6bb4720-d2d9-150d-e63d-df771a3b37d4" class="orb_text-box is-footer"><p id="typer-footer" class="orb_text">What are your waiting for Smash that button human!😏</p></div></div></div></div></div></section><section class="section_footer"><div class="padding-global"><div class="container-large"><div class="padding-section-small"><div class="content_wrapper is-center"><img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f51794237af0cc71b1d2e4_Vector%209.avif" loading="lazy" alt=""/><div class="copyright_text">VeritasCo 1v1 Team/ © All rights reserved - VeritasCo</div></div></div></div><div data-w-id="89da1aed-9177-9741-a307-7ffd7da2738b" class="invisible_div"></div></div></section></main></div><script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68f3884d9e35f473a885d321" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.c42549641b7d4501.js" type="text/javascript" integrity="sha384-EeGd0MuCSKO1a60JtC5HSnHq/C4KrtHuH4qImMGUQIlIox5ZJ0y/b+zo9WWvnaty" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.e1c97d15a90de8cf.js" type="text/javascript" integrity="sha384-4nK2sJ6EeeE3o+hQP/WjA3MqR43Avnbsi73LJUlIDEOdrWldoj9eDWAWUHEM/W2v" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.54ac5312.5a2a86be2568e815.js" type="text/javascript" integrity="sha384-5yAONd2ph/EIRO1a+hsZYmLMkLaI3u5YGaqgUy/a/4bbjfkrQlr6GR5Wdz7lEwAQ" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" type="text/javascript"></script><style>.w-webflow-badge { display: none !important; }</style>

<script>

// SAVE SCROLL POSITION
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
});

// RESTORE SCROLL POSITION
window.addEventListener("load", () => {

  const scrollPosition = sessionStorage.getItem("scrollPosition");

  if (scrollPosition !== null) {
    window.scrollTo({
      top: parseInt(scrollPosition),
      behavior: "instant"
    });
  }

});

</script>

<script src="https://unpkg.com/lenis@1.3.11/dist/lenis.min.js"></script> 
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.11/dist/lenis.css">
<script>
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  duration: 2,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  
</script>


<script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
gsap.registerPlugin(ScrollTrigger);

// Wait for Webflow + CMS to fully render
window.addEventListener("load", () => {

  // Small delay = CMS safety
  setTimeout(() => {

    // Split text
    const split = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });

    function createScrollTrigger(triggerEl, timeline) {
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });

      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 60%",
        onEnter: () => timeline.play()
      });
    }

    // WORD SLIDE UP
    document.querySelectorAll("[words-slide-up]").forEach(el => {
      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger(el, tl);
    });

    // WORD ROTATE IN
    document.querySelectorAll("[words-rotate-in]").forEach(el => {
      const tl = gsap.timeline({ paused: true });
      gsap.set(el.querySelectorAll(".word"), { transformPerspective: 1000 });
      tl.from(el.querySelectorAll(".word"), {
        rotationX: -90,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger(el, tl);
    });

    // WORD SLIDE FROM RIGHT
    document.querySelectorAll("[words-slide-from-right]").forEach(el => {
      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        x: "1em",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger(el, tl);
    });

    // LETTER SLIDE UP
    document.querySelectorAll("[letters-slide-up]").forEach(el => {
      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".char"), {
        yPercent: 100,
        duration: 0.2,
        ease: "power1.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger(el, tl);
    });

    // LETTER FADE IN
    document.querySelectorAll("[letters-fade-in]").forEach(el => {
      const tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        stagger: { amount: 2 }
      });
      createScrollTrigger(el, tl);
    });

    // SCRUB EACH WORD
    document.querySelectorAll("[scrub-each-word]").forEach(el => {
      gsap.from(el.querySelectorAll(".word"), {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top center",
          scrub: true
        },
        opacity: 0.4,
        duration: 0.2,
        stagger: 0.4
      });
    });

    // Prevent FOUC
    gsap.set("[text-split]", { opacity: 1 });

    // Refresh ScrollTrigger (important)
    ScrollTrigger.refresh();

  }, 300); // 👈 key line

});
</script>


<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
<!-- Element to contain animated typing -->
  <span id="typer-text"></span>

  <!-- Load library from the CDN -->
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

  <!-- Setup and start animation! -->
  <script>
    var typed = new Typed('#typer-hero', {
      strings: ['<i></i>Hey there... Welcome to VeritasCo 👋','One problem. Two coders. One winner.', 'Scroll down to learn more.'],
      typeSpeed: 25,
      loop: false,
    });
</script>
	<script>
    var typed = new Typed('#typer-footer-button', {
      strings: ['<i></i>Ready to battle? Press that button NOW. thank you😉.','Your opponent is waiting... 😏'],
      typeSpeed: 40,
      loop: true,
      //loopCount: 3,
      backDelay: 2000,
    });
	</script>
 <script>
    var typed = new Typed('#typer-footer', {
      strings: ['<i></i>What are you waiting for?','Smash that Start Battling Now button coder! 😏'],
      typeSpeed: 40,
      loop: true,
      //loopCount: 3,
      backDelay: 3000,
    });
	</script>
  
  <script>
    var typed = new Typed('#typer-modal', {
      strings: ['<i></i>Hey human 👋','I’ll deliver your message straight to VeritasCo 1v1 Team!😊'],
      typeSpeed: 40,
      loop: true,
      //loopCount: 3,
      backDelay: 3000,
    });
	</script>


<script>
// Add the no-scroll class to the body immediately on page load
/*document.body.classList.add('no-scroll');

// Remove the no-scroll class after a delay (e.g., 4000 milliseconds)
setTimeout(() => {
  document.body.classList.remove('no-scroll');
}, 10000); // Change '4000' to your desired delay in milliseconds
*/
</script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
\$(document).ready(function () {
  // 🔊 Load Sounds
  const sound = new Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/ES_MM%20Beep%2043%20-%20SFX%20Producer.mp3"], volume: 0.3 });
  const bgSound = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69075d954c44c34dc329df73_aeolian-futuristics-atmo-track-119821.mp3"], volume: 0.1,  loop: true });
  const orbSound = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6907408596b2ea520c731176_robot-broken-loading-206293.mp3"], volume: 0.4 });
  const orbSoundHappy = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69074aa385c0c5cdaa894e6c_robot_excited.mp3"], volume: 0.4 });
  const orbSoundHappyShort0 = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69087e40c634cb1c87a3ed2c_robot_excited-short0.mp3"], volume: 0.4 });
  const orbSoundHappyShort1 = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/690838c05d4e8ed1a2ae7b51_robot_excited-short1.mp3"], volume: 0.4 });
  const orbSoundHappyShort2 = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/690838c065c1a1b4f9d651a0_robot_excited-short2.mp3"], volume: 0.4 });
  const orbSoundSad0 = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69087e40d64b7ca9ce9370ee_robot_sad0.mp3"], volume: 0.4 });
  const orbSoundSad = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69074aa3e8ae78c8333cd20f_robot_sad.mp3"], volume: 0.4 });
  const clickSound = new Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/ES_MM%20Beep%2043%20-%20SFX%20Producer.mp3"] });
  const hoverSound = new Howl({ src: ["https://cdn.jsdelivr.net/gh/bedantpixeto/audio/hover-1.mp3"] });
  const typingSound = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69088acb99898eaef231aff2_Digital%20Fururistic%20Typing-%20extended.MP3"], volume: 0.3, loop:true });
  const typingSound2 = new Howl({ src: ["https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/69076c9556aaa88568454c16_computer-keyboard-typing-290582.mp3"], volume: 0.3, loop:true });

  // 🧠 Remember Sound State (localStorage)
  let soundOn = localStorage.getItem("soundOn");
  if (soundOn === null) soundOn = "true"; // default ON
  if (soundOn === "false") {
    Howler.mute(true);
    \$("#sound").addClass("muted");
  }

  \$("#sound").on("click", function () {
    \$(this).toggleClass("muted");
    const isMuted = \$(this).hasClass("muted");
    Howler.mute(isMuted);
    localStorage.setItem("soundOn", !isMuted);
  });

  // 🔘 Enable sound after first click anywhere
  \$("[data-activate-sound]").on("click", function () {
    sound.play();
  });
  
  // 🔘Background Sound
  \$("[data-bgSound]").on("click", function () {
    bgSound.play();
  });
// Pause sound when tab not active, resume when back
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    bgSound.pause();
    typingSound.pause();
    orbSoundHappy.pause();
  } else {
    bgSound.play();
    //orbSoundHappy.play();
  }
});
if (!Howler._muted && !sound.playing()) {
  bgSound.play();
}


  // 🎯 Hover Interactions
  \$("[data-hover]").on("mouseenter", function () {
    hoverSound.play();
    orbSoundSad0.stop();
    orbSoundHappyShort0.play();
  });

  \$("[data-hover]").on("mouseleave", function () {
    orbSoundHappyShort0.stop();
    orbSoundSad0.play();
  });
  
   // 🎯 Hover Interactions form open & close
  \$("[data-click-formOpen]").on("click", function () {
    orbSoundSad0.stop();
    orbSoundSad.stop();
    orbSoundHappyShort0.stop();
    typingSound.stop();
    orbSoundHappy.play();
  });
  
   \$("[data-click-formClose]").on("click", function () {
    orbSoundHappy.stop();
    orbSoundSad.play();
  });
  
   \$("[data-click]").on("click", function () {
    clickSound.play();
  });
   \$("[data-click2]").on("click", function () {
    hoverSound.play();
  });

  // 🎮 Orb idle sound
  \$("[data-hoverOrb]").on("mouseenter", function () {
    orbSound.play();
  }).on("mouseleave", function () {
    orbSound.stop();
  });

  // 💬 Typing sound when any typing box appears
  const typingBoxes = ["#orbTypingFooter", "#orbTypingHero", "#orbTypingButton", "#orbTypingModal"];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typingSound.play();
      } else {
        typingSound.stop();
      }
    });
  });

  typingBoxes.forEach(id => {
    const el = document.querySelector(id);
    if (el) observer.observe(el);
  });
});
</script>


<script>
//add no-scroll when modal open
/*document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.open-modal').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.page-wrapper').forEach(target => target.classList.add('no-scroll')); 
    });
 });

 document.querySelectorAll('.close-modal').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('.page-wrapper').forEach(target => target.classList.remove('no-scroll')); 
    });
 });
});
*/
</script>

<script>/*
\$(function () {
  const \$wrapper = \$('.page-wrapper');
  const \$modalWrapper = \$('.modal_wrapper');
  const \$modal = \$('.modal');
  let savedScrollY = 0;

  // ---- OPEN MODAL ----
  function openModal() {
    savedScrollY = window.scrollY;

    // Lock the page visually in place
    \$wrapper.css({
      position: 'fixed',
      top: -savedScrollY + 'px',
      left: 0,
      right: 0,
      width: '100%',
    });

    // Show modal
    \$modalWrapper.fadeIn(200);
    \$modal.fadeIn(250);

    // Optional: add a class for styling
    \$('body').addClass('modal-open');
  }

  // ---- CLOSE MODAL ----
  function closeModal() {
    // Hide modal
    \$modalWrapper.fadeOut(200);
    \$modal.fadeOut(150);

    // Remove scroll lock
    \$wrapper.css({
      position: '',
      top: '',
      left: '',
      right: '',
      width: '',
    });

    // Restore scroll position
    window.scrollTo(0, savedScrollY);

    \$('body').removeClass('modal-open');
  }

  // ---- EVENT LISTENERS ----
  // When CTA clicked
  \$('[data-open-modal]').on('click', function (e) {
    e.preventDefault();
    openModal();
  });

  // When close button or overlay clicked
  \$('.modal_close-button, .close_area').on('click', function (e) {
    e.preventDefault();
    closeModal();
  });

  // Close with Esc key
  \$(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
*/
</script>

<!-- AI Chatbot -->
<style>
  /* Import IBM Plex Mono font */
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  /* Prevent body scroll when modal is open */
  body.ai-chat-open {
    overflow: hidden;
  }

  /* Chatbot Floating Button */
  #ai-chat-button {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #000000;
    border: 2px solid #00adcc;
    color: #00adcc;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 173, 204, 0.3);
  }

  #ai-chat-button:hover {
    background: #00adcc;
    color: #000000;
    border-color: #000000;
    transform: scale(1.05);
    box-shadow: 0 6px 30px rgba(0, 173, 204, 0.5);
  }

  #ai-chat-button svg {
    width: 28px;
    height: 28px;
  }

  /* Online Indicator */
  #ai-chat-button::before {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 12px;
    height: 12px;
    background: #00adcc;
    border: 2px solid #000000;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  #ai-chat-button:hover::before {
    background: #000000;
    border-color: #00adcc;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
  }

  /* Modal Overlay */
  #ai-chat-modal {
    position: fixed;
    inset: 0;
    z-index: 1002;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.92);
    padding: 16px;
    opacity: 0;
    transition: opacity 0.2s ease;
    overflow: hidden;
    border: 0.5px solid #00adcc;
  }

  #ai-chat-modal.active {
    display: flex;
    opacity: 1;
  }

  /* Modal Container */
  .ai-chat-container {
    position: relative;
    width: 100%;
    max-width: 50rem;
    height: 85vh;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 0.5px solid #00adcc;
    backdrop-filter: blur(5px);
    mix-blend-mode: screen;
    background-color: #000;
  }

  /* Close Button */
  .ai-chat-close {
    position: absolute;
    padding: 4px;
    border-radius: 90px;
    top: 24px;
    right: 24px;
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00adcc;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }

  .ai-chat-close:hover {
    color: #000;
    background: #00adcc;
  }

  /* Header with Orb */
  .ai-chat-header {
    position: relative;
    padding: 12px 0 12px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: 0.5px solid #00adcc;
    background: #121212;
  }

  .ai-chat-orb {
    width: 140px;
    height: auto;
  }

  /* Messages Container - Only this should scroll */
  .ai-chat-messages {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 0;
  }
	
  .ai-chat-messages::-webkit-scrollbar {
    width: 8px;
  }

  .ai-chat-messages::-webkit-scrollbar-track {
    background: transparent;
  }

  .ai-chat-messages::-webkit-scrollbar-thumb {
    background: rgba(0, 173, 204, 0.7);
    border-radius: 3px;
  }

  .ai-chat-messages::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 173, 204, 0.9);
  }

  /* Message Bubbles */
  .ai-message {
    display: flex;
    gap: 12px;
    animation: slideIn 0.3s ease;
  }

  .ai-message.user {
    flex-direction: row-reverse;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ai-message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid #00adcc;
  }

  .ai-message-avatar.bot {
    background: #000000;
    color: #00adcc;
  }

  .ai-message-avatar.user {
    background: #00adcc;
    color: #000000;
  }

  .ai-message-bubble {
    max-width: 75%;
    padding: 12px 16px;
    backdrop-filter: blur(20px);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #ffffff;
  }

  .ai-message.bot .ai-message-bubble {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #00adcc;
    border-radius: 0px 20px 20px 20px;
  }

  .ai-message.user .ai-message-bubble {
    background: rgba(0, 173, 204, 0.1);
    border: 1px solid #00adcc;
    border-radius: 20px 0px 20px 20px;
    text-align: right;
  }

  .ai-message-time {
    font-size: 0.7rem;
    margin-top: 4px;
    opacity: 0.8;
    color: #6EA8FF;
    font-family: 'IBM Plex Mono', monospace;
  }

  .ai-typing-cursor {
    display: inline-block;
    width: 2px;
    height: 16px;
    background: #00adcc;
    margin-left: 4px;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  /* Typing Indicator */
  .ai-typing {
    display: none;
    align-items: center;
    gap: 12px;
    animation: slideIn 0.3s ease;
  }

  .ai-typing.active {
    display: flex;
  }

  .ai-typing-dots {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #00adcc;
    border-radius: 30px 30px 30px 0;
    padding: 12px 16px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 6px;
  }

  .ai-typing-dot {
    width: 8px;
    height: 8px;
    background: #00adcc;
    border-radius: 50%;
    animation: bounce 1.4s infinite;
  }

  .ai-typing-dot:nth-child(2) {
    animation-delay: 0.15s;
  }

  .ai-typing-dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-10px); }
  }

  /* Quick Questions */
  .ai-quick-questions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px;
    animation: fadeIn 0.5s ease 0.3s both;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .ai-quick-label {
    font-size: 0.7rem;
    color: rgba(0, 195, 204, 0.9);
    text-align: center;
    margin-bottom: 8px;
    font-family: 'IBM Plex Mono', monospace;
  }

  .ai-quick-btn {
    width: 100%;
    text-align: left;
    padding: 12px 16px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.2);
    color: #ffffff;
    border: 1px solid rgba(0, 173, 204, 0.3);
    backdrop-filter: blur(20px);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .ai-quick-btn:hover {
    background: rgba(0, 173, 204, 0.1);
    border-color: #00adcc;
  }

  /* Input Form */
  .ai-chat-input-area {
    padding: 16px 32px 24px;
    border-top: 1px solid #272727;
    flex-shrink: 0;
  }

  .ai-chat-form {
    display: flex;
    gap: 8px;
  }

  .ai-chat-input {
    flex: 1;
    padding: 12px 16px;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 173, 204, 0.5);
    color: #ffffff;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
    backdrop-filter: blur(20px);
  }

  .ai-chat-input::placeholder {
    color: rgba(0, 173, 204, 0.5);
  }

  .ai-chat-input:focus {
    border-color: #00adcc;
  }

  .ai-chat-input:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .ai-chat-send {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #000000;
    color: #00adcc;
    border: 1px solid #00adcc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
  }

  .ai-chat-send:hover:not(:disabled) {
    background: #00adcc;
    color: #000000;
    border-color: #000000;
  }

  .ai-chat-send:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .ai-chat-footer {
    text-align: center;
    font-size: 0.7rem;
    color: rgba(0, 195, 204, 0.8);
    margin-top: 12px;
    font-family: 'IBM Plex Mono', monospace;
  }

  /* Decorative Ellipses */
  .ai-ellipse {
    position: absolute;
    width: 128px;
    height: 128px;
    opacity: 0.5;
    pointer-events: none;
    mix-blend-mode: screen;
    
  }

  .ai-ellipse.top-left {
    top: 0;
    left: 0;
  }

  .ai-ellipse.bottom-right {
    bottom: 0;
    right: 0;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    #ai-chat-button {
      width: 56px;
      height: 56px;
      bottom: 20px;
      right: 20px;
    }

    .ai-chat-orb {
      width: 128px;
    }

    .ai-chat-messages {
      padding: 16px;
    }

    .ai-chat-input-area {
      padding: 16px;
    }

    .ai-message-bubble {
      font-size: 0.75rem;
    }

    .ai-quick-btn {
      font-size: 0.75rem;
    }

    .ai-chat-input {
      font-size: 0.75rem;
    }
  }
</style>

<!-- Chatbot HTML Structure -->
<div id="ai-chatbot">
  <!-- Hidden Audio Element for Typing Sound -->
  <audio id="ai-typing-sound" loop preload="auto">
    <source src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/6932dbb2c7df7e6a52dcd5d2_Digital%20Fururistic%20Typing%20loop%202.mp3" type="audio/mpeg">
  </audio>

  <!-- Floating Button -->
  <button id="ai-chat-button" aria-label="Open AI Chat" data-click="" data-click2="">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  </button>

  <!-- Chat Modal -->
  <div id="ai-chat-modal">
    <div class="ai-chat-container">
      <!-- Close Button -->
      <button class="ai-chat-close" aria-label="Close chat" data-click="">
        <svg width="100%" height="100%" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.4141 0.707031L14.9141 14.207L27.707 27L27 27.707L14.207 14.9141L1.41406 27.707L0.707031 27L13.5 14.207L0 0.707031L0.707031 0L14.207 13.5L27.707 0L28.4141 0.707031Z" fill="currentColor"/>
        </svg>
      </button>

      <!-- Header with Orb -->
      <div class="ai-chat-header">
        <img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/692ed4bd82e7d53839c092b3_4913a40707d691e6ccd76ff3b179db0d_bouncing%20blinking%20orb%202.gif" alt="AI Orb" class="ai-chat-orb">
      </div>

      <!-- Messages Container -->
      <div class="ai-chat-messages" id="ai-messages">
        <!-- Initial greeting -->
        <div class="ai-message bot">
          <div class="ai-message-avatar bot">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
          </div>
          <div>
            <div class="ai-message-bubble">
              Hey human 👋 I'm your AI assistant. Ask me anything about VeritasCo 1v1 Team's work, projects, or skills!
            </div>
            <div class="ai-message-time" id="initial-time"></div>
          </div>
        </div>

        <!-- Quick Questions (shown initially) -->
        <div class="ai-quick-questions" id="quick-questions">
          <p class="ai-quick-label">Quick questions:</p>
          <button class="ai-quick-btn" data-question="Tell me about your projects">Tell me about your projects</button>
          <button class="ai-quick-btn" data-question="What are your skills?">What are your skills?</button>
          <button class="ai-quick-btn" data-question="How can I contact you?">How can I contact you?</button>
        </div>

        <!-- Typing Indicator -->
        <div class="ai-typing" id="ai-typing">
          <div class="ai-message-avatar bot">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
          </div>
          <div class="ai-typing-dots">
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
          </div>
        </div>
      </div>

      <!-- Input Form -->
      <div class="ai-chat-input-area">
        <form class="ai-chat-form" id="ai-chat-form">
          <input type="text" id="ai-chat-input" class="ai-chat-input" placeholder="Type your message..." autocomplete="off">
          <button type="submit" class="ai-chat-send" id="ai-chat-send">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </button>
        </form>
        <div class="ai-chat-footer">VeritasCo 1v1 Team's Portfolio AI assistant • Responses may vary</div>
      </div>

      <!-- Decorative Ellipses -->
      <img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.png" alt="" class="ai-ellipse top-left">
      <img src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.png" alt="" class="ai-ellipse bottom-right">
    </div>
  </div>
</div>

<script>
  (function() {
    // ============================================
    // CONFIGURATION - Update these values
    // ============================================
    const CONFIG = {
      // Your App API URL (replace with your deployed app URL)
      apiUrl: 'https://billodesign.webflow.io/assistant/api/chat',
      
      // Typing animation speed (milliseconds per character)
      typingSpeed: 30,
      
      // Maximum conversation history to send
      maxHistory: 5,
      
      // Typing sound volume (0.0 to 1.0) - set lower for subtle effect
      typingSoundVolume: 0.15
    };

    // ============================================
    // DO NOT EDIT BELOW THIS LINE
    // ============================================
    
    const chatButton = document.getElementById('ai-chat-button');
    const chatModal = document.getElementById('ai-chat-modal');
    const chatClose = document.querySelector('.ai-chat-close');
    const chatForm = document.getElementById('ai-chat-form');
    const chatInput = document.getElementById('ai-chat-input');
    const messagesContainer = document.getElementById('ai-messages');
    const typingIndicator = document.getElementById('ai-typing');
    const quickQuestions = document.getElementById('quick-questions');
    const typingSound = document.getElementById('ai-typing-sound');
    
    let conversationHistory = [];
    let isTyping = false;
    let currentTypeInterval = null;

    // Set typing sound volume
    typingSound.volume = CONFIG.typingSoundVolume;

    // Set initial time
    document.getElementById('initial-time').textContent = formatTime(new Date());

    // Open modal
    chatButton.addEventListener('click', openModal);

    // Close modal
    chatClose.addEventListener('click', closeModal);
    chatModal.addEventListener('click', (e) => {
      if (e.target === chatModal) closeModal();
    });

    // Prevent Escape key from closing if actively typing
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatModal.classList.contains('active')) {
        closeModal();
      }
    });

    function openModal() {
      chatModal.classList.add('active');
      document.body.classList.add('ai-chat-open');
      chatInput.focus();
    }

    function closeModal() {
      chatModal.classList.remove('active');
      document.body.classList.remove('ai-chat-open');
      stopTypingSound();
    }

    function playTypingSound() {
      try {
        typingSound.currentTime = 0;
        typingSound.play().catch(e => {
          // Silently fail if autoplay is blocked
          console.log('Audio autoplay prevented:', e);
        });
      } catch (e) {
        console.log('Error playing sound:', e);
      }
    }

    function stopTypingSound() {
      try {
        typingSound.pause();
        typingSound.currentTime = 0;
      } catch (e) {
        console.log('Error stopping sound:', e);
      }
    }

    // Handle form submit
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message || isTyping) return;

      addUserMessage(message);
      chatInput.value = '';
      hideQuickQuestions();
      
      await sendMessage(message);
    });

    // Handle quick questions
    document.querySelectorAll('.ai-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        chatInput.value = question;
        chatInput.focus();
      });
    });

    function addUserMessage(content) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'ai-message user';
      messageDiv.innerHTML = \`
        <div class="ai-message-avatar user">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div>
          <div class="ai-message-bubble">\${escapeHtml(content)}</div>
          <div class="ai-message-time">\${formatTime(new Date())}</div>
        </div>
      \`;
      
      if (typingIndicator.previousElementSibling) {
        messagesContainer.insertBefore(messageDiv, typingIndicator);
      } else {
        messagesContainer.appendChild(messageDiv);
      }
      
      scrollToBottom();
      conversationHistory.push({ role: 'user', content });
    }

    function addBotMessage(content, typing = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'ai-message bot';
      const messageId = 'msg-' + Date.now();
      messageDiv.id = messageId;
      messageDiv.innerHTML = \`
        <div class="ai-message-avatar bot">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 8V4H8"/>
            <rect width="16" height="12" x="4" y="8" rx="2"/>
            <path d="M2 14h2"/>
            <path d="M20 14h2"/>
            <path d="M15 13v2"/>
            <path d="M9 13v2"/>
          </svg>
        </div>
        <div>
          <div class="ai-message-bubble" id="\${messageId}-content"></div>
          <div class="ai-message-time">\${formatTime(new Date())}</div>
        </div>
      \`;
      
      messagesContainer.insertBefore(messageDiv, typingIndicator);
      scrollToBottom();

      if (typing) {
        typeMessage(messageId + '-content', content);
      } else {
        document.getElementById(messageId + '-content').textContent = content;
      }

      conversationHistory.push({ role: 'assistant', content });
      return messageId;
    }

    function typeMessage(elementId, text) {
      const element = document.getElementById(elementId);
      if (!element) return;

      let index = 0;
      element.innerHTML = '<span class="ai-typing-cursor"></span>';

      // Start typing sound
      playTypingSound();

      currentTypeInterval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML = escapeHtml(text.substring(0, index + 1)) + '<span class="ai-typing-cursor"></span>';
          index++;
          scrollToBottom();
        } else {
          element.innerHTML = escapeHtml(text);
          clearInterval(currentTypeInterval);
          currentTypeInterval = null;
          // Stop typing sound when done
          stopTypingSound();
        }
      }, CONFIG.typingSpeed);
    }

    async function sendMessage(message) {
      showTyping();
      
      try {
        const response = await fetch(CONFIG.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message,
            conversationHistory: conversationHistory.slice(-CONFIG.maxHistory)
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response');
        }

        const data = await response.json();
        hideTyping();
        addBotMessage(data.response, true);
      } catch (error) {
        console.error('Chat error:', error);
        hideTyping();
        addBotMessage("Oops! Something went wrong. Please try again.", true);
      }
    }

    function showTyping() {
      isTyping = true;
      typingIndicator.classList.add('active');
      chatInput.disabled = true;
      scrollToBottom();
    }

    function hideTyping() {
      isTyping = false;
      typingIndicator.classList.remove('active');
      chatInput.disabled = false;
      chatInput.focus();
    }

    function hideQuickQuestions() {
      if (quickQuestions) {
        quickQuestions.style.display = 'none';
      }
    }

    function scrollToBottom() {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      stopTypingSound();
      if (currentTypeInterval) {
        clearInterval(currentTypeInterval);
      }
    });
  })();
</script>





<!-- awwward badge -->

`;
