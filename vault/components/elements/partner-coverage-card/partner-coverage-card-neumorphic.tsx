import React from "react";
import { ShieldCheck, Phone } from "lucide-react";

export function PartnerCoverageCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3">
        <div className="rounded-xl bg-[#e0e5ec] px-3 py-1 text-xs font-extrabold text-blue-800 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          SALUDSA
        </div>
        <span className="rounded-full bg-[#e0e5ec] px-2 py-0.5 text-[10px] font-bold text-teal-700 shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]">
          Convenio Activo
        </span>
      </div>
      <h4 className="text-xs font-bold text-slate-800 mb-1">Plan Cobertura Integral Médica</h4>
      <p className="text-[10px] text-slate-500 mb-4">Reembolso directo de consultas presenciales y recetas.</p>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] mb-4 text-xs space-y-1">
        <div className="flex justify-between">
          <span className="text-slate-500">Copago en Consulta:</span>
          <span className="font-bold text-slate-800">80% Cubierto</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-slate-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Phone className="h-3.5 w-3.5" />
        <span>Línea Asistencia</span>
      </button>
    </div>
  );
}
export default PartnerCoverageCardNeumorphic;