import React from "react";
import { Check, X } from "lucide-react";

export function PlansComparisonTableNeumorphic() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="border-b border-slate-300/40 pb-3 mb-3">
        <h3 className="text-base font-bold text-slate-800">Tabla Comparativa de Planes</h3>
        <p className="text-xs text-slate-500">Cobertura médica familiar garantizada</p>
      </div>
      <div className="space-y-2 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
            <span className="font-semibold text-slate-700">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-slate-500">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-indigo-600" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-indigo-600 rounded-lg bg-[#e0e5ec] py-0.5 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-indigo-600" /> : <X className="h-4 w-4 mx-auto text-slate-400" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-slate-300/40">
        <span className="text-xs font-bold text-slate-800">Desde $29 / mes</span>
        <button className="rounded-xl bg-[#e0e5ec] px-4 py-2 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}
export default PlansComparisonTableNeumorphic;
