const fs = require('fs');

const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const startStr = 'export const webflowHtml';
const startIndex = content.indexOf(startStr);

if (startIndex !== -1) {
    // We need to extract webflowCss, webflowJs, and webflowHtml
    // They are exported in that file. Let's just find the start of webflowCss or webflowHtml.
    const cssStart = content.lastIndexOf('export const webflowCss', startIndex);
    const actualStart = cssStart !== -1 ? cssStart : startIndex;
    
    // Find the end. It's probably `";` or `\`;`
    // Wait, the file content might be printed inside a tool block.
    // Let's look for `export const webflowHtml = \`` and the closing \`;
    
    // Alternatively, I'll just write a script that regex searches for the content.
    const fileStartStr = 'export const webflowCss';
    const fileStart = content.lastIndexOf(fileStartStr, startIndex);
    
    if (fileStart !== -1) {
        // Find where it ends. 
        // It ends with \n</div>\`;
        const endStr = '</div>`;';
        const endIndex = content.indexOf(endStr, fileStart);
        
        if (endIndex !== -1) {
            let extracted = content.substring(fileStart, endIndex + endStr.length);
            
            // Clean up any potential markdown escaping if it was inside a markdown block
            // It might just be raw text.
            fs.writeFileSync('src/app/webflow_html.ts', extracted);
            console.log('Successfully recovered webflow_html.ts from previous conversation!');
        } else {
            console.log('Could not find end of file');
        }
    }
}
