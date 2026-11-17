"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dra. Sofía Mendoza",
    role: "Especialista en Medicina Interna",
    clinic: "Centro Médico Metropolitano",
    quote: "La atención personalizada y la rapidez con la que gestionamos las citas y recetas electrónicas ha mejorado en un 80% la fidelidad de nuestros pacientes.",
    stars: 5,
    tag: "Verificado MSP",
  },
  {
    id: 2,
    name: "Dr. Carlos Andrade",
    role: "Pediatra Neonatólogo",
    clinic: "Clínica Infantil del Valle",
    quote: "La interfaz es limpia, veloz y sin saturación. Puedo emitir recetas con firma electrónica válida en menos de 1 minuto desde mi consultorio.",
    stars: 5,
    tag: "Firma PAdES-BES",
  },
  {
    id: 3,
    name: "Dra. Elena Villacís",
    role: "Cirujana General",
    clinic: "Hospital Especializado",
    quote: "El cumplimiento con la LOPDP y la trazabilidad de historias clínicas me dan total tranquilidad legal en cada procedimiento.",
    stars: 5,
    tag: "Auditoría LOPDP",
  },
];

export function CinematicTestimonialsSlider() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  const next = () => setIdx((curr) => (curr + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[idx];

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-[#090d16] via-[#060a12] to-black p-8 text-white shadow-2xl">
      {/* Ambient Top Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-emerald-500/15 blur-3xl" />

      {/* Quote Icon Header */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Quote className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(t.stars)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400" />
          ))}
        </div>
      </div>

      {/* Quote Text */}
      <p className="mt-6 text-sm text-zinc-200 leading-relaxed font-medium italic">
        "{t.quote}"
      </p>

      {/* Author Details & Tag */}
      <div className="mt-8 flex items-center justify-between border-t border-zinc-800/80 pt-6">
        <div>
          <h4 className="text-sm font-bold text-white">{t.name}</h4>
          <p className="text-xs text-zinc-400">{t.role} · <span className="text-zinc-500">{t.clinic}</span></p>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-semibold text-emerald-300">
          {t.tag}
        </span>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-6 bg-emerald-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
