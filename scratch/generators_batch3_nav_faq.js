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

// =========================================================================
// 1. BOTTOM NAV (Barra de navegación móvil inferior)
// =========================================================================
function generateBottomNav(style) {
  const compName = getCompName('BottomNav', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "INICIO", icon: Home },
    { id: "citas", label: "CITAS", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "PACIENTES", icon: Users },
    { id: "recetas", label: "RECETAS", icon: FileText },
    { id: "ajustes", label: "AJUSTES", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border-3 border-black bg-yellow-300 p-2 shadow-[5px_5px_0px_#000] font-sans">
      <div className="grid grid-cols-5 gap-1.5">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl border-2 border-black transition-transform active:translate-y-0.5 \${
                isAct ? "bg-white shadow-[2px_2px_0px_#000]" : "bg-yellow-200 hover:bg-yellow-100"
              }\`}
            >
              {n.badge && (
                <span className="absolute -top-1.5 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-black bg-rose-500 px-1 text-[9px] font-black text-white shadow-[1px_1px_0px_#000]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 text-black mb-1" />
              <span className="text-[9px] font-black uppercase text-black truncate w-full text-center">
                {n.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-[0_15px_35px_rgba(3,20,14,0.4)] font-sans text-white">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 \${
                isAct
                  ? "bg-white/20 border border-white/40 shadow-inner text-emerald-200"
                  : "text-emerald-100/70 hover:bg-white/10"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-400 px-1 text-[9px] font-bold text-slate-900 shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-semibold tracking-tight">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'liquid-glass') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-cyan-400/40 bg-slate-950/70 p-2 backdrop-blur-3xl shadow-[0_0_25px_rgba(6,182,212,0.25)] font-sans text-cyan-50">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 \${
                isAct
                  ? "bg-cyan-500/20 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)] text-cyan-200 scale-105"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[8px] font-black text-slate-950 shadow-[0_0_6px_#06b6d4]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-medium">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-3 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="grid grid-cols-5 gap-2">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl transition-all duration-200 \${
                isAct
                  ? "shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-teal-700 font-bold"
                  : "shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] text-slate-500 hover:text-slate-800"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-teal-600 px-1 text-[8px] font-bold text-white shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px]">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'claymorphism') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/60 bg-gradient-to-br from-violet-100 to-indigo-50 p-2.5 shadow-[0_12px_24px_rgba(99,102,241,0.18)] font-sans text-indigo-900">
      <div className="grid grid-cols-5 gap-1.5">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 \${
                isAct
                  ? "bg-white text-indigo-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_6px_12px_rgba(99,102,241,0.2)] font-extrabold scale-105"
                  : "text-indigo-400 hover:text-indigo-700 hover:bg-white/40"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-black text-white shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-bold">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'minimalism') {
    return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border-t border-slate-200 bg-white p-2 font-mono text-slate-900">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 text-[10px] uppercase transition-colors \${
                isAct ? "border-b-2 border-slate-900 font-bold" : "text-slate-400 hover:text-slate-900"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 rounded bg-slate-900 px-1 text-[8px] font-bold text-white">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span>{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  // cyberpunk
  return `import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "SYS_HOME", icon: Home },
    { id: "citas", label: "APPTS", icon: Calendar, badge: "03" },
    { id: "pacientes", label: "USERS", icon: Users },
    { id: "recetas", label: "RX_PAD", icon: FileText },
    { id: "ajustes", label: "CFG", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border border-cyan-400 bg-slate-950 p-2 font-mono text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={\`relative flex flex-col items-center justify-center py-2 px-1 transition-all \${
                isAct
                  ? "bg-cyan-500/20 border-b-2 border-cyan-400 text-cyan-200 shadow-[inset_0_0_8px_rgba(6,182,212,0.3)]"
                  : "text-cyan-600 hover:text-cyan-300"
              }\`}
            >
              {n.badge && (
                <span className="absolute top-0.5 right-1 rounded border border-rose-500 bg-rose-950/80 px-1 text-[8px] font-bold text-rose-400 shadow-[0_0_6px_#f43f5e]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[9px] tracking-widest">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 2. SIDEBAR NAV (Menú lateral clínico colapsable)
// =========================================================================
function generateSidebarNav(style) {
  const compName = getCompName('SidebarNav', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "EXPEDIENTES PACIENTES", count: "24", icon: User },
    { id: "agenda", label: "AGENDA DEL DÍA", count: "8", icon: Calendar },
    { id: "recetas", label: "RECETAS EMITIDAS", count: "12", icon: FileText },
    { id: "facturas", label: "FACTURACIÓN SRI", count: "$1.4K", icon: Receipt },
    { id: "seguridad", label: "DISPOSITIVOS SEGUROS", count: "OK", icon: Shield },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl border-3 border-black bg-emerald-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-black bg-white shadow-[2px_2px_0px_#000]">
          <span className="font-black text-sm">DRA</span>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase leading-tight">DRA. ERIKA SALUD</h4>
          <span className="text-[10px] font-bold bg-black text-white px-1.5 py-0.5 rounded uppercase mt-0.5 inline-block">
            MSP: 17-5421
          </span>
        </div>
      </div>
      <div className="space-y-1.5 mb-5">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-xl border-2 border-black p-2.5 text-xs font-black transition-all \${
                isAct ? "bg-white shadow-[3px_3px_0px_#000] translate-x-1" : "bg-emerald-200/80 hover:bg-white/50"
              }\`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{it.label}</span>
              </div>
              <span className="rounded border border-black bg-yellow-300 px-1.5 py-0.2 text-[10px]">
                {it.count}
              </span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-rose-400 p-2.5 text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-rose-500">
        <LogOut className="h-4 w-4" />
        <span>CERRAR SESIÓN</span>
      </button>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut, ChevronRight } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "Expedientes Pacientes", count: "24", icon: User },
    { id: "agenda", label: "Agenda del Día", count: "8", icon: Calendar },
    { id: "recetas", label: "Recetas Emitidas", count: "12", icon: FileText },
    { id: "facturas", label: "Facturación SRI", count: "$1.4k", icon: Receipt },
    { id: "seguridad", label: "Dispositivos Seguros", count: "Activo", icon: Shield },
  ];

  return (
    <div className="w-full max-w-xs rounded-[2.25rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-inner">
          <span className="font-bold text-sm text-emerald-200">ES</span>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-tight">Dra. Erika Salud</h4>
          <span className="text-[10px] text-emerald-200/80 font-medium">Médico Familiar · MSP 17-5421</span>
        </div>
      </div>
      <div className="space-y-1 mb-5">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-2xl p-2.5 text-xs font-medium transition-all duration-200 \${
                isAct
                  ? "bg-white/20 border border-white/40 shadow-inner text-emerald-100 font-bold translate-x-1"
                  : "text-emerald-100/75 hover:bg-white/10 hover:text-white"
              }\`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-emerald-300" />
                <span>{it.label}</span>
              </div>
              <span className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-emerald-200">
                {it.count}
              </span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-400/40 bg-rose-500/15 p-2.5 text-xs font-semibold text-rose-200 hover:bg-rose-500/25">
        <LogOut className="h-4 w-4" />
        <span>Cerrar Sesión</span>
      </button>
    </div>
  );
}
export default ${compName};`;
  }

  // Fallback genérico para los otros 5 estilos
  return `import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "Expedientes Pacientes", count: "24", icon: User },
    { id: "agenda", label: "Agenda del Día", count: "8", icon: Calendar },
    { id: "recetas", label: "Recetas PAdES-BES", count: "12", icon: FileText },
    { id: "facturas", label: "Facturación SRI", count: "$1.4K", icon: Receipt },
  ];

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-xs">
          ES
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900">Dra. Erika Salud</h4>
          <span className="text-[10px] text-slate-500">Medicina Familiar</span>
        </div>
      </div>
      <div className="space-y-1 mb-4">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={\`flex w-full items-center justify-between rounded-xl p-2 text-xs transition-colors \${
                isAct ? "bg-slate-100 font-bold text-slate-900" : "text-slate-600 hover:bg-slate-50"
              }\`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-slate-500" />
                <span>{it.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">{it.count}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 p-2 text-xs font-semibold text-rose-700 hover:bg-rose-100">
        <LogOut className="h-3.5 w-3.5" />
        <span>Salir</span>
      </button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 3. SPECIALTIES NAV RIBBON (Cinta de navegación horizontal de especialidades)
// =========================================================================
function generateSpecialtiesNavRibbon(style) {
  const compName = getCompName('SpecialtiesNavRibbon', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Stethoscope, Baby, HeartPulse, Sparkles, Brain, Eye } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("familiar");

  const specs = [
    { id: "familiar", name: "MEDICINA FAMILIAR", icon: Stethoscope },
    { id: "pediatria", name: "PEDIATRÍA PREVENTIVA", icon: Baby },
    { id: "cardiologia", name: "SALUD CARDIOVASCULAR", icon: HeartPulse },
    { id: "bienestar", name: "NUTRICIÓN Y METABOLISMO", icon: Sparkles },
    { id: "psico", name: "SALUD MENTAL INTEGRAL", icon: Brain },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border-3 border-black bg-white p-3 shadow-[5px_5px_0px_#000] font-sans">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {specs.map((s) => {
          const Icon = s.icon;
          const isAct = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={\`flex shrink-0 items-center gap-2 rounded-xl border-2 border-black px-3 py-2 text-xs font-black transition-all \${
                isAct ? "bg-amber-300 shadow-[3px_3px_0px_#000] translate-y-[-2px]" : "bg-slate-100 hover:bg-yellow-100"
              }\`}
            >
              <Icon className="h-4 w-4" />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  // Fallback
  return `import React, { useState } from "react";
import { Stethoscope, Baby, HeartPulse, Sparkles, Brain } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("familiar");

  const specs = [
    { id: "familiar", name: "Medicina Familiar", icon: Stethoscope },
    { id: "pediatria", name: "Pediatría", icon: Baby },
    { id: "cardiologia", name: "Cardiología", icon: HeartPulse },
    { id: "bienestar", name: "Nutrición", icon: Sparkles },
    { id: "psico", name: "Salud Mental", icon: Brain },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm font-sans">
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {specs.map((s) => {
          const Icon = s.icon;
          const isAct = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={\`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all \${
                isAct ? "bg-slate-900 text-white shadow-xs" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }\`}
            >
              <Icon className="h-4 w-4" />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 4. SMART TABS RIBBON (Pestañas segmentadas deslizantes)
// =========================================================================
function generateSmartTabsRibbon(style) {
  const compName = getCompName('SmartTabsRibbon', style);

  return `import React, { useState } from "react";
import { ShieldCheck, Calendar, Activity, Users } from "lucide-react";

export function ${compName}() {
  const [active, setActive] = useState("todos");

  const tabs = [
    { id: "todos", label: "Todas las Consultas", count: 18 },
    { id: "presenciales", label: "Presenciales", count: 12 },
    { id: "virtuales", label: "Telemedicina", count: 6 },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-100 p-1.5 font-sans">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map((t) => {
          const isAct = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={\`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all \${
                isAct ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }\`}
            >
              <span>{t.label}</span>
              <span className={\`rounded-full px-1.5 py-0.2 text-[10px] \${isAct ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}\`}>
                {t.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 5. USER MENU POPOVER (Menú desplegable flotante de usuario/doctora)
// =========================================================================
function generateUserMenuPopover(style) {
  const compName = getCompName('UserMenuPopover', style);

  return `import React, { useState } from "react";
import { UserCheck, Settings, Key, Shield, LogOut, ChevronDown } from "lucide-react";

export function ${compName}() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-4 shadow-lg font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
          ES
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-slate-900 truncate">Dra. Erika Salud</h4>
          <p className="text-[10px] text-slate-400 truncate">erika@erikasalud.com</p>
        </div>
      </div>
      <div className="space-y-1 mb-3 text-xs">
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Settings className="h-4 w-4 text-slate-400" />
          <span>Configuración de Cuenta</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Key className="h-4 w-4 text-slate-400" />
          <span>Firma Electrónica SRI</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Shield className="h-4 w-4 text-slate-400" />
          <span>Seguridad & 2FA</span>
        </button>
      </div>
      <div className="border-t border-slate-100 pt-2">
        <button className="flex w-full items-center gap-2 rounded-xl p-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
          <LogOut className="h-4 w-4" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 6. FAQ QUESTION BOX (Caja de pregunta individual)
// =========================================================================
function generateFaqQuestionBox(style) {
  const compName = getCompName('FaqQuestionBox', style);

  return `import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export function ${compName}() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xs font-sans text-slate-800">
      <div className="flex items-start justify-between gap-3 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
            <HelpCircle className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">
              ¿Cómo valido la firma electrónica de una receta en la farmacia?
            </h4>
            <span className="text-[10px] font-medium text-emerald-600 mt-0.5 inline-block">
              Validez legal garantizada · MSP & LOPDP
            </span>
          </div>
        </div>
        <ChevronDown className={\`h-4 w-4 text-slate-400 shrink-0 transition-transform \${open ? "rotate-180" : ""}\`} />
      </div>

      {open && (
        <div className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-600 leading-relaxed">
          <p>
            Cada receta emitida cuenta con un sello criptográfico PAdES-BES y un código QR único.
            El farmacéutico solo debe escanear el código para verificar la vigencia ante el sistema nacional de salud.
          </p>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 p-2 text-[11px]">
            <span className="text-slate-500">¿Tienes dudas adicionales?</span>
            <button className="flex items-center gap-1 font-bold text-emerald-700 hover:underline">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Consultar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 7. BRANCH GROUPS ACCORDION (Acordeón de grupos de especialidades)
// =========================================================================
function generateBranchGroupsAccordion(style) {
  const compName = getCompName('BranchGroupsAccordion', style);

  return `import React, { useState } from "react";
import { ChevronDown, Stethoscope, Heart, Activity } from "lucide-react";

export function ${compName}() {
  const [activeGroup, setActiveGroup] = useState(0);

  const groups = [
    {
      title: "Medicina Preventiva & Chequeos",
      count: "3 Servicios",
      icon: Stethoscope,
      items: ["Chequeo General Anual", "Evaluación de Riesgo Metabólico", "Control de Hipertensión"]
    },
    {
      title: "Salud Materno-Infantil",
      count: "2 Servicios",
      icon: Heart,
      items: ["Control de Niño Sano", "Vacunación y Crecimiento"]
    },
    {
      title: "Procedimientos Menores",
      count: "4 Servicios",
      icon: Activity,
      items: ["Curaciones Avanzadas", "Retiro de Puntos", "Nebulizaciones", "Lavado Otológico"]
    }
  ];

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xs font-sans text-slate-800">
      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
        Áreas de Atención Médica
      </h3>
      <div className="space-y-2">
        {groups.map((g, idx) => {
          const isOp = activeGroup === idx;
          const Icon = g.icon;
          return (
            <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setActiveGroup(isOp ? -1 : idx)}
                className="flex w-full items-center justify-between p-3.5 text-left text-xs font-bold text-slate-800 hover:bg-slate-50"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-emerald-600" />
                  <span>{g.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-medium">{g.count}</span>
                  <ChevronDown className={\`h-4 w-4 text-slate-400 transition-transform \${isOp ? "rotate-180" : ""}\`} />
                </div>
              </button>
              {isOp && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-3 space-y-1.5">
                  {g.items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-slate-600 py-1 border-b border-slate-100 last:border-none">
                      <span>{it}</span>
                      <button className="text-[10px] font-bold text-emerald-600 hover:underline">Agendar →</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 8. BLOG TOPICS ACCORDION (Acordeón de tópicos editoriales)
// =========================================================================
function generateBlogTopicsAccordion(style) {
  const compName = getCompName('BlogTopicsAccordion', style);

  return `import React, { useState } from "react";
import { BookOpen, ChevronRight, Tag } from "lucide-react";

export function ${compName}() {
  const topics = [
    { name: "Prevención & Longevidad", count: 14, popular: true },
    { name: "Salud Cardiovascular", count: 9 },
    { name: "Nutrición con Evidencia", count: 12, popular: true },
    { name: "Telemedicina en Ecuador", count: 6 },
    { name: "Normativa LOPDP en Salud", count: 4 },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-xs font-sans text-slate-800">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
        <BookOpen className="h-4 w-4 text-slate-900" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Temas de Divulgación</h4>
      </div>
      <div className="space-y-1">
        {topics.map((t, idx) => (
          <button
            key={idx}
            className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Tag className="h-3 w-3 text-slate-400" />
              <span className="font-medium">{t.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {t.popular && (
                <span className="rounded bg-emerald-100 px-1 text-[9px] font-bold text-emerald-800">Top</span>
              )}
              <span className="text-[10px] text-slate-400">{t.count}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 9. NEWSLETTER DIGEST WIZARD (Wizard modal paso a paso)
// =========================================================================
function generateNewsletterDigestWizard(style) {
  const compName = getCompName('NewsletterDigestWizard', style);

  return `import React, { useState } from "react";
import { Mail, Check, ArrowRight, ArrowLeft, Send } from "lucide-react";

export function ${compName}() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900">Asistente de Boletín Clínico</h3>
          <p className="text-[10px] text-slate-500">Paso {step} de 3</p>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={\`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold \${
                step === s
                  ? "bg-emerald-600 text-white"
                  : step > s
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-400"
              }\`}
            >
              {step > s ? <Check className="h-3 w-3" /> : s}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Título del Boletín</label>
            <input
              type="text"
              defaultValue="Consejos médicos para el cambio estacional"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Resumen Clínico</label>
            <textarea
              rows={3}
              defaultValue="Medidas de prevención respiratoria y vacunación recomendada por la Dra. Erika Salud."
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block mb-1">Audiencia Objetivo</label>
          {["Todos los pacientes activos (1,240)", "Pacientes con consultas en los últimos 6 meses (420)", "Suscriptores del blog público (850)"].map((aud, i) => (
            <label key={i} className="flex items-center gap-2.5 rounded-xl border border-slate-200 p-3 text-xs text-slate-700 cursor-pointer hover:bg-slate-50">
              <input type="radio" name="aud" defaultChecked={i === 0} />
              <span>{aud}</span>
            </label>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs space-y-2">
          <p className="font-bold text-slate-900">Listo para Despacho</p>
          <p className="text-slate-600">Se enviará el boletín con firma PAdES institucional a 1,240 suscriptores verificados.</p>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
        <button
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
          className="flex items-center gap-1 text-xs font-bold text-slate-500 disabled:opacity-30"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Atrás</span>
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
          >
            <span>Continuar</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <button className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm">
            <Send className="h-3.5 w-3.5" />
            <span>Enviar Ahora</span>
          </button>
        )}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 10. SRI CREDENTIALS MODAL (Modal de configuración de firma .p12)
// =========================================================================
function generateSriCredentialsModal(style) {
  const compName = getCompName('SriCredentialsModal', style);

  return `import React, { useState } from "react";
import { KeyRound, ShieldCheck, Upload, AlertCircle } from "lucide-react";

export function ${compName}() {
  const [env, setEnv] = useState("PRODUCCION");

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <KeyRound className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase text-slate-900">Configuración SRI & Firma Electrónica</h3>
          <p className="text-[10px] text-slate-500">Certificado digital XAdES-BES / PAdES</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="font-bold text-slate-700 block mb-1">Archivo de Certificado (.p12 / .pfx)</label>
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-4 text-center hover:bg-slate-50 cursor-pointer">
            <div className="flex flex-col items-center gap-1">
              <Upload className="h-4 w-4 text-slate-400" />
              <span className="font-bold text-slate-600">dra_erika_salud_2026.p12</span>
              <span className="text-[10px] text-slate-400">Vigente hasta Dic 2027</span>
            </div>
          </div>
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Contraseña del Certificado</label>
          <input
            type="password"
            defaultValue="••••••••••••"
            className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Ambiente de Emisión SRI</label>
          <div className="grid grid-cols-2 gap-2">
            {["PRUEBAS", "PRODUCCION"].map((e) => (
              <button
                key={e}
                onClick={() => setEnv(e)}
                className={\`rounded-xl p-2 font-bold text-xs border transition-all \${
                  env === e
                    ? "border-blue-600 bg-blue-50 text-blue-800 shadow-xs"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50"
                }\`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800">
          Guardar y Probar Conexión
        </button>
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 11. MEDICAL CERTIFICATE MODAL (Emisión de certificado médico)
// =========================================================================
function generateMedicalCertificateModal(style) {
  const compName = getCompName('MedicalCertificateModal', style);

  return `import React, { useState } from "react";
import { FileBadge, Calendar, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <FileBadge className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase text-slate-900">Emisión de Certificado Médico</h3>
          <p className="text-[10px] text-slate-500">Validez legal MSP Ecuador · Código QR</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="font-bold text-slate-700 block mb-1">Paciente</label>
          <input
            type="text"
            disabled
            defaultValue="Carlos Mendoza (CI: 1724890214)"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-700 font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Días de Reposo</label>
            <input
              type="number"
              defaultValue={3}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="font-bold text-slate-700 block mb-1">Diagnóstico CIE-10</label>
            <input
              type="text"
              defaultValue="J00 - Rinofaringitis"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
            />
          </div>
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Observaciones Clínicas</label>
          <textarea
            rows={2}
            defaultValue="Reposo físico en domicilio con ingesta abundante de líquidos y analgesia."
            className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
          />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-4 w-4" />
          <span>Firmar Criptográficamente y Emitir</span>
        </button>
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 12. MEDIA PICKER MODAL (Selector de galería de medios)
// =========================================================================
function generateMediaPickerModal(style) {
  const compName = getCompName('MediaPickerModal', style);

  return `import React, { useState } from "react";
import { Image, Upload, Check, Search } from "lucide-react";

export function ${compName}() {
  const [selected, setSelected] = useState(0);

  const media = [
    { title: "Consultorio Quito Norte", size: "240 KB", format: "WEBP" },
    { title: "Equipo Electrocardiograma", size: "180 KB", format: "WEBP" },
    { title: "Jornada Comunitaria", size: "320 KB", format: "WEBP" },
    { title: "Certificado Senescyt", size: "150 KB", format: "PNG" },
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <h3 className="text-xs font-black uppercase text-slate-900">Selector de Medios Clínicos</h3>
        <span className="text-[10px] text-slate-400">4 archivos disponibles</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {media.map((m, idx) => {
          const isSel = selected === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={\`relative rounded-2xl border p-3 cursor-pointer transition-all \${
                isSel ? "border-emerald-600 bg-emerald-50/50 shadow-xs" : "border-slate-200 hover:bg-slate-50"
              }\`}
            >
              {isSel && (
                <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="h-16 w-full rounded-xl bg-slate-200 mb-2 flex items-center justify-center text-slate-400">
                <Image className="h-6 w-6" />
              </div>
              <h5 className="text-[11px] font-bold text-slate-900 truncate">{m.title}</h5>
              <div className="flex items-center justify-between text-[9px] text-slate-400 mt-0.5">
                <span>{m.format}</span>
                <span>{m.size}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-2">
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
          Cancelar
        </button>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800">
          Insertar Medio Seleccionado
        </button>
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 13. ALBUM LIGHTBOX MODAL (Visor fotográfico de álbum clínico)
// =========================================================================
function generateAlbumLightboxModal(style) {
  const compName = getCompName('AlbumLightboxModal', style);

  return `import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export function ${compName}() {
  const [current, setCurrent] = useState(0);

  const photos = [
    { title: "Consultorio de Medicina Familiar", caption: "Instalaciones preparadas con filtro HEPA y esterilización continua." },
    { title: "Área de Toma de Muestras", caption: "Atención especializada para niños y adultos mayores." }
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl bg-slate-950 p-6 text-white shadow-2xl font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div>
          <h4 className="text-xs font-bold text-slate-200">{photos[current].title}</h4>
          <span className="text-[10px] text-slate-400">Foto {current + 1} de {photos.length}</span>
        </div>
        <button className="rounded-full bg-white/10 p-1.5 hover:bg-white/20">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative aspect-video w-full rounded-2xl bg-slate-900 mb-3 flex items-center justify-center overflow-hidden border border-white/10">
        <span className="text-xs text-slate-500 font-mono">[Vista Previa Fotográfica 16:9 WebP]</span>
        <button
          onClick={() => setCurrent((c) => (c > 0 ? c - 1 : photos.length - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c < photos.length - 1 ? c + 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">{photos[current].caption}</p>
    </div>
  );
}
export default ${compName};`;
}

module.exports = {
  generateBottomNav,
  generateSidebarNav,
  generateSpecialtiesNavRibbon,
  generateSmartTabsRibbon,
  generateUserMenuPopover,
  generateFaqQuestionBox,
  generateBranchGroupsAccordion,
  generateBlogTopicsAccordion,
  generateNewsletterDigestWizard,
  generateSriCredentialsModal,
  generateMedicalCertificateModal,
  generateMediaPickerModal,
  generateAlbumLightboxModal
};
