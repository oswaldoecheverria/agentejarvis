const fs = require('fs');
const path = require('path');

const reg = fs.readFileSync('F:/proyectos/agentepersonal/viewer/src/registry.tsx', 'utf8');
const lines = reg.split('\n');

const missing = [];
lines.forEach(l => {
  const m = l.match(/from\s+['"]([^'"]+)['"]/);
  if (m) {
    let p = m[1];
    if (!p.endsWith('.tsx')) p += '.tsx';
    const resolved = path.resolve('F:/proyectos/agentepersonal/viewer/src', p);
    if (!fs.existsSync(resolved)) {
      missing.push(resolved);
    }
  }
});

console.log('Total imports checked:', lines.filter(l => l.startsWith('import')).length);
console.log('Missing files:', missing.length);
if (missing.length > 0) {
  console.log(missing.slice(0, 10));
}
