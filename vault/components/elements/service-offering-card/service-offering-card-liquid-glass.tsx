import React from "react";
import { Clock, ArrowRight } from "lucide-react";

export function ServiceOfferingCardLiquidGlass() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-sm font-bold text-slate-900 mb-1">Lavado Otológico</h4>
      <span className="font-bold text-slate-900 block mb-3">$35 USD</span>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Reservar</button>
    </div>
  );
}
export default ServiceOfferingCardLiquidGlass;