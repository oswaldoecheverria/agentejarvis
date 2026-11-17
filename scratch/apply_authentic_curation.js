const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');
const REGISTRY_PATH = 'F:/proyectos/agentepersonal/viewer/src/registry.tsx';
const CHAMELEON_PATH = 'F:/proyectos/agentepersonal/viewer/src/chameleonFamilies.ts';
const CATALOG_PATH = path.join(VAULT_DIR, 'catalog.json');

const { generateNewsletter, generateStat } = require('./generators_diverse');
const { generatePatientRecord } = require('./generators_clinical');
const {
  generatePillRibbon,
  generateMedicalSidebar,
  generateCie10Search,
  generateClinicalAlbum,
  generateAppointmentCalendar,
  generateMaskedVideoPlayer
} = require('./generators_erikasalud_authentic');

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

// 1. REESCRIBIR NEWSLETTER CON INPUT DE EMAIL REAL
console.log('1. Reemplazando Newsletter con input de email interactivo...');
ensureDir(path.join(ELEMENTS_DIR, 'newsletter'));
STYLE_CONFIG.forEach(st => {
  const code = generateNewsletter(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'newsletter', `newsletter-${st.suffix}.tsx`), code, 'utf-8');
});

// 2. REESCRIBIR STAT CON TELEMETRÍA Y SPARKLINE GRÁFICO REAL
console.log('2. Reemplazando Stat con telemetría visual de 7 días...');
ensureDir(path.join(ELEMENTS_DIR, 'stat'));
STYLE_CONFIG.forEach(st => {
  const code = generateStat(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'stat', `stat-${st.suffix}.tsx`), code, 'utf-8');
});

// 3. REESCRIBIR PATIENT-RECORD CON FICHA CLÍNICA 360 REAL (Avatar, Alergia, 3 Signos Vitales, CIE-10)
console.log('3. Reemplazando Patient-Record con Ficha Médica 360 real de ErikaSalud...');
ensureDir(path.join(ELEMENTS_DIR, 'patient-record'));
STYLE_CONFIG.forEach(st => {
  const code = generatePatientRecord(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'patient-record', `patient-record-${st.suffix}.tsx`), code, 'utf-8');
});

// 4. GENERAR PILL-RIBBON (Cinta de Filtros en Píldora de ErikaSalud)
console.log('4. Generando Pill-Ribbon auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'pill-ribbon'));
STYLE_CONFIG.forEach(st => {
  const code = generatePillRibbon(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'pill-ribbon', `pill-ribbon-${st.suffix}.tsx`), code, 'utf-8');
});

// 5. GENERAR MEDICAL-SIDEBAR (Menú Lateral de Doctora de ErikaSalud)
console.log('5. Generando Medical-Sidebar auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'medical-sidebar'));
STYLE_CONFIG.forEach(st => {
  const code = generateMedicalSidebar(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'medical-sidebar', `medical-sidebar-${st.suffix}.tsx`), code, 'utf-8');
});

// 6. GENERAR CIE10-SEARCH (Buscador Inteligente CIE-10 de ErikaSalud)
console.log('6. Generando Cie10-Search auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'cie10-search'));
STYLE_CONFIG.forEach(st => {
  const code = generateCie10Search(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'cie10-search', `cie10-search-${st.suffix}.tsx`), code, 'utf-8');
});

// 7. GENERAR CLINICAL-ALBUM (Álbum / Galería Fotográfica de ErikaSalud)
console.log('7. Generando Clinical-Album auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'clinical-album'));
STYLE_CONFIG.forEach(st => {
  const code = generateClinicalAlbum(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'clinical-album', `clinical-album-${st.suffix}.tsx`), code, 'utf-8');
});

// 8. GENERAR APPOINTMENT-CALENDAR (Calendario de Citas de ErikaSalud)
console.log('8. Generando Appointment-Calendar auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'appointment-calendar'));
STYLE_CONFIG.forEach(st => {
  const code = generateAppointmentCalendar(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'appointment-calendar', `appointment-calendar-${st.suffix}.tsx`), code, 'utf-8');
});

// 9. GENERAR MASKED-VIDEO-PLAYER (Reproductor Enmascarado de ErikaSalud)
console.log('9. Generando Masked-Video-Player auténtico...');
ensureDir(path.join(ELEMENTS_DIR, 'masked-video-player'));
STYLE_CONFIG.forEach(st => {
  const code = generateMaskedVideoPlayer(st.styleId);
  fs.writeFileSync(path.join(ELEMENTS_DIR, 'masked-video-player', `masked-video-player-${st.suffix}.tsx`), code, 'utf-8');
});

console.log('Todos los archivos anatómicos individuales generados con éxito.');
