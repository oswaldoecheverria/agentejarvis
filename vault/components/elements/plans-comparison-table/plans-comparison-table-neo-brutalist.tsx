import React from "react";
import { Check, X } from "lucide-react";

export function PlansComparisonTableNeoBrutalist() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="border-b-2 border-black pb-3 mb-3">
        <h3 className="text-base font-black uppercase">TABLA COMPARATIVA DE PLANES</h3>
        <p className="text-xs font-bold text-slate-700">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-xl border-2 border-black bg-slate-50 text-xs font-black">
            <span>{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-slate-700">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-black" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-black text-black bg-lime-300 py-0.5 rounded border border-black">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-black" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t-2 border-black">
        <span className="text-xs font-black">DESDE $29/MES</span>
        <button className="border-2 border-black bg-black px-4 py-1.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
          ELEGIR PLAN
        </button>
      </div>
    </div>
  );
}
export default PlansComparisonTableNeoBrutalist;
