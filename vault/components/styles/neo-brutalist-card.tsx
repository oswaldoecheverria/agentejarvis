"use client";

import React, { useState } from "react";
import { Zap, Heart, ArrowUpRight, Flame } from "lucide-react";

export function NeoBrutalistCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-7 text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      {/* Top Badge */}
      <div className="flex items-center justify-between">
        <span className="inline-block rounded-xl border-2 border-black bg-[#fdba74] px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          HOT DROP #01
        </span>
        <button
          onClick={() => setLiked(!liked)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black transition-all active:scale-90 ${
            liked ? "bg-[#f43f5e] text-white" : "bg-white text-black hover:bg-zinc-100"
          } shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-white" : ""}`} />
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-black bg-[#a7f3d0] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Zap className="h-6 w-6 stroke-[2.5]" />
        </div>

        <h3 className="mt-5 text-2xl font-black uppercase tracking-tight">
          Brutalist Card
        </h3>
        <p className="mt-2 text-xs font-bold leading-relaxed text-zinc-700">
          Componente construido con bordes sólidos de alto contraste, tipografía grotesca y respuesta física inmediata al cursor.
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-6 border-t-3 border-black pt-5">
        <button className="group flex w-full items-center justify-center gap-2 rounded-xl border-3 border-black bg-[#fef08a] py-3 text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#fde047] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
          <span>Explorar Código</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
