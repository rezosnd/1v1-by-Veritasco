import re
content = open('webflow_html.ts', 'r', encoding='utf-8').read()
urls = re.findall(r'https?://[^\s\'\"<>]+', content)
spline_urls = [u for u in urls if 'spline' in u.lower() or 'my.spline.design' in u.lower()]
print('Spline URLs:', set(spline_urls))
