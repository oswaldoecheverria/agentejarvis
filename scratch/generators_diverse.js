const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

// 1. NEWSLETTER: Input de Email Real + Botón Integrado
function generateNewsletter(style) {
  const compName = 'Newsletter' + capitalize(style).replace('NeoBrutalism', 'NeoBrutalist').replace('Glassmorphism', 'Glassmorphic').replace('Neumorphism', 'Neumorphic').replace('Claymorphism', 'Claymorphic').replace('Minimalism', 'Minimalist');

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-emerald-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-yellow-300 px-3 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
        <Mail className="h-3.5 w-3.5" />
        NEWSLETTER PRO
      </div>
      <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-black">Actualizaciones de Autor</h3>
      <p className="mt-1 text-xs font-bold text-black/80">Recibe componentes nuevos y guías clínicas cada semana en tu bandeja.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-2.5">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full rounded-2xl border-3 border-black bg-white px-4 py-2.5 text-xs font-black text-black placeholder-black/50 shadow-[3px_3px_0px_#000] focus:outline-none focus:bg-lime-100"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px]"
        >
          {subscribed ? <><Check className="h-4 w-4 text-lime-400" /> ¡SUSCRITO!</> : <><span>UNIRME AL BOLETÍN</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-black text-black/70">
        <ShieldCheck className="h-3.5 w-3.5 text-black" />
        <span>0% SPAM · CANCELA CUANDO QUIERAS</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 border border-white/20">
          <Mail className="h-4 w-4 text-emerald-300" />
        </span>
        <span>BOLETÍN DE AUTOR</span>
      </div>
      <div className="relative z-10 mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">Medicina & Diseño</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">Novedades médicas y componentes de autor directamente a tu correo.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="relative z-10 mt-4 space-y-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@ejemplo.com"
          required
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-medium text-white placeholder-emerald-100/50 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] focus:border-emerald-300 focus:outline-none"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-emerald-200" /> ¡SUSCRITO CON ÉXITO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="relative z-10 mt-3 flex items-center justify-center gap-1.5 text-[10px] text-emerald-200/70">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
        <span>PROTECCIÓN LOPDP · CERO SPAM</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-400/25 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center gap-2 text-cyan-900 text-xs font-extrabold uppercase">
        <Mail className="h-4 w-4 text-cyan-600" />
        <span>NEWSLETTER ACADÉMICO</span>
      </div>
      <div className="relative z-10 mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Novedades Clínicas</h3>
        <p className="mt-1 text-xs font-semibold text-slate-600">Investigación médica y protocolos de salud preventivos.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="relative z-10 mt-4 space-y-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@ejemplo.com"
          required
          className="w-full rounded-2xl border border-white/60 bg-white/40 px-4 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-500 backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-white" /> ¡REGISTRADO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="relative z-10 mt-3 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500">
        <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
        <span>REFRACCIÓN LÍQUIDA · PRIVACIDAD TOTAL</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <Mail className="h-3.5 w-3.5 text-indigo-500" />
        </div>
        <span>NEWSLETTER RELIEVE</span>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">Boletín Semanal</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">Contenido curado para ingenieros y médicos de vanguardia.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="rounded-2xl bg-[#e0e5ec] p-1 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full bg-transparent px-3 py-2 text-xs font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-2.5 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-emerald-600" /> ¡CONFIRMADO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>RELIEVE TÁCTIL · SIN SPAM</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-900">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-purple-200/80 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)]">
          <Mail className="h-3.5 w-3.5 text-purple-700" />
        </div>
        <span>BOLETÍN CLAY 3D</span>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-purple-950">Comunidad Suave</h3>
        <p className="mt-1 text-xs font-bold text-purple-800/80">Recibe entregas táctiles con componentes inflados y recursos.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="rounded-2xl border border-white/60 bg-white/60 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),0_4px_8px_rgba(255,255,255,0.8)]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full bg-transparent px-3 py-2 text-xs font-bold text-purple-950 placeholder-purple-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-white" /> ¡UNIDO!</> : <><span>UNIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-bold text-purple-700">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>ARCILLA 3D SQUISHY</span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">// DISPATCH 01</span>
        <span className="font-mono text-xs text-neutral-400">[WEEKLY]</span>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">Boletín Editorial</h3>
        <p className="mt-1 text-xs text-neutral-500">Ensayos breves sobre diseño de sistemas y arquitectura de autor.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="border-b border-neutral-900 pb-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu correo electrónico"
            required
            className="w-full bg-transparent py-1 text-xs font-mono text-neutral-900 placeholder-neutral-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors"
        >
          {subscribed ? <><Check className="h-4 w-4" /> Suscripción Confirmada</> : <><span>Suscribirme</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 text-[10px] font-mono text-neutral-400">
        [PROTEGER PRIVACIDAD // CANCELAR EN CUALQUIER MOMENTO]
      </div>
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React, { useState } from "react";
import { ArrowRight, Terminal, Check } from "lucide-react";

export function ${compName}() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm border border-yellow-400 bg-black/90 p-6 font-mono text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-yellow-400/30 pb-2.5 text-xs">
        <span className="inline-flex items-center gap-1.5 font-black text-cyan-400">
          <Terminal className="h-3.5 w-3.5" />
          NET_DISPATCH // SUB
        </span>
        <span className="text-[10px] text-yellow-400/70">[CRYPT_ON]</span>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-black uppercase tracking-widest text-yellow-400">FEED DE CIBERNET</h3>
        <p className="mt-1 text-xs text-yellow-400/70">Sincronización quincenal de telemetría y parches de interfaz.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="border border-cyan-400/50 bg-cyan-950/30 px-3 py-1.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="root@cyber.net"
            required
            className="w-full bg-transparent font-mono text-xs text-cyan-300 placeholder-cyan-600 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border border-yellow-400 bg-yellow-400 py-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-yellow-400 transition-all shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          {subscribed ? <><Check className="h-4 w-4" /> NODO REGISTRADO</> : <><span>ENLACE CUÁNTICO</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 text-[10px] text-yellow-400/60">
        SHA-256 // CANAL SEGURO
      </div>
    </div>
  );
}`;
}

// 2. STAT: Telemetría con Sparkline Gráfico de Barras Real
function generateStat(style) {
  const compName = 'Stat' + capitalize(style).replace('NeoBrutalism', 'NeoBrutalist').replace('Glassmorphism', 'Glassmorphic').replace('Neumorphism', 'Neumorphic').replace('Claymorphism', 'Claymorphic').replace('Minimalism', 'Minimalist');

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-pink-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
          <Activity className="h-3.5 w-3.5" />
          TELEMETRÍA 24H
        </span>
        <span className="flex items-center gap-0.5 font-mono text-xs font-black text-emerald-900 bg-lime-300 px-2 py-0.5 rounded-full border-2 border-black">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-black tracking-tight">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-bold text-black/80">Rendimiento de transacciones en vivo</p>
      </div>
      
      {/* Sparkline de barras sólidas */}
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-3.5 shadow-[4px_4px_0px_#000]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: \`\${h}%\` }}
                className="w-full rounded-t-md border-2 border-black bg-lime-400"
              />
              <span className="text-[9px] font-black">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-black hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
          <Activity className="h-3.5 w-3.5 text-emerald-300" />
          TELEMETRÍA CLÍNICA
        </span>
        <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-300/30">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="relative z-10 mt-4">
        <span className="text-4xl font-extrabold tracking-tight text-white drop-shadow">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-medium text-emerald-100/70">Volumen transaccional continuo</p>
      </div>
      {/* Sparkline Glass */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: \`\${h}%\` }}
                className="w-full rounded-t-md bg-gradient-to-t from-emerald-500/50 to-teal-300/90 shadow-sm"
              />
              <span className="text-[9px] font-semibold text-emerald-200/80">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-medium text-emerald-200/80">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-white hover:underline cursor-pointer">
          Métricas <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'liquid-glass') {
    return `import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-extrabold uppercase text-cyan-900">
          <Activity className="h-3.5 w-3.5 text-cyan-600" />
          TELEMETRÍA LIQUID
        </span>
        <span className="flex items-center gap-0.5 text-xs font-extrabold text-cyan-700 bg-cyan-100/80 px-2 py-0.5 rounded-full border border-cyan-300">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="relative z-10 mt-4">
        <span className="text-4xl font-black tracking-tight text-slate-900">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-semibold text-slate-600">Rendimiento acrílico de borde</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/35 p-3.5 backdrop-blur-md shadow-inner">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: \`\${h}%\` }}
                className="w-full rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-500 shadow-sm"
              />
              <span className="text-[9px] font-extrabold text-slate-600">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-extrabold text-slate-700">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-cyan-700 hover:underline cursor-pointer">
          Inspeccionar <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase text-slate-600 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <Activity className="h-3.5 w-3.5 text-indigo-500" />
          TELEMETRÍA NEU
        </span>
        <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-bold tracking-tight text-slate-800">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-medium text-slate-500">Métricas de procesamiento extruido</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-3.5 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: \`\${h}%\` }}
                className="w-full rounded-t-md bg-indigo-500/80 shadow-[2px_2px_4px_#b8bec7]"
              />
              <span className="text-[9px] font-bold text-slate-500">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-600">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-indigo-600 hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'claymorphism') {
    return `import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-extrabold uppercase text-purple-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]">
          <Activity className="h-3.5 w-3.5 text-purple-700" />
          MÉTRICAS 3D
        </span>
        <span className="text-xs font-black text-purple-900 flex items-center gap-0.5 bg-white/50 px-2 py-0.5 rounded-full">
          <TrendingUp className="h-3 w-3 text-emerald-600" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-black tracking-tight text-purple-950">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-bold text-purple-800/80">Estadísticas en arcilla inflada</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/50 p-3.5 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: \`\${h}%\` }}
                className="w-full rounded-t-lg bg-gradient-to-t from-purple-500 to-indigo-500 shadow-sm"
              />
              <span className="text-[9px] font-black text-purple-800">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black text-purple-950">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-purple-700 hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  if (style === 'minimalism') {
    return `import React from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">// TELEMETRY // 24H</span>
        <span className="font-mono text-xs font-bold text-neutral-900 flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="font-mono text-3xl font-bold tracking-tight text-neutral-900">1,248 TPS</span>
        <p className="mt-0.5 text-xs text-neutral-500">Volumen transaccional continuo</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-3.5">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: \`\${h}%\` }} className="w-full bg-neutral-900" />
              <span className="font-mono text-[9px] text-neutral-500">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>LATENCY: 12ms</span>
        <span className="flex items-center gap-1 text-neutral-900 hover:underline cursor-pointer">
          Logs <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
  }

  // cyberpunk
  return `import React from "react";
import { TrendingUp, Terminal, ArrowUpRight } from "lucide-react";

export function ${compName}() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm border border-cyan-400 bg-black/90 p-6 font-mono text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2.5 text-xs">
        <span className="inline-flex items-center gap-1.5 font-black text-cyan-300">
          <Terminal className="h-3.5 w-3.5" />
          SYS_METRIC // TELEMETRY
        </span>
        <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-3xl font-black tracking-widest text-cyan-300">1,248 TPS</span>
        <p className="mt-0.5 text-xs text-cyan-400/70">FLUJO DE NÚCLEO CUÁNTICO</p>
      </div>
      <div className="mt-5 border border-cyan-400/40 bg-cyan-950/20 p-3.5">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: \`\${h}%\` }} className="w-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              <span className="text-[9px] text-cyan-400/80">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-cyan-400/80">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-cyan-300 hover:underline cursor-pointer">
          DIAGNÓSTICO <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}`;
}

module.exports = { generateNewsletter, generateStat };
