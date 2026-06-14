import re

with open('webflow_real.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract body content
start = html.find('<body')
end = html.find('</body>') + 7
body_html = html[start:end]

# Extract head styles/links
head_start = html.find('<head>')
head_end = html.find('</head>')
head_html = html[head_start:head_end]
links = re.findall(r'<link[^>]+>', head_html)
css_links = [l for l in links if 'stylesheet' in l or 'css' in l]

# 1. Change text content to CodeDuel
body_html = body_html.replace('Welcome to BilloDesign', 'Welcome to CodeDuel')
body_html = body_html.replace('Design Beyond Pixels.', 'Code Beyond Limits.')
body_html = body_html.replace('Build Beyond Limits.', 'Compete in Real-Time.')
body_html = body_html.replace('Webflow sites that don’t just look stunning — <br/>they think, scale, and convert.', 'The premier platform for competitive coding battles.<br/>Solve problems, climb the ELO ranks, earn coins.')
body_html = body_html.replace('Work With Me', 'Find Match Now')

# Services -> Features
body_html = body_html.replace('Services', 'Features')
body_html = body_html.replace('What I  Build', 'The Arena')
body_html = body_html.replace('From concept to clean Webflow code — I design and develop future-proof digital experiences.', 'A fully integrated gaming economy and progression system built around competitive programming.')

# Services Cards
body_html = body_html.replace('Web Design', 'Dynamic ELO System')
body_html = body_html.replace('UI/UX design that feels intuitive, intelligent, and on-brand.', 'Start at Bronze (1000 ELO). Win battles to climb to Grandmaster. Matchmaking guarantees you always face opponents at your precise skill level.')

body_html = body_html.replace('Webflow Development', 'Coin Economy')
body_html = body_html.replace('Lightning-fast, scalable websites built with clean semantic code.', 'Earn coins for daily logins and match victories. Spend them on ranked entry fees, AI hints, premium avatars, and profile cosmetics.')

body_html = body_html.replace('Performance &amp; SEO', 'Real-Time Execution')
body_html = body_html.replace('Optimized for speed, search, and seamless experience across all devices.', 'Powered by Judge0 and WebSockets. Experience zero-latency code execution against hidden test cases with an integrated Monaco editor.')

# Portfolio -> Dashboard
body_html = body_html.replace('Portfolio', 'Arena')
body_html = body_html.replace('Projects', 'The Environment')
body_html = body_html.replace('Selected Work', 'A Professional Developer Experience')
body_html = body_html.replace('Craft meets conversion. Here are a few recent projects that pushed boundaries.', 'Built to handle intense battles with integrated code editor and real-time multiplayer feedback.')

# Colors: Replace blues with purples
# #00AFCD -> #A855F7
# #046273 -> #7E22CE
body_html = body_html.replace('#00AFCD', '#A855F7')
body_html = body_html.replace('#046273', '#7E22CE')
body_html = body_html.replace('#00A9C9', '#A855F7')
body_html = body_html.replace('rgb(7,121,140)', 'rgb(168,85,247)')

# Hide Spline Logo and fix coin
style_append = """
<style>
spline-viewer::part(logo) { display: none !important; }
spline-viewer { --logo-display: none !important; }
.coin-img { mix-blend-mode: screen; background: transparent; }
</style>
"""
body_html += style_append

# Remove Veritasco logo and all, make it CodeDuel logo text
logo_pattern = re.compile(r'<a href="/" aria-current="page" class="nav_brand[^>]*>.*?</a>', re.DOTALL)
body_html = logo_pattern.sub(r'<a href="/" aria-current="page" class="nav_brand w-nav-brand w--current" style="text-decoration:none; font-size: 24px; font-weight: bold; color: white;">CodeDuel</a>', body_html)

# Replace Store/Contact in nav
body_html = body_html.replace('Contact', 'Store <img src="/coin.png" style="height:20px; vertical-align:middle; mix-blend-mode:screen;" />')

# Webflow JS
scripts = re.findall(r'<script[^>]*src="[^"]+"[^>]*></script>', html)
webflow_js = [s for s in scripts if 'webflow' in s.lower()][0]

output = f"""
export const webflowCss = `{chr(10).join(css_links)}`;
export const webflowJs = `{webflow_js}`;
export const webflowHtml = `{body_html.replace('`', '\\`').replace('$', '\\$')}`;
"""

with open('src/app/webflow_html.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print("Generated src/app/webflow_html.ts")
