import React from "react";
import { Check, ArrowRight, Star } from "lucide-react";

export function PricingNeumorphic() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm rounded-[2.75rem] bg-[#e0e5ec] p-7 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans text-slate-800">
      {/* Badge Popular (Soft Embossed Pill) */}
      <div className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
        <Star className="h-3.5 w-3.5 fill-emerald-600 text-emerald-600" />
        <span>MÁS POPULAR</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-slate-800">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs font-medium text-slate-500">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box (Indented Sunken Panel) */}
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-4 shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-extrabold tracking-tight text-slate-800">
            $29
          </span>
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
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
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-[#e0e5ec] text-emerald-600 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-slate-700">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button (Extruded Tactile Button) */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:text-emerald-700 active:scale-[0.98] active:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default PricingNeumorphic;
