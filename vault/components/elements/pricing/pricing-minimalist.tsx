import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function PricingMinimalist() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border border-slate-900 bg-white p-7 font-sans text-slate-900 shadow-none">
      {/* Badge Popular (Swiss Monospace Tag) */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>TARIFAS // MOD.01</span>
        <span className="font-bold text-slate-950">[MÁS POPULAR]</span>
      </div>

      {/* Plan Title & Subtitle */}
      <div className="mt-5">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-950">
          PLAN PRO
        </h3>
        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
          Acceso ilimitado a componentes y plantillas.
        </p>
      </div>

      {/* Price Box */}
      <div className="mt-5 border border-slate-900 bg-slate-50 p-4">
        <div className="flex items-baseline gap-1.5 font-mono">
          <span className="text-4xl font-bold tracking-tight text-slate-950">
            $29
          </span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">
            / MES · PAGO ÚNICO
          </span>
        </div>
      </div>

      {/* Feature Checklist */}
      <div className="mt-5 space-y-2.5 font-mono text-xs">
        {[
          "Componentes TSX + Tailwind",
          "Licencia comercial ilimitada",
          "Actualizaciones de por vida",
          "Soporte prioritario 24/7",
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="font-bold text-slate-900">+</span>
            <span className="text-slate-800 text-[11px] font-medium">{feat}</span>
          </div>
        ))}
      </div>

      {/* Action CTA Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 border border-slate-900 bg-slate-950 py-3 text-xs font-mono font-bold uppercase tracking-widest text-white hover:bg-slate-800 transition-colors">
        <span>SUSCRIBIRSE AHORA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export default PricingMinimalist;
