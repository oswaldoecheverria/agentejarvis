const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getCompName(prefix, style) {
  const cap = capitalize(style)
    .replace('NeoBrutalism', 'NeoBrutalist')
    .replace('Glassmorphism', 'Glassmorphic')
    .replace('Neumorphism', 'Neumorphic')
    .replace('Claymorphism', 'Claymorphic')
    .replace('Minimalism', 'Minimalist');
  return prefix + cap;
}

// 1. NAVBAR HEADER MAIN: Barra horizontal real con Logo, Enlaces y Botón
function generateNavbarHeader(style) {
  const compName = getCompName('NavbarHeaderMain', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl rounded-2xl border-3 border-black bg-yellow-300 p-3 shadow-[5px_5px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-pink-400 shadow-[1px_1px_0px_#000]">
            <Sparkles className="h-4 w-4 text-black" />
          </div>
          <span className="font-black text-sm tracking-tight">AGENTKIT</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-black uppercase">
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Precios</a>
          <a href="#" className="hover:underline">Docs</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-xl border-2 border-black bg-black px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black transition-all">
          <span>COMENZAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl overflow-hidden rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2.5 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45),inset_0_1px_2px_rgba(255,255,255,0.35)] font-sans text-white">
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-300">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">ERIKASALUD</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-emerald-100/80">
          <a href="#" className="hover:text-white transition-colors">Especialidades</a>
          <a href="#" className="hover:text-white transition-colors">Planes</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-full border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 px-4 py-1.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
          <span>AGENDAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl overflow-hidden rounded-full border border-white/40 bg-white/20 p-2.5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] font-sans text-slate-800">
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-slate-900">AURAFLOW</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Soluciones</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Precios</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-600 active:scale-95 transition-all">
          <span>ACCEDER</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl rounded-2xl bg-[#e0e5ec] p-3 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-indigo-500">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-800">NEUROMED</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-500">
          <a href="#" className="hover:text-slate-800 transition-colors">Agenda</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Pacientes</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Reportes</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#e0e5ec] px-4 py-2 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <span>PANEL</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl rounded-3xl bg-gradient-to-r from-violet-200 via-pink-100 to-amber-100 p-3 shadow-[0_12px_24px_rgba(150,130,200,0.25),inset_0_3px_5px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(0,0,0,0.06)] font-sans text-violet-950">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.9)] text-pink-500">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-black text-sm tracking-tight text-violet-900">CLAYSTUDIO</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-bold text-violet-700/80">
          <a href="#" className="hover:text-violet-950 transition-colors">Modelos</a>
          <a href="#" className="hover:text-violet-950 transition-colors">Texturas</a>
          <a href="#" className="hover:text-violet-950 transition-colors">Escenas</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-2xl bg-violet-600 px-4 py-2 text-xs font-black uppercase text-white shadow-[0_6px_12px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.4)] hover:brightness-105 active:scale-95 transition-all">
          <span>CREAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl border-b border-neutral-200 bg-white py-3.5 px-4 font-sans text-neutral-900">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-widest uppercase text-neutral-900">ATELIER.</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-950 transition-colors">Work</a>
          <a href="#" className="hover:text-neutral-950 transition-colors">Archive</a>
          <a href="#" className="hover:text-neutral-950 transition-colors">Info</a>
        </nav>
        <button className="flex items-center gap-1.5 text-xs font-medium text-neutral-900 hover:opacity-60 transition-opacity">
          <span>Contact</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}`;
  }

  // cyberpunk
  return `import React from "react";
import { Terminal, ChevronRight } from "lucide-react";

