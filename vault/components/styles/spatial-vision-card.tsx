"use client";

import React from "react";
import { Sparkles, Eye, Layers, Compass, ArrowUpRight } from "lucide-react";

export function SpatialVisionCard() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.03] p-8 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1px_2px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
      {/* Confined Ambient Orb */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/10 shadow-inner">
          <Eye className="h-5 w-5 text-emerald-300" />
        </div>
        <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-semibold backdrop-blur-md text-emerald-300">
          Spatial UI · VisionOS
        </span>
      </div>

      <div className="relative z-10 mt-6">
        <h4 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
          Panel de Vidrio Suspendido
        </h4>
        <p className="mt-2 text-xs text-white/80 leading-relaxed font-normal">
          Arquitectura óptica con bisel perimetral de alta reflectancia cenital, desenfoque profundo satinado y orbes ambientales confinados.
        </p>
      </div>

      {/* Curved Bottom Sub-dock */}
      <div className="relative z-10 mt-6 rounded-[1.75rem] border border-white/20 bg-black/20 p-3 backdrop-blur-md flex items-center justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-2 text-xs font-medium text-white/90">
          <Compass className="h-4 w-4 text-emerald-400" />
          <span>Profundidad Z-Axis</span>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors shadow-md">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
