"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Diseño Adaptativo",
    tag: "Responsive",
    desc: "Optimizado para pantallas móviles, tabletas y monitores ultrapanorámicos.",
    color: "from-blue-600/30 to-indigo-900/40",
    border: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Micro-interacciones",
    tag: "Física",
    desc: "Respuestas táctiles rápidas bajo 200ms con desaceleración natural.",
    color: "from-emerald-600/30 to-teal-900/40",
    border: "border-emerald-500/30",
  },
  {
    id: 3,
    title: "Efecto Glassmorphic",
    tag: "Visual",
    desc: "Cristal esmerilado con refracción luminosa perimetral y blur multicapa.",
    color: "from-purple-600/30 to-pink-900/40",
    border: "border-purple-500/30",
  },
];

export function MinimalCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === 0 ? 1 : (c + 1) % SLIDES.length));

  const slide = SLIDES[current];

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-white shadow-xl">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>Galería Dinámica</span>
        </div>
        <span className="text-xs text-zinc-500 font-mono">
          0{current + 1} / 0{SLIDES.length}
        </span>
      </div>

      {/* Active Card Body */}
      <div
        className={`relative min-h-[160px] rounded-2xl border ${slide.border} bg-gradient-to-br ${slide.color} p-6 backdrop-blur-xl transition-all duration-300`}
      >
        <span className="inline-block rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white mb-2">
          {slide.tag}
        </span>
        <h4 className="text-xl font-bold text-white">{slide.title}</h4>
        <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{slide.desc}</p>
      </div>

      {/* Controls & Dots */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-emerald-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white active:scale-95 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white active:scale-95 transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
