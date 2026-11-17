import React from "react";
import { UserPlus, Shield } from "lucide-react";

export function PatientIntakeFormMinimalist() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/60 pb-3 mb-3">
        <UserPlus className="h-4 w-4 text-teal-700" />
        <h4 className="text-xs font-bold uppercase text-slate-800">Alta de Paciente</h4>
      </div>
      <div className="space-y-2 mb-4 text-xs">
        <div className="rounded-xl bg-[#e0e5ec] p-2 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[10px] text-slate-500 block">Cédula: 1724890214</span>
          <span className="font-bold text-slate-800">Carlos Alberto Mendoza</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Shield className="h-3.5 w-3.5" />
        <span>Guardar Expediente</span>
      </button>
    </div>
  );
}
export default PatientIntakeFormMinimalist;