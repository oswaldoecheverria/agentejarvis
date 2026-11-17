const React = require('react');
const ReactDOMServer = require('react-dom/server');

// We can test importing and rendering the components
const regPath = 'F:/proyectos/agentepersonal/viewer/src/registry.tsx';
const regCode = require('fs').readFileSync(regPath, 'utf8');

// We can compile each component with esbuild / ts-node or evaluate in node
console.log('Testing React server render of all 259 components...');

const elementsDir = 'F:/proyectos/agentepersonal/vault/components/elements';
const dirs = require('fs').readdirSync(elementsDir);

let tested = 0;
let errors = 0;

// Use babel or esbuild to test-compile and render
const esbuild = require('F:/proyectos/agentepersonal/viewer/node_modules/esbuild');

dirs.forEach(d => {
  const dirPath = elementsDir + '/' + d;
  if (!require('fs').statSync(dirPath).isDirectory()) return;

  const files = require('fs').readdirSync(dirPath);
  files.forEach(f => {
    if (!f.endsWith('.tsx')) return;
    const filePath = dirPath + '/' + f;
    const tsxCode = require('fs').readFileSync(filePath, 'utf8');

    try {
      const result = esbuild.transformSync(tsxCode, {
        loader: 'tsx',
        jsx: 'automatic'
      });
      // evaluate result
      const module = { exports: {} };
      const fn = new Function('require', 'module', 'exports', result.code);
      fn(require, module, module.exports);

      const Comp = module.exports.default || module.exports[Object.keys(module.exports)[0]];
      if (typeof Comp === 'function') {
        ReactDOMServer.renderToString(React.createElement(Comp));
        tested++;
      } else {
        console.error('NOT A COMPONENT:', d + '/' + f);
        errors++;
      }
    } catch (err) {
      console.error('RENDER ERROR IN:', d + '/' + f, err.message);
      errors++;
    }
  });
});

console.log('Finished testing. Tested:', tested, 'Errors:', errors);
