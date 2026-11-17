"use client";

import React from "react";
import { ArrowRight, Zap, Star, ShieldAlert } from "lucide-react";

export function NeoBrutalistHero() {
  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border-4 border-black bg-[#fef08a] p-8 sm:p-14 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Decorative sticker badge */}
      <div className="inline-flex items-center gap-2 rounded-xl border-3 border-black bg-[#fdba74] px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
        <Star className="h-4 w-4 fill-black" />
        <span>Estilo: Neo-Brutalism Puro</span>
      </div>

      <div className="mt-8 flex flex-col items-start text-left">
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-balance leading-none uppercase">
          Diseño sin filtros.{" "}
          <span className="bg-[#a7f3d0] px-3 py-1 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mt-2">
            Bordes duros.
          </span>
        </h1>

        <p className="mt-6 text-base font-bold sm:text-lg max-w-xl leading-relaxed text-black/90">
          Rechaza los degradados genéricos de IA. El Neo-Brutalismo utiliza contrastes extremos, sombras sólidas desplazadas y tipografía grotesca de alto impacto.
        </p>

        {/* Buttons with Hard Shadow Click Response */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-xl border-3 border-black bg-[#6ee7b7] px-6 py-4 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none">
            <span>Comenzar Ahora</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-xl border-3 border-black bg-white px-6 py-4 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-zinc-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none">
            <span>Ver Documentación</span>
          </button>
        </div>

        {/* Specs footer */}
        <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
          <span className="rounded-lg border-2 border-black bg-white px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Border: 3px Solid Black
          </span>
          <span className="rounded-lg border-2 border-black bg-white px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Shadow: Offset Solid
          </span>
          <span className="rounded-lg border-2 border-black bg-white px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Zero Blur Filters
          </span>
        </div>
      </div>
    </section>
  );
}
