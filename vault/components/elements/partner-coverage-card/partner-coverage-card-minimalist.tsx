import React from "react";
import { ShieldCheck, Phone } from "lucide-react";

export function PartnerCoverageCardMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-xs font-bold text-slate-900 mb-1">Saludsa Cobertura</h4>
      <p className="text-[10px] text-slate-500 mb-3">80% cubierto en consultas.</p>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Contactar</button>
    </div>
  );
}
export default PartnerCoverageCardMinimalist;