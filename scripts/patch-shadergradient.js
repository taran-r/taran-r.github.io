const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, 'node_modules', '@shadergradient', 'react', 'package.json');

if (!fs.existsSync(pkgPath)) {
  process.exit(0);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.exports = {
  '.': {
    import: './dist/index.mjs',
    require: './dist/index.mjs',
    default: './dist/index.mjs',
    types: './dist/index.d.mts',
  },
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('Patched @shadergradient/react exports for Next.js');
