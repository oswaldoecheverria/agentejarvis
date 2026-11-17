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

// 1. HERO COUNTDOWN
function generateHeroCountdown(style) {
  const compName = getCompName('HeroCountdown', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Zap } from "lucide-react";

export function ${compName}() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000] mb-3">
        <Zap className="h-3.5 w-3.5" />
        <span>JORNADA MÉDICA PREVENTIVA</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2">
        CIERRE DE REGISTRO EN VIVO
      </h2>
      <p className="text-xs font-bold text-slate-800 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "DÍAS", val: time.d },
          { label: "HORAS", val: time.h },
          { label: "MIN", val: time.m },
          { label: "SEG", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl border-3 border-black bg-white p-3 text-center shadow-[3px_3px_0px_#000]">
            <span className="font-mono text-2xl font-black text-black">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-black uppercase text-slate-600 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-3 border-black bg-black py-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>ASEGURAR MI CUPO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Sparkles } from "lucide-react";

export function ${compName}() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-8 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-200 mb-3">
        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
        <span>Jornada Médica Preventiva</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
        Cierre de Registro en Vivo
      </h2>
      <p className="text-xs text-emerald-100/80 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "Días", val: time.d },
          { label: "Horas", val: time.h },
          { label: "Min", val: time.m },
          { label: "Seg", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-white/30 bg-white/10 p-3 text-center backdrop-blur-md">
            <span className="font-mono text-2xl font-bold text-white">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-medium uppercase text-emerald-200/80 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
        <span>Asegurar Mi Cupo</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Zap } from "lucide-react";

export function ${compName}() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-8 shadow-[12px_12px_24px_#c8d0e7,-12px_-12px_24px_#ffffff] font-sans text-slate-700">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-3">
        <Zap className="h-3.5 w-3.5" />
        <span>Jornada Médica Preventiva</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
        Cierre de Registro en Vivo
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "DÍAS", val: time.d },
          { label: "HORAS", val: time.h },
          { label: "MIN", val: time.m },
          { label: "SEG", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl bg-[#e0e5ec] p-3 text-center shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]">
            <span className="font-mono text-2xl font-black text-indigo-600">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-bold text-slate-500 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
        <span>ASEGURAR MI CUPO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React, { useState, useEffect } from "react";
import { Timer, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-2xl border border-neutral-200 bg-white p-8 font-sans text-neutral-900 shadow-sm">
      <div className="inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 mb-3">
        <Timer className="h-3.5 w-3.5" />
        <span>Clinical Preventive Summit</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-950 mb-2">Live Registration Countdown</h2>
      <p className="text-xs text-neutral-500 mb-6">Priority access to clinical diagnostics and comprehensive checkup.</p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "Days", val: time.d },
          { label: "Hours", val: time.h },
          { label: "Min", val: time.m },
          { label: "Sec", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
            <span className="font-mono text-2xl font-bold text-neutral-900">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] text-neutral-500 uppercase mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
        <span>Reserve Spot</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
}

// 2. PLANS COMPARISON TABLE
function generatePlansComparisonTable(style) {
  const compName = getCompName('PlansComparisonTable', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Check, X } from "lucide-react";

export function ${compName}() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="border-b-2 border-black pb-3 mb-3">
        <h3 className="text-base font-black uppercase">TABLA COMPARATIVA DE PLANES</h3>
        <p className="text-xs font-bold text-slate-700">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-xl border-2 border-black bg-slate-50 text-xs font-black">
            <span>{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-slate-700">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-black" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-black text-black bg-lime-300 py-0.5 rounded border border-black">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-black" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t-2 border-black">
        <span className="text-xs font-black">DESDE $29/MES</span>
        <button className="border-2 border-black bg-black px-4 py-1.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
          ELEGIR PLAN
        </button>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { Check, X } from "lucide-react";

export function ${compName}() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55)] font-sans text-white">
      <div className="border-b border-white/15 pb-3 mb-3">
        <h3 className="text-base font-bold text-white">Tabla Comparativa de Planes</h3>
        <p className="text-xs text-emerald-100/70">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
            <span className="text-emerald-100 font-medium">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-emerald-200/60">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-emerald-300" /> : <X className="h-4 w-4 mx-auto text-white/30" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-emerald-200 bg-emerald-950/60 py-0.5 rounded border border-emerald-400/30">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-emerald-300" /> : <X className="h-4 w-4 mx-auto text-white/30" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/15">
        <span className="text-xs font-semibold text-emerald-200">Desde $29/mes</span>
        <button className="rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}`;
  }

  // Neumorphic table
  if (style === 'neumorphism') {
    return `import React from "react";
import { Check, X } from "lucide-react";

export function ${compName}() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="border-b border-slate-300/40 pb-3 mb-3">
        <h3 className="text-base font-bold text-slate-800">Tabla Comparativa de Planes</h3>
        <p className="text-xs text-slate-500">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
            <span className="font-semibold text-slate-700">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-slate-500">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-indigo-600" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-indigo-600 rounded-lg bg-[#e0e5ec] py-0.5 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-indigo-600" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-slate-300/40">
        <span className="text-xs font-bold text-slate-800">Desde $29 / mes</span>
        <button className="rounded-xl bg-[#e0e5ec] px-4 py-2 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React from "react";
import { Check, X } from "lucide-react";

export function ${compName}() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-300 bg-white p-5 font-sans text-neutral-900 shadow-sm">
      <div className="border-b border-neutral-200 pb-3 mb-3">
        <h3 className="text-base font-bold">Plans Comparison Matrix</h3>
        <p className="text-xs text-neutral-500">Transparent medical coverage tiers</p>
      </div>
      <div className="space-y-1.5 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-neutral-100 text-xs">
            <span className="text-neutral-700 font-medium">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-neutral-500">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-neutral-900" /> : <X className="h-4 w-4 mx-auto text-neutral-300" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-neutral-900 bg-neutral-100 py-0.5 rounded">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-neutral-900" /> : <X className="h-4 w-4 mx-auto text-neutral-300" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
        <span className="text-xs font-semibold">From $29/mo</span>
        <button className="rounded-lg bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-neutral-800">
          Select Plan
        </button>
      </div>
    </div>
  );
}`;
}

// 3. AUTHOR BIO CARD
function generateAuthorBioCard(style) {
  const compName = getCompName('AuthorBioCard', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-cyan-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-3.5 mb-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_#000] text-xl font-black">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-black uppercase">DRA. ERIKA SALUD</h3>
            <CheckCircle className="h-4 w-4 text-black fill-lime-300" />
          </div>
          <span className="text-xs font-bold text-slate-800">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs font-bold text-slate-800 mb-3 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t-2 border-black text-xs font-black">
        <span className="border border-black bg-white px-2 py-0.5 rounded text-[10px]">MSP 17-5421</span>
        <button className="flex items-center gap-1 hover:underline">
          <span>VER BIOGRAFÍA</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-4 mb-3.5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] text-lg font-black text-indigo-600">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-slate-900">Dra. Erika Salud</h3>
            <CheckCircle className="h-4 w-4 text-indigo-600 fill-indigo-100" />
          </div>
          <span className="text-xs font-semibold text-slate-500">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-300/40 text-xs">
        <span className="rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">MSP 17-5421</span>
        <button className="flex items-center gap-1 font-bold text-slate-700 hover:text-indigo-600">
          <span>Ver Biografía</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-3.5 mb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-200 font-bold">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-white">Dra. Erika Salud</h3>
            <CheckCircle className="h-4 w-4 text-emerald-300" />
          </div>
          <span className="text-xs text-emerald-100/70">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs text-emerald-100/80 mb-3 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-emerald-200">
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">MSP 17-5421</span>
        <button className="flex items-center gap-1 hover:underline">
          <span>Ver Biografía</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}`;
}

// 4. BLOG ARTICLE CARD
function generateBlogArticleCard(style) {
  const compName = getCompName('BlogArticleCard', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000]">
        <BookOpen className="h-8 w-8 text-black" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="border border-black bg-pink-400 px-2 py-0.5 text-[10px] font-black uppercase shadow-[1px_1px_0px_#000]">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] font-black">
          <Clock className="h-3 w-3" />
          <span>5 MIN</span>
        </div>
      </div>
      <h3 className="text-sm font-black uppercase text-black mb-1.5 leading-snug">
        CÓMO PREVENIR LA HIPERTENSIÓN SILENCIOSA
      </h3>
      <p className="text-xs font-bold text-slate-700 mb-3 line-clamp-2">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-2.5 border-t-2 border-black">
        <span className="text-[11px] font-black text-slate-600">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-black uppercase hover:underline">
          <span>LEER</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mb-3.5">
        <BookOpen className="h-8 w-8 text-indigo-500" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-xl bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
          <Clock className="h-3 w-3" />
          <span>5 min</span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
        Cómo Prevenir la Hipertensión Silenciosa
      </h3>
      <p className="text-xs text-slate-500 mb-3.5 line-clamp-2 leading-relaxed">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-300/40">
        <span className="text-[11px] font-semibold text-slate-500">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline">
          <span>Leer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="aspect-video w-full rounded-xl border border-white/20 bg-black/20 flex items-center justify-center mb-3">
        <BookOpen className="h-8 w-8 text-emerald-300" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-full bg-emerald-950/60 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] text-emerald-200/70">
          <Clock className="h-3 w-3" />
          <span>5 min</span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
        Cómo Prevenir la Hipertensión Silenciosa
      </h3>
      <p className="text-xs text-emerald-100/70 mb-3 line-clamp-2 leading-relaxed">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-white/15">
        <span className="text-[11px] text-emerald-200/70">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-bold text-emerald-300 hover:underline">
          <span>Leer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}`;
}

