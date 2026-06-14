const fs = require('fs');

const chunkPath = 'd:\\1v1 by veritasco\\.next\\static\\chunks\\0gyc6kg2xtpvh.js';
const content = fs.readFileSync(chunkPath, 'utf8');

// The chunk contains: `let i=\`<div id="startSound"...`
// which represents webflowHtml.
// It also probably has `e.i(43476)` and so on.
// Let's find `let i=\`` and extract everything until the closing `\``
const startIndicator = 'let i=`';
const startIndex = content.indexOf(startIndicator);

if (startIndex !== -1) {
    const actualStart = startIndex + startIndicator.length;
    // We need to find the exact closing backtick for this string.
    // However, the string itself might contain \`. Let's just use regex or a loop to find the closing unescaped backtick.
    // Or simpler: the string ends where another variable declaration happens, or `};`
    // Next.js chunks usually end with backticks and commas.
    // Let's just extract all content from `actualStart` to the last occurrence of `\`` before `}` or similar.
    
    // In compiled chunks, the template literal `...` is preserved unless there are nested literals.
    let endIndex = actualStart;
    let isEscaped = false;
    while (endIndex < content.length) {
        if (content[endIndex] === '\\') {
            isEscaped = !isEscaped;
        } else if (content[endIndex] === '`' && !isEscaped) {
            break;
        } else {
            isEscaped = false;
        }
        endIndex++;
    }

    if (endIndex < content.length) {
        let html = content.substring(actualStart, endIndex);
        
        // This is the HTML.
        const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
        const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
        
        // Let's replace the preloader just in case
        html = html.replace(/<div class="preloader[^>]*>[\s\S]*?<\/div>/g, '');
        
        const webflowHtml = `export const webflowHtml = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;`;
        
        fs.writeFileSync('src/app/webflow_html.ts', `${webflowCss}\n${webflowJs}\n${webflowHtml}`);
        console.log('Restored from NEXT chunk! Length:', html.length);
    } else {
        console.log('Could not find closing backtick');
    }
} else {
    console.log('Could not find let i=`');
}
