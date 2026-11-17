import React from "react";
import { Activity, Save } from "lucide-react";

export function TriageConsultationFormLiquidGlass() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2.5 border-b border-slate-300/60 pb-3 mb-4">
        <Activity className="h-5 w-5 text-teal-700" />
        <div>
          <h4 className="text-xs font-black uppercase text-slate-800">Triaje y Constantes Vitales</h4>
          <span className="text-[10px] text-slate-500">Historia clínica digital</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 mb-3 text-xs">
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">P. Arterial</span>
          <span className="font-extrabold text-slate-800 text-sm">120/80</span>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">Pulso</span>
          <span className="font-extrabold text-slate-800 text-sm">72 lpm</span>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">Temp</span>
          <span className="font-extrabold text-slate-800 text-sm">36.5 °C</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Save className="h-3.5 w-3.5" />
        <span>Registrar Triaje</span>
      </button>
    </div>
  );
}
export default TriageConsultationFormLiquidGlass;