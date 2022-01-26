const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '../dist/index.html');
const renderScriptPath = path.resolve(__dirname, '../src/render/index.js');

const indexContent = fs.readFileSync(indexPath).toString();
const renderContent = fs.readFileSync(renderScriptPath).toString();

const newIndexContent = indexContent.replace(
    '</head>',
    '<script>' + renderContent + '</script>' + '</head>'
);

fs.writeFileSync(indexPath, newIndexContent);