// 5. CALENDAR SYNC CARD
function generateCalendarSyncCard(style) {
  const compName = getCompName('CalendarSyncCard', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Calendar, Check, ExternalLink } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4" />
        <h4 className="text-xs font-black uppercase">SINCRONIZAR CON TU CALENDARIO</h4>
      </div>
      <p className="text-xs font-bold text-slate-800 mb-3">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl border-2 border-black bg-white py-1.5 text-center text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-yellow-200">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Calendar } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4 text-indigo-600" />
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Sincronizar Calendario</h4>
      </div>
      <p className="text-xs text-slate-500 mb-3.5">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl bg-[#e0e5ec] py-2 text-center text-xs font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { Calendar } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4 text-emerald-300" />
        <h4 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Sincronizar Calendario</h4>
      </div>
      <p className="text-xs text-emerald-100/70 mb-3">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl border border-white/20 bg-white/10 py-1.5 text-center text-xs font-semibold text-white hover:bg-white/20">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}`;
}

// 6. SHARE BAR FLOATING
function generateShareBarFloating(style) {
  const compName = getCompName('ShareBarFloating', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Send } from "lucide-react";

export function ${compName}() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-2xl border-3 border-black bg-white p-2 shadow-[5px_5px_0px_#000] font-sans">
      <span className="text-[10px] font-black uppercase text-black ml-1 mr-1">COMPARTIR:</span>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[1px_1px_0px_#000]">
        <MessageCircle className="h-4 w-4 text-black" />
      </button>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-cyan-300 shadow-[1px_1px_0px_#000]">
        <Send className="h-4 w-4 text-black" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-xl border-2 border-black bg-yellow-300 px-2.5 py-1.5 text-[11px] font-black shadow-[1px_1px_0px_#000]">
        {copied ? <Check className="h-3.5 w-3.5 text-black" /> : <Copy className="h-3.5 w-3.5 text-black" />}
        <span>{copied ? "COPIADO" : "ENLACE"}</span>
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Copy, Check, MessageCircle, Send } from "lucide-react";

export function ${compName}() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <span className="text-[10px] font-bold uppercase text-slate-500 ml-1">Compartir:</span>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-indigo-600">
        <MessageCircle className="h-4 w-4" />
      </button>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-indigo-600">
        <Send className="h-4 w-4" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-xs font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        <span>{copied ? "Copiado" : "Enlace"}</span>
      </button>
    </div>
  );
}`;
  }

  // fallback glass
  return `import React, { useState } from "react";
import { Copy, Check, MessageCircle, Send } from "lucide-react";

export function ${compName}() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-md text-white font-sans">
      <span className="text-[10px] font-semibold text-emerald-200 ml-2">Compartir:</span>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
        <MessageCircle className="h-3.5 w-3.5" />
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
        <Send className="h-3.5 w-3.5" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-full border border-white/30 bg-emerald-500/80 px-3 py-1 text-xs font-bold text-white shadow-sm">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        <span>{copied ? "Copiado" : "Enlace"}</span>
      </button>
    </div>
  );
}`;
}

// 7. DEVICE SECURITY MANAGER
function generateDeviceSecurityManager(style) {
  const compName = getCompName('DeviceSecurityManager', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <Shield className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">DISPOSITIVOS ACTIVOS (LOPDP)</h3>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-lime-200 text-xs font-black">
          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            <div>
              <p>Chrome en Windows (Este)</p>
              <span className="text-[10px] text-slate-600">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="border border-black bg-black text-white px-1.5 py-0.2 text-[9px]">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-slate-50 text-xs font-black">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <div>
              <p>Safari en iPhone 14</p>
              <span className="text-[10px] text-slate-500">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded border border-black hover:bg-red-400">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full border-2 border-black bg-red-400 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
        CERRAR OTRAS SESIONES
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <Shield className="h-4 w-4 text-indigo-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Dispositivos Activos</h3>
      </div>
      <div className="space-y-2.5 mb-3.5">
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
          <div className="flex items-center gap-2.5">
            <Laptop className="h-4 w-4 text-indigo-600" />
            <div>
              <p className="font-bold text-slate-800">Chrome en Windows (Este)</p>
              <span className="text-[10px] text-slate-500">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-xs">
          <div className="flex items-center gap-2.5">
            <Smartphone className="h-4 w-4 text-slate-500" />
            <div>
              <p className="font-bold text-slate-700">Safari en iPhone 14</p>
              <span className="text-[10px] text-slate-400">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded-lg text-red-500 hover:bg-red-50">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full rounded-xl bg-[#e0e5ec] py-2 text-xs font-bold text-red-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        Cerrar Otras Sesiones
      </button>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <Shield className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Dispositivos Activos</h3>
      </div>
      <div className="space-y-2 mb-3.5">
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-400/30 bg-emerald-950/60 text-xs">
          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4 text-emerald-300" />
            <div>
              <p className="font-semibold text-white">Chrome en Windows (Este)</p>
              <span className="text-[10px] text-emerald-200/70">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-200">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-emerald-200/70" />
            <div>
              <p className="text-emerald-100">Safari en iPhone 14</p>
              <span className="text-[10px] text-emerald-200/60">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded text-emerald-200/60 hover:text-red-400">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full rounded-xl border border-red-500/30 bg-red-500/20 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/30">
        Cerrar Otras Sesiones
      </button>
    </div>
  );
}`;
}

