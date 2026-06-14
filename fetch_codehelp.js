const fs = require('fs');

async function downloadAndRestore() {
    try {
        console.log("Fetching HTML from CodeHelp...");
        const res = await fetch('https://www.codehelp.in');
        const text = await res.text();
        
        console.log("HTML length:", text.length);
        
        // CodeHelp usually has a <body ...> ... </body>
        const bodyStart = text.indexOf('<body');
        const bodyEnd = text.indexOf('</body>');
        
        if (bodyStart !== -1 && bodyEnd !== -1) {
            let html = text.substring(bodyStart, bodyEnd + 7);
            
            // Remove the preloader to prevent black screen
            html = html.replace(/<div class="preloader[^>]*>[\s\S]*?<\/div>/, '');
            
            // Replace VeritasCo content (this is what I had done in webflow_html.ts previously)
            // They asked to rename CodeDuel to VeritasCo 1v1
            html = html.replace(/CodeHelp/g, 'VeritasCo 1v1');
            html = html.replace(/CodeDuel/g, 'VeritasCo 1v1');
            
            const webflowCss = 'export const webflowCss = `<link href="/custom_webflow.css" rel="stylesheet" type="text/css" />`;';
            const webflowJs = 'export const webflowJs = `<script src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/js/webflow.schunk.36b8fb49256177c8.js" type="text/javascript" integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G" crossorigin="anonymous"></script>`;';
            
            const escapedHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
            const webflowHtml = `export const webflowHtml = \`${escapedHtml}\`;`;
            
            const finalContent = `${webflowCss}\n${webflowJs}\n${webflowHtml}`;
            fs.writeFileSync('src/app/webflow_html.ts', finalContent);
            console.log('Restored webflow_html.ts!');
        } else {
            console.log("Could not find body tags");
        }
    } catch (e) {
        console.error(e);
    }
}

downloadAndRestore();
