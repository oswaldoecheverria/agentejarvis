const fs = require('fs');
const path = require('path');

const VAULT_ROOT = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_ROOT, 'components/elements');
const VIEWER_DIR = 'F:/proyectos/agentepersonal/viewer';

// Cargar generadores
const genDiverse = require('./generators_diverse.js');
const genClinical = require('./generators_clinical.js');
const genErika = require('./generators_erikasalud_authentic.js');
const genLayouts = require('./generators_authentic_layouts.js');
const genBatch2 = require('./generators_batch2_erikasalud.js');

const STYLES = [
  { id: 'neo-brutalism', suffix: 'neo-brutalist', label: 'Neo-Brutalism' },
  { id: 'glassmorphism', suffix: 'glassmorphic', label: 'Glassmorphism' },
  { id: 'liquid-glass', suffix: 'liquid-glass', label: 'Liquid Glass' },
  { id: 'neumorphism', suffix: 'neumorphic', label: 'Neumorphism' },
  { id: 'claymorphism', suffix: 'claymorphic', label: 'Claymorphism' },
  { id: 'minimalism', suffix: 'minimalist', label: 'Minimalism' },
  { id: 'cyberpunk', suffix: 'cyberpunk', label: 'Cyberpunk' }
];

function toPascal(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

// 1. PURGA DE CARPETAS CLONES
const FOLDERS_TO_PURGE = [
  'audio',
  'bento',
  'canvas',
  'confirm',
  'dock',
  'health-marquee',
  'help',
  'hero',
  'medical-faq',
  'medical-hero',
  'medical-plan',
  'medical-service',
  'navbar',
  'review',
  'appointment-modal',
  'appointment-scheduler'
];

console.log('--- PASO 1: Purgando carpetas clones ---');
FOLDERS_TO_PURGE.forEach(f => {
  const dir = path.join(ELEMENTS_DIR, f);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log('Eliminada carpeta clon:', f);
  }
});

