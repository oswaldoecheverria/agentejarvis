const fs = require('fs');
const path = require('path');

const VAULT_DIR = 'F:/proyectos/agentepersonal/vault';
const ELEMENTS_DIR = path.join(VAULT_DIR, 'components/elements');

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

// 8 Familias Médicas extraídas de ErikaSalud
const ERIKASALUD_FAMILIES = [
  {
    id: 'medical-plan',
    category: 'cards',
    name: "Plan Médico Familiar 'Salud Total'",
    icon: 'CreditCard',
    summary: "Tarjeta de plan de cobertura médica preventiva con modalidad domicilio/consultorio, desglose de precio y checks clínicos.",
    data: {
      badge: "COBERTURA TOTAL",
      title: "Plan Familiar Preventivo",
      desc: "Consultas ilimitadas, chequeo semestral y telemedicina 24/7 para 4 miembros.",
      statMain: "$120 USD / mes",
      statSub: "Sin copago en consultas · Recetas PAdES-BES",
      btnText: "CONTRATAR PLAN MÉDICO",
      iconName: "Stethoscope"
    }
  },
  {
    id: 'medical-service',
    category: 'cards',
    name: "Tarjeta de Consulta & Especialidad Médica",
    icon: 'HeartPulse',
    summary: "Tarjeta de especialidad clínica con badge de modalidad (Telemedicina/Consultorio), precio referencial y llamada a cita.",
    data: {
      badge: "CONSULTA ESPECIALIZADA",
      title: "Medicina Familiar & Preventiva",
      desc: "Evaluación integral de salud, control de patologías crónicas y medicina del estilo de vida.",
      statMain: "Desde $45 USD",
      statSub: "Duración 45 min · Presencial o Virtual",
      btnText: "AGENDAR CONSULTA",
      iconName: "HeartPulse"
    }
  },
  {
    id: 'patient-record',
    category: 'cards',
    name: "Ficha Clínica 360 del Paciente",
    icon: 'User',
    summary: "Tarjeta de telemetría y expediente del paciente con cédula/ID, tipo sanguíneo, alergias y último diagnóstico CIE-10.",
    data: {
      badge: "EXPEDIENTE LOPDP",
      title: "Carlos Mendoza (34 años)",
      desc: "Historial clínico verificado. Cédula: 1724890214 · Sangre: O Positivo · Sin alergias reportadas.",
      statMain: "Último CIE-10: Z00.0",
      statSub: "Examen médico general de rutina · Normal",
      btnText: "VER HISTORIA CLÍNICA",
      iconName: "ShieldCheck"
    }
  },
  {
    id: 'appointment-scheduler',
    category: 'widgets',
    name: "Selector de Turnos & Agenda Médica",
    icon: 'Calendar',
    summary: "Widget interactivo de agendamiento con selector de turnos mañana/tarde, cálculo de disponibilidad y confirmación horaria.",
    data: {
      badge: "AGENDA EN VIVO",
      title: "Turnos Disponibles Hoy",
      desc: "Selecciona el bloque de horario preferido para atención presencial o videoconsulta.",
      statMain: "09:30 AM · 11:15 AM · 04:00 PM",
      statSub: "3 turnos libres disponibles hoy",
      btnText: "CONFIRMAR TURNO",
      iconName: "Clock"
    }
  },
  {
    id: 'medical-hero',
    category: 'heros',
    name: "Hero Clínico Inmersivo de Autor",
    icon: 'Stethoscope',
    summary: "Cabecera principal de impacto médico con marco perimetral HUD de precisión, credenciales MSP y botón directo a cita.",
    data: {
      badge: "DRA. ERIKA SALUD",
      title: "Medicina que Escucha y Cuida",
      desc: "Atención médica humana con rigor científico y seguimiento continuo para tu tranquilidad.",
      statMain: "Registro MSP: 17-5421",
      statSub: "Más de 4,500 pacientes atendidos en Ecuador",
      btnText: "AGENDAR CITA MÉDICA",
      iconName: "Stethoscope"
    }
  },
  {
    id: 'appointment-modal',
    category: 'modals',
    name: "Modal de Reserva de Cita Médica",
    icon: 'Lock',
    summary: "Modal flotante de reserva con selección de país (Ecuador/Internacional), validación de identificación y consentimiento informado.",
    data: {
      badge: "RESERVA SEGURA",
      title: "Confirmar Cita Médica",
      desc: "Ingresa tu cédula o pasaporte para vincular la reserva a tu expediente electrónico protegido.",
      statMain: "Viernes 14 Nov · 10:30 AM",
      statSub: "Consultorio Quito Norte / Telemedicina",
      btnText: "FINALIZAR RESERVA",
      iconName: "Calendar"
    }
  },
  {
    id: 'medical-faq',
    category: 'faq',
    name: "Acordeón Clínico & Recetas Electrónicas",
    icon: 'HelpCircle',
    summary: "Desplegable de preguntas frecuentes sobre validez de recetas SRI, reembolsos de seguros privados y citas de control.",
    data: {
      badge: "PREGUNTAS FRECUENTES",
      title: "¿Cómo funcionan las recetas digitales?",
      desc: "Nuestras recetas cuentan con firma electrónica avanzada PAdES-BES y código QR válido en todas las farmacias del país.",
      statMain: "Válidas a nivel nacional",
      statSub: "Aceptadas por Humana, Saludsa y Ecuasanitas",
      btnText: "VER TODAS LAS PREGUNTAS",
      iconName: "FileText"
    }
  },
  {
    id: 'health-marquee',
    category: 'carousels',
    name: "Marquesina de Aliados Clínicos & Aseguradoras",
    icon: 'Layers',
    summary: "Cinta infinita animada de aseguradoras, laboratorios de diagnóstico y farmacias integradas al ecosistema.",
    data: {
      badge: "ALIADOS & SEGUROS",
      title: "Red Médica Integrada",
      desc: "Cobertura directa y convenios de reembolso con las principales aseguradoras privadas de salud.",
      statMain: "Saludsa · Humana · Bupa · Confiamed",
      statSub: "Reembolso automático y facturación electrónica SRI",
      btnText: "PAUSAR RED MÉDICA",
      iconName: "Layers"
    }
  }
];

