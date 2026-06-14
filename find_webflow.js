const fs = require('fs');
const logPath = 'C:/Users/KIIT0001/.gemini/antigravity/brain/e5187328-39bc-468e-b02d-4f4d04393bb1/.system_generated/logs/overview.txt';
const content = fs.readFileSync(logPath, 'utf8');

const parts = content.split('<file_content>');
for (let i = 0; i < parts.length; i++) {
    if (parts[i].includes('export const webflowHtml')) {
        let text = parts[i].split('</file_content>')[0];
        // The text in the log has \n replaced by literal \\n or something?
        // Wait, the file_content block usually just has the raw content or JSON string.
        // Let's just save it.
        fs.writeFileSync(`found_part_${i}.ts`, text);
        console.log('found in part', i);
    }
}