// 8. DIGITAL CERT STATUS
function generateDigitalCertStatus(style) {
  const compName = getCompName('DigitalCertStatus', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { KeyRound, ShieldCheck, AlertCircle } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-3 border-b-2 border-black pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4" />
          <h4 className="text-xs font-black uppercase">FIRMA ELECTRÓNICA PAdES</h4>
        </div>
        <span className="border border-black bg-lime-300 px-2 py-0.5 text-[9px] font-black">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs font-bold mb-4">
        <p>Emisor: <span className="font-mono">Security Data S.A.</span></p>
        <p>Titular: <span className="font-mono">Dra. Erika Salud</span></p>
        <p className="text-slate-600">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-xl border-2 border-black bg-yellow-200 p-2.5 flex items-center gap-2 text-xs font-black">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { KeyRound, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3 border-b border-slate-300/40 pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-indigo-600" />
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Firma Electrónica</h4>
        </div>
        <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs mb-4">
        <p className="text-slate-600">Emisor: <span className="font-mono font-bold text-slate-800">Security Data S.A.</span></p>
        <p className="text-slate-600">Titular: <span className="font-mono font-bold text-slate-800">Dra. Erika Salud</span></p>
        <p className="text-slate-500 text-[11px]">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] flex items-center gap-2 text-xs font-bold text-indigo-600">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { KeyRound, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between mb-3 border-b border-white/15 pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-emerald-300" />
          <h4 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Firma Electrónica</h4>
        </div>
        <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-200">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs text-emerald-100/80 mb-4">
        <p>Emisor: <span className="font-mono text-white">Security Data S.A.</span></p>
        <p>Titular: <span className="font-mono text-white">Dra. Erika Salud</span></p>
        <p className="text-emerald-200/60 text-[11px]">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-950/60 p-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-200">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}`;
}

