"use client";

import React from "react";
import { Search, Command, ArrowRight, Sparkles, Terminal } from "lucide-react";

export function RaycastMinimalHero() {
  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d14] px-8 py-20 text-center text-white shadow-2xl">
      {/* Raycast Subtle Spotlight */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/10 via-zinc-800/10 to-transparent blur-[120px]" />

      <div className="relative mx-auto max-w-2xl flex flex-col items-center">
        {/* Release Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-3.5 py-1 text-xs font-semibold text-zinc-300">
          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
          <span>Raycast Minimal Spec · GradientDeck</span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl text-balance text-white">
          Control absoluto a la{" "}
          <span className="text-zinc-400 font-normal">velocidad del pensamiento.</span>
        </h1>

        <p className="mt-5 text-sm text-zinc-400 max-w-lg leading-relaxed">
          Diseñado para desarrolladores y profesionales que exigen interfaces limpias, comandos de teclado fluidos y cero fricción.
        </p>

        {/* Raycast Central Search Trigger */}
        <div className="mt-8 w-full max-w-md flex items-center justify-between rounded-2xl border border-zinc-700/80 bg-zinc-900/90 px-4 py-3.5 shadow-2xl backdrop-blur-xl transition-all hover:border-zinc-500 cursor-pointer">
          <div className="flex items-center gap-3 text-zinc-400">
            <Search className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-medium">Buscar acción, paciente o reporte...</span>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-zinc-800 border border-zinc-700 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>

        {/* Small footer note */}
        <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500 font-mono">
          <span>Latencia: 0ms</span>
          <span>·</span>
          <span>Atajos nativos</span>
          <span>·</span>
          <span>Trunk-Based Ágil</span>
        </div>
      </div>
    </section>
  );
}
