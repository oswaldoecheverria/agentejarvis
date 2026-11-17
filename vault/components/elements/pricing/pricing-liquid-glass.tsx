import React from "react";
import { Check, ArrowRight, Zap } from "lucide-react";

export function PricingLiquidGlass() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.15)] font-sans text-white">
      {/* Liquid curved refractive specular highlights */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-indigo-500/25 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      {/* Badge Popular */}
      <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xl shadow-inner">
        <Zap className="h-3.5 w-3.5 text-cyan-300" />
        <span>MÁS POPULAR</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="relative z-10 mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs font-medium text-white/70">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur-xl shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.4)]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-extrabold tracking-tight text-white">
            $29
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
            / MES · PAGO ÚNICO
          </span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="relative z-10 mt-5 space-y-3">
        {[
          "Componentes TSX + Tailwind",
          "Licencia comercial ilimitada",
          "Actualizaciones de por vida",
          "Soporte prioritario 24/7",
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-cyan-300/60 bg-cyan-400/20 text-cyan-200 backdrop-blur-md shadow-xs">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-semibold text-white/95">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <button className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_12px_28px_-6px_rgba(6,182,212,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.7)] hover:brightness-110 active:scale-[0.98] transition-all">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default PricingLiquidGlass;
