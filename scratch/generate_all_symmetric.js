const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(ELEMENTS_DIR);

const STYLES = [
  'neo-brutalism',
  'glassmorphism',
  'liquid-glass',
  'neumorphism',
  'claymorphism',
  'minimalism',
  'cyberpunk'
];

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getComponentName(familyId, style) {
  return capitalize(familyId) + capitalize(style);
}

// Configuración de las 13 familias nuevas a generar
const NEW_FAMILIES = [
  {
    id: 'bento',
    category: 'cards',
    name: "Feature Bento Highlight Card",
    icon: "Grid",
    summary: "Tarjeta modular Bento para destacar funcionalidades clave y arquitecturas.",
    generate: (style) => generateComponent('bento', style, {
      badge: "FEATURE BENTO",
      title: "Arquitectura Modular",
      desc: "Diseño reactivo de alta densidad con aislamiento total.",
      statMain: "99.9% Confiabilidad",
      statSub: "Sin fricción de dependencias",
      btnText: "EXPLORAR MÓDULO",
      iconName: "ShieldCheck"
    })
  },
  {
    id: 'stat',
    category: 'cards',
    name: "Tarjeta de Métrica & Telemetría",
    icon: "Zap",
    summary: "Métrica de servidor, volumen de transacciones y estados en tiempo real.",
    generate: (style) => generateComponent('stat', style, {
      badge: "TELEMETRÍA EN VIVO",
      title: "Volumen Transaccional",
      desc: "Procesamiento de pagos y latencia de borde en tiempo real.",
      statMain: "1,248 TPS",
      statSub: "+18.4% vs mes anterior",
      btnText: "VER HISTÓRICO",
      iconName: "Zap"
    })
  },
  {
    id: 'newsletter',
    category: 'cards',
    name: "Tarjeta de Suscripción & Newsletter",
    icon: "CreditCard",
    summary: "Captura de leads y suscripción con input de correo y confirmación táctil.",
    generate: (style) => generateComponent('newsletter', style, {
      badge: "NEWSLETTER PRO",
      title: "Actualizaciones de Autor",
      desc: "Recibe componentes semanales sin spam en tu bandeja.",
      statMain: "5,400+ Ingenieros",
      statSub: "Comunidad privada activa",
      btnText: "SUSCRIBIRME",
      iconName: "Check"
    })
  },
  {
    id: 'audio',
    category: 'widgets',
    name: "Reproductor de Audio & Podcast Capsule",
    icon: "Sliders",
    summary: "Control de reproducción de música, barra de tiempo y volumen interactivo.",
    generate: (style) => generateComponent('audio', style, {
      badge: "PODCAST AUDIO",
      title: "Ep. 42: Synthetic AI",
      desc: "Arquitectura de agentes autónomos y UI local-first.",
      statMain: "04:18 / 24:00",
      statSub: "Reproduciendo a 320 kbps",
      btnText: "PAUSAR EPISODIO",
      iconName: "Sliders"
    })
  },
  {
    id: 'navbar',
    category: 'navbars',
    name: "Cabecera Principal de Navegación",
    icon: "Compass",
    summary: "Barra superior de navegación con logotipo, enlaces clave y botón CTA.",
    generate: (style) => generateComponent('navbar', style, {
      badge: "HEADER NAV",
      title: "AgentKit Studio",
      desc: "Navegación fluida para aplicaciones de alto rendimiento.",
      statMain: "Docs · Precios · API",
      statSub: "Sesión activa: Admin",
      btnText: "CREAR PROYECTO",
      iconName: "Compass"
    })
  },
  {
    id: 'dock',
    category: 'navbars',
    name: "Dock Flotante de Acciones Rápidas",
    icon: "Layers",
    summary: "Dock suspendido estilo macOS con accesos directos y respuesta háptica.",
    generate: (style) => generateComponent('dock', style, {
      badge: "ACTION DOCK",
      title: "Dock Suspendido",
      desc: "5 atajos rápidos con retroalimentación háptica en click.",
      statMain: "5 Atajos Configurados",
      statSub: "Modo rápido activado",
      btnText: "PERSONALIZAR DOCK",
      iconName: "Layers"
    })
  },
  {
    id: 'hero',
    category: 'heros',
    name: "Hero Principal de Conversión",
    icon: "Sparkles",
    summary: "Sección principal de impacto con titular de autor y llamada a la acción.",
    generate: (style) => generateComponent('hero', style, {
      badge: "HERO SHOWCASE",
      title: "Ingeniería de Autor",
      desc: "Construye productos de calidad corporativa con diseño radical.",
      statMain: "Cero Fricción",
      statSub: "100% Código Local TypeScript",
      btnText: "COMENZAR AHORA",
      iconName: "Sparkles"
    })
  },
  {
    id: 'canvas',
    category: 'heros',
    name: "Hero Cinemático & Canvas Escénico",
    icon: "MonitorPlay",
    summary: "Composición visual con atmósfera inmersiva, profundidad y cinemática.",
    generate: (style) => generateComponent('canvas', style, {
      badge: "CANVAS ESCÉNICO",
      title: "Atmósfera Inmersiva",
      desc: "Profundidad visual y física luminosa adaptada a cada estilo.",
      statMain: "60 FPS GPU Render",
      statSub: "WebGL / CSS Shaders sincronizados",
      btnText: "REANUDAR CINEMÁTICA",
      iconName: "Eye"
    })
  },
  {
    id: 'review',
    category: 'testimonials',
    name: "Burbuja de Reseña Social & Rating",
    icon: "Quote",
    summary: "Tarjeta de feedback de comunidad con badge verificado y puntuación.",
    generate: (style) => generateComponent('review', style, {
      badge: "RESEÑA VERIFICADA",
      title: "Elena Rostova",
      desc: "La velocidad de prototipado y la pureza del diseño superaron cualquier expectativa.",
      statMain: "★★★★★ 5.0 / 5.0",
      statSub: "Tech Lead en Vercel Ecosystem",
      btnText: "VER RESEÑA COMPLETA",
      iconName: "Quote"
    })
  },
  {
    id: 'confirm',
    category: 'modals',
    name: "Diálogo de Confirmación Crítica",
    icon: "Lock",
    summary: "Modal de advertencia con opciones de cancelar y confirmar acción irreversible.",
    generate: (style) => generateComponent('confirm', style, {
      badge: "ADVERTENCIA CRÍTICA",
      title: "¿Confirmar Acción?",
      desc: "Esta operación sincronizará todos los cambios en el nodo principal.",
      statMain: "Acción Irreversible",
      statSub: "Requiere autorización de usuario",
      btnText: "CONFIRMAR ACCIÓN",
      iconName: "Lock"
    })
  },
  {
    id: 'help',
    category: 'faq',
    name: "Cápsula de Ayuda Rápida & Tips",
    icon: "HelpCircle",
    summary: "Panel de asistencia rápida con atajos de soporte y preguntas recurrentes.",
    generate: (style) => generateComponent('help', style, {
      badge: "CENTRO DE AYUDA",
      title: "Atajos Rápidos",
      desc: "Soluciones a las dudas frecuentes de instalación y despliegue.",
      statMain: "3 Guías Disponibles",
      statSub: "Tiempo medio de lectura: 2 min",
      btnText: "VER GUÍA COMPLETA",
      iconName: "HelpCircle"
    })
  },
  {
    id: 'marquee',
    category: 'carousels',
    name: "Marquesina Infinita Cinética",
    icon: "Layers",
    summary: "Cinta continua con animación fluida GPU para logotipos y métricas destacadas.",
    generate: (style) => generateComponent('marquee', style, {
      badge: "KINETIC MARQUEE",
      title: "Flujo Continuo GPU",
      desc: "Cinta cinética infinita optimizada a 60 FPS sin saltos de scroll.",
      statMain: "Next.js · Django · Tailwind",
      statSub: "Bucle infinito con aceleración nativa",
      btnText: "PAUSAR MARQUESINA",
      iconName: "Layers"
    })
  },
  {
    id: 'slider',
    category: 'carousels',
    name: "Slider Interactivo de Diapositivas",
    icon: "LayoutGrid",
    summary: "Carrusel con controles de paginación y navegación fluida entre tarjetas.",
    generate: (style) => generateComponent('slider', style, {
      badge: "SLIDER INTERACTIVO",
      title: "Paginación Dinámica",
      desc: "Navega fluidamente entre diapositivas con gestos y controles táctiles.",
      statMain: "Diapositiva 01 / 04",
      statSub: "Transición elástica 220ms",
      btnText: "SIGUIENTE DIAPOSITIVA",
      iconName: "LayoutGrid"
    })
  }
];

function generateComponent(familyId, style, data) {
  const compName = getComponentName(familyId, style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { ArrowRight, Check, Sparkles, ShieldCheck, Zap, Lock, HelpCircle, Layers, Quote, Sliders, Compass, LayoutGrid } from "lucide-react";

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
import { ArrowRight, Sparkles, Check, Zap } from "lucide-react";

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

// Crear archivos para las 13 familias x 7 estilos
console.log('Generando componentes para las 13 familias restantes...');
let generatedCount = 0;

NEW_FAMILIES.forEach(fam => {
  const famDir = path.join(ELEMENTS_DIR, fam.id);
  ensureDir(famDir);

  STYLES.forEach(st => {
    const fileName = `${fam.id}-${st}.tsx`;
    const filePath = path.join(famDir, fileName);
    const code = fam.generate(st);
    fs.writeFileSync(filePath, code, 'utf-8');
    generatedCount++;
  });
});

console.log(`Se generaron exitosamente ${generatedCount} componentes TSX.`);
