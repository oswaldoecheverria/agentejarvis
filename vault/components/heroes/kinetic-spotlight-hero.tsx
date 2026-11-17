"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Zap, Play } from "lucide-react";

export function KineticSpotlightHero() {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#05080e] px-8 py-20 text-center text-white shadow-2xl cursor-crosshair"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${coords.x}% ${coords.y}%, rgba(16, 185, 129, 0.2), transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
          <Zap className="h-3.5 w-3.5 text-emerald-400" />
          <span>Interactive Spotlight · MotionSites Pattern</span>
        </div>

        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          La luz sigue{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
            cada movimiento de tu cursor
          </span>
        </h1>

        <p className="mt-5 text-sm text-zinc-300 max-w-lg leading-relaxed">
          Pasa el ratón por cualquier parte de este hero para ver cómo la refracción lumínica interactiva se adapta en tiempo real a tus coordenadas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
            <span>Iniciar Demostración</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-8 font-mono text-[11px] text-zinc-500">
          Coordenadas de refracción: X: {coords.x.toFixed(0)}% · Y: {coords.y.toFixed(0)}%
        </div>
      </div>
    </section>
  );
}
