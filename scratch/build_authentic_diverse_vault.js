const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(ELEMENTS_DIR);

const STYLE_CONFIG = [
  { styleId: 'neo-brutalism', suffix: 'neo-brutalist', compSuffix: 'NeoBrutalist', label: 'Neo-Brutalism', short: 'Neo-Brutal' },
  { styleId: 'glassmorphism', suffix: 'glassmorphic', compSuffix: 'Glassmorphic', label: 'Frosted Glass', short: 'Glass' },
  { styleId: 'liquid-glass', suffix: 'liquid-glass', compSuffix: 'LiquidGlass', label: 'Liquid Glass', short: 'Liquid' },
  { styleId: 'neumorphism', suffix: 'neumorphic', compSuffix: 'Neumorphic', label: 'Neumorphism', short: 'Neumorph' },
  { styleId: 'claymorphism', suffix: 'claymorphic', compSuffix: 'Claymorphic', label: 'Claymorphism 3D', short: 'Clay 3D' },
  { styleId: 'minimalism', suffix: 'minimalist', compSuffix: 'Minimalist', label: 'Swiss Minimalist', short: 'Swiss' },
  { styleId: 'cyberpunk', suffix: 'cyberpunk', compSuffix: 'Cyberpunk', label: 'Cyberpunk HUD', short: 'Cyber' }
];

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

console.log('Iniciando construcción de componentes con anatomía diversa y sin clones...');
