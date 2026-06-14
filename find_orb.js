const fs = require('fs');
const data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');
const lines = data.split('\n');
lines.forEach(line => {
    if (line.includes('orb') || line.includes('Orb')) {
        const matches = line.match(/.{0,50}(orb|Orb).{0,50}/g);
        if (matches) console.log(matches.slice(0, 3));
    }
});
