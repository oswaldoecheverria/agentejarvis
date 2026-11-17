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

// 1. PILL FILTER RIBBON
function generatePillRibbon(style) {
  const compName = getCompName('PillRibbon', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "TODOS", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "MEDICINA FAMILIAR", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "TELEMEDICINA", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "CRÓNICOS", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
    { id: "domicilio", label: "A DOMICILIO", count: 3, icon: <Home className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={\`flex items-center gap-1.5 shrink-0 rounded-xl border-2 border-black px-3.5 py-1.5 text-xs font-black uppercase transition-all \${
                isSel
                  ? "bg-black text-white shadow-[3px_3px_0px_#000] -translate-y-0.5"
                  : "bg-white text-black hover:bg-yellow-300 shadow-[2px_2px_0px_#000]"
              }\`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={\`ml-1 rounded-md px-1.5 py-0.2 text-[10px] border border-black \${
                isSel ? "bg-lime-400 text-black font-black" : "bg-slate-100 text-black"
              }\`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Control Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 p-1 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45)]">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={\`flex items-center gap-1.5 shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 \${
                isSel
                  ? "border border-white/40 bg-white/25 text-white shadow-md shadow-emerald-950/40"
                  : "text-emerald-100/70 hover:text-white hover:bg-white/10"
              }\`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={\`ml-1 rounded-full px-2 py-0.2 text-[10px] \${
                isSel ? "bg-emerald-400/30 text-emerald-200 border border-emerald-300/40" : "bg-black/20 text-emerald-200/60"
              }\`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff]">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={\`flex items-center gap-2 shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all \${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }\`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={\`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold \${
                isSel ? "bg-[#e0e5ec] text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]" : "bg-[#d1d9e6] text-slate-600"
              }\`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  // fallback clean / minimalist
  return `import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Users } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2 font-sans">
      <div className="flex items-center gap-2">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={\`flex items-center gap-1.5 shrink-0 rounded-full px-3.5 py-1.5 text-xs transition-colors \${
                isSel ? "bg-neutral-900 text-white font-medium" : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
              }\`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className="text-[10px] opacity-70 ml-1">({opt.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
}

// 2. MEDICAL SIDEBAR: Panel lateral de la doctora
function generateMedicalSidebar(style) {
  const compName = getCompName('MedicalSidebar', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl border-3 border-black bg-cyan-200 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2.5 border-b-3 border-black pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_#000]">
          <Stethoscope className="h-5 w-5 text-black" />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase">PANEL MÉDICO</h4>
          <p className="text-[10px] font-bold text-black/70">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-xl border-2 border-black p-2.5 text-xs font-black transition-all \${
                isSel
                  ? "bg-black text-white shadow-[2px_2px_0px_#000] translate-x-1"
                  : "bg-white text-black hover:bg-yellow-100 shadow-[2px_2px_0px_#000]"
              }\`}
            >
              <div className="flex items-center gap-2">
                {it.icon}
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className={\`rounded-full px-1.5 py-0.2 text-[10px] border border-black \${
                  isSel ? "bg-lime-300 text-black" : "bg-black/10 text-black"
                }\`}>
                  {it.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center gap-2.5 border-b border-white/20 pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-emerald-200">
          <Stethoscope className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-200">PANEL MÉDICO</h4>
          <p className="text-[11px] font-medium text-emerald-100/70">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-semibold transition-all \${
                isSel
                  ? "border border-white/30 bg-white/20 text-white shadow-sm"
                  : "text-emerald-100/70 hover:bg-white/10 hover:text-white"
              }\`}
            >
              <div className="flex items-center gap-2">
                <span className={isSel ? "text-emerald-300" : "text-emerald-300/70"}>{it.icon}</span>
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className="rounded-full bg-emerald-400/30 border border-emerald-300/40 px-1.5 py-0.2 text-[10px] text-emerald-200">
                  {it.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  // AQUI ESTABA EL FALLBACK: AHORA IMPLEMENTAMOS NEUMORPHISM REAL!
  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-3 border-b border-slate-300/40 pb-3.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-indigo-600">
          <Stethoscope className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">PANEL MÉDICO</h4>
          <p className="text-[11px] font-semibold text-slate-500">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold transition-all \${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] translate-x-1"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }\`}
            >
              <div className="flex items-center gap-2.5">
                <span className={isSel ? "text-indigo-600" : "text-slate-500"}>{it.icon}</span>
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className={\`rounded-xl px-2 py-0.5 text-[10px] font-bold \${
                  isSel
                    ? "bg-[#e0e5ec] text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]"
                    : "bg-[#d1d9e6] text-slate-600"
                }\`}>
                  {it.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  // fallback clean / minimalist
  return `import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-2xl border border-neutral-300 bg-white p-4 font-sans text-neutral-900 shadow-sm">
      <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
        <div className="flex h-9 w-9 items-center justify-center border border-neutral-900">
          <Stethoscope className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider">PANEL MÉDICO</h4>
          <p className="text-[11px] text-neutral-500">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between p-2 text-xs font-bold transition-colors \${
                isSel ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-700"
              }\`}
            >
              <div className="flex items-center gap-2">
                {it.icon}
                <span>{it.label}</span>
              </div>
              {it.count && <span className="text-[10px] opacity-70">[{it.count}]</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
}

// 3. CIE-10 SEARCH INPUT
function generateCie10Search(style) {
  const compName = getCompName('Cie10Search', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black uppercase tracking-wider">BUSCADOR CIE-10 OMS</span>
        <span className="border border-black bg-black text-white px-1.5 py-0.2 text-[9px] font-black">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar CIE-10..."
          className="w-full rounded-xl border-2 border-black bg-white pl-9 pr-3 py-2 text-xs font-bold text-black focus:outline-none focus:bg-yellow-200"
        />
      </div>
      <div className="mt-3 space-y-2">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={\`flex items-center justify-between p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all \${
                isSel ? "bg-black text-white shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-100"
              }\`}
            >
              <div>
                <span className={\`text-[9px] font-black uppercase px-1.5 py-0.5 rounded border \${isSel ? "bg-lime-400 text-black border-lime-400" : "bg-black text-white border-black"}\`}>{res.code}</span>
                <p className="text-xs font-black mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">BUSCADOR CIE-10 OMS</span>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-mono text-emerald-100">⌘K RÁPIDO</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-300" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar diagnóstico..."
          className="w-full rounded-xl border border-white/20 bg-white/10 pl-9 pr-3 py-2 text-xs font-medium text-white placeholder-emerald-100/60 focus:outline-none focus:border-emerald-300 focus:bg-white/15"
        />
      </div>
      <div className="mt-3 space-y-1.5">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={\`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all \${
                isSel
                  ? "border-emerald-400 bg-white/20 text-white shadow-sm"
                  : "border-white/10 hover:bg-white/10 text-emerald-100/80"
              }\`}
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">{res.code}</span>
                <p className="text-xs font-semibold mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-emerald-300" />
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
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">BUSCADOR CIE-10 OMS</span>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar patología o código..."
          className="w-full rounded-2xl bg-[#e0e5ec] pl-10 pr-3 py-2.5 text-xs font-bold text-slate-800 placeholder-slate-400 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] focus:outline-none"
        />
      </div>
      <div className="mt-3.5 space-y-2.5">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={\`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all \${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }\`}
            >
              <div>
                <span className="text-[10px] font-bold text-indigo-600 rounded-md bg-[#e0e5ec] px-1.5 py-0.5 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">{res.code}</span>
                <p className="text-xs font-bold mt-1.5">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">BUSCADOR CIE-10 OMS</span>
        <span className="font-mono text-[10px] text-neutral-400">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar patología o código CIE-10..."
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-2 text-xs font-medium text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white"
        />
      </div>
      <div className="mt-3 space-y-1.5">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={\`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all \${
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-800"
              }\`}
            >
              <div>
                <span className={\`text-[9px] font-bold px-1.5 py-0.5 rounded \${isSel ? "bg-white text-neutral-900" : "bg-neutral-100 text-neutral-700"}\`}>{res.code}</span>
                <p className="text-xs font-semibold mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}`;
}

// 4. CLINICAL PHOTO ALBUM
function generateClinicalAlbum(style) {
  const compName = getCompName('ClinicalAlbum', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Image, ZoomIn, Sparkles } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-pink-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="relative aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 overflow-hidden flex items-center justify-center shadow-[3px_3px_0px_#000]">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-black mb-1" />
          <span className="text-xs font-black uppercase">FOTOGRAFÍA CLÍNICA 16:9</span>
        </div>
        <div className="absolute top-2 right-2 border-2 border-black bg-white px-2 py-0.5 text-[10px] font-black uppercase shadow-[1.5px_1.5px_0px_#000]">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded">DERMATOLOGÍA</span>
          <h4 className="text-sm font-black uppercase mt-1">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="relative aspect-video w-full rounded-2xl border border-white/30 bg-black/20 overflow-hidden flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-emerald-300 mb-1" />
          <span className="text-xs font-medium text-emerald-100">Registro Fotográfico HD</span>
        </div>
        <div className="absolute top-2.5 right-2.5 rounded-full border border-white/30 bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-200 backdrop-blur-md">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">DERMATOLOGÍA</span>
          <h4 className="text-sm font-bold text-white mt-0.5">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-200 hover:bg-white/25 transition-colors">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-indigo-500 mb-1" />
          <span className="text-xs font-bold text-slate-500">Registro Fotográfico HD</span>
        </div>
        <div className="absolute top-3 right-3 rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff]">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">DERMATOLOGÍA</span>
          <h4 className="text-sm font-bold text-slate-800 mt-0.5">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="relative aspect-video w-full rounded-xl bg-neutral-100 flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-8 w-8 mx-auto text-neutral-400 mb-1" />
          <span className="text-xs text-neutral-500">Clinical Photographic Record</span>
        </div>
        <div className="absolute top-2 right-2 rounded-md bg-neutral-900 text-white px-2 py-0.5 text-[10px] font-bold">
          +12 PHOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase text-neutral-400">DERMATOLOGY</span>
          <h4 className="text-sm font-semibold text-neutral-900 mt-0.5">Skin Lesion Progression</h4>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}`;
}

// 5. APPOINTMENT CALENDAR
function generateAppointmentCalendar(style) {
  const compName = getCompName('AppointmentCalendar', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "LUN" },
    { num: 11, name: "MAR" },
    { num: 12, name: "MIÉ" },
    { num: 13, name: "JUE" },
    { num: 14, name: "VIE" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-amber-200 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3">
        <Calendar className="h-4 w-4 text-black" />
        <span className="text-xs font-black uppercase">SELECCIONA FECHA Y HORA</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={\`rounded-xl border-2 border-black py-2 text-center transition-all \${
                isSel ? "bg-black text-white shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-200"
              }\`}
            >
              <div className="text-[9px] font-black">{d.name}</div>
              <div className="text-sm font-black mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={\`flex items-center justify-center gap-1.5 rounded-xl border-2 border-black py-1.5 text-xs font-black \${
                isSel ? "bg-lime-400 text-black shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-100"
              }\`}
            >
              <Clock className="h-3.5 w-3.5" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>CONFIRMAR CITA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "Lun" },
    { num: 11, name: "Mar" },
    { num: 12, name: "Mié" },
    { num: 13, name: "Jue" },
    { num: 14, name: "Vie" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <Calendar className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider">SELECCIÓN DE TURNO</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={\`rounded-xl border py-2 text-center transition-all \${
                isSel ? "border-emerald-300 bg-white/25 text-white shadow-sm" : "border-white/10 hover:bg-white/10 text-emerald-100/70"
              }\`}
            >
              <div className="text-[9px] font-medium">{d.name}</div>
              <div className="text-sm font-bold mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={\`flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-semibold \${
                isSel ? "border-emerald-400 bg-emerald-500/80 text-white shadow-sm" : "border-white/15 hover:bg-white/10 text-emerald-100/80"
              }\`}
            >
              <Clock className="h-3.5 w-3.5 text-emerald-300" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>CONFIRMAR AGENDAMIENTO</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "Lun" },
    { num: 11, name: "Mar" },
    { num: 12, name: "Mié" },
    { num: 13, name: "Jue" },
    { num: 14, name: "Vie" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3.5">
        <Calendar className="h-4 w-4 text-indigo-600" />
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">SELECCIÓN DE TURNO</span>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={\`rounded-2xl py-2.5 text-center transition-all \${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] hover:text-slate-900"
              }\`}
            >
              <div className="text-[9px] font-bold">{d.name}</div>
              <div className="text-sm font-extrabold mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={\`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold \${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff]"
              }\`}
            >
              <Clock className="h-3.5 w-3.5 text-indigo-500" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
        <span>CONFIRMAR AGENDAMIENTO</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "Mon" },
    { num: 11, name: "Tue" },
    { num: 12, name: "Wed" },
    { num: 13, name: "Thu" },
    { num: 14, name: "Fri" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm font-sans text-neutral-900">
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-2.5 mb-3">
        <Calendar className="h-4 w-4 text-neutral-900" />
        <span className="text-xs font-bold uppercase tracking-wider">APPOINTMENT SCHEDULE</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={\`rounded-xl border py-2 text-center transition-all \${
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-600"
              }\`}
            >
              <div className="text-[9px] font-medium">{d.name}</div>
              <div className="text-sm font-bold mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={\`flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-medium \${
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-700"
              }\`}
            >
              <Clock className="h-3.5 w-3.5 text-neutral-500" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
        <span>Confirm Appointment</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}`;
}

// 6. MASKED VIDEO PLAYER
function generateMaskedVideoPlayer(style) {
  const compName = getCompName('MaskedVideoPlayer', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { Play, Sparkles } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-cyan-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="relative aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 overflow-hidden flex items-center justify-center shadow-[3px_3px_0px_#000]">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000] hover:scale-105 transition-all">
          <Play className="h-5 w-5 fill-black text-black ml-0.5" />
        </button>
        <div className="absolute bottom-2 left-2 border-2 border-black bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase">
          02:45 MIN
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-black uppercase">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] font-bold text-slate-800 mt-0.5">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { Play } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="relative aspect-video w-full rounded-2xl border border-white/30 bg-black/30 overflow-hidden flex items-center justify-center">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md shadow-lg hover:scale-110 active:scale-95 transition-all">
          <Play className="h-5 w-5 fill-white text-white ml-0.5" />
        </button>
        <div className="absolute bottom-2.5 left-2.5 rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[10px] font-mono text-emerald-200">
          02:45 min
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] text-emerald-100/80 mt-0.5">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { Play } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0e5ec] text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <Play className="h-6 w-6 fill-indigo-600 text-indigo-600 ml-1" />
        </button>
        <div className="absolute bottom-3 left-3 rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">
          02:45 min
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] font-semibold text-slate-500 mt-1">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}`;
  }

  // fallback clean
  return `import React from "react";
  import { Play } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="relative aspect-video w-full rounded-xl bg-neutral-100 flex items-center justify-center">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md hover:scale-105 transition-all">
          <Play className="h-5 w-5 fill-white text-white ml-0.5" />
        </button>
        <div className="absolute bottom-2 left-2 rounded bg-neutral-900/80 text-white px-2 py-0.5 text-[10px] font-mono">
          02:45
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">MEET DR. ERIKA SALUD</h4>
        <p className="text-[11px] text-neutral-500 mt-0.5">Family Medicine and clinical integrity</p>
      </div>
    </div>
  );
}`;
}

module.exports = {
  generatePillRibbon,
  generateMedicalSidebar,
  generateCie10Search,
  generateClinicalAlbum,
  generateAppointmentCalendar,
  generateMaskedVideoPlayer
};
