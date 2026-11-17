import React from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export function StatGlassmorphism() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          TELEMETRÍA EN VIVO
        </span>
        <span className="font-mono text-xs font-bold text-emerald-200/80">FROSTED</span>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">Volumen Transaccional</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">Procesamiento de pagos y latencia de borde en tiempo real.</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-500/30 text-emerald-200 shadow-xs">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">1,248 TPS</div>
            <div className="text-[11px] font-medium text-emerald-200/70">+18.4% vs mes anterior</div>
          </div>
        </div>
      </div>
      <button className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>VER HISTÓRICO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default StatGlassmorphism;