// 2. DEFINICIÓN DE LOS 37 COMPONENTES AUTÉNTICOS (23 PREVIOS + 14 DE ERIKASALUD BATCH 2)
const MASTER_ELEMENTS = [
  // CARDS (8)
  {
    id: 'pricing',
    name: "Tarjeta de Precios 'Plan Pro $29'",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta comercial con desglose de precios, periodo mensual/anual y checklist de beneficios.',
    iconName: 'CreditCard',
    isExisting: true
  },
  {
    id: 'profile',
    name: "Perfil de Usuario 'Alexander Vance'",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta de identidad y contacto con avatar destacado, roles y métricas de reputación.',
    iconName: 'UserCheck',
    isExisting: true
  },
  {
    id: 'stat',
    name: 'Tarjeta de Métrica & Telemetría 24h',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Monitoreo de rendimiento con gráfico sparkline de 7 días, TPS en tiempo real y porcentaje de cambio.',
    iconName: 'TrendingUp',
    generator: genDiverse.generateStat
  },
  {
    id: 'newsletter',
    name: 'Tarjeta de Suscripción & Newsletter',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Formulario de captura con campo de correo electrónico, botón de suscripción inline y garantía LOPDP.',
    iconName: 'Mail',
    generator: genDiverse.generateNewsletter
  },
  {
    id: 'patient-record',
    name: 'Ficha Clínica 360 del Paciente',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Expediente médico confidencial con avatar, cédula de Ecuador Módulo 10, alerta de alergias y constantes vitales.',
    iconName: 'Activity',
    generator: genClinical.generatePatientRecord
  },
  {
    id: 'plans-comparison-table',
    name: 'Tabla Comparativa de Planes de Salud',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tabla matricial con columnas de planes (Básico vs Pro), desglose de beneficios médicos y selector de contratación.',
    iconName: 'Table',
    generator: genBatch2.generatePlansComparisonTable
  },
  {
    id: 'author-bio-card',
    name: 'Ficha Biográfica de la Doctora',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta de perfil con avatar, credenciales Senescyt y MSP 17-5421, especialidad y enlace a biografía.',
    iconName: 'Award',
    generator: genBatch2.generateAuthorBioCard
  },
  {
    id: 'blog-article-card',
    name: 'Tarjeta de Artículo Médico',
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta editorial con miniatura de cabecera, tiempo de lectura estimado, categoría clínica y firma médica.',
    iconName: 'BookOpen',
    generator: genBatch2.generateBlogArticleCard
  },

  // WIDGETS (12)
  {
    id: 'calculator',
    name: 'Calculadora Funcional Interactiva',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Herramienta aritmética de dosimetría con display digital y teclado matricial interactivo.',
    iconName: 'Calculator',
    isExisting: true
  },
  {
    id: 'clock',
    name: 'Reloj Digital en Tiempo Real',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Reloj de precisión de quirófano con cronometría activa, zona horaria UTC-5 y chip de sincronización.',
    iconName: 'Clock',
    isExisting: true
  },
  {
    id: 'control',
    name: 'Interruptor Inteligente & Toggles',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Panel domótico e instrumental con switches de estado interactivo (Activo / Silenciado).',
    iconName: 'ToggleLeft',
    isExisting: true
  },
  {
    id: 'weather',
    name: 'Clima & Pronóstico Ambiental',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Micro-estación meteorológica con temperatura, índice UV, humedad y calidad de aire.',
    iconName: 'CloudRain',
    isExisting: true
  },
  {
    id: 'pill-ribbon',
    name: 'Cinta de Filtros en Píldora (Segmented Ribbon)',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Selector horizontal de especialidades con desplazamiento táctil, micro-badges de conteo y estado activo.',
    iconName: 'Sliders',
    generator: genErika.generatePillRibbon
  },
  {
    id: 'cie10-search',
    name: 'Buscador Inteligente CIE-10 OMS',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Búsqueda clínica con autocompletado y catálogo oficial de patologías y diagnósticos CIE-10.',
    iconName: 'Search',
    generator: genErika.generateCie10Search
  },
  {
    id: 'appointment-calendar',
    name: 'Calendario de Citas & Horarios Médicos',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Selector de turnos semanales de 5 días con ranuras horarias de consulta presencial y telemedicina.',
    iconName: 'Calendar',
    generator: genErika.generateAppointmentCalendar
  },
  {
    id: 'calendar-sync-card',
    name: 'Widget de Sincronización de Calendario',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Widget para agregar cita confirmada a Google Calendar, Apple iCal y Outlook con un clic.',
    iconName: 'Calendar',
    generator: genBatch2.generateCalendarSyncCard
  },
  {
    id: 'share-bar-floating',
    name: 'Barra Flotante de Compartir',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Barra compacta para compartir recetas y citas por WhatsApp, Telegram y copiar enlace con confirmación.',
    iconName: 'Share2',
    generator: genBatch2.generateShareBarFloating
  },
  {
    id: 'device-security-manager',
    name: 'Gestor de Dispositivos y Sesiones LOPDP',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Panel de seguridad de accesos con IP, navegador, último acceso y botón de cierre remoto de sesiones.',
    iconName: 'Shield',
    generator: genBatch2.generateDeviceSecurityManager
  },
  {
    id: 'digital-cert-status',
    name: 'Estado de Certificado de Firma Digital P12',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Widget de monitoreo de validez de firma electrónica PAdES/SRI con fecha de expiración y emisor oficial.',
    iconName: 'KeyRound',
    generator: genBatch2.generateDigitalCertStatus
  },
  {
    id: 'prescriptions-table',
    name: 'Tabla de Recetas Electrónicas PAdES',
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Historial de prescripciones emitidas con identificación, paciente, medicamento, código QR y descarga PDF.',
    iconName: 'FileText',
    generator: genBatch2.generatePrescriptionsTable
  },

  // NAVBARS (4)
  {
    id: 'navbar-header',
    name: 'Cabecera Principal de Navegación (Header Nav)',
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Barra superior horizontal con isotipo institucional, menú de navegación principal y botón de agendamiento.',
    iconName: 'Navigation',
    generator: genLayouts.generateNavbarHeader
  },
  {
    id: 'dock-action',
    name: 'Dock Flotante de Acciones Rápidas',
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Cápsula inferior suspendida estilo macOS con accesos directos táctiles y respuesta háptica.',
    iconName: 'Layers',
    generator: genLayouts.generateFloatingDock
  },
  {
    id: 'medical-sidebar',
    name: 'Panel Lateral Médico de la Doctora',
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Columna vertical de navegación clínica para historias clínicas, recetas digitales y pacientes.',
    iconName: 'Menu',
    generator: genErika.generateMedicalSidebar
  },
  {
    id: 'footer-institutional',
    name: 'Pie de Página Institucional (Footer)',
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Footer completo de 4 columnas con enlaces institucionales, datos de contacto, copyright y cumplimiento LOPDP.',
    iconName: 'Navigation',
    generator: genBatch2.generateFooterInstitutional
  },

  // HEROS (3)
  {
    id: 'hero-showcase',
    name: 'Hero Principal de Conversión & Marca',
    category: 'heros',
    categoryLabel: 'Heros & Cabeceras',
    summary: 'Sección de apertura monumental con titular de autor, subtítulo persuasivo, doble CTA y sellos de confianza.',
    iconName: 'Sparkles',
    generator: genLayouts.generateHeroShowcase
  },
  {
    id: 'masked-video-player',
    name: 'Reproductor de Video Clínico Enmascarado',
    category: 'heros',
    categoryLabel: 'Heros & Cabeceras',
    summary: 'Ventana audiovisual con máscara orgánica asimétrica, botón de reproducción Play y badge de duración.',
    iconName: 'Video',
    generator: genErika.generateMaskedVideoPlayer
  },
  {
    id: 'hero-countdown',
    name: 'Hero con Cuenta Regresiva en Vivo',
    category: 'heros',
    categoryLabel: 'Heros & Cabeceras',
    summary: 'Sección de impacto con temporizador interactivo de cuenta regresiva (Días, Horas, Minutos, Segundos) y llamado a la acción.',
    iconName: 'Timer',
    generator: genBatch2.generateHeroCountdown
  },

  // TESTIMONIALS (1)
  {
    id: 'testimonial',
    name: 'Testimonio Ejecutivo de Autoridad',
    category: 'testimonials',
    categoryLabel: 'Testimonios & Social Proof',
    summary: 'Tarjeta de reseña de alta fidelidad con comillas tipográficas, 5 estrellas y credenciales del paciente.',
    iconName: 'MessageSquare',
    isExisting: true
  },

  // MODALS (4)
  {
    id: 'auth',
    name: 'Modal de Acceso / Security Gateway',
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Ventana de autenticación protegida con campos de cédula/clave, cifrado criptográfico y recuperación de acceso.',
    iconName: 'Shield',
    isExisting: true
  },
  {
    id: 'cookie-consent-banner',
    name: 'Banner de Consentimiento de Cookies & LOPDP',
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Banner inferior flotante de cumplimiento de privacidad en Ecuador con botones de aceptación y configuración.',
    iconName: 'ShieldAlert',
    generator: genBatch2.generateCookieConsentBanner
  },
  {
    id: 'sri-invoice-modal',
    name: 'Modal de Facturación Electrónica SRI',
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Ventana modal con cálculo de servicios, IVA al 15% y botón de emisión de comprobante electrónico XAdES.',
    iconName: 'Receipt',
    generator: genBatch2.generateSriInvoiceModal
  },
  {
    id: 'whatsapp-share-modal',
    name: 'Modal de Envío por WhatsApp',
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal para despachar recetas o confirmaciones de consulta directamente al WhatsApp del paciente.',
    iconName: 'MessageCircle',
    generator: genBatch2.generateWhatsappShareModal
  },

  // FAQ (2)
  {
    id: 'faq',
    name: 'Acordeón de Preguntas Frecuentes FAQ',
    category: 'faq',
    categoryLabel: 'Preguntas Frecuentes',
    summary: 'Lista expandible de dudas sobre firma electrónica PAdES, recetas médicas y cobertura de aseguradoras.',
    iconName: 'HelpCircle',
    isExisting: true
  },
  {
    id: 'branch-faq-accordion',
    name: 'Acordeón de Preguntas por Especialidad',
    category: 'faq',
    categoryLabel: 'Preguntas Frecuentes',
    summary: 'Acordeón médico interactivo organizado por ramas clínicas con respuestas detalladas y chevrons animados.',
    iconName: 'HelpCircle',
    generator: genBatch2.generateBranchFaqAccordion
  },

  // CAROUSELS (3)
  {
    id: 'marquee',
    name: 'Marquesina Infinita Continua (Ticker)',
    category: 'carousels',
    categoryLabel: 'Carruseles & Sliders',
    summary: 'Cinta cinética continua con logos de convenios aseguradores (Saludsa, Humana, Bupa) y sellos SRI.',
    iconName: 'Repeat',
    generator: genLayouts.generateMarquee
  },
  {
    id: 'slider',
    name: 'Slider Interactivo de Diapositivas',
    category: 'carousels',
    categoryLabel: 'Carruseles & Sliders',
    summary: 'Carrusel de fases de servicio con botones anterior/siguiente y barra de paginación sincronizada.',
    iconName: 'Sliders',
    generator: genLayouts.generateSlider
  },
  {
    id: 'clinical-album',
    name: 'Galería & Álbum Fotográfico Clínico',
    category: 'carousels',
    categoryLabel: 'Carruseles & Sliders',
    summary: 'Tarjeta fotográfica 16:9 con badge "+12 fotos", etiquetas de procedimiento y zoom.',
    iconName: 'Image',
    generator: genErika.generateClinicalAlbum
  }
];

