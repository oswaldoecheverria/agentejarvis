"use client";

import React from "react";
import { Sparkles, Layers, ShieldCheck, ArrowUpRight, Cpu } from "lucide-react";

export function BentoMotionGrid() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 md:grid-cols-3 gap-4 text-white">
      {/* Bento Item 1: Large Featured Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d16] p-6 shadow-xl md:col-span-2 transition-all hover:border-emerald-500/40">
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl group-hover:bg-emerald-500/30 transition-all" />
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Cpu className="h-5 w-5" />
        </div>
        <h4 className="mt-4 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
          Motor de Arquitectura Modular
        </h4>
        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
          Diseñado bajo tronco ágil, tipado estricto en backend y frontend desacoplados sin sobrecarga.
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs text-emerald-400 font-semibold">
          <span>Ver Especificaciones</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Bento Item 2: Compact Stat Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d16] p-6 shadow-xl transition-all hover:border-teal-500/40">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <span className="mt-4 block text-3xl font-extrabold text-white">99.9%</span>
        <h5 className="mt-1 text-xs font-bold text-zinc-300">Estabilidad LOPDP</h5>
        <p className="mt-1 text-[11px] text-zinc-500">Trazabilidad médica y auditoría criptográfica.</p>
      </div>

      {/* Bento Item 3: Full-width Lower Subdock */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d16] p-5 shadow-xl md:col-span-3 flex items-center justify-between transition-all hover:border-zinc-700">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <h6 className="text-xs font-bold text-white">Física de Movimiento Emil Kowalski</h6>
            <p className="text-[11px] text-zinc-400">Transiciones bajo 250ms con desaceleración natural.</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-mono text-emerald-300">
          cubic-bezier
        </span>
      </div>
    </div>
  );
}
