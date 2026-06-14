const fs = require('fs');

let html = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

// The preloader is a huge div with class="c-preloader"
// Let's remove it entirely
let startIndex = html.indexOf('<div data-w-id="3b91a9df-cdd8-2dc8-c232-e89d9dbb75bf"');
if (startIndex !== -1) {
    let endIndex = html.indexOf('<div style="opacity:0" class="modal_wrapper">');
    if (endIndex !== -1) {
        let cleanHtml = html.substring(0, startIndex) + html.substring(endIndex);
        fs.writeFileSync('src/app/webflow_html.ts', cleanHtml);
        console.log('Preloader removed successfully!');
    } else {
        console.log('Could not find end of preloader');
    }
} else {
    console.log('Could not find start of preloader');
}

// Also, webflow.js needs to be reinitialized after Next.js loads the DOM
// Because we load the HTML dynamically, webflow.js might miss the load event.
// Let's check page.tsx next.
