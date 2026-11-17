import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PricingNeoBrutalist() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl border-3 border-black bg-sky-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      {/* Badge Popular */}
      <div className="inline-flex items-center gap-1 -rotate-2 rounded-full border-2 border-black bg-pink-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_#000]">
        ★ MÁS POPULAR
      </div>

      {/* Plan Title & Subtitle */}
      <div className="mt-4">
        <h3 className="text-2xl font-black uppercase tracking-tight text-black">PLAN PRO</h3>
        <p className="mt-1 text-xs font-bold text-black/80">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box */}
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_#000]">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-black tracking-tight text-black">$29</span>
          <span className="text-xs font-black uppercase tracking-wide text-black/70">
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
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 border-black bg-lime-300 shadow-[1px_1px_0px_#000]">
              <Check className="h-3.5 w-3.5 stroke-[3] text-black" />
            </div>
            <span className="text-xs font-extrabold text-black">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default PricingNeoBrutalist;