export function ${compName}() {
  return (
    <header className="w-full max-w-xl border-2 border-cyan-400 bg-black/90 p-3 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-mono text-cyan-300">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center border border-cyan-400 bg-cyan-950/60 text-cyan-300">
            <Terminal className="h-3.5 w-3.5" />
          </div>
          <span className="font-black text-xs tracking-wider text-cyan-300">NET://NODE.01</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-[11px] font-bold text-cyan-500 uppercase">
          <a href="#" className="hover:text-cyan-300 transition-colors">//SYS</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">//PROT</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">//LOGS</a>
        </nav>
        <button className="flex items-center gap-1 border border-yellow-400 bg-yellow-400 px-3 py-1 text-[11px] font-black uppercase text-black hover:bg-black hover:text-yellow-400 transition-colors">
          <span>EXECUTE</span>
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}`;
}

// 2. DOCK FLOATING ACTION: Dock Flotante Horizontal con Iconos
function generateFloatingDock(style) {
  const compName = getCompName('DockFloatingAction', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-2xl border-3 border-black bg-white p-2 shadow-[5px_5px_0px_#000]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black transition-all \${
              isSel
                ? "bg-lime-300 shadow-[2px_2px_0px_#000] -translate-y-1"
                : "bg-slate-100 hover:bg-yellow-200 shadow-[1px_1px_0px_#000]"
            }\`}
          >
            <Icon className="h-5 w-5 text-black" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45),inset_0_1px_2px_rgba(255,255,255,0.35)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 \${
              isSel
                ? "border border-white/40 bg-white/25 text-white shadow-md scale-110"
                : "text-emerald-200/70 hover:text-white hover:bg-white/10"
            }\`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/25 p-2 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 \${
              isSel
                ? "bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white shadow-md scale-105"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }\`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-11 w-11 items-center justify-center rounded-xl transition-all \${
              isSel
                ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                : "bg-[#e0e5ec] text-slate-500 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-800"
            }\`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2.5 rounded-3xl bg-white/70 p-2.5 backdrop-blur-md shadow-[0_12px_24px_rgba(150,130,200,0.2),inset_0_3px_5px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(0,0,0,0.05)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-11 w-11 items-center justify-center rounded-2xl transition-all \${
              isSel
                ? "bg-violet-600 text-white shadow-[0_6px_12px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.4)] scale-105"
                : "bg-violet-50 text-violet-600 hover:bg-violet-100"
            }\`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-xs">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-9 w-9 items-center justify-center rounded-full transition-all \${
              isSel
                ? "bg-neutral-900 text-white"
                : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
            }\`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React, { useState } from "react";
import { Terminal, Shield, Cpu, Activity, Database } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState(0);
  const icons = [Terminal, Shield, Cpu, Activity, Database];

  return (
    <div className="flex items-center gap-2 border-2 border-cyan-400 bg-black/90 p-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`flex h-10 w-10 items-center justify-center transition-all \${
              isSel
                ? "bg-cyan-400 text-black shadow-[0_0_10px_#06b6d4]"
                : "border border-cyan-900 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/40"
            }\`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}`;
}

