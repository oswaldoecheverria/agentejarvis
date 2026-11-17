import React from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

export function MarqueeClaymorphism() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/60 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-purple-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]">
          <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
          KINETIC MARQUEE
        </span>
        <span className="font-mono text-xs font-black text-purple-700">CLAY 3D</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-purple-950">Flujo Continuo GPU</h3>
        <p className="mt-1 text-xs font-bold text-purple-800/80">Cinta cinética infinita optimizada a 60 FPS sin saltos de scroll.</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/50 p-4 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-[0_6px_12px_rgba(124,58,237,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-black text-purple-950">Next.js · Django · Tailwind</div>
            <div className="text-[11px] font-bold text-purple-700">Bucle infinito con aceleración nativa</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
        <span>PAUSAR MARQUESINA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default MarqueeClaymorphism;
