import React from "react";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

export function AuthorBioCardNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-cyan-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-3.5 mb-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_#000] text-xl font-black">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-black uppercase">DRA. ERIKA SALUD</h3>
            <CheckCircle className="h-4 w-4 text-black fill-lime-300" />
          </div>
          <span className="text-xs font-bold text-slate-800">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs font-bold text-slate-800 mb-3 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t-2 border-black text-xs font-black">
        <span className="border border-black bg-white px-2 py-0.5 rounded text-[10px]">MSP 17-5421</span>
        <button className="flex items-center gap-1 hover:underline">
          <span>VER BIOGRAFÍA</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
export default AuthorBioCardNeoBrutalist;
