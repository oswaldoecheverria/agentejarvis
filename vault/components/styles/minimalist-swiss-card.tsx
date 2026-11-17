"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function MinimalistSwissCard() {
  return (
    <div className="w-full max-w-sm border border-zinc-300 bg-white p-8 text-black font-sans shadow-sm transition-all hover:border-black">
      {/* Swiss Index Number */}
      <div className="flex items-baseline justify-between border-b border-black pb-4">
        <span className="font-mono text-2xl font-black tracking-tighter">№ 08</span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
          SWISS STYLE / 1957
        </span>
      </div>

      <div className="mt-8">
        <h4 className="text-3xl font-black tracking-tight leading-none uppercase">
          Orden y Claridad.
        </h4>
        <p className="mt-4 text-xs text-zinc-600 leading-relaxed font-normal">
          El Estilo Tipográfico Internacional elimina ornamentos superfluos. Se fundamenta en una cuadrícula matemática estricta, contraste asimétrico y máxima legibilidad.
        </p>
      </div>

      {/* 1px Minimal Specs Grid */}
      <div className="mt-8 grid grid-cols-2 border-t border-zinc-200 pt-4 text-[11px] font-mono text-zinc-600">
        <div>
          <span className="block text-zinc-400">TIPOGRAFÍA</span>
          <span className="font-bold text-black">Grotesk / Sans</span>
        </div>
        <div>
          <span className="block text-zinc-400">ESTRUCTURA</span>
          <span className="font-bold text-black">Modular Grid</span>
        </div>
      </div>

      <div className="mt-8">
        <button className="group flex w-full items-center justify-between border border-black bg-black px-5 py-3 text-xs font-bold text-white transition-all hover:bg-white hover:text-black">
          <span className="uppercase tracking-widest">Documentar</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
