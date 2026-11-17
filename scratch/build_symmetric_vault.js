const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(ELEMENTS_DIR);

// Helpers de generadores de código TSX para cada familia y estilo
function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getComponentName(familyId, style) {
  return capitalize(familyId) + capitalize(style);
}

// 1. Bento Feature Card
function generateBento(style) {
  const compName = getComponentName('bento', style);
  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
          <Zap className="h-3.5 w-3.5 fill-black" />
          FEATURE BENTO
        </span>
        <span className="font-mono text-xs font-black">v2.4</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-black">Arquitectura Modular</h3>
        <p className="mt-1 text-xs font-bold text-black/80">Diseño reactivo de alta densidad con aislamiento total.</p>
      </div>
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <ShieldCheck className="h-5 w-5 text-black" />
          </div>
          <div>
            <div className="text-xs font-black uppercase">99.9% Confiabilidad</div>
            <div className="text-[11px] font-bold text-black/70">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-3 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>EXPLORAR MÓDULO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
          <Zap className="h-3.5 w-3.5 text-amber-300" />
          FEATURE BENTO
        </span>
        <span className="font-mono text-xs font-bold text-emerald-200/80">v2.4</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">Arquitectura Modular</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">Diseño reactivo de alta densidad con aislamiento total.</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-500/30 text-emerald-200 shadow-xs">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">99.9% Confiabilidad</div>
            <div className="text-[11px] font-medium text-emerald-200/70">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>EXPLORAR MÓDULO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React from "react";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

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
          FEATURE BENTO
        </span>
        <span className="font-mono text-xs font-extrabold text-slate-700">v2.4</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Arquitectura Modular</h3>
        <p className="mt-1 text-xs font-semibold text-slate-600">Refracción acrílica ultra transparente con destellos vivos.</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-md shadow-inner">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-cyan-700 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">99.9% Confiabilidad</div>
            <div className="text-[11px] font-semibold text-slate-600">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all">
        <span>EXPLORAR MÓDULO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          FEATURE BENTO
        </span>
        <span className="font-mono text-xs font-bold text-slate-500">v2.4</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">Arquitectura Modular</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">Relieve táctil esculpido con sombras extruidas suaves.</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-4 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <ShieldCheck className="h-5 w-5 text-indigo-500" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">99.9% Confiabilidad</div>
            <div className="text-[11px] font-medium text-slate-500">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] active:scale-[0.98] transition-all">
        <span>EXPLORAR MÓDULO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/60 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-purple-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]">
          <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
          FEATURE BENTO
        </span>
        <span className="font-mono text-xs font-black text-purple-700">v2.4</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-purple-950">Arquitectura Modular</h3>
        <p className="mt-1 text-xs font-bold text-purple-800/80">Estética 3D inflada acolchada con bordes redondeados y suaves.</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/50 p-4 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-[0_6px_12px_rgba(124,58,237,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-black text-purple-950">99.9% Confiabilidad</div>
            <div className="text-[11px] font-bold text-purple-700">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
        <span>EXPLORAR MÓDULO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          FEATURE // BENTO 01
        </span>
        <span className="font-mono text-xs font-bold text-neutral-400">[2.4]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">Arquitectura Modular</h3>
        <p className="mt-1 text-xs text-neutral-500 leading-relaxed">Composición funcional sobria, tipografía estricta y proporciones suizas.</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-neutral-900 text-neutral-900">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide">99.9% Confiabilidad</div>
            <div className="text-[11px] text-neutral-500">Sin fricción de dependencias</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors">
        <span>Explorar Módulo</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React from "react";
import { ArrowRight, Zap, ShieldCheck, Terminal } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-yellow-400 bg-black/90 p-6 font-mono text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-yellow-400/30 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-cyan-400">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          SYS_BENTO // 01
        </span>
        <span className="text-[10px] text-yellow-400/70 font-bold">[ONLINE]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-black uppercase tracking-widest text-yellow-400">ARQUITECTURA MODULAR</h3>
        <p className="mt-1 text-xs text-yellow-400/70">Módulo cibernético de alta respuesta y encriptación cuántica.</p>
      </div>
      <div className="mt-5 border border-cyan-400/40 bg-cyan-950/20 p-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-cyan-400 bg-cyan-400/20 text-cyan-300">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">99.9% INTEGRIDAD</div>
            <div className="text-[10px] text-cyan-400/70">TELEMETRÍA EN VIVO</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 border border-yellow-400 bg-yellow-400 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-yellow-400 transition-all shadow-[0_0_15px_rgba(250,204,21,0.4)]">
        <span>ACCEDER AL NODO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
}

console.log('Template bento listo.');