function generateCode(famId, stConfig, data) {
  const compName = capitalize(famId) + stConfig.compSuffix;
  const style = stConfig.styleId;

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { ArrowRight, Check, HeartPulse, Stethoscope, ShieldCheck, Clock, Calendar, FileText } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-emerald-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
          ★ ${data.badge}
        </span>
        <span className="font-mono text-xs font-black">MED-V2</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-black">${data.title}</h3>
        <p className="mt-1 text-xs font-bold text-black/80">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <HeartPulse className="h-5 w-5 text-black" />
          </div>
          <div>
            <div className="text-xs font-black uppercase text-black">${data.statMain}</div>
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
import { ArrowRight, Sparkles, HeartPulse, Stethoscope, ShieldCheck, Clock, Calendar } from "lucide-react";

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
        <span className="font-mono text-xs font-bold text-emerald-200/80">ERIKASALUD</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">${data.title}</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">${data.desc}</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-500/30 text-emerald-200 shadow-xs">
            <HeartPulse className="h-5 w-5" />
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
import { ArrowRight, Zap, HeartPulse, Stethoscope, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-emerald-300/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-teal-400/25 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900 backdrop-blur-md shadow-xs">
          <HeartPulse className="h-3.5 w-3.5 text-teal-600" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-extrabold text-slate-700">LIQUID CLINIC</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">${data.title}</h3>
        <p className="mt-1 text-xs font-semibold text-slate-600">${data.desc}</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-md shadow-inner">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-teal-700 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">${data.statMain}</div>
            <div className="text-[11px] font-semibold text-slate-600">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-teal-500 to-emerald-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <HeartPulse className="h-3.5 w-3.5 text-teal-600" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-bold text-slate-500">CLINICAL NEU</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">${data.title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-4 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0e5ec] text-teal-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">${data.statMain}</div>
            <div className="text-[11px] font-medium text-slate-500">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a7f3d0]/30 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25),inset_0_4px_8px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(5,150,105,0.15)] font-sans text-teal-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-teal-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)]">
          <HeartPulse className="h-3.5 w-3.5 text-rose-500 fill-rose-400" />
          ${data.badge}
        </span>
        <span className="font-mono text-xs font-black text-teal-700">CLAY MED</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-teal-950">${data.title}</h3>
        <p className="mt-1 text-xs font-bold text-teal-900/80">${data.desc}</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/60 p-4 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-[0_6px_12px_rgba(16,185,129,0.3),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-black text-teal-950">${data.statMain}</div>
            <div className="text-[11px] font-bold text-teal-700">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-teal-600 to-emerald-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(16,185,129,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { ArrowRight, Check, HeartPulse, ShieldCheck } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          // CLINICAL // ${data.badge}
        </span>
        <span className="font-mono text-xs font-bold text-neutral-400">[MSP-17]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">${data.title}</h3>
        <p className="mt-1 text-xs text-neutral-500 leading-relaxed">${data.desc}</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-900 text-neutral-900">
            <HeartPulse className="h-4 w-4" />
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
import { ArrowRight, HeartPulse, ShieldCheck, Terminal } from "lucide-react";

export function ${compName}() {
  return (
    <div className="relative w-full max-w-sm border border-emerald-400 bg-black/90 p-6 font-mono text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.25)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-emerald-400/30 pb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-cyan-400">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          MED_HUD // ${data.badge}
        </span>
        <span className="text-[10px] text-emerald-400/80 font-bold">[BIO-SYNC]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-black uppercase tracking-widest text-emerald-400">${data.title}</h3>
        <p className="mt-1 text-xs text-emerald-400/70">${data.desc}</p>
      </div>
      <div className="mt-5 border border-cyan-400/40 bg-cyan-950/20 p-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400 bg-cyan-400/20 text-cyan-300">
            <HeartPulse className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">${data.statMain}</div>
            <div className="text-[10px] text-emerald-400/70">${data.statSub}</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 border border-emerald-400 bg-emerald-400 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-emerald-400 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)]">
        <span>${data.btnText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}`;
}

// 1. Generar los archivos TSX para las 8 familias médicas (56 archivos)
console.log('1. Generando 56 componentes médicos en vault/components/elements/...');
let totalGenerated = 0;

ERIKASALUD_FAMILIES.forEach(fam => {
  const famDir = path.join(ELEMENTS_DIR, fam.id);
  ensureDir(famDir);

  STYLE_CONFIG.forEach(st => {
    const fileName = `${fam.id}-${st.suffix}.tsx`;
    const filePath = path.join(famDir, fileName);
    const code = generateCode(fam.id, st, fam.data);
    fs.writeFileSync(filePath, code, 'utf-8');
    totalGenerated++;
  });
});

console.log(`Se generaron ${totalGenerated} componentes médicos (8 familias x 7 estilos).`);
