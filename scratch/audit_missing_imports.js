const fs = require('fs');
const path = require('path');
const lucide = require('F:/proyectos/agentepersonal/viewer/node_modules/lucide-react');

const elementsDir = 'F:/proyectos/agentepersonal/vault/components/elements';
const dirs = fs.readdirSync(elementsDir);

const unimportedIcons = [];

dirs.forEach(d => {
  const dirPath = path.join(elementsDir, d);
  if (!fs.statSync(dirPath).isDirectory()) return;

  const files = fs.readdirSync(dirPath);
  files.forEach(f => {
    if (!f.endsWith('.tsx')) return;
    const filePath = path.join(dirPath, f);
    const content = fs.readFileSync(filePath, 'utf8');

    // get imported identifiers
    const imports = [];
    const importRegex = /import\s*\{([^}]+)\}\s*from/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      match[1].split(',').forEach(item => {
        const parts = item.trim().split(/\s+as\s+/);
        imports.push(parts[parts.length - 1].trim());
      });
    }

    // find all JSX tags like <SomeIcon
    const tagMatches = [...content.matchAll(/<([A-Z][A-Za-z0-9_]*)/g)].map(m => m[1]);
    const reactTags = ['React', 'Fragment'];
    tagMatches.forEach(tag => {
      if (!reactTags.includes(tag) && !imports.includes(tag)) {
        unimportedIcons.push({ file: d + '/' + f, missingTag: tag });
      }
    });
  });
});

console.log('Unimported JSX components/icons found:', unimportedIcons.length);
if (unimportedIcons.length > 0) {
  console.log(unimportedIcons);
}
