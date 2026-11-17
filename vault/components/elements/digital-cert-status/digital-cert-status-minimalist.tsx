import React from "react";
import { KeyRound, ShieldCheck } from "lucide-react";

export function DigitalCertStatusMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between mb-3 border-b border-white/15 pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-emerald-300" />
          <h4 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Firma Electrónica</h4>
        </div>
        <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-200">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs text-emerald-100/80 mb-4">
        <p>Emisor: <span className="font-mono text-white">Security Data S.A.</span></p>
        <p>Titular: <span className="font-mono text-white">Dra. Erika Salud</span></p>
        <p className="text-emerald-200/60 text-[11px]">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-950/60 p-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-200">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}
export default DigitalCertStatusMinimalist;
