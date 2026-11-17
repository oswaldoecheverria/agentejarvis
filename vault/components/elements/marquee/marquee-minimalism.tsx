import React from "react";
import { ArrowRight, Check } from "lucide-react";

export function MarqueeMinimalism() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          // KINETIC MARQUEE
        </span>
        <span className="font-mono text-xs font-bold text-neutral-400">[SWISS]</span>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">Flujo Continuo GPU</h3>
        <p className="mt-1 text-xs text-neutral-500 leading-relaxed">Cinta cinética infinita optimizada a 60 FPS sin saltos de scroll.</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-900 text-neutral-900">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide">Next.js · Django · Tailwind</div>
            <div className="text-[11px] text-neutral-500">Bucle infinito con aceleración nativa</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors">
        <span>PAUSAR MARQUESINA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default MarqueeMinimalism;
