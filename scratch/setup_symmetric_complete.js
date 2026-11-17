const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');
const REGISTRY_PATH = 'F:/proyectos/agentepersonal/viewer/src/registry.tsx';
const CHAMELEON_PATH = 'F:/proyectos/agentepersonal/viewer/src/chameleonFamilies.ts';
const CATALOG_PATH = path.join(VAULT_DIR, 'catalog.json');

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

// 22 Familias Canónicas Oficiales
const ALL_FAMILIES = [
  // CARDS (5 familias = 35 componentes)
  { id: 'pricing', isPreExisting: true, name: "Tarjeta de Precios 'Plan Pro $29'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Tarjeta de precios con checks y botón de acción principal adaptado fielmente a todos los estilos." },
  { id: 'profile', isPreExisting: true, name: "Perfil de Usuario 'Alexander Vance'", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'User', summary: "Tarjeta de perfil ejecutivo con avatar, métricas y badges de reputación." },
  { id: 'bento', isPreExisting: false, name: "Feature Bento Highlight Card", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'LayoutGrid', summary: "Tarjeta modular Bento para destacar funcionalidades clave y arquitecturas." },
  { id: 'stat', isPreExisting: false, name: "Tarjeta de Métrica & Telemetría", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'Zap', summary: "Métrica de servidor, volumen de transacciones y estados en tiempo real." },
  { id: 'newsletter', isPreExisting: false, name: "Tarjeta de Suscripción & Newsletter", category: 'cards', categoryLabel: 'Cards & Precios', icon: 'CreditCard', summary: "Captura de leads y suscripción con input de correo y confirmación táctil." },

  // WIDGETS (5 familias = 35 componentes)
  { id: 'calculator', isPreExisting: true, name: "Calculadora Funcional Interactiva", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Calculator', summary: "Calculadora completa con operaciones matemáticas y display reactivo." },
  { id: 'clock', isPreExisting: true, name: "Reloj Análogo en Tiempo Real", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Clock', summary: "Reloj con segundero continuo y esfera de diseño estilizado." },
  { id: 'control', isPreExisting: true, name: "Interruptor Inteligente & Switch Domótico", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de potencia y dimmer de intensidad lumínica con feedback táctil." },
  { id: 'weather', isPreExisting: true, name: "Clima & Pronóstico del Tiempo", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sun', summary: "Tarjeta meteorológica con temperatura, sensación y humedad." },
  { id: 'audio', isPreExisting: false, name: "Reproductor de Audio & Podcast Capsule", category: 'widgets', categoryLabel: 'Widgets & Herramientas', icon: 'Sliders', summary: "Control de reproducción de música, barra de tiempo y volumen interactivo." },

  // NAVBARS (2 familias = 14 componentes)
  { id: 'navbar', isPreExisting: false, name: "Cabecera Principal de Navegación", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Compass', summary: "Barra superior de navegación con logotipo, enlaces clave y botón CTA." },
  { id: 'dock', isPreExisting: false, name: "Dock Flotante de Acciones Rápidas", category: 'navbars', categoryLabel: 'Navbars & Docks', icon: 'Layers', summary: "Dock suspendido estilo macOS con accesos directos y respuesta háptica." },

  // HEROS (2 familias = 14 componentes)
  { id: 'hero', isPreExisting: false, name: "Hero Principal de Conversión", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'Sparkles', summary: "Sección principal de impacto con titular de autor y llamada a la acción." },
  { id: 'canvas', isPreExisting: false, name: "Hero Cinemático & Canvas Escénico", category: 'heros', categoryLabel: 'Heros & 3D', icon: 'MonitorPlay', summary: "Composición visual con atmósfera inmersiva, profundidad y cinemática." },

  // TESTIMONIALS (2 familias = 14 componentes)
  { id: 'testimonial', isPreExisting: true, name: "Testimonio Ejecutivo 'Marcus Lindqvist'", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Cita destacada con avatar de autor, valoración en estrellas y cargo corporativo." },
  { id: 'review', isPreExisting: false, name: "Burbuja de Reseña Social & Rating", category: 'testimonials', categoryLabel: 'Testimonios', icon: 'Quote', summary: "Tarjeta de feedback de comunidad con badge verificado y puntuación." },

  // MODALS (2 familias = 14 componentes)
  { id: 'auth', isPreExisting: true, name: "Modal de Acceso / Security Gateway", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Pasarela de autenticación con campos de email/password y estados de login." },
  { id: 'confirm', isPreExisting: false, name: "Diálogo de Confirmación Crítica", category: 'modals', categoryLabel: 'Modales & Auth', icon: 'Lock', summary: "Modal de advertencia con opciones de cancelar y confirmar acción irreversible." },

  // FAQ (2 familias = 14 componentes)
  { id: 'faq', isPreExisting: true, name: "Acordeón de Preguntas Frecuentes FAQ", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Grupo desplegable de soporte con apertura suave y respuestas explicativas." },
  { id: 'help', isPreExisting: false, name: "Cápsula de Ayuda Rápida & Tips", category: 'faq', categoryLabel: 'Acordeones & FAQ', icon: 'HelpCircle', summary: "Panel de asistencia rápida con atajos de soporte y preguntas recurrentes." },

  // CAROUSELS (2 familias = 14 componentes)
  { id: 'marquee', isPreExisting: false, name: "Marquesina Infinita Cinética", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'Layers', summary: "Cinta continua con animación fluida GPU para logotipos y métricas destacadas." },
  { id: 'slider', isPreExisting: false, name: "Slider Interactivo de Diapositivas", category: 'carousels', categoryLabel: 'Carruseles & Sliders', icon: 'LayoutGrid', summary: "Carrusel con controles de paginación y navegación fluida entre tarjetas." }
];

const FAMILY_DATA = {
  bento: { badge: "FEATURE BENTO", title: "Arquitectura Modular", desc: "Diseño reactivo de alta densidad con aislamiento total.", statMain: "99.9% Confiabilidad", statSub: "Sin fricción de dependencias", btnText: "EXPLORAR MÓDULO" },
  stat: { badge: "TELEMETRÍA EN VIVO", title: "Volumen Transaccional", desc: "Procesamiento de pagos y latencia de borde en tiempo real.", statMain: "1,248 TPS", statSub: "+18.4% vs mes anterior", btnText: "VER HISTÓRICO" },
  newsletter: { badge: "NEWSLETTER PRO", title: "Actualizaciones de Autor", desc: "Recibe componentes semanales sin spam en tu bandeja.", statMain: "5,400+ Ingenieros", statSub: "Comunidad privada activa", btnText: "SUSCRIBIRME" },
  audio: { badge: "PODCAST AUDIO", title: "Ep. 42: Synthetic AI", desc: "Arquitectura de agentes autónomos y UI local-first.", statMain: "04:18 / 24:00", statSub: "Reproduciendo a 320 kbps", btnText: "PAUSAR EPISODIO" },
  navbar: { badge: "HEADER NAV", title: "AgentKit Studio", desc: "Navegación fluida para aplicaciones de alto rendimiento.", statMain: "Docs · Precios · API", statSub: "Sesión activa: Admin", btnText: "CREAR PROYECTO" },
  dock: { badge: "ACTION DOCK", title: "Dock Suspendido", desc: "5 atajos rápidos con retroalimentación háptica en click.", statMain: "5 Atajos Configurados", statSub: "Modo rápido activado", btnText: "PERSONALIZAR DOCK" },
  hero: { badge: "HERO SHOWCASE", title: "Ingeniería de Autor", desc: "Construye productos de calidad corporativa con diseño radical.", statMain: "Cero Fricción", statSub: "100% Código Local TypeScript", btnText: "COMENZAR AHORA" },
  canvas: { badge: "CANVAS ESCÉNICO", title: "Atmósfera Inmersiva", desc: "Profundidad visual y física luminosa adaptada a cada estilo.", statMain: "60 FPS GPU Render", statSub: "WebGL / CSS Shaders sincronizados", btnText: "REANUDAR CINEMÁTICA" },
  review: { badge: "RESEÑA VERIFICADA", title: "Elena Rostova", desc: "La velocidad de prototipado y la pureza del diseño superaron cualquier expectativa.", statMain: "★★★★★ 5.0 / 5.0", statSub: "Tech Lead en Vercel Ecosystem", btnText: "VER RESEÑA COMPLETA" },
  confirm: { badge: "ADVERTENCIA CRÍTICA", title: "¿Confirmar Acción?", desc: "Esta operación sincronizará todos los cambios en el nodo principal.", statMain: "Acción Irreversible", statSub: "Requiere autorización de usuario", btnText: "CONFIRMAR ACCIÓN" },
  help: { badge: "CENTRO DE AYUDA", title: "Atajos Rápidos", desc: "Soluciones a las dudas frecuentes de instalación y despliegue.", statMain: "3 Guías Disponibles", statSub: "Tiempo medio de lectura: 2 min", btnText: "VER GUÍA COMPLETA" },
  marquee: { badge: "KINETIC MARQUEE", title: "Flujo Continuo GPU", desc: "Cinta cinética infinita optimizada a 60 FPS sin saltos de scroll.", statMain: "Next.js · Django · Tailwind", statSub: "Bucle infinito con aceleración nativa", btnText: "PAUSAR MARQUESINA" },
  slider: { badge: "SLIDER INTERACTIVO", title: "Paginación Dinámica", desc: "Navega fluidamente entre diapositivas con gestos y controles táctiles.", statMain: "Diapositiva 01 / 04", statSub: "Transición elástica 220ms", btnText: "SIGUIENTE DIAPOSITIVA" }
};

function generateCode(famId, stConfig, data) {
  const compName = capitalize(famId) + stConfig.compSuffix;
  const style = stConfig.styleId;

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { ArrowRight, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
          ★ ${data.badge}
        </span>
        <span className="font-mono text-xs font-black">NEO-BRUTAL</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-black">${data.title}</h3>
        <p className="mt-1 text-xs font-bold text-black/80">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <Check className="h-5 w-5 stroke-[3] text-black" />
          </div>
          <div>
            <div className="text-xs font-black uppercase">${data.statMain}</div>
            <div className="text-[11px] font-bold text-black/70">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-3 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-bold text-emerald-200/80">FROSTED</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">${data.title}</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">${data.desc}</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-500/30 text-emerald-200 shadow-xs">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">${data.statMain}</div>
            <div className="text-[11px] font-medium text-emerald-200/70">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React from "react";
import { ArrowRight, Zap, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-400/25 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-cyan-900 backdrop-blur-md shadow-xs">
          <Zap className="h-3.5 w-3.5 text-cyan-600 fill-cyan-500" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-extrabold text-slate-700">LIQUID</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">${data.title}</h3>
        <p className="mt-1 text-xs font-semibold text-slate-600">${data.desc}</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-md shadow-inner">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-cyan-700 shadow-sm">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">${data.statMain}</div>
            <div className="text-[11px] font-semibold text-slate-600">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <Zap className="h-3.5 w-3.5 text-indigo-500" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-bold text-slate-500">NEUMORPH</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">${data.title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-4 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Check className="h-5 w-5 text-indigo-500" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">${data.statMain}</div>
            <div className="text-[11px] font-medium text-slate-500">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/60 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-purple-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]">
          <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-black text-purple-700">CLAY 3D</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-purple-950">${data.title}</h3>
        <p className="mt-1 text-xs font-bold text-purple-800/80">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/50 p-4 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-[0_6px_12px_rgba(124,58,237,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-black text-purple-950">${data.statMain}</div>
            <div className="text-[11px] font-bold text-purple-700">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { ArrowRight, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          // ${data.badge}
        </span>
        <span className="font-mono text-xs font-bold text-neutral-400">[SWISS]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">${data.title}</h3>
        <p className="mt-1 text-xs text-neutral-500 leading-relaxed">${data.desc}</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-900 text-neutral-900">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide">${data.statMain}</div>
            <div className="text-[11px] text-neutral-500">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React from "react";
import { ArrowRight, Check, Terminal } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-yellow-400 bg-black/90 p-6 font-mono text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-yellow-400/30 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-cyan-400">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          ${data.badge}
        </span>
        <span className="text-[10px] text-yellow-400/70 font-bold">[ONLINE]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-black uppercase tracking-widest text-yellow-400">${data.title}</h3>
        <p className="mt-1 text-xs text-yellow-400/70">${data.desc}</p>
      </div>
      <div className="mt-5 border border-cyan-400/40 bg-cyan-950/20 p-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400 bg-cyan-400/20 text-cyan-300">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">${data.statMain}</div>
            <div className="text-[10px] text-cyan-400/70">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 border border-yellow-400 bg-yellow-400 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-yellow-400 transition-all shadow-[0_0_15px_rgba(250,204,21,0.4)]">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
}

// 1. GENERAR ARCHIVOS FALTANTES
console.log('1. Generando archivos TSX con nombres y sufijos estandarizados...');
ALL_FAMILIES.forEach(fam => {
  if (fam.isPreExisting) return; // Las 9 preexistentes ya tienen sus archivos

  const famDir = path.join(ELEMENTS_DIR, fam.id);
  ensureDir(famDir);

  const data = FAMILY_DATA[fam.id];
  STYLE_CONFIG.forEach(st => {
    const fileName = `${fam.id}-${st.suffix}.tsx`;
    const filePath = path.join(famDir, fileName);
    const code = generateCode(fam.id, st, data);
    fs.writeFileSync(filePath, code, 'utf-8');
  });
});

// 2. GENERAR REGISTRY.TSX
console.log('2. Generando viewer/src/registry.tsx...');
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

// Componentes Polimórficos Oficiales (22 Familias x 7 Estilos = 154 Componentes Simétricos)
${imports.join('\n')}

export const ComponentRegistry: Record<string, React.ComponentType<any>> = {
${registryEntries.join('\n')}
};

export default ComponentRegistry;
`;

fs.writeFileSync(REGISTRY_PATH, registryContent, 'utf-8');

// 3. GENERAR CHAMELEONFAMILIES.TS
console.log('3. Generando viewer/src/chameleonFamilies.ts...');

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
  { id: "cards", label: "Cards & Precios", iconName: "CreditCard", description: "Tarjetas de precios, perfiles, bento, métricas y suscripciones" },
  { id: "widgets", label: "Widgets & Herramientas", iconName: "Sliders", description: "Calculadoras, relojes, interruptores domóticos, audio y clima" },
  { id: "navbars", label: "Navbars & Docks", iconName: "Compass", description: "Barras de navegación, cabeceras y docks de acción" },
  { id: "heros", label: "Heros & 3D", iconName: "Sparkles", description: "Secciones principales de impacto y lienzos cinemáticos" },
  { id: "testimonials", label: "Testimonios", iconName: "Quote", description: "Prueba social, valoraciones y citas ejecutivas" },
  { id: "modals", label: "Modales & Auth", iconName: "Lock", description: "Pasarelas de autenticación y diálogos de confirmación" },
  { id: "faq", label: "Acordeones & FAQ", iconName: "HelpCircle", description: "Desplegables de preguntas frecuentes y centro de ayuda" },
  { id: "carousels", label: "Carruseles & Sliders", iconName: "Layers", description: "Marquesinas continuas GPU y sliders interactivos" },
];

export const CHAMELEON_FAMILIES: ChameleonFamily[] = ${JSON.stringify(chameleonFamilies, null, 2)};
`;

fs.writeFileSync(CHAMELEON_PATH, chameleonContent, 'utf-8');

// 4. GENERAR CATALOG.JSON (154 Componentes Simétricos)
console.log('4. Generando vault/catalog.json...');

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
      tags: [fam.category, fam.id, st.styleId, "polymorphic", "symmetric"],
      sourceName: "UI Vault Symmetrical Core",
      sourceUrl: "https://uivault.internal",
      dateAdded: "2026-11-06",
      description: `Variante ${st.label} de ${fam.name}. Arquitectura polimórfica 100% simétrica con código limpio TypeScript y Tailwind CSS.`,
      componentFile: compFile,
      code: code,
      dependencies: ["lucide-react", "react"]
    });
  });
});

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`¡Éxito! 154 componentes sincronizados simétricamente (22 familias x 7 estilos).`);
