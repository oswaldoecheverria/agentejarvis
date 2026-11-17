import React from "react";
import { Clock, ArrowRight } from "lucide-react";

export function ServiceOfferingCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-full bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-slate-600 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff]">
          PROCEDIMIENTO
        </span>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
          <Clock className="h-3.5 w-3.5" />
          <span>30 min</span>
        </div>
      </div>
      <h4 className="text-sm font-bold text-slate-800 mb-1">Lavado Otológico Clínico</h4>
      <p className="text-xs text-slate-500 mb-4">Extracción segura de cerumen por técnica de irrigación indolora.</p>
      <div className="flex items-baseline justify-between border-t border-slate-300/60 pt-3 mb-4">
        <span className="text-xs text-slate-500">Honorarios:</span>
        <span className="font-extrabold text-lg text-slate-900">$35 USD</span>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Reservar Turno</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default ServiceOfferingCardNeumorphic;