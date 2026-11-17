"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function NeoBrutalistPricing() {
  const [tier, setTier] = useState<"starter" | "pro">("pro");

  return (
    <div className="w-full max-w-sm rounded-3xl border-4 border-black bg-[#93c5fd] p-8 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Popular Sticker */}
      <div className="inline-block rounded-xl border-2 border-black bg-[#f472b6] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-2">
        ★ MÁS POPULAR
      </div>

      <div className="mt-5">
        <h3 className="text-3xl font-black uppercase tracking-tight">PLAN PRO</h3>
        <p className="mt-1 text-xs font-bold text-black/80">Acceso ilimitado a componentes y plantillas.</p>
      </div>

      <div className="mt-6 flex items-baseline gap-1 bg-white border-3 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-4xl font-black">$29</span>
        <span className="text-xs font-black uppercase text-zinc-600">/ MES · PAGO ÚNICO</span>
      </div>

      <div className="mt-6 space-y-3 font-bold text-xs">
        {[
          "Componentes TSX + Tailwind",
          "Licencia comercial ilimitada",
          "Actualizaciones de por vida",
          "Soporte prioritario 24/7",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-black bg-[#86efac] shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-4 text-xs font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:bg-zinc-800 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
