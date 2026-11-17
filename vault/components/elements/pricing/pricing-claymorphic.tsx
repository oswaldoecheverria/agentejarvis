import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function PricingClaymorphic() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-7 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.15)] font-sans text-slate-800">
      {/* Badge Popular (Puffy 3D sticker) */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white/80 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-purple-900 shadow-[0_6px_14px_rgba(147,51,234,0.18),inset_0_2px_3px_rgba(255,255,255,0.9)]">
        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
        <span>MÁS POPULAR</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-slate-800">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs font-bold text-purple-800/70">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box (3D inflated pill) */}
      <div className="mt-5 rounded-3xl border-2 border-white bg-white/80 p-4 shadow-[0_8px_16px_rgba(168,85,247,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-black tracking-tight text-slate-900">
            $29
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wide text-purple-900/70">
            / MES · PAGO ÚNICO
          </span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="mt-5 space-y-3">
        {[
          "Componentes TSX + Tailwind",
          "Licencia comercial ilimitada",
          "Actualizaciones de por vida",
          "Soporte prioritario 24/7",
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-white bg-gradient-to-tr from-purple-400 to-pink-400 text-white shadow-[0_4px_8px_rgba(168,85,247,0.3),inset_0_1.5px_2px_rgba(255,255,255,0.7)]">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </div>
            <span className="text-xs font-bold text-slate-700">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_12px_24px_-6px_rgba(168,85,247,0.5),inset_0_3px_4px_rgba(255,255,255,0.6),inset_0_-3px_4px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default PricingClaymorphic;
