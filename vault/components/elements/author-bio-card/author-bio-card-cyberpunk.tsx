import React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";

export function AuthorBioCardCyberpunk() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-3.5 mb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-200 font-bold">
          ES
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-white">Dra. Erika Salud</h3>
            <CheckCircle className="h-4 w-4 text-emerald-300" />
          </div>
          <span className="text-xs text-emerald-100/70">Medicina Familiar & Preventiva</span>
        </div>
      </div>
      <p className="text-xs text-emerald-100/80 mb-3 leading-relaxed">
        Especialista certificada por el MSP y Senescyt (Reg. 17-5421). Enfoque humano e integral.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-emerald-200">
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">MSP 17-5421</span>
        <button className="flex items-center gap-1 hover:underline">
          <span>Ver Biografía</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
export default AuthorBioCardCyberpunk;