console.log('--- PASO 2: Generando componentes en vault ---');
MASTER_ELEMENTS.forEach(elem => {
  const elemDir = path.join(ELEMENTS_DIR, elem.id);
  if (!fs.existsSync(elemDir)) {
    fs.mkdirSync(elemDir, { recursive: true });
  }

  STYLES.forEach(st => {
    const fileName = `${elem.id}-${st.suffix}.tsx`;
    const filePath = path.join(elemDir, fileName);

    if (elem.generator) {
      let code = elem.generator(st.id);
      if (!code.includes('export default') && !code.includes('as default')) {
        const namedMatches = [...code.matchAll(/export\s+function\s+([A-Za-z0-9_]+)/g)].map(m => m[1]);
        if (namedMatches.length > 0) {
          code += `\nexport default ${namedMatches[0]};\n`;
        }
      }
      fs.writeFileSync(filePath, code);
    } else if (elem.isExisting) {
      if (!fs.existsSync(filePath)) {
        console.warn(`Alerta: ${filePath} no existe.`);
      } else {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('export default') && !content.includes('as default')) {
          const namedMatches = [...content.matchAll(/export\s+function\s+([A-Za-z0-9_]+)/g)].map(m => m[1]);
          if (namedMatches.length > 0) {
            content += `\nexport default ${namedMatches[0]};\n`;
            fs.writeFileSync(filePath, content);
          }
        }
      }
    }
  });
  console.log(`✓ Procesado elemento: ${elem.id} (${elem.name})`);
});

