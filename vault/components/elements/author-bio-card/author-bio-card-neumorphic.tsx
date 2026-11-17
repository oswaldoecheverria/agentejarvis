import React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";

export function AuthorBioCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-4 mb-3.5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] text-lg font-black text-indigo-600">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-slate-900">Dra. Erika Salud</h3>
            <CheckCircle className="h-4 w-4 text-indigo-600 fill-indigo-100" />
          </div>
          <span className="text-xs font-semibold text-slate-500">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-300/40 text-xs">
        <span className="rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">MSP 17-5421</span>
        <button className="flex items-center gap-1 font-bold text-slate-700 hover:text-indigo-600">
          <span>Ver Biografía</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
export default AuthorBioCardNeumorphic;
