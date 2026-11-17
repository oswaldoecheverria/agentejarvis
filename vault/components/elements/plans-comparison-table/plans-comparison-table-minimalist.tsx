import React from "react";
import { Check, X } from "lucide-react";

export function PlansComparisonTableMinimalist() {
  const rows = [
    { name: "Consultas Médicas", basic: "2 / mes", pro: "Ilimitadas" },
    { name: "Recetas PAdES-BES", basic: true, pro: true },
    { name: "Atención Domicilio", basic: false, pro: true },
    { name: "Telemedicina 24/7", basic: false, pro: true },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-300 bg-white p-5 font-sans text-neutral-900 shadow-sm">
      <div className="border-b border-neutral-200 pb-3 mb-3">
        <h3 className="text-base font-bold">Plans Comparison Matrix</h3>
        <p className="text-xs text-neutral-500">Transparent medical coverage tiers</p>
      </div>
      <div className="space-y-1.5 mb-4">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-neutral-100 text-xs">
            <span className="text-neutral-700 font-medium">{r.name}</span>
            <div className="flex items-center gap-4">
              <span className="w-16 text-center text-[11px] text-neutral-500">
                {typeof r.basic === 'boolean' ? (r.basic ? <Check className="h-4 w-4 mx-auto text-neutral-900" /> : <X className="h-4 w-4 mx-auto text-neutral-300" />) : r.basic}
              </span>
              <span className="w-16 text-center text-[11px] font-bold text-neutral-900 bg-neutral-100 py-0.5 rounded">
                {typeof r.pro === 'boolean' ? (r.pro ? <Check className="h-4 w-4 mx-auto text-neutral-900" /> : <X className="h-4 w-4 mx-auto text-neutral-300" />) : r.pro}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
        <span className="text-xs font-semibold">From $29/mo</span>
        <button className="rounded-lg bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-neutral-800">
          Select Plan
        </button>
      </div>
    </div>
  );
}
export default PlansComparisonTableMinimalist;
