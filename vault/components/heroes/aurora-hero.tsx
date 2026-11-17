"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function AuroraHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-zinc-950 px-6 py-20 text-white shadow-2xl border border-zinc-800/90">
      {/* Aurora Multi-color Glow Effect */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/40 via-teal-400/35 to-cyan-400/35 blur-[90px] animate-pulse"
        style={{ animationDuration: "6s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 left-1/3 h-[250px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/25 to-pink-500/20 blur-[80px]"
        aria-hidden="true"
      />

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/70 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl shadow-lg shadow-emerald-950/50">
          <Sparkles className="h-4 w-4 text-emerald-400 animate-spin" style={{ animationDuration: "8s" }} />
          <span>Efecto Aurora Borealis · Magic UI</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Heading with Vivid Gradient */}
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Construye experiencias web que{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
            impacten a primera vista
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg leading-relaxed">
          Biblioteca de componentes ultra moderna con resplandor ambiental Aurora, micro-interacciones suaves y rendimiento nativo a 60 FPS.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98]">
            <span>Comenzar Ahora</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/90 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]">
            Explorar Componentes
          </button>
        </div>
      </div>
    </section>
  );
}
