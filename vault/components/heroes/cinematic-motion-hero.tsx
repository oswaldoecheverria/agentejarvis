"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Play, Clapperboard, Film } from "lucide-react";

export function CinematicMotionHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-800 bg-[#06090e] px-8 py-20 text-white shadow-2xl">
      {/* Cinematic Golden Amber Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-400/25 via-emerald-500/15 to-transparent blur-[120px] animate-pulse"
        style={{ animationDuration: "5s" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Floating Director Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur-xl shadow-lg shadow-amber-950/40">
          <Clapperboard className="h-4 w-4 text-amber-400" />
          <span>Cinematic Motion · MotionSites.ai</span>
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
        </div>

        {/* Cinematic Headline */}
        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Diseño web cinemático con{" "}
          <span className="bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            física de movimiento real
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg leading-relaxed font-normal">
          Inspirado en la dirección de arte de MotionSites: capas de profundidad tridimensional, grano ambiental sutil y curvas de desaceleración fluidas que rompen el molde del diseño genérico.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-emerald-400 px-6 py-4 text-sm font-extrabold text-zinc-950 shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-emerald-500/30 active:scale-[0.98]">
            <Sparkles className="h-4 w-4 text-zinc-950" />
            <span>Explorar Plantilla Cinemática</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-2.5 rounded-2xl border border-zinc-700 bg-zinc-900/90 px-6 py-4 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all hover:border-amber-500/50 hover:bg-zinc-800 hover:text-white active:scale-[0.98]"
          >
            {isPlaying ? (
              <>
                <Film className="h-4 w-4 text-amber-400 animate-bounce" />
                <span className="text-amber-300">Pausar Showreel</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span>Ver Showreel (15s)</span>
              </>
            )}
          </button>
        </div>

        {/* Motion Spec Pill Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-zinc-800/80 pt-6 text-xs text-zinc-400 font-mono">
          <span className="rounded-md bg-zinc-900 px-2.5 py-1 border border-zinc-800 text-amber-300/90">
            CURVA: cubic-bezier(0.16, 1, 0.3, 1)
          </span>
          <span>·</span>
          <span className="rounded-md bg-zinc-900 px-2.5 py-1 border border-zinc-800 text-emerald-300/90">
            TIEMPO: &lt;260ms
          </span>
          <span>·</span>
          <span className="rounded-md bg-zinc-900 px-2.5 py-1 border border-zinc-800 text-cyan-300/90">
            FPS: 60Hz ProMotion
          </span>
        </div>
      </div>
    </div>
  );
}
