const fs = require('fs');
const path = require('path');

// Read the log file to get the exact HTML the user pasted
const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/39a174c1-4517-424c-910e-bcc135a83151/.system_generated/logs/overview.txt';
const logContent = fs.readFileSync(logPath, 'utf8');

// The user's paste started with: <!DOCTYPE html><!-- This site was created in Webflow
const startIndex = logContent.lastIndexOf('<!DOCTYPE html><!-- This site was created in Webflow');
if (startIndex !== -1) {
    let endIndex = logContent.indexOf('</html>', startIndex);
    if (endIndex === -1) {
        // If it got truncated, let's grab it from the chunk instead
        console.log("Extracting from Next.js chunk instead...");
        const chunkPath = path.join('.next', 'static', 'chunks', '0gyc6kg2xtpvh.js');
        if (fs.existsSync(chunkPath)) {
            const chunkContent = fs.readFileSync(chunkPath, 'utf8');
            const htmlMatch = chunkContent.match(/`([^`]+)`/);
            if (htmlMatch) {
                let html = htmlMatch[1];
                html = applyBranding(html);
                saveWebflowTs(html);
                process.exit(0);
            }
        }
    } else {
        let html = logContent.substring(startIndex, endIndex + 7);
        html = applyBranding(html);
        saveWebflowTs(html);
        process.exit(0);
    }
}

// Fallback: fetch directly
const https = require('https');
https.get('https://billodesign.webflow.io/', (res) => {
    let html = '';
    res.on('data', (chunk) => html += chunk);
    res.on('end', () => {
        html = applyBranding(html);
        saveWebflowTs(html);
    });
});

function applyBranding(html) {
    // Basic Brand Replacements
    html = html.replace(/BilloDesign/gi, 'VeritasCo 1v1');
    html = html.replace(/Muhammad/g, 'VeritasCo');
    
    // Hero Replacements
    html = html.replace(/Webflow sites that don’t just look stunning — <br\/>they think, scale, and convert\./gi, 'The premier platform for competitive coding battles.<br/>Solve problems, climb the ELO ranks, earn coins.');
    html = html.replace(/Work With Me/gi, 'Find Match Now');
    
    // Services -> Features
    html = html.replace(/>Services<\/h2>/g, '>Features</h2>');
    html = html.replace(/>What I\s+Build<\/h3>/g, '>What We Built</h3>');
    html = html.replace(/>From concept to clean Webflow code — I design and develop future-proof digital experiences\.<\/p>/g, '>A fully integrated gaming economy and progression system built around competitive programming.</p>');
    
    html = html.replace(/>Web Design<\/h3>/g, '>Dynamic ELO System</h3>');
    html = html.replace(/>UI\/UX design that feels intuitive, intelligent, and on-brand\.<\/p>/g, '>Start at Bronze (1000 ELO). Win battles to climb to Grandmaster.</p>');
    
    html = html.replace(/>Webflow Development<\/h3>/g, '>Real-Time Execution</h3>');
    html = html.replace(/>Lightning-fast, scalable websites built with clean semantic code\.<\/p>/g, '>Powered by Judge0 and WebSockets. Experience zero-latency code execution.</p>');
    
    html = html.replace(/>Performance &amp; SEO<\/h3>/g, '>Coin Economy</h3>');
    html = html.replace(/>Optimized for speed, search, and seamless experience across all devices\.<\/p>/g, '>Earn coins for daily logins and match victories. Spend them on ranked entry fees.</p>');

    // Projects -> Modes
    html = html.replace(/>Projects<\/h2>/g, '>Game Modes</h2>');
    html = html.replace(/>Selected Work<\/h3>/g, '>The Arena</h3>');
    html = html.replace(/>Craft meets conversion\. Here are a few recent projects that pushed boundaries\.<\/p>/g, '>Choose your battleground. From rapid-fire 1v1s to massive global tournaments.</p>');
    
    // Hide Portfolio Slider since we don't need all the Webflow projects
    // We can just keep the structure and hide it or replace images. For now, let's keep it as is, just rebranded.

    // Remove Webflow Badge
    html = html.replace(/<a href="https:\/\/webflow\.com\?utm_campaign=brandjs".*?<\/a>/g, '');
    
    return html;
}

function saveWebflowTs(html) {
    // Extract just the body content to prevent hydration mismatch with html/head tags
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = html;
    if (bodyMatch) {
        bodyContent = bodyMatch[1];
    }
    
    // Escape backticks and dollars
    const escapedHtml = bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    const tsContent = `export const html_content = \`\n${escapedHtml}\n\`;`;
    fs.writeFileSync('src/app/webflow_html.ts', tsContent);
    console.log('Saved rebranded HTML to webflow_html.ts');
}
