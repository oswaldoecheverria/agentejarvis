const fs = require('fs');
const path = require('path');

const VAULT_ROOT = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_ROOT, 'components/elements');
const VIEWER_DIR = 'F:/proyectos/agentepersonal/viewer';

// Cargar generadores
const genBatch2 = require('./generators_batch2_erikasalud.js');
const genNavFaq = require('./generators_batch3_nav_faq.js');
const genTablesFormsCards = require('./generators_batch3_tables_forms_cards.js');

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

// 1. CARGAR LAS 37 FAMILIAS EXISTENTES DESDE chameleonFamilies.ts
const existingChameleon = require('../viewer/src/chameleonFamilies.ts');
const existingFamilies = existingChameleon.CHAMELEON_FAMILIES || [];

console.log(`Existentes en memoria: ${existingFamilies.length} familias.`);

// 2. DEFINIR LAS 26 NUEVAS FAMILIAS AUTÉNTICAS DE ERIKASALUD BATCH 3
const NEW_BATCH3_ELEMENTS = [
  // --- NAVBARS & NAVEGACIÓN (5 nuevas -> Total: 9) ---
  {
    id: 'bottom-nav',
    name: "Barra de Navegación Móvil Inferior (Bottom Nav)",
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Dock móvil táctil de 5 accesos directos con micro-badges numéricos de alertas y retroalimentación táctil.',
    iconName: 'Compass',
    generator: genNavFaq.generateBottomNav
  },
  {
    id: 'sidebar-nav',
    name: "Barra Lateral Institucional & Médica (Sidebar Nav)",
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Menú lateral colapsable con perfil de la doctora, estado de conexión y contadores de expedientes.',
    iconName: 'Menu',
    generator: genNavFaq.generateSidebarNav
  },
  {
    id: 'specialties-nav-ribbon',
    name: "Cinta de Especialidades Navegable (Specialties Ribbon)",
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Cinta horizontal interactiva de ramas clínicas con desplazamiento suave e indicador de estado activo.',
    iconName: 'Sliders',
    generator: genNavFaq.generateSpecialtiesNavRibbon
  },
  {
    id: 'smart-tabs-ribbon',
    name: "Pestañas Inteligentes Segmentadas (Smart Tabs)",
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Barra de pestañas segmentadas con cápsula deslizante e insignias de conteo por sección.',
    iconName: 'Layers',
    generator: genNavFaq.generateSmartTabsRibbon
  },
  {
    id: 'user-menu-popover',
    name: "Menú Desplegable de Usuario & Doctora (User Popover)",
    category: 'navbars',
    categoryLabel: 'Barras de Navegación',
    summary: 'Popover flotante con perfil médico, credenciales MSP, configuración de firma SRI y cierre de sesión.',
    iconName: 'UserCheck',
    generator: genNavFaq.generateUserMenuPopover
  },

  // --- ACORDEONES & FAQ (3 nuevas -> Total: 5) ---
  {
    id: 'faq-question-box',
    name: "Caja de Pregunta Clínica Individual (Faq Box)",
    category: 'faq',
    categoryLabel: 'Preguntas Frecuentes',
    summary: 'Caja interactiva de consulta puntual con insignia de validez legal, panel expandible y enlace a WhatsApp.',
    iconName: 'HelpCircle',
    generator: genNavFaq.generateFaqQuestionBox
  },
  {
    id: 'branch-groups-accordion',
    name: "Acordeón Jerárquico por Grupos Clínicos",
    category: 'faq',
    categoryLabel: 'Preguntas Frecuentes',
    summary: 'Acordeón multinivel con sub-servicios clasificados por Medicina Preventiva, Materno-Infantil y Procedimientos.',
    iconName: 'HelpCircle',
    generator: genNavFaq.generateBranchGroupsAccordion
  },
  {
    id: 'blog-topics-accordion',
    name: "Índice Acordeón de Tópicos Editoriales",
    category: 'faq',
    categoryLabel: 'Preguntas Frecuentes',
    summary: 'Directorio expandible de divulgación médica clasificado por especialidades con contadores de artículos.',
    iconName: 'BookOpen',
    generator: genNavFaq.generateBlogTopicsAccordion
  },

  // --- MODALES & WIZARDS (5 nuevas -> Total: 11) ---
  {
    id: 'newsletter-digest-wizard',
    name: "Asistente Wizard de Boletín Médico (Digest Stepper)",
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal interactivo de 3 pasos para redacción, segmentación de pacientes y despacho con firma institucional.',
    iconName: 'Mail',
    generator: genNavFaq.generateNewsletterDigestWizard
  },
  {
    id: 'sri-credentials-modal',
    name: "Configuración de Firma Electrónica SRI (.p12)",
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal de credenciales tributarias para subida de certificado .p12, clave y switch de ambiente SRI.',
    iconName: 'Key',
    generator: genNavFaq.generateSriCredentialsModal
  },
  {
    id: 'medical-certificate-modal',
    name: "Emisión de Certificado Médico con Reposo",
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal legal para expedición de certificados de reposo laboral con validación CIE-10 y sello QR.',
    iconName: 'FileBadge',
    generator: genNavFaq.generateMedicalCertificateModal
  },
  {
    id: 'media-picker-modal',
    name: "Selector Universal de Medios & Galería",
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal selector de imágenes y documentos clínicos con cuadrícula de selección y formatos WebP.',
    iconName: 'Image',
    generator: genNavFaq.generateMediaPickerModal
  },
  {
    id: 'album-lightbox-modal',
    name: "Visor Lightbox de Fotografías Clínicas",
    category: 'modals',
    categoryLabel: 'Modales & Diálogos',
    summary: 'Modal de visualización de fotos en alta resolución con controles de navegación previa/siguiente y pie explicativo.',
    iconName: 'Maximize2',
    generator: genNavFaq.generateAlbumLightboxModal
  },

  // --- TABLAS DE DATOS & DIRECTORIOS (Clasificadas en Cards) ---
  {
    id: 'patient-directory-table',
    name: "Directorio de Pacientes con Búsqueda en Vivo",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tabla interactiva de expedientes con filtrado por cédula, edad, fecha de atención y acceso a historia.',
    iconName: 'Users',
    generator: genTablesFormsCards.generatePatientDirectoryTable
  },
  {
    id: 'prescriptions-issued-table',
    name: "Historial de Recetas Electrónicas Emitidas",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tabla clínica de prescripciones con código correlativo, diagnóstico CIE-10 y verificación criptográfica.',
    iconName: 'FileText',
    generator: genTablesFormsCards.generatePrescriptionsIssuedTable
  },
  {
    id: 'newsletter-subscribers-table',
    name: "Tabla de Suscriptores con Exportación CSV",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Gestor de suscriptores al boletín médico con estado de doble opt-in y herramienta de exportación.',
    iconName: 'Mail',
    generator: genTablesFormsCards.generateNewsletterSubscribersTable
  },
  {
    id: 'sri-invoices-table',
    name: "Tabla de Facturas Autorizadas SRI",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Comprobantes electrónicos autorizados por el SRI con desglose de montos y descarga de RIDE en PDF.',
    iconName: 'Receipt',
    generator: genTablesFormsCards.generateSriInvoicesTable
  },

  // --- FORMULARIOS & TRIAJE (Clasificados en Widgets) ---
  {
    id: 'triage-consultation-form',
    name: "Formulario de Triaje & Constantes Vitales",
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Registro clínico de presión arterial, frecuencia cardíaca, temperatura y motivo de consulta.',
    iconName: 'Activity',
    generator: genTablesFormsCards.generateTriageConsultationForm
  },
  {
    id: 'prescription-writer-form',
    name: "Creador de Prescripción Farmacológica",
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Formulario de dosimetría médica con selector de principio activo, posología horaria y duración.',
    iconName: 'Pill',
    generator: genTablesFormsCards.generatePrescriptionWriterForm
  },
  {
    id: 'patient-intake-form',
    name: "Formulario de Alta & Registro de Paciente",
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Captura de datos personales con validación de cédula de Ecuador Módulo 10 y contacto de emergencia.',
    iconName: 'UserPlus',
    generator: genTablesFormsCards.generatePatientIntakeForm
  },
  {
    id: 'campaign-registration-form',
    name: "Formulario de Inscripción a Jornadas de Salud",
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Tarjeta de registro para jornadas preventivas con selección de turno matutino/vespertino.',
    iconName: 'Sparkles',
    generator: genTablesFormsCards.generateCampaignRegistrationForm
  },

  // --- TARJETAS & WIDGETS DE IMPACTO (Cards, Widgets, Carousels) ---
  {
    id: 'partner-coverage-card',
    name: "Tarjeta de Cobertura con Aseguradoras",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta de convenio de salud (Saludsa, Humana, Bupa) con porcentaje de cobertura y línea de atención.',
    iconName: 'ShieldCheck',
    generator: genTablesFormsCards.generatePartnerCoverageCard
  },
  {
    id: 'medical-branch-card',
    name: "Tarjeta de Rama Clínica & Especialidad",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta institucional de especialidad con lista de prestaciones médicas y botón de agendamiento.',
    iconName: 'Stethoscope',
    generator: genTablesFormsCards.generateMedicalBranchCard
  },
  {
    id: 'service-offering-card',
    name: "Tarjeta de Servicio Clínico con Precio Fijo",
    category: 'cards',
    categoryLabel: 'Cards & Precios',
    summary: 'Tarjeta de procedimiento médico individual con duración en minutos, honorarios en USD y requisitos.',
    iconName: 'Clock',
    generator: genTablesFormsCards.generateServiceOfferingCard
  },
  {
    id: 'campaign-video-card',
    name: "Tarjeta de Video Médico Enmarcado",
    category: 'carousels',
    categoryLabel: 'Carruseles & Sliders',
    summary: 'Reproductor de video institucional enmarcado con badge de duración y transcripción médica.',
    iconName: 'Play',
    generator: genTablesFormsCards.generateCampaignVideoCard
  },
  {
    id: 'route-notification-toast',
    name: "Toast Flotante de Notificación del Sistema",
    category: 'widgets',
    categoryLabel: 'Widgets & Herramientas',
    summary: 'Micro-alerta flotante de confirmación de cita o receta con botón de cierre y estilo de éxito.',
    iconName: 'CheckCircle2',
    generator: genTablesFormsCards.generateRouteNotificationToast
  }
];