// 3. SINCRONIZAR chameleonFamilies.ts
console.log('--- PASO 3: Sincronizando chameleonFamilies.ts ---');

const categories = [
  { id: "cards", label: "Cards & Precios", iconName: "CreditCard", description: "Tarjetas de precios, perfiles, fichas clínicas 360, telemetría y newsletter" },
  { id: "widgets", label: "Widgets & Herramientas", iconName: "Sliders", description: "Calculadoras, clima, relojes, controles, buscador CIE-10 y citas" },
  { id: "navbars", label: "Barras de Navegación", iconName: "Menu", description: "Headers superiores, docks flotantes, menús laterales y footers" },
  { id: "heros", label: "Heros & Cabeceras", iconName: "Sparkles", description: "Secciones principales de impacto visual, countdowns y videos" },
  { id: "testimonials", label: "Testimonios & Social Proof", iconName: "MessageSquare", description: "Citas de autoridad, reseñas verificadas y recomendaciones" },
  { id: "modals", label: "Modales & Diálogos", iconName: "Shield", description: "Ventanas de autenticación segura, cookies y facturación SRI" },
  { id: "faq", label: "Preguntas Frecuentes", iconName: "HelpCircle", description: "Acordeones interactivos de información clínica y especialidades" },
  { id: "carousels", label: "Carruseles & Sliders", iconName: "Repeat", description: "Marquesinas de convenios, sliders dinámicos y álbumes fotográficos" }
];

