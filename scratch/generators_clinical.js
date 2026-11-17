const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

// 1. PATIENT-RECORD: Ficha Clínica 360 Auténtica de ErikaSalud
function generatePatientRecord(style) {
  const compName = 'PatientRecord' + capitalize(style).replace('NeoBrutalism', 'NeoBrutalist').replace('Glassmorphism', 'Glassmorphic').replace('Neumorphism', 'Neumorphic').replace('Claymorphism', 'Claymorphic').replace('Minimalism', 'Minimalist');

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-amber-200 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      {/* Header Ficha */}
      <div className="flex items-start justify-between border-b-3 border-black pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <User className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="text-base font-black uppercase text-black">Carlos Mendoza</h3>
            <p className="text-[11px] font-bold text-black/75">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border-2 border-black bg-rose-400 px-2.5 py-0.5 text-[10px] font-black text-black shadow-[1px_1px_0px_#000]">
          O POSITIVO
        </span>
      </div>

      {/* Alerta Médica Alergia */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border-2 border-black bg-rose-300 px-3 py-1.5 shadow-[2px_2px_0px_#000]">
        <AlertTriangle className="h-4 w-4 shrink-0 text-black fill-yellow-400" />
        <span className="text-[11px] font-black uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      {/* Cuadrícula de Signos Vitales (3 bloques) */}
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">PRESIÓN</div>
          <div className="text-xs font-black text-black">120/80</div>
        </div>
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">PULSO</div>
          <div className="text-xs font-black text-black">72 lpm</div>
        </div>
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">SpO2</div>
          <div className="text-xs font-black text-black">98%</div>
        </div>
      </div>

      {/* Diagnóstico CIE-10 */}
      <div className="mt-3 rounded-xl border-2 border-black bg-white p-2.5 shadow-[2px_2px_0px_#000]">
        <span className="text-[10px] font-black text-black/60 uppercase">ÚLTIMO CIE-10:</span>
        <div className="text-xs font-extrabold text-black">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border-3 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  // glassmorphism (ErikaSalud original)
  if (style === 'glassmorphism') {
    return `import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      {/* Header Ficha */}
      <div className="relative z-10 flex items-start justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-emerald-200 shadow-sm backdrop-blur-md">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">Carlos Mendoza</h3>
            <p className="text-[11px] font-medium text-emerald-200/80">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-rose-300/40 bg-rose-500/20 px-2.5 py-0.5 text-[10px] font-bold text-rose-200 shadow-xs">
          O POSITIVO
        </span>
      </div>

      {/* Alerta Médica Alergia */}
      <div className="relative z-10 mt-3 flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-500/15 px-3 py-1.5 text-amber-200">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-300" />
        <span className="text-[11px] font-bold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      {/* Cuadrícula de Signos Vitales (3 bloques) */}
      <div className="relative z-10 mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">PRESIÓN</div>
          <div className="text-xs font-bold text-white">120/80</div>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">PULSO</div>
          <div className="text-xs font-bold text-white">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">SpO2</div>
          <div className="text-xs font-bold text-white">98%</div>
        </div>
      </div>

      {/* Diagnóstico CIE-10 */}
      <div className="relative z-10 mt-3 rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-emerald-200/70 uppercase">ÚLTIMO DIAGNÓSTICO OMS:</span>
        <div className="text-xs font-semibold text-white">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="relative z-10 mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-2.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>

      <div className="relative z-10 flex items-start justify-between border-b border-white/40 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/40 text-cyan-800 shadow-sm">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">Carlos Mendoza</h3>
            <p className="text-[11px] font-semibold text-slate-600">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-rose-300 bg-rose-100 px-2.5 py-0.5 text-[10px] font-extrabold text-rose-800">
          O POSITIVO
        </span>
      </div>

      <div className="relative z-10 mt-3 flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-100/70 px-3 py-1.5 text-amber-900">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
        <span className="text-[11px] font-extrabold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="relative z-10 mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">PRESIÓN</div>
          <div className="text-xs font-black text-slate-900">120/80</div>
        </div>
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">PULSO</div>
          <div className="text-xs font-black text-slate-900">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">SpO2</div>
          <div className="text-xs font-black text-slate-900">98%</div>
        </div>
      </div>

      <div className="relative z-10 mt-3 rounded-xl border border-white/80 bg-white/40 p-2.5 shadow-xs">
        <span className="text-[10px] font-extrabold text-slate-500 uppercase">CIE-10 CONFIRMADO:</span>
        <div className="text-xs font-extrabold text-slate-900">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="relative z-10 mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-extrabold uppercase text-white shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-start justify-between border-b border-slate-300 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800">Carlos Mendoza</h3>
            <p className="text-[11px] font-medium text-slate-500">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-rose-700 shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
          O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-rose-700 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
        <span className="text-[11px] font-bold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">PRESIÓN</div>
          <div className="text-xs font-bold text-slate-800">120/80</div>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">PULSO</div>
          <div className="text-xs font-bold text-slate-800">72 lpm</div>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">SpO2</div>
          <div className="text-xs font-bold text-slate-800">98%</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
        <span className="text-[10px] font-bold text-slate-500 uppercase">CIE-10 DIAGNÓSTICO:</span>
        <div className="text-xs font-bold text-slate-800">Z00.0 - Examen médico de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold uppercase text-teal-700 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a7f3d0]/30 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25),inset_0_4px_8px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(5,150,105,0.15)] font-sans text-teal-950">
      <div className="flex items-start justify-between border-b border-white/50 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-teal-950">Carlos Mendoza</h3>
            <p className="text-[11px] font-bold text-teal-800">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-white/80 bg-rose-200/90 px-2.5 py-0.5 text-[10px] font-black text-rose-900 shadow-xs">
          O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/60 bg-rose-100/80 px-3 py-1.5 text-rose-900 shadow-xs">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
        <span className="text-[11px] font-black uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">PRESIÓN</div>
          <div className="text-xs font-black text-teal-950">120/80</div>
        </div>
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">PULSO</div>
          <div className="text-xs font-black text-teal-950">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">SpO2</div>
          <div className="text-xs font-black text-teal-950">98%</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-white/60 bg-white/60 p-2.5 shadow-xs">
        <span className="text-[10px] font-black text-teal-700 uppercase">DIAGNÓSTICO CIE-10:</span>
        <div className="text-xs font-black text-teal-950">Z00.0 - Examen médico de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/80 bg-gradient-to-r from-teal-600 to-emerald-600 py-2.5 text-xs font-black uppercase text-white shadow-[0_8px_16px_rgba(16,185,129,0.3)] active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { User, AlertTriangle, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-neutral-900 text-neutral-900">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-neutral-900">Carlos Mendoza</h3>
            <p className="font-mono text-[11px] text-neutral-500">ID: 1724890214 · 34Y</p>
          </div>
        </div>
        <span className="font-mono text-[10px] font-bold border border-neutral-900 px-2 py-0.5">
          BLOOD: O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border border-neutral-900 p-2 text-neutral-900">
        <AlertTriangle className="h-4 w-4 shrink-0 text-neutral-900" />
        <span className="font-mono text-[11px] font-bold uppercase">ALERTA: PENICILINA // AINEs</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">BP</div>
          <div className="font-mono text-xs font-bold">120/80</div>
        </div>
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">PULSE</div>
          <div className="font-mono text-xs font-bold">72 BPM</div>
        </div>
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">SpO2</div>
          <div className="font-mono text-xs font-bold">98%</div>
        </div>
      </div>

      <div className="mt-3 border border-neutral-200 p-2">
        <span className="font-mono text-[9px] text-neutral-400 uppercase">CIE-10 DIAGNOSIS:</span>
        <div className="font-mono text-xs font-bold text-neutral-900">Z00.0 General Medical Examination</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-white hover:text-neutral-900 transition-colors">
        <span>Ficha Paciente 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React from "react";
import { User, AlertTriangle, Terminal, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-emerald-400 bg-black/90 p-6 font-mono text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.25)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-start justify-between border-b border-emerald-400/30 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-cyan-400 bg-cyan-400/20 text-cyan-300">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-cyan-300 uppercase">CARLOS MENDOZA</h3>
            <p className="text-[10px] text-emerald-400/70">ID: 1724890214 // AGE: 34</p>
          </div>
        </div>
        <span className="border border-rose-500 bg-rose-950/60 px-2 py-0.5 text-[10px] font-bold text-rose-400">
          O+ BIO
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border border-rose-500/80 bg-rose-950/30 p-2 text-rose-300">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider">WARN: PENICILINA + AINEs</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">SYS/DIA</div>
          <div className="text-xs font-bold text-cyan-300">120/80</div>
        </div>
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">BPM</div>
          <div className="text-xs font-bold text-cyan-300">72</div>
        </div>
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">SpO2</div>
          <div className="text-xs font-bold text-cyan-300">98%</div>
        </div>
      </div>

      <div className="mt-3 border border-emerald-400/30 bg-emerald-950/20 p-2">
        <span className="text-[9px] text-emerald-400/60 uppercase">CIE-10 NODO:</span>
        <div className="text-xs font-bold text-emerald-300">Z00.0 // GENERAL CHECKUP</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 border border-emerald-400 bg-emerald-400 py-2.5 text-xs font-black uppercase text-black hover:bg-black hover:text-emerald-400 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)]">
        <span>ACCESO HISTORIA CLÍNICA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
}

module.exports = { generatePatientRecord };