// 9. PRESCRIPTIONS TABLE
function generatePrescriptionsTable(style) {
  const compName = getCompName('PrescriptionsTable', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function ${compName}() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <h3 className="text-xs font-black uppercase">RECETAS ELECTRÓNICAS PAdES</h3>
        </div>
        <span className="text-[10px] font-black bg-yellow-300 border border-black px-1.5 py-0.2">ÚLTIMAS</span>
      </div>
      <div className="space-y-2">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-slate-50 text-xs">
            <div>
              <span className="font-mono text-[10px] font-black text-slate-600">{r.id}</span>
              <p className="font-black text-black">{r.patient}</p>
              <p className="text-[11px] font-bold text-slate-700">{r.med}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-black bg-lime-300 hover:bg-lime-400">
                <QrCode className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 rounded-lg border border-black bg-black text-white hover:bg-slate-800">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function ${compName}() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/40 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-indigo-600" />
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Recetas Electrónicas</h3>
        </div>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[10px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">ÚLTIMAS</span>
      </div>
      <div className="space-y-2.5">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
            <div>
              <span className="font-mono text-[10px] font-bold text-slate-500">{r.id}</span>
              <p className="font-bold text-slate-800">{r.patient}</p>
              <p className="text-[11px] text-slate-500">{r.med}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">
                <QrCode className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function ${compName}() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-emerald-300" />
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Recetas Electrónicas</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-emerald-200">ÚLTIMAS</span>
      </div>
      <div className="space-y-2">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
            <div>
              <span className="font-mono text-[10px] text-emerald-200/70">{r.id}</span>
              <p className="font-semibold text-white">{r.patient}</p>
              <p className="text-[11px] text-emerald-100/70">{r.med}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
                <QrCode className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 rounded-lg border border-white/20 bg-emerald-500/80 text-white hover:brightness-110">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;
}

// 10. FOOTER INSTITUTIONAL
function generateFooterInstitutional(style) {
  const compName = getCompName('FooterInstitutional', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

export function ${compName}() {
  return (
    <footer className="w-full max-w-xl rounded-3xl border-4 border-black bg-lime-300 p-6 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-black">
        <div>
          <span className="font-black text-sm tracking-tight">ERIKASALUD</span>
          <p className="text-xs font-bold text-slate-800 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs font-bold space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-black">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black">
        <span>© 2026 ERIKASALUD. LOPDP CUMPLIDO.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:underline">PRIVACIDAD</a>
          <a href="#" className="hover:underline">TÉRMINOS</a>
        </div>
      </div>
    </footer>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";

export function ${compName}() {
  return (
    <footer className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300/40">
        <div>
          <span className="font-bold text-sm tracking-tight text-slate-900">ERIKASALUD</span>
          <p className="text-xs text-slate-500 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs text-slate-500 space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-bold text-slate-700">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>© 2026 ErikaSalud. LOPDP cumplido.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-slate-900">Privacidad</a>
          <a href="#" className="hover:text-slate-900">Términos</a>
        </div>
      </div>
    </footer>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";

export function ${compName}() {
  return (
    <footer className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/15">
        <div>
          <span className="font-bold text-sm tracking-tight text-white">ERIKASALUD</span>
          <p className="text-xs text-emerald-100/70 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs text-emerald-200/80 space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-bold text-white">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-emerald-200/70">
        <span>© 2026 ErikaSalud. LOPDP cumplido.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
}`;
}

// 11. COOKIE CONSENT BANNER
function generateCookieConsentBanner(style) {
  const compName = getCompName('CookieConsentBanner', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { ShieldAlert, Check } from "lucide-react";

export function ${compName}() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-2xl border-3 border-black bg-yellow-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-black uppercase">PRIVACIDAD & LOPDP (ECUADOR)</h4>
          <p className="text-xs font-bold text-slate-800 mt-1 leading-snug">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => setClosed(true)} className="rounded-xl border-2 border-black bg-black px-4 py-1 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
              ACEPTAR TODO
            </button>
            <button onClick={() => setClosed(true)} className="rounded-xl border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase text-black hover:bg-slate-100">
              CONFIGURAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";

export function ${compName}() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          <ShieldAlert className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Privacidad & LOPDP (Ecuador)</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3.5 flex items-center gap-3">
            <button onClick={() => setClosed(true)} className="rounded-xl bg-[#e0e5ec] px-4 py-1.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
              Aceptar Todo
            </button>
            <button onClick={() => setClosed(true)} className="rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900">
              Configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";

export function ${compName}() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Privacidad & LOPDP (Ecuador)</h4>
          <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => setClosed(true)} className="rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1 text-xs font-bold text-white shadow-sm hover:brightness-110">
              Aceptar Todo
            </button>
            <button onClick={() => setClosed(true)} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-100 hover:bg-white/20">
              Configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// 12. SRI INVOICE MODAL
function generateSriInvoiceModal(style) {
  const compName = getCompName('SriInvoiceModal', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Receipt, Check, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4" />
          <h3 className="text-xs font-black uppercase">NUEVA FACTURA SRI</h3>
        </div>
        <span className="border border-black bg-yellow-300 px-1.5 py-0.2 text-[9px] font-black">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs font-bold mb-3">
        <div className="flex justify-between"><span>Consulta Médica:</span><span>$40.00</span></div>
        <div className="flex justify-between text-slate-600"><span>IVA (15%):</span><span>$6.00</span></div>
        <div className="flex justify-between text-base font-black border-t-2 border-black pt-1">
          <span>TOTAL:</span>
          <span>$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
        <span>EMITIR COMPROBANTE SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Receipt, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/40 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4 text-indigo-600" />
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Facturación SRI</h3>
        </div>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs mb-3.5">
        <div className="flex justify-between"><span>Consulta Médica:</span><span className="font-bold text-slate-800">$40.00</span></div>
        <div className="flex justify-between text-slate-500"><span>IVA (15%):</span><span className="font-bold">$6.00</span></div>
        <div className="flex justify-between text-base font-bold text-slate-900 border-t border-slate-300/40 pt-1.5">
          <span>Total:</span>
          <span className="text-indigo-600">$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        <span>Emitir Comprobante SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { Receipt, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4 text-emerald-300" />
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Facturación SRI</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-emerald-200">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs mb-3.5">
        <div className="flex justify-between text-emerald-100"><span>Consulta Médica:</span><span>$40.00</span></div>
        <div className="flex justify-between text-emerald-200/60"><span>IVA (15%):</span><span>$6.00</span></div>
        <div className="flex justify-between text-base font-bold text-white border-t border-white/15 pt-1.5">
          <span>Total:</span>
          <span>$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110">
        <span>Emitir Comprobante SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
}

// 13. WHATSAPP SHARE MODAL
function generateWhatsappShareModal(style) {
  const compName = getCompName('WhatsappShareModal', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { MessageCircle, Send, Phone } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">ENVIAR RECETA POR WHATSAPP</h3>
      </div>
      <div className="mb-3">
        <label className="block text-[10px] font-black uppercase mb-1">NÚMERO DE TELÉFONO</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-xl border-2 border-black bg-white px-3 py-1.5 text-xs font-bold text-black"
        />
      </div>
      <div className="rounded-xl border-2 border-black bg-white p-2.5 text-[11px] font-bold text-slate-800 mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
        <Send className="h-3.5 w-3.5" />
        <span>ENVIAR MENSAJE</span>
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { MessageCircle, Send } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4 text-emerald-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Enviar por WhatsApp</h3>
      </div>
      <div className="mb-3.5">
        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Teléfono</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-2xl bg-[#e0e5ec] px-3.5 py-2 text-xs font-bold text-slate-800 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] focus:outline-none"
        />
      </div>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 text-xs text-slate-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-emerald-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        <Send className="h-3.5 w-3.5" />
        <span>Enviar Mensaje</span>
      </button>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React from "react";
import { MessageCircle, Send } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Enviar por WhatsApp</h3>
      </div>
      <div className="mb-3">
        <label className="block text-[10px] font-semibold text-emerald-200/80 uppercase mb-1">Teléfono</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white focus:outline-none"
        />
      </div>
      <div className="rounded-xl border border-white/10 bg-white/10 p-2.5 text-xs text-emerald-100/80 mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110">
        <Send className="h-3.5 w-3.5" />
        <span>Enviar Mensaje</span>
      </button>
    </div>
  );
}`;
}

// 14. BRANCH FAQ ACCORDION
function generateBranchFaqAccordion(style) {
  const compName = getCompName('BranchFaqAccordion', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function ${compName}() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿QUÉ INCLUYE LA CONSULTA FAMILIAR?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿LAS RECETAS SIRVEN EN CUALQUIER FARMACIA?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-yellow-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">PREGUNTAS POR ESPECIALIDAD</h3>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-xl border-2 border-black bg-white overflow-hidden shadow-[2px_2px_0px_#000]">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3 text-xs font-black text-left">
                <span>{f.q}</span>
                <ChevronDown className={\`h-4 w-4 transition-transform \${isOp ? "rotate-180" : ""}\`} />
              </button>
              {isOp && (
                <div className="border-t-2 border-black bg-lime-100 p-3 text-xs font-bold text-slate-800">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function ${compName}() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿Qué incluye la consulta familiar?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿Las recetas sirven en cualquier farmacia?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4 text-indigo-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Preguntas Frecuentes</h3>
      </div>
      <div className="space-y-2.5">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-2xl bg-[#e0e5ec] overflow-hidden shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff]">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3.5 text-xs font-bold text-slate-800 text-left">
                <span>{f.q}</span>
                <ChevronDown className={\`h-4 w-4 text-indigo-600 transition-transform \${isOp ? "rotate-180" : ""}\`} />
              </button>
              {isOp && (
                <div className="p-3.5 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs text-slate-600 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  // fallback glass / clean
  return `import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function ${compName}() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿Qué incluye la consulta familiar?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿Las recetas sirven en cualquier farmacia?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Preguntas por Especialidad</h3>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-xl border border-white/10 bg-white/10 overflow-hidden">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3 text-xs font-semibold text-white text-left">
                <span>{f.q}</span>
                <ChevronDown className={\`h-4 w-4 text-emerald-300 transition-transform \${isOp ? "rotate-180" : ""}\`} />
              </button>
              {isOp && (
                <div className="p-3 bg-black/20 text-xs text-emerald-100/80 leading-relaxed border-t border-white/10">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
}

module.exports = {
  generateHeroCountdown,
  generatePlansComparisonTable,
  generateAuthorBioCard,
  generateBlogArticleCard,
  generateCalendarSyncCard,
  generateShareBarFloating,
  generateDeviceSecurityManager,
  generateDigitalCertStatus,
  generatePrescriptionsTable,
  generateFooterInstitutional,
  generateCookieConsentBanner,
  generateSriInvoiceModal,
  generateWhatsappShareModal,
  generateBranchFaqAccordion
};
