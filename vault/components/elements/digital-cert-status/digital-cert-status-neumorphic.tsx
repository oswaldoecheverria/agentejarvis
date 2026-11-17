import React from "react";
import { KeyRound, ShieldCheck } from "lucide-react";

export function DigitalCertStatusNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3 border-b border-slate-300/40 pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4 text-indigo-600" />
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Firma Electrónica</h4>
        </div>
        <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs mb-4">
        <p className="text-slate-600">Emisor: <span className="font-mono font-bold text-slate-800">Security Data S.A.</span></p>
        <p className="text-slate-600">Titular: <span className="font-mono font-bold text-slate-800">Dra. Erika Salud</span></p>
        <p className="text-slate-500 text-[11px]">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] flex items-center gap-2 text-xs font-bold text-indigo-600">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}
export default DigitalCertStatusNeumorphic;
