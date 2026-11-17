const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');
const REGISTRY_PATH = 'F:/proyectos/agentepersonal/viewer/src/registry.tsx';
const CHAMELEON_PATH = 'F:/proyectos/agentepersonal/viewer/src/chameleonFamilies.ts';
const CATALOG_PATH = path.join(VAULT_DIR, 'catalog.json');

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

// 35 Familias Canónicas con Diversidad Anatómica Total (Cero Clones)
const ALL_FAMILIES = [
  // ================= CARDS & PRECIOS (8 familias) =================
  { id: 'pricing', name: "Tarjeta de Precios 'Plan Pro $29'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Tarjeta de precios con checks y botón de acción principal adaptado fielmente a todos los estilos." },
  { id: 'profile', name: "Perfil de Usuario 'Alexander Vance'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'User', summary: "Tarjeta de perfil ejecutivo con avatar, métricas y badges de reputación." },
  { id: 'bento', name: "Feature Bento Highlight Card", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'LayoutGrid', summary: "Tarjeta modular Bento para destacar funcionalidades clave y arquitecturas." },
  { id: 'stat', name: "Tarjeta de Métrica & Telemetría 24h", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'Zap', summary: "Telemetría real con gráfico sparkline de 7 días, volumen TPS y latencia." },
  { id: 'newsletter', name: "Tarjeta de Suscripción & Newsletter", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'Mail', summary: "Captura de leads con input interactivo de email, micro-garantía LOPDP y botón integrado." },
  { id: 'medical-plan', name: "Plan Médico Familiar 'Salud Total'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'HeartPulse', summary: "Plan de cobertura médica con modalidad Domicilio/Consultorio, precio desglosado y checks clínicos." },
  { id: 'medical-service', name: "Tarjeta de Consulta & Especialidad Médica", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'Stethoscope', summary: "Tarjeta clínica con badge de modalidad (Telemedicina/Presencial), precio referencial y llamada a cita." },
  { id: 'patient-record', name: "Ficha Clínica 360 del Paciente", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'ShieldCheck', summary: "Expediente médico auténtico: Cédula Módulo 10, alerta roja de alergias, 3 signos vitales y código CIE-10." },

  // ================= WIDGETS & HERRAMIENTAS (8 familias) =================
  { id: 'calculator', name: "Calculadora Funcional Interactiva", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Calculator', summary: "Calculadora completa con operaciones matemáticas y display reactivo." },
  { id: 'clock', name: "Reloj Análogo en Tiempo Real", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Clock', summary: "Reloj con segundero continuo y esfera de diseño estilizado." },
  { id: 'control', name: "Interruptor Inteligente & Switch Domótico", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de potencia y dimmer de intensidad lumínica con feedback táctil." },
  { id: 'weather', name: "Clima & Pronóstico del Tiempo", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sun', summary: "Tarjeta meteorológica con temperatura, sensación y humedad." },
  { id: 'audio', name: "Reproductor de Audio & Podcast Capsule", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de reproducción de música, barra de tiempo y volumen interactivo." },
  { id: 'pill-ribbon', name: "Cinta de Filtros en Píldora (Segmented Ribbon)", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Selector horizontal de píldoras/chips redondeados con micro-badges numéricos de conteo." },
  { id: 'cie10-search', name: "Buscador Inteligente CIE-10 OMS", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Search', summary: "Input clínico inteligente con autocompletado en vivo de patologías médicas y códigos de la OMS." },
  { id: 'appointment-calendar', name: "Calendario de Citas & Horarios Médicos", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Calendar', summary: "Matriz interactiva de días de la semana y slots de turno disponibles (mañana/tarde)." },

  // ================= NAVBARS & DOCKS (3 familias) =================
  { id: 'navbar', name: "Cabecera Principal de Navegación", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Compass', summary: "Barra superior de navegación con logotipo, enlaces clave y botón CTA." },
  { id: 'dock', name: "Dock Flotante de Acciones Rápidas", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Layers', summary: "Dock suspendido estilo macOS con accesos directos y respuesta háptica." },
  { id: 'medical-sidebar', name: "Menú Lateral / Panel Médico de Doctora", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Compass', summary: "Barra de navegación lateral clínica con accesos a pacientes, recetas, citas y estado de sesión." },

  // ================= HEROS & 3D CANVAS (4 familias) =================
  { id: 'hero', name: "Hero Principal de Conversión", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'Sparkles', summary: "Sección principal de impacto con titular de autor y llamada a la acción." },
  { id: 'canvas', name: "Hero Cinemático & Canvas Escénico", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'MonitorPlay', summary: "Composición visual con atmósfera inmersiva, profundidad y cinemática." },
  { id: 'medical-hero', name: "Hero Clínico Inmersivo de Autor", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'Stethoscope', summary: "Cabecera médica con marco perimetral HUD de precisión, registro MSP y botón directo a cita." },
  { id: 'masked-video-player', name: "Reproductor de Video Clínico Enmascarado", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'MonitorPlay', summary: "Marco de video con bordes orgánicos curvados, botón central de play y badge de duración." },

  // ================= TESTIMONIOS (2 familias) =================
  { id: 'testimonial', name: "Testimonio Ejecutivo 'Marcus Lindqvist'", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Cita destacada con avatar de autor, valoración en estrellas y cargo corporativo." },
  { id: 'review', name: "Burbuja de Reseña Social & Rating", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Tarjeta de feedback de comunidad con badge verificado y puntuación." },

  // ================= MODALES & AUTH (3 familias) =================
  { id: 'auth', name: "Modal de Acceso / Security Gateway", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Pasarela de autenticación con campos de email/password y estados de login." },
  { id: 'confirm', name: "Diálogo de Confirmación Crítica", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Modal de advertencia con opciones de cancelar y confirmar acción irreversible." },
  { id: 'appointment-modal', name: "Modal de Reserva de Cita Médica", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Calendar', summary: "Modal flotante de reserva con selección de país (Ecuador/Internacional) y consentimiento LOPDP." },

  // ================= ACORDEONES & FAQ (3 familias) =================
  { id: 'faq', name: "Acordeón de Preguntas Frecuentes FAQ", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Grupo desplegable de soporte con apertura suave y respuestas explicativas." },
  { id: 'help', name: "Cápsula de Ayuda Rápida & Tips", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Panel de asistencia rápida con atajos de soporte y preguntas recurrentes." },
  { id: 'medical-faq', name: "Acordeón Clínico & Recetas Electrónicas", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Desplegable de preguntas sobre validez de recetas SRI, firma digital PAdES-BES y seguros." },

  // ================= CAROUSELS & SLIDERS (4 familias) =================
  { id: 'marquee', name: "Marquesina Infinita Cinética", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Cinta continua con animación fluida GPU para logotipos y métricas destacadas." },
  { id: 'slider', name: "Slider Interactivo de Diapositivas", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'LayoutGrid', summary: "Carrusel con controles de paginación y navegación fluida entre tarjetas." },
  { id: 'clinical-album', name: "Galería & Álbum Fotográfico de Procedimientos", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Álbum fotográfico clínico con aspect ratio 16:9, zoom modal y tags de procedimiento." },
  { id: 'health-marquee', name: "Marquesina de Aliados Clínicos & Aseguradoras", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Cinta infinita animada de aseguradoras (Saludsa, Humana, Confiamed) y laboratorios aliados." }
];

// 1. GENERAR REGISTRY.TSX (245 Componentes)
console.log(`1. Generando viewer/src/registry.tsx para ${ALL_FAMILIES.length} familias (${ALL_FAMILIES.length * 7} componentes)...`);
const imports = [];
const registryEntries = [];

ALL_FAMILIES.forEach(fam => {
  STYLE_CONFIG.forEach(st => {
    const compName = capitalize(fam.id) + st.compSuffix;
    const compId = `${fam.id}-${st.suffix}`;
    const relPath = `@vault/components/elements/${fam.id}/${fam.id}-${st.suffix}`;
    imports.push(`import { ${compName} } from "${relPath}";`);
    registryEntries.push(`  "${compId}": ${compName},`);
  });
});

const registryContent = `import React from "react";

// Componentes Polimórficos de Autor (35 Familias x 7 Estilos = 245 Componentes Simétricos con Diversidad Anatómica)
${imports.join('\n')}

export const ComponentRegistry: Record<string, React.ComponentType<any>> = {
${registryEntries.join('\n')}
};

export default ComponentRegistry;
`;

fs.writeFileSync(REGISTRY_PATH, registryContent, 'utf-8');

// 2. GENERAR CHAMELEONFAMILIES.TS
console.log('2. Generando viewer/src/chameleonFamilies.ts...');

const chameleonFamilies = ALL_FAMILIES.map(fam => {
  const variants = STYLE_CONFIG.map(st => {
    const compId = `${fam.id}-${st.suffix}`;
    return {
      style: st.styleId,
      styleLabel: st.label,
      componentId: compId,
      title: `${fam.name} (${st.short})`,
      description: `Implementación oficial de ${fam.name} bajo el sistema de diseño ${st.label}.`
    };
  });

  return {
    id: fam.id,
    name: fam.name,
    category: fam.category,
    categoryLabel: fam.categoryLabel,
    summary: fam.summary,
    iconName: fam.icon,
    isPolymorphic: true,
    variants
  };
});

const chameleonContent = `export interface ChameleonVariant {
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

export const ELEMENT_CATEGORIES: ElementCategory[] = [
  { id: "cards", label: "Cards & Precios", iconName: "CreditCard", description: "Tarjetas de precios, perfiles, fichas clínicas 360, telemetría y newsletter" },
  { id: "widgets", label: "Widgets & Herramientas", iconName: "Sliders", description: "Cintas de píldoras, buscador CIE-10, calendarios, calculadoras y audio" },
  { id: "navbars", label: "Navbars & Docks", iconName: "Compass", description: "Barras de navegación, cabeceras, docks y menú lateral de doctora" },
  { id: "heros", label: "Heros & 3D", iconName: "Sparkles", description: "Heros clínicos inmersivos, videos enmascarados y lienzos cinemáticos" },
  { id: "testimonials", label: "Testimonios", iconName: "Quote", description: "Prueba social, valoraciones y citas ejecutivas" },
  { id: "modals", label: "Modales & Auth", iconName: "Lock", description: "Reserva de citas médicas, login seguro y confirmación crítica" },
  { id: "faq", label: "Acordeones & FAQ", iconName: "HelpCircle", description: "Preguntas clínicas, recetas electrónicas y centro de ayuda" },
  { id: "carousels", label: "Carruseles & Sliders", iconName: "Layers", description: "Álbumes fotográficos clínicos, marquesinas de aseguradoras y sliders" },
];

export const CHAMELEON_FAMILIES: ChameleonFamily[] = ${JSON.stringify(chameleonFamilies, null, 2)};
`;

fs.writeFileSync(CHAMELEON_PATH, chameleonContent, 'utf-8');

// 3. GENERAR CATALOG.JSON (245 Componentes)
console.log('3. Generando vault/catalog.json (245 componentes)...');

const catalog = [];

ALL_FAMILIES.forEach(fam => {
  STYLE_CONFIG.forEach(st => {
    const compId = `${fam.id}-${st.suffix}`;
    const compFile = `components/elements/${fam.id}/${fam.id}-${st.suffix}.tsx`;
    const fullCompPath = path.join(VAULT_DIR, compFile);
    let code = "";
    if (fs.existsSync(fullCompPath)) {
      code = fs.readFileSync(fullCompPath, 'utf-8');
    }

    const isErika = fam.id.startsWith("medical-") || fam.id === "patient-record" || fam.id.startsWith("appointment-") || fam.id === "health-marquee" || fam.id === "pill-ribbon" || fam.id === "cie10-search" || fam.id === "clinical-album" || fam.id === "masked-video-player";

    catalog.push({
      id: compId,
      familyId: fam.id,
      title: `${fam.name} · ${st.label}`,
      category: fam.category,
      style: st.styleId,
      tags: [fam.category, fam.id, st.styleId, isErika ? "erikasalud" : "core", "polymorphic", "diverse-wireframe"],
      sourceName: isErika ? "ErikaSalud Clinical Core" : "UI Vault Symmetrical Core",
      sourceUrl: isErika ? "https://erikasalud.com" : "https://uivault.internal",
      dateAdded: "2026-11-06",
      description: `Variante ${st.label} de ${fam.name}. Layout y anatomía de wireframe única y singular. Código limpio TypeScript y Tailwind CSS.`,
      componentFile: compFile,
      code: code,
      dependencies: ["lucide-react", "react"]
    });
  });
});

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`¡Éxito Absoluto! 245 componentes sincronizados simétricamente (35 familias x 7 estilos con layouts únicos).`);