console.log(`Nuevos elementos Batch 3: ${NEW_BATCH3_ELEMENTS.length} familias.`);

// 3. GENERAR ARCHIVOS TSX PARA LAS 26 NUEVAS FAMILIAS
console.log('--- PASO 1: Generando archivos TSX para los nuevos componentes ---');

let createdCount = 0;
NEW_BATCH3_ELEMENTS.forEach(elem => {
  const elemDir = path.join(ELEMENTS_DIR, elem.id);
  if (!fs.existsSync(elemDir)) {
    fs.mkdirSync(elemDir, { recursive: true });
  }

  STYLES.forEach(st => {
    const compId = `${elem.id}-${st.suffix}`;
    const filePath = path.join(elemDir, `${compId}.tsx`);

    let code = elem.generator(st.id);

    // Asegurar export default
    if (!code.includes('export default')) {
      const match = code.match(/export function ([A-Za-z0-9_]+)/);
      if (match) {
        code += `\nexport default ${match[1]};\n`;
      }
    }

    fs.writeFileSync(filePath, code, 'utf8');
    createdCount++;
  });
});

console.log(`✓ Creados ${createdCount} archivos TSX para las 26 nuevas familias.`);

// 4. COMBINAR TODAS LAS FAMILIAS (EXISTENTES + NUEVAS)
const ALL_FAMILIES = [...existingFamilies];

