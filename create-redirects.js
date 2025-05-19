const fs = require('fs');
const path = require('path');

const redirectContent = '/* /index.html 200\n';
const distPath = path.join(__dirname, 'dist', 'landing','browser');
const redirectsPath = path.join(distPath, '_redirects');

fs.writeFileSync(redirectsPath, redirectContent, 'utf8');
console.log(`_redirects file created at ${redirectsPath}`);
