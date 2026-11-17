import React from "react";
import { Check } from "lucide-react";

export function MinimalistPricingTable() {
  const tiers = [
    { name: "CORE", price: "$0", period: "eterno", desc: "Para proyectos personales independientes", feats: ["1 Servidor Edge", "10k Solicitudes/día", "SSL Automático"] },
    { name: "STUDIO", price: "$49", period: "mensual", desc: "Para equipos de ingeniería y startups", feats: ["Nodos ilimitados", "1M Solicitudes/día", "SLA 99.99%", "Cifrado mTLS"], popular: true },
  ];

  return (
    <div className="w-full max-w-lg border border-slate-900 bg-white p-6 font-sans text-slate-900">
      <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            01 / TARIFAS
          </span>
          <h3 className="text-base font-bold uppercase tracking-tight text-slate-900 mt-0.5">
            Planes de Infraestructura
          </h3>
        </div>
        <span className="font-mono text-xs font-bold">[USD / MES]</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tiers.map((t, idx) => (
          <div
            key={idx}
            className={`border p-5 flex flex-col justify-between ${
              t.popular ? "border-slate-900 bg-slate-950 text-white" : "border-slate-300 bg-white text-slate-900"
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
                <span>{t.name}</span>
                {t.popular && <span className="bg-white text-slate-900 px-1.5 py-0.2 font-bold">RECOMENDADO</span>}
              </div>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-mono font-bold tracking-tight">{t.price}</span>
                <span className="text-[10px] font-mono opacity-70">/{t.period}</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed opacity-80">{t.desc}</p>

              <div className="mt-4 border-t border-current/20 pt-3 space-y-1.5 font-mono text-[10px]">
                {t.feats.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5">
                    <span className="font-bold">+</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`mt-6 w-full py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                t.popular
                  ? "bg-white text-slate-900 hover:bg-slate-200"
                  : "border border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
