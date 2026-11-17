"use client";

import React, { useState } from "react";
import { Check, Star, ArrowRight } from "lucide-react";

export function ClaymorphicPricingPill() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`w-full max-w-sm cursor-pointer rounded-[2.5rem] border border-white/60 p-7 transition-all duration-300 ${
        selected
          ? "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 shadow-[20px_20px_40px_rgba(147,51,234,0.18),inset_0_4px_8px_rgba(255,255,255,0.95),inset_0_-4px_8px_rgba(126,34,206,0.15)] scale-[1.02]"
          : "bg-white/80 shadow-[14px_14px_28px_rgba(0,0,0,0.06),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-2xl bg-purple-500/10 px-3.5 py-1 text-xs font-black uppercase text-purple-700">
          Clay Plan
        </span>
        <div className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-purple-400 ${selected ? "bg-purple-600 text-white" : "bg-white"}`}>
          {selected && <Check className="h-4 w-4 stroke-[3]" />}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-xl font-black text-slate-800">Suscripción Inflada</h4>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-4xl font-black text-slate-900">$19</span>
          <span className="text-xs font-bold text-slate-500">/ mes</span>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-xs font-bold text-slate-600">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-purple-500" />
          <span>Sombras infladas de doble capa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-purple-500" />
          <span>Esquinas ultra-curvas (2.5rem)</span>
        </div>
      </div>

      <div className="mt-6 text-center text-[10px] font-bold uppercase tracking-wider text-purple-600">
        {selected ? "Seleccionado (Haz clic para desmarcar)" : "Haz clic para seleccionar"}
      </div>
    </div>
  );
}
