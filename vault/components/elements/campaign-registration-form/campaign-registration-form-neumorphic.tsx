import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CampaignRegistrationFormNeumorphic() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-6 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 text-teal-700 mb-2">
        <Sparkles className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase">Jornada 2026</span>
      </div>
      <h3 className="text-sm font-extrabold text-slate-800 mb-4">Inscripción Prioritaria</h3>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Confirmar Turno</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default CampaignRegistrationFormNeumorphic;