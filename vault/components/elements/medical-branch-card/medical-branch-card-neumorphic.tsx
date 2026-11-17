import React from "react";
import { Stethoscope, ArrowRight, Check } from "lucide-react";

export function MedicalBranchCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e5ec] text-teal-700 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] mb-3">
        <Stethoscope className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-extrabold text-slate-800 mb-1">Medicina Familiar</h4>
      <p className="text-xs text-slate-500 mb-4">Atención primaria continua para todas las etapas de la vida.</p>
      <div className="space-y-1.5 mb-5 text-xs text-slate-600">
        {["Control de patologías crónicas", "Chequeos preventivos"].map((pt, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-teal-700" />
            <span>{pt}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Agendar Consulta</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default MedicalBranchCardNeumorphic;