NEW_BATCH3_ELEMENTS.forEach(elem => {
  // Evitar duplicados si ya existiera
  if (!ALL_FAMILIES.some(f => f.id === elem.id)) {
    const variants = STYLES.map(st => ({
      style: st.id,
      title: `${elem.name} · ${st.label}`,
      componentId: `${elem.id}-${st.suffix}`,
      description: `Variante ${st.label} de ${elem.name}. Arquitectura polimórfica 100% simétrica con código limpio TypeScript.`
    }));

    ALL_FAMILIES.push({
      id: elem.id,
      name: elem.name,
      category: elem.category,
      categoryLabel: elem.categoryLabel,
      summary: elem.summary,
      iconName: elem.iconName,
      isPolymorphic: true,
      variants
    });
  }
});

console.log(`Total Familias Camaleón Consolidado: ${ALL_FAMILIES.length} familias.`);

// 5. ACTUALIZAR chameleonFamilies.ts
const categories = [
  { id: "cards", label: "Cards & Precios", iconName: "CreditCard", description: "Tarjetas de precios, perfiles, fichas clínicas 360, telemetría y tablas de pacientes" },
  { id: "widgets", label: "Widgets & Herramientas", iconName: "Sliders", description: "Calculadoras, clima, relojes, controles, buscador CIE-10, triaje y recetas" },
  { id: "navbars", label: "Barras de Navegación", iconName: "Menu", description: "Headers superiores, docks flotantes, bottom nav, menús laterales y tabs" },
  { id: "heros", label: "Heros & Cabeceras", iconName: "Sparkles", description: "Secciones principales de impacto visual, countdowns y videos" },
  { id: "testimonials", label: "Testimonios & Social Proof", iconName: "MessageSquare", description: "Citas de autoridad, reseñas verificadas y recomendaciones" },
  { id: "modals", label: "Modales & Diálogos", iconName: "Shield", description: "Ventanas de autenticación segura, cookies, certificados y wizards" },
  { id: "faq", label: "Preguntas Frecuentes", iconName: "HelpCircle", description: "Acordeones interactivos de información clínica, especialidades y blog" },
  { id: "carousels", label: "Carruseles & Sliders", iconName: "Repeat", description: "Marquesinas de convenios, sliders dinámicos, videos y álbumes fotográficos" }
];

