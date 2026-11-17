"use client";

import React, { useState } from "react";
import { ShieldCheck, Activity, ChevronRight } from "lucide-react";

export function GlassBentoCard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-b from-emerald-950/60 via-zinc-900/70 to-black/80 p-7 text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40"
    >
      {/* Spotlight follower effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Header icon */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-inner">
          <Activity className="h-6 w-6" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          Verificado
        </span>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
          Monitoreo Clínico Proactivo
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Panel de vidrio esmerilado con bisel de refracción y sensor de movimiento para interfaces médicas de alta fidelidad.
        </p>
      </div>

      {/* Sub-dock footer */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-emerald-400">
        <span>Explorar detalles clínicos</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}
