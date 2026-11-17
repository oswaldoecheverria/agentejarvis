import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function PricingGlassmorphic() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      {/* Confined Ambient Refraction Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      {/* Badge Popular */}
      <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
        <span>MÁS POPULAR</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="relative z-10 mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-extrabold tracking-tight text-white drop-shadow">
            $29
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/80">
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
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-emerald-300/60 bg-emerald-500/30 text-emerald-200 backdrop-blur-sm shadow-xs">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-semibold text-emerald-50">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <div className="relative z-10 mt-6 rounded-[2rem] bg-black/10 border border-white/20 p-1.5 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <button className="flex w-full items-center justify-center gap-2 rounded-[1.6rem] border border-white/40 bg-gradient-to-r from-emerald-500/90 via-teal-500/90 to-emerald-600/90 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5),inset_0_1px_2px_rgba(255,255,255,0.5)] hover:brightness-110 active:scale-[0.98] transition-all">
          <span>SUSCRIBIRSE AHORA</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default PricingGlassmorphic;