const chameleonFamiliesContent = `// Catálogo Oficial de Familias Polimórficas (Camaleón)
// Generado dinámicamente con anatomía de wireframe 100% singular y cero duplicados

export interface ChameleonVariant {
  style: string;
  title: string;
  componentId: string;
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

export const CHAMELEON_FAMILIES: ChameleonFamily[] = ${JSON.stringify(ALL_FAMILIES, null, 2)};

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

fs.writeFileSync(path.join(VIEWER_DIR, 'src/chameleonFamilies.ts'), chameleonFamiliesContent, 'utf8');
console.log('✓ chameleonFamilies.ts actualizado con éxito.');

// 6. ACTUALIZAR catalog.json
const catalogComponents = [];

ALL_FAMILIES.forEach(fam => {
  fam.variants.forEach(v => {
    const filePath = path.join(ELEMENTS_DIR, fam.id, `${v.componentId}.tsx`);
    let code = '';
    if (fs.existsSync(filePath)) {
      code = fs.readFileSync(filePath, 'utf8');
    }

    catalogComponents.push({
      id: v.componentId,
      name: v.title,
      category: fam.category,
      style: v.style,
      elementFamily: fam.id,
      description: v.description,
      tags: [fam.category, fam.id, v.style, 'polymorphic', 'zero-clones'],
      code
    });
  });
});

const catalog = {
  version: "3.0.0",
  updatedAt: new Date().toISOString(),
  architecture: "Chameleon Polymorphic - Zero Wireframe Clones",
  summary: {
    totalElements: ALL_FAMILIES.length,
    totalStyles: STYLES.length,
    totalComponents: catalogComponents.length,
    elementsByCategory: {
      cards: ALL_FAMILIES.filter(e => e.category === 'cards').length,
      widgets: ALL_FAMILIES.filter(e => e.category === 'widgets').length,
      navbars: ALL_FAMILIES.filter(e => e.category === 'navbars').length,
      heros: ALL_FAMILIES.filter(e => e.category === 'heros').length,
      testimonials: ALL_FAMILIES.filter(e => e.category === 'testimonials').length,
      modals: ALL_FAMILIES.filter(e => e.category === 'modals').length,
      faq: ALL_FAMILIES.filter(e => e.category === 'faq').length,
      carousels: ALL_FAMILIES.filter(e => e.category === 'carousels').length
    }
  },
  categories,
  styles: STYLES,
  components: catalogComponents
};

fs.writeFileSync(path.join(VAULT_ROOT, 'catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');
console.log(`✓ catalog.json actualizado con ${catalogComponents.length} componentes totales.`);

console.log('=== Sincronización Batch 3 Completada Exitosamente ===');