const familiesData = MASTER_ELEMENTS.map(elem => {
  return {
    id: elem.id,
    name: elem.name,
    category: elem.category,
    categoryLabel: elem.categoryLabel,
    summary: elem.summary,
    iconName: elem.iconName,
    isPolymorphic: true,
    variants: STYLES.map(st => {
      return {
        style: st.id,
        styleLabel: st.label,
        componentId: `${elem.id}-${st.suffix}`,
        title: `${elem.name} · ${st.label}`,
        description: `Variante ${st.label} de ${elem.name}. Arquitectura polimórfica 100% simétrica con código limpio TypeScript.`
      };
    })
  };
});

const chameleonFamiliesContent = `// Catálogo Oficial de Familias Polimórficas (Chameleon Pattern)
// Arquitectura 100% Simétrica: Cada elemento existe en los 7 sistemas de diseño oficiales
// Cero Clones: Cada elemento posee una estructura anatómica de wireframe única

export interface ChameleonVariant {
  style: "neo-brutalism" | "glassmorphism" | "liquid-glass" | "neumorphism" | "claymorphism" | "minimalism" | "cyberpunk";
  styleLabel: string;
  componentId: string;
  title: string;
  description: string;
}

export interface ChameleonFamily {
  id: string;
  name: string;
  category: "cards" | "widgets" | "navbars" | "heros" | "testimonials" | "modals" | "faq" | "carousels";
  categoryLabel: string;
  summary: string;
  iconName: string;
  isPolymorphic: boolean;
  variants: ChameleonVariant[];
}

export interface ElementCategory {
  id: "cards" | "widgets" | "navbars" | "heros" | "testimonials" | "modals" | "faq" | "carousels";
  label: string;
  iconName: string;
  description: string;
}

export const ELEMENT_CATEGORIES: ElementCategory[] = ${JSON.stringify(categories, null, 2)};

export const CHAMELEON_FAMILIES: ChameleonFamily[] = ${JSON.stringify(familiesData, null, 2)};

export function getFamilyById(id: string): ChameleonFamily | undefined {
  return CHAMELEON_FAMILIES.find((f) => f.id === id);
}

export function getFamiliesByCategory(category: string): ChameleonFamily[] {
  if (category === "all") return CHAMELEON_FAMILIES;
  return CHAMELEON_FAMILIES.filter((f) => f.category === category);
}

export function getVariant(familyId: string, styleId: string): ChameleonVariant | undefined {
  const family = getFamilyById(familyId);
  if (!family) return undefined;
  return family.variants.find((v) => v.style === styleId);
}
`;

