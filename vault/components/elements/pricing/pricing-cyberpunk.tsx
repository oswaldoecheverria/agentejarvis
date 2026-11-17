import React from "react";
import { Check, ArrowRight, Zap } from "lucide-react";

export function PricingCyberpunk() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      {/* Corner Chamfers */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-pink-500" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-pink-500" />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-pink-500" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-pink-500" />

      {/* Badge Popular (Cyber warning chip) */}
      <div className="inline-flex items-center gap-1.5 border border-pink-500 bg-pink-500/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.4)]">
        <Zap className="h-3 w-3" />
        <span>★ MÁS POPULAR</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs text-cyan-200/70">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box */}
      <div className="mt-5 border border-cyan-500/40 bg-black/60 p-4 shadow-inner">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_10px_#06b6d4]">
            $29
          </span>
          <span className="text-[10px] uppercase tracking-wide text-cyan-400/80">
            / MES · PAGO ÚNICO
          </span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="mt-5 space-y-2.5 text-xs">
        {[
          "Componentes TSX + Tailwind",
          "Licencia comercial ilimitada",
          "Actualizaciones de por vida",
          "Soporte prioritario 24/7",
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center border border-pink-500 bg-pink-500/20 text-pink-300">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
            <span className="text-cyan-200 text-[11px] font-bold">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-pink-500 bg-pink-500/20 py-3 text-xs font-black uppercase tracking-widest text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:bg-pink-500 hover:text-black transition-all">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export default PricingCyberpunk;
