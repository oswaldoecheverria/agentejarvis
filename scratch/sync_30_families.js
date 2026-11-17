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

// 30 FAMILIAS CANÓNICAS OFICIALES: 22 Base + 8 ErikaSalud
const ALL_FAMILIES = [
  // ================= CARDS & PRECIOS (8 familias = 56 componentes) =================
  { id: 'pricing', name: "Tarjeta de Precios 'Plan Pro $29'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Tarjeta de precios con checks y botón de acción principal adaptado fielmente a todos los estilos." },
  { id: 'profile', name: "Perfil de Usuario 'Alexander Vance'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'User', summary: "Tarjeta de perfil ejecutivo con avatar, métricas y badges de reputación." },
  { id: 'bento', name: "Feature Bento Highlight Card", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'LayoutGrid', summary: "Tarjeta modular Bento para destacar funcionalidades clave y arquitecturas." },
  { id: 'stat', name: "Tarjeta de Métrica & Telemetría", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'Zap', summary: "Métrica de servidor, volumen de transacciones y estados en tiempo real." },
  { id: 'newsletter', name: "Tarjeta de Suscripción & Newsletter", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Captura de leads y suscripción con input de correo y confirmación táctil." },
  // NUEVAS DE ERIKASALUD EN CARDS:
  { id: 'medical-plan', name: "Plan Médico Familiar 'Salud Total'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Tarjeta de plan de salud preventiva con modalidad domicilio/consultorio, desglose de precio y checks clínicos." },
  { id: 'medical-service', name: "Tarjeta de Consulta & Especialidad Médica", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'HeartPulse', summary: "Tarjeta de especialidad clínica con badge de modalidad (Telemedicina/Consultorio), precio referencial y llamada a cita." },
  { id: 'patient-record', name: "Ficha Clínica 360 del Paciente", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'User', summary: "Tarjeta de telemetría y expediente del paciente con cédula/ID, tipo sanguíneo, alergias y último diagnóstico CIE-10." },

  // ================= WIDGETS & HERRAMIENTAS (6 familias = 42 componentes) =================
  { id: 'calculator', name: "Calculadora Funcional Interactiva", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Calculator', summary: "Calculadora completa con operaciones matemáticas y display reactivo." },
  { id: 'clock', name: "Reloj Análogo en Tiempo Real", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Clock', summary: "Reloj con segundero continuo y esfera de diseño estilizado." },
  { id: 'control', name: "Interruptor Inteligente & Switch Domótico", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de potencia y dimmer de intensidad lumínica con feedback táctil." },
  { id: 'weather', name: "Clima & Pronóstico del Tiempo", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sun', summary: "Tarjeta meteorológica con temperatura, sensación y humedad." },
  { id: 'audio', name: "Reproductor de Audio & Podcast Capsule", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de reproducción de música, barra de tiempo y volumen interactivo." },
  // NUEVA DE ERIKASALUD EN WIDGETS:
  { id: 'appointment-scheduler', name: "Selector de Turnos & Agenda Médica", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Calendar', summary: "Widget interactivo de agendamiento con selector de turnos mañana/tarde, cálculo de disponibilidad y confirmación horaria." },

  // ================= NAVBARS & DOCKS (2 familias = 14 componentes) =================
  { id: 'navbar', name: "Cabecera Principal de Navegación", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Compass', summary: "Barra superior de navegación con logotipo, enlaces clave y botón CTA." },
  { id: 'dock', name: "Dock Flotante de Acciones Rápidas", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Layers', summary: "Dock suspendido estilo macOS con accesos directos y respuesta háptica." },

  // ================= HEROS & 3D CANVAS (3 familias = 21 componentes) =================
  { id: 'hero', name: "Hero Principal de Conversión", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'Sparkles', summary: "Sección principal de impacto con titular de autor y llamada a la acción." },
  { id: 'canvas', name: "Hero Cinemático & Canvas Escénico", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'MonitorPlay', summary: "Composición visual con atmósfera inmersiva, profundidad y cinemática." },
  // NUEVA DE ERIKASALUD EN HEROS:
  { id: 'medical-hero', name: "Hero Clínico Inmersivo de Autor", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'Stethoscope', summary: "Cabecera principal de impacto médico con marco perimetral HUD de precisión, credenciales MSP y botón directo a cita." },

  // ================= TESTIMONIOS (2 familias = 14 componentes) =================
  { id: 'testimonial', name: "Testimonio Ejecutivo 'Marcus Lindqvist'", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Cita destacada con avatar de autor, valoración en estrellas y cargo corporativo." },
  { id: 'review', name: "Burbuja de Reseña Social & Rating", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Tarjeta de feedback de comunidad con badge verificado y puntuación." },

  // ================= MODALES & AUTH (3 familias = 21 componentes) =================
  { id: 'auth', name: "Modal de Acceso / Security Gateway", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Pasarela de autenticación con campos de email/password y estados de login." },
  { id: 'confirm', name: "Diálogo de Confirmación Crítica", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Modal de advertencia con opciones de cancelar y confirmar acción irreversible." },
  // NUEVA DE ERIKASALUD EN MODALES:
  { id: 'appointment-modal', name: "Modal de Reserva de Cita Médica", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Calendar', summary: "Modal flotante de reserva con selección de país (Ecuador/Internacional), validación de identificación y consentimiento informado." },

  // ================= ACORDEONES & FAQ (3 familias = 21 componentes) =================
  { id: 'faq', name: "Acordeón de Preguntas Frecuentes FAQ", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Grupo desplegable de soporte con apertura suave y respuestas explicativas." },
  { id: 'help', name: "Cápsula de Ayuda Rápida & Tips", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Panel de asistencia rápida con atajos de soporte y preguntas recurrentes." },
  // NUEVA DE ERIKASALUD EN FAQ:
  { id: 'medical-faq', name: "Acordeón Clínico & Recetas Electrónicas", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'FileText', summary: "Desplegable de preguntas frecuentes sobre validez de recetas SRI, reembolsos de seguros privados y citas de control." },

  // ================= CAROUSELS & SLIDERS (3 familias = 21 componentes) =================
  { id: 'marquee', name: "Marquesina Infinita Cinética", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Cinta continua con animación fluida GPU para logotipos y métricas destacadas." },
  { id: 'slider', name: "Slider Interactivo de Diapositivas", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'LayoutGrid', summary: "Carrusel con controles de paginación y navegación fluida entre tarjetas." },
  // NUEVA DE ERIKASALUD EN CAROUSELS:
  { id: 'health-marquee', name: "Marquesina de Aliados Clínicos & Aseguradoras", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Cinta infinita animada de aseguradoras, laboratorios de diagnóstico y farmacias integradas al ecosistema." }
];

// 1. GENERAR REGISTRY.TSX
console.log('1. Generando viewer/src/registry.tsx para las 30 familias (210 componentes)...');
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

// Componentes Polimórficos Oficiales (30 Familias x 7 Estilos = 210 Componentes Simétricos)
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
  { id: "cards", label: "Cards & Precios", iconName: "CreditCard", description: "Tarjetas de precios, perfiles, planes médicos, bento y telemetría" },
  { id: "widgets", label: "Widgets & Herramientas", iconName: "Sliders", description: "Agendas médicas, calculadoras, relojes, interruptores domóticos y audio" },
  { id: "navbars", label: "Navbars & Docks", iconName: "Compass", description: "Barras de navegación, cabeceras y docks de acción" },
  { id: "heros", label: "Heros & 3D", iconName: "Sparkles", description: "Heros clínicos inmersivos, portales de autor y lienzos cinemáticos" },
  { id: "testimonials", label: "Testimonios", iconName: "Quote", description: "Prueba social, valoraciones y citas ejecutivas" },
  { id: "modals", label: "Modales & Auth", iconName: "Lock", description: "Reserva de citas médicas, login seguro y diálogos de confirmación" },
  { id: "faq", label: "Acordeones & FAQ", iconName: "HelpCircle", description: "Preguntas clínicas, recetas electrónicas y centro de ayuda" },
  { id: "carousels", label: "Carruseles & Sliders", iconName: "Layers", description: "Marquesinas de aseguradoras y sliders interactivos" },
];

export const CHAMELEON_FAMILIES: ChameleonFamily[] = ${JSON.stringify(chameleonFamilies, null, 2)};
`;

fs.writeFileSync(CHAMELEON_PATH, chameleonContent, 'utf-8');

// 3. GENERAR CATALOG.JSON (210 Componentes Simétricos)
console.log('3. Generando vault/catalog.json (210 componentes)...');

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

    catalog.push({
      id: compId,
      familyId: fam.id,
      title: `${fam.name} · ${st.label}`,
      category: fam.category,
      style: st.styleId,
      tags: [fam.category, fam.id, st.styleId, "erikasalud", "polymorphic", "symmetric"],
      sourceName: fam.id.startsWith("medical-") || fam.id === "patient-record" || fam.id.startsWith("appointment-") || fam.id === "health-marquee"
        ? "ErikaSalud Clinical Core"
        : "UI Vault Symmetrical Core",
      sourceUrl: fam.id.startsWith("medical-") || fam.id === "patient-record" || fam.id.startsWith("appointment-") || fam.id === "health-marquee"
        ? "https://erikasalud.com"
        : "https://uivault.internal",
      dateAdded: "2026-11-06",
      description: `Variante ${st.label} de ${fam.name}. Arquitectura polimórfica 100% simétrica con código limpio TypeScript y Tailwind CSS.`,
      componentFile: compFile,
      code: code,
      dependencies: ["lucide-react", "react"]
    });
  });
});

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`¡Éxito Total! 210 componentes sincronizados simétricamente (30 familias x 7 estilos).`);
