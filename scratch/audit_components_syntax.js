const fs = require('fs');
const path = require('path');
const lucide = require('F:/proyectos/agentepersonal/viewer/node_modules/lucide-react');

const elementsDir = 'F:/proyectos/agentepersonal/vault/components/elements';
const dirs = fs.readdirSync(elementsDir);

const errors = [];

dirs.forEach(d => {
  const dirPath = path.join(elementsDir, d);
  if (!fs.statSync(dirPath).isDirectory()) return;

  const files = fs.readdirSync(dirPath);
  files.forEach(f => {
    if (!f.endsWith('.tsx')) return;
    const filePath = path.join(dirPath, f);
    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Check lucide icons imported vs used
    const lucideImportMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["']/);
    if (lucideImportMatch) {
      const importedIcons = lucideImportMatch[1].split(',').map(s => s.trim()).filter(Boolean);
      importedIcons.forEach(ic => {
        if (!lucide[ic]) {
          errors.push({ file: d + '/' + f, error: 'Lucide icon does not exist: ' + ic });
        }
      });
    }

    // 2. Check for missing default export
    if (!content.includes('export default') && !content.includes('as default')) {
      errors.push({ file: d + '/' + f, error: 'Missing export default' });
    }

    // 3. Check for obvious syntax breakages
    if (content.includes('undefined') && content.includes('<undefined')) {
      errors.push({ file: d + '/' + f, error: 'Contains <undefined' });
    }
  });
});

console.log('Total errors found:', errors.length);
if (errors.length > 0) {
  console.log(errors);
}