fs.writeFileSync(path.join(VIEWER_DIR, 'src/chameleonFamilies.ts'), chameleonFamiliesContent);
console.log('✓ chameleonFamilies.ts generado con ' + MASTER_ELEMENTS.length + ' familias.');

// 4. SINCRONIZAR registry.tsx
console.log('--- PASO 4: Sincronizando registry.tsx ---');

let registryImports = `import React from 'react';\n\n`;
let registryEntries = `export const ComponentRegistry: Record<string, React.ComponentType<any>> = {\n`;

MASTER_ELEMENTS.forEach(elem => {
  STYLES.forEach(st => {
    const compId = `${elem.id}-${st.suffix}`;
    const pascalElem = toPascal(elem.id);
    const pascalStyle = toPascal(st.suffix);
    const varName = `${pascalElem}_${pascalStyle}`;

    registryImports += `import { default as ${varName} } from '../../vault/components/elements/${elem.id}/${compId}';\n`;
    registryEntries += `  '${compId}': ${varName},\n`;
  });
});

registryEntries += `};\n\nexport const COMPONENT_REGISTRY = ComponentRegistry;\nexport default ComponentRegistry;\n`;

const fullRegistry = registryImports + '\n' + registryEntries;
fs.writeFileSync(path.join(VIEWER_DIR, 'src/registry.tsx'), fullRegistry);
console.log('✓ registry.tsx generado con ' + (MASTER_ELEMENTS.length * STYLES.length) + ' componentes.');

// 5. SINCRONIZAR vault/catalog.json
console.log('--- PASO 5: Sincronizando catalog.json ---');

const catalogComponents = [];
MASTER_ELEMENTS.forEach(elem => {
  STYLES.forEach(st => {
    const compId = `${elem.id}-${st.suffix}`;
    const filePath = path.join(ELEMENTS_DIR, elem.id, `${compId}.tsx`);
    let code = '';
    if (fs.existsSync(filePath)) {
      code = fs.readFileSync(filePath, 'utf8');
    }

    catalogComponents.push({
      id: compId,
      name: `${elem.name} · ${st.label}`,
      category: elem.category,
      style: st.id,
      elementFamily: elem.id,
      description: `Variante ${st.label} de ${elem.name}. Arquitectura polimórfica 100% simétrica con código limpio TypeScript.`,
      tags: [elem.category, elem.id, st.suffix, 'polymorphic', 'zero-clones'],
      code: code
    });
  });
});

const catalog = {
  version: "2.1.0",
  updatedAt: new Date().toISOString(),
  architecture: "Chameleon Polymorphic - Zero Wireframe Clones",
  summary: {
    totalElements: MASTER_ELEMENTS.length,
    totalStyles: STYLES.length,
    totalComponents: catalogComponents.length,
    elementsByCategory: {
      cards: MASTER_ELEMENTS.filter(e => e.category === 'cards').length,
      widgets: MASTER_ELEMENTS.filter(e => e.category === 'widgets').length,
      navbars: MASTER_ELEMENTS.filter(e => e.category === 'navbars').length,
      heros: MASTER_ELEMENTS.filter(e => e.category === 'heros').length,
      testimonials: MASTER_ELEMENTS.filter(e => e.category === 'testimonials').length,
      modals: MASTER_ELEMENTS.filter(e => e.category === 'modals').length,
      faq: MASTER_ELEMENTS.filter(e => e.category === 'faq').length,
      carousels: MASTER_ELEMENTS.filter(e => e.category === 'carousels').length
    }
  },
  categories: categories,
  styles: STYLES,
  components: catalogComponents
};

fs.writeFileSync(path.join(VAULT_ROOT, 'catalog.json'), JSON.stringify(catalog, null, 2));
console.log('✓ catalog.json actualizado con ' + catalogComponents.length + ' componentes y métricas de anatomía única.');

console.log('--- Proceso de Reconstrucción Maestro Finalizado ---');
