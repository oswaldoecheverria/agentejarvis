"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Activity, ShieldCheck } from "lucide-react";

export function SplitPreviewHero() {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070b12] p-8 sm:p-12 text-white shadow-2xl">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-teal-500/20 blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Split Screen Architecture · MotionSites</span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl text-balance leading-tight">
            Consultas médicas inteligentes con{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              gestión clínica en vivo
            </span>
          </h2>

          <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
            Plataforma médica de alto rendimiento: agenda en tiempo real, emisión criptográfica de recetas PAdES-BES y expedientes clínicos bajo norma LOPDP.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
              <span>Agendar Cita Médica</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-xs font-semibold text-zinc-300 hover:text-white transition-colors">
              Explorar Especialidades
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[11px] text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Sin descarga</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>Firma electrónica SRI</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Glass Dashboard Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 p-5 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Activity className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-white">Telemetría de Consulta</span>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                EN VIVO
              </span>
            </div>

            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl bg-zinc-900/80 p-3 border border-zinc-800/80 flex items-center justify-between">
                <span className="text-zinc-400">Próximo Turno:</span>
                <span className="font-bold text-white">09:30 AM · Dr. Alexander</span>
              </div>
              <div className="rounded-xl bg-zinc-900/80 p-3 border border-zinc-800/80 flex items-center justify-between">
                <span className="text-zinc-400">Estado de Firma:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  PAdES Certificado
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Sincronización: 100%</span>
              <span className="text-emerald-400">VPS Oracle Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
