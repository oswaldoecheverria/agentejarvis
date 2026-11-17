import React from "react";
import { Check, X } from "lucide-react";

export function PlansComparisonTableGlassmorphic() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55)] font-sans text-white">
      <div className="border-b border-white/15 pb-3 mb-3">
        <h3 className="text-base font-bold text-white">Tabla Comparativa de Planes</h3>
        <p className="text-xs text-emerald-100/70">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
            <span className="text-emerald-100 font-medium">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-emerald-200/60">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-emerald-300" /> : <X className="h-4 w-4 mx-auto text-white/30" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-emerald-200 bg-emerald-950/60 py-0.5 rounded border border-emerald-400/30">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-emerald-300" /> : <X className="h-4 w-4 mx-auto text-white/30" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/15">
        <span className="text-xs font-semibold text-emerald-200">Desde $29/mes</span>
        <button className="rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}
export default PlansComparisonTableGlassmorphic;