// 3. HERO CINEMATIC SHOWCASE: Sección monumental real
function generateHeroShowcase(style) {
  const compName = getCompName('HeroCinematicShowcase', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ${compName}() {
  return (
    <section className="w-full max-w-xl rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000] mb-4">
        <Sparkles className="h-3.5 w-3.5" />
        <span>RELEASING V2.0</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-black mb-3">
        DISEÑO RADICAL SIN COMPROMISOS.
      </h1>
      <p className="text-sm font-bold text-slate-900 mb-6 max-w-md">
        Componentes de interfaz con personalidad implacable, cero código genérico y arquitecturas puras de autor.
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
          <span>INICIAR AHORA</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="rounded-xl border-2 border-black bg-white px-5 py-2.5 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:bg-lime-300 transition-all">
          EXPLORAR VAULT
        </button>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t-2 border-black text-xs font-black">
        <div className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> <span>100% LOCAL</span></div>
        <div className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> <span>7 ESTILOS</span></div>
      </div>
    </section>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ${compName}() {
  return (
    <section className="w-full max-w-xl rounded-3xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-8 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(3,20,14,0.55),inset_0_1px_2px_rgba(255,255,255,0.4)] font-sans text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          <span>MEDICINA INTEGRAL & FAMILIAR</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-3">
          CUIDADO CLÍNICO DE ALTA FIDELIDAD.
        </h1>
        <p className="text-sm text-emerald-100/80 mb-6 max-w-md">
          Atención preventiva rigurosa con trazabilidad LOPDP, recetas electrónicas PAdES y acompañamiento humano.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button className="flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
            <span>AGENDAR CONSULTA</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition-all">
            CONOCER PLANES
          </button>
        </div>
        <div className="flex items-center gap-5 pt-4 border-t border-white/15 text-xs text-emerald-200/80">
          <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> <span>Dr. Erika Salud</span></div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> <span>Registro MSP 17-5421</span></div>
        </div>
      </div>
    </section>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ${compName}() {
  return (
    <section className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-8 shadow-[12px_12px_24px_#c8d0e7,-12px_-12px_24px_#ffffff] font-sans text-slate-800">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-4">
        <Sparkles className="h-3.5 w-3.5" />
        <span>PLATAFORMA DE AUTOR</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 mb-3">
        ARQUITECTURA DE SOFTWARE LIMPIA.
      </h1>
      <p className="text-sm text-slate-600 mb-6 max-w-md">
        Sistemas robustos desarrollados en local-first con Django 5.2, Next.js 16 y máxima fiabilidad.
      </p>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button className="flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-6 py-3 text-xs font-bold text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <span>INICIAR DESPLIEGUE</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center gap-5 pt-4 border-t border-slate-300/50 text-xs text-slate-500 font-semibold">
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" /> <span>Zero Clones</span></div>
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" /> <span>TypeScript Tipado</span></div>
      </div>
    </section>
  );
}`;
  }

  // fallback clean
  return `import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ${compName}() {
  return (
    <section className="w-full max-w-xl rounded-3xl border border-neutral-200 bg-white p-8 text-neutral-900 shadow-sm">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 mb-4">
        <Sparkles className="h-3.5 w-3.5 text-neutral-900" />
        <span>HIGH PERFORMANCE</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
        ENGINEERED FOR EXCELLENCE.
      </h1>
      <p className="text-sm text-neutral-600 mb-6 max-w-md">
        Modern architecture built with absolute minimalism and uncompromised type safety.
      </p>
      <div className="flex items-center gap-3 mb-6">
        <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
          <span>Get Started</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="flex items-center gap-5 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-neutral-900" /> <span>Production Ready</span></div>
      </div>
    </section>
  );
}`;
}

// 4. CAROUSEL KINETIC MARQUEE: Marquesina Continua Infinita
function generateMarquee(style) {
  const compName = getCompName('CarouselKineticMarquee', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { ShieldCheck } from "lucide-react";

export function ${compName}() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border-3 border-black bg-pink-300 py-3 shadow-[5px_5px_0px_#000] font-sans">
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-3">
        <span className="shrink-0 border-2 border-black bg-yellow-300 px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
          CONVENIOS
        </span>
        <div className="flex items-center gap-6 shrink-0">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-black uppercase text-black shrink-0">
              <ShieldCheck className="h-4 w-4" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { ShieldCheck } from "lucide-react";

export function ${compName}() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 py-2.5 px-4 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
          ASEGURADORAS
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs font-medium text-emerald-100/90">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { ShieldCheck } from "lucide-react";

export function ${compName}() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-[#e0e5ec] py-3 px-4 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 rounded-xl bg-[#e0e5ec] px-3 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          CONVENIOS
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs font-semibold text-slate-600">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React from "react";
import { ShieldCheck } from "lucide-react";

export function ${compName}() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-neutral-200 bg-white py-3 px-4 shadow-xs font-sans">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
          NETWORK
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs text-neutral-600">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-neutral-900" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
}

// 5. CAROUSEL MOTION SLIDER: Slider Interactivo de Diapositivas
function generateSlider(style) {
  const compName = getCompName('CarouselMotionSlider', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "PASO 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "PASO 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "PASO 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-3">
        <span className="border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-[11px] font-black uppercase shadow-[1.5px_1.5px_0px_#000]">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1.5 rounded-lg border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-200 active:translate-y-0.5">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="p-1.5 rounded-lg border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-200 active:translate-y-0.5">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-base font-black text-black uppercase tracking-tight">{slides[current].title}</h4>
        <p className="text-xs font-bold text-slate-800 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 pt-3 border-t-2 border-black">
        {slides.map((_, i) => (
          <div key={i} className={\`h-2 transition-all border border-black \${i === current ? "w-6 bg-black" : "w-2 bg-white"}\`} />
        ))}
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)] font-sans text-white">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft className="h-3.5 w-3.5 text-white" />
          </button>
          <button onClick={next} className="p-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-sm font-bold text-white">{slides[current].title}</h4>
        <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5 pt-3 border-t border-white/15">
        {slides.map((_, i) => (
          <div key={i} className={\`h-1.5 rounded-full transition-all \${i === current ? "w-6 bg-emerald-400" : "w-1.5 bg-white/30"}\`} />
        ))}
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-xl bg-[#e0e5ec] px-3 py-1 text-[10px] font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="p-1.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
          </button>
          <button onClick={next} className="p-1.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-sm font-bold text-slate-800">{slides[current].title}</h4>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 pt-3 border-t border-slate-300/40">
        {slides.map((_, i) => (
          <div key={i} className={\`h-2 rounded-full transition-all \${i === current ? "w-5 bg-indigo-500 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" : "w-2 bg-[#c8d0e7]"}\`} />
        ))}
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs font-sans text-neutral-800">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
            <ChevronLeft className="h-3.5 w-3.5 text-neutral-600" />
          </button>
          <button onClick={next} className="p-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
          </button>
        </div>
      </div>
      <div className="min-h-[70px]">
        <h4 className="text-sm font-semibold text-neutral-900">{slides[current].title}</h4>
        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5 pt-3 border-t border-neutral-100">
        {slides.map((_, i) => (
          <div key={i} className={\`h-1.5 rounded-full transition-all \${i === current ? "w-5 bg-neutral-900" : "w-1.5 bg-neutral-300"}\`} />
        ))}
      </div>
    </div>
  );
}`;
}

module.exports = {
  generateNavbarHeader,
  generateFloatingDock,
  generateHeroShowcase,
  generateMarquee,
  generateSlider
};
