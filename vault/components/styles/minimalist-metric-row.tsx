import React from "react";
import { ArrowUpRight } from "lucide-react";

export function MinimalistMetricRow() {
  const metrics = [
    { code: "IDX.01", label: "LATENCIA MEDIANA", value: "14ms", change: "-4ms" },
    { code: "IDX.02", label: "THROUGHPUT", value: "84.2k req/s", change: "+12%" },
    { code: "IDX.03", label: "DISPONIBILIDAD", value: "99.998%", change: "+0.002%" },
  ];

  return (
    <div className="w-full max-w-lg border border-slate-900 bg-white font-sans text-slate-900">
      <div className="border-b border-slate-900 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-slate-500 flex justify-between">
        <span>MÉTRICAS DEL SISTEMA</span>
        <span>ACTUALIZADO: AHORA</span>
      </div>

      <div className="divide-y divide-slate-200">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] font-bold text-slate-400">{m.code}</span>
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">{m.label}</div>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-slate-950">{m.value}</span>
              <span className="font-mono text-[10px] text-emerald-600 font-semibold">{m.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
