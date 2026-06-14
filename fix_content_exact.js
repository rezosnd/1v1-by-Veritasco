const fs = require('fs');
let data = fs.readFileSync('src/app/webflow_html.ts', 'utf8');

data = data.replace(
    /India's #1<br\/>Coding Community\./gi,
    "Learn to Code<br/>Without Limits."
);

data = data.replace(
    /Get your first job with VeritasCo ONE\.<br\/>Battle developers and climb the leaderboard\./gi,
    "Learn at your own pace with personalized learning paths."
);

data = data.replace(
    /The Arena Awaits!/g,
    "Personalized Learning"
);

fs.writeFileSync('src/app/webflow_html.ts', data);
console.log('Fixed the content!');
