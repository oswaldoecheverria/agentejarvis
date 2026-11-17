import fs from 'fs';
import path from 'path';

function walk(dir) {
  let res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) res = res.concat(walk(full));
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) res.push(full);
  }
  return res;
}

const files = walk('F:/proyectos/agentepersonal/vault/components').concat(walk('F:/proyectos/agentepersonal/viewer/src'));
for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  if (code.includes('key="faq"') || code.includes("key={'faq'}") || code.includes("key='faq'")) {
    console.log('Match found in:', file);
  }
}
