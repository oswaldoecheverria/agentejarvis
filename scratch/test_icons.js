const fs = require('fs');
const path = require('path');

const appPath = 'F:/proyectos/agentepersonal/viewer/src/App.tsx';
const famPath = 'F:/proyectos/agentepersonal/viewer/src/chameleonFamilies.ts';

const app = fs.readFileSync(appPath, 'utf8');
const lucide = require('F:/proyectos/agentepersonal/viewer/node_modules/lucide-react');

// Check all iconNames used in chameleonFamilies
const fam = fs.readFileSync(famPath, 'utf8');
const iconNameMatches = [...fam.matchAll(/"iconName":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Unique iconNames in chameleonFamilies:', [...new Set(iconNameMatches)]);

iconNameMatches.forEach(ic => {
  if (!lucide[ic]) {
    console.error('MISSING ICON IN LUCIDE-REACT (chameleonFamilies):', ic);
  }
});

// Check getCategoryIcon in App.tsx
console.log('Checking App.tsx icon resolution...');
