"use client";

import React from "react";
import { Sparkles, TrendingUp, Layers, ArrowUpRight } from "lucide-react";

export function ClaymorphicStatCard() {
  return (
    <div className="w-full max-w-sm rounded-[2.75rem] border border-white/50 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 text-slate-800 shadow-[20px_20px_40px_rgba(16,185,129,0.15),inset_0_4px_8px_rgba(255,255,255,0.9),inset_0_-4px_8px_rgba(13,148,136,0.15)]">
      {/* 3D Inflated Badge */}
      <div className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-1.5 text-xs font-black uppercase text-emerald-800 shadow-[6px_6px_12px_rgba(16,185,129,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)]">
        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
        <span>Claymorphism 3D</span>
      </div>

      <div className="mt-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900/60">
          Métricas de Crecimiento
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-5xl font-black text-slate-900 drop-shadow-xs">+142%</span>
          <span className="flex items-center text-xs font-extrabold text-emerald-700">
            <TrendingUp className="h-3.5 w-3.5" />
            ARR
          </span>
        </div>
        <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-600">
          Aspecto inflado y suave al tacto con reflejos volumétricos de luz, sombras multicapa y esquinas redondeadas.
        </p>
      </div>

      {/* 3D Inflated Action Pill Button */}
      <div className="mt-8">
        <button className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(16,185,129,0.35),inset_0_3px_5px_rgba(255,255,255,0.5),inset_0_-3px_5px_rgba(0,0,0,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]">
          <span>Ver Desglose 3D</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
