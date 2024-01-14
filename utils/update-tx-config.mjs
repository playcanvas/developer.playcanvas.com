import fs from 'fs';
import path from 'path';

const contentSrc = './docs';
const configFile = '.tx/config';

let config = '[main]\nhost = https://www.transifex.com\n';

/**
 * @param {string} folderPath - The path to the folder to scan
 */
function scanFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const fullPath = path.join(folderPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanFolder(fullPath);
        } else {
            if (path.extname(fullPath) === '.md') {
                const relativePath = path.relative(contentSrc, fullPath).replace(/\\/g, '/');
                const fileFilter = `i18n/<lang>/docusaurus-plugin-content-docs/current/${relativePath}`;
                const sourceFile = `docs/${relativePath}`;
                const resourceName = `content/en/${relativePath}`;
                const slug = relativePath.replace('.md', '').replace(/\//g, '-').toLocaleLowerCase();
                const fileEntry = `
[o:playcanvas:p:playcanvas-developer-site:r:${slug}]
file_filter   = ${fileFilter}
source_file   = ${sourceFile}
type          = GITHUBMARKDOWN
minimum_perc  = 0
resource_name = ${resourceName}
`;
                config += fileEntry;
            }
        }
    }
}

scanFolder(contentSrc);

// Write the config file
fs.writeFileSync(configFile, config);
