import React from "react";
import { ArrowRight, Check, Sparkles, ShieldCheck, Zap, Lock, HelpCircle, Layers, Quote, Sliders, Compass, LayoutGrid } from "lucide-react";

export function MarqueeNeoBrutalism() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
          ★ KINETIC MARQUEE
        </span>
        <span className="font-mono text-xs font-black">NEO-BRUTAL</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-black">Flujo Continuo GPU</h3>
        <p className="mt-1 text-xs font-bold text-black/80">Cinta cinética infinita optimizada a 60 FPS sin saltos de scroll.</p>
      </div>
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <Check className="h-5 w-5 stroke-[3] text-black" />
          </div>
          <div>
            <div className="text-xs font-black uppercase">Next.js · Django · Tailwind</div>
            <div className="text-[11px] font-bold text-black/70">Bucle infinito con aceleración nativa</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-3 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>PAUSAR MARQUESINA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default MarqueeNeoBrutalism;
