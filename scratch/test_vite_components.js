const fs = require('fs');

async function testAllComponents() {
  const reg = fs.readFileSync('F:/proyectos/agentepersonal/viewer/src/registry.tsx', 'utf8');
  const lines = reg.split('\n');

  const compImports = [];
  lines.forEach(l => {
    const m = l.match(/from\s+['"]([^'"]+)['"]/);
    if (m && m[1].includes('elements/')) {
      compImports.push(m[1]);
    }
  });

  console.log('Testing Vite compilation for', compImports.length, 'components...');

  let failed = 0;
  for (let i = 0; i < compImports.length; i++) {
    const imp = compImports[i];
    // Vite resolves relative imports from /src/registry.tsx
    const url = 'http://localhost:3333' + imp.replace('../../vault', '/@fs/F:/proyectos/agentepersonal/vault') + '.tsx';
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        console.error('FAILED (status ' + res.status + '):', url);
        failed++;
      } else {
        const text = await res.text();
        if (text.includes('Error:') || text.includes('error during build') || text.includes('SyntaxError')) {
          console.error('SYNTAX/RUNTIME ERROR IN:', url);
          console.error(text.slice(0, 300));
          failed++;
        }
      }
    } catch (e) {
      console.error('FETCH ERROR:', url, e.message);
      failed++;
    }
  }

  console.log('Test completed. Failed:', failed);
}

testAllComponents();
