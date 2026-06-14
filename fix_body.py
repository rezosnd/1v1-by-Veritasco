import re

with open('src/app/webflow_html.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'export const webflowHtml = `<body[^>]*>', 'export const webflowHtml = `', content)
content = content.replace('</body>`', '`')

with open('src/app/webflow_html.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed body tags")
