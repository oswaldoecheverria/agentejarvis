import React from "react";
import { KeyRound, ShieldCheck, AlertCircle } from "lucide-react";

export function DigitalCertStatusNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-3 border-b-2 border-black pb-2.5">
        <div className="flex items-center gap-2">
          <KeyRound className="h-4 w-4" />
          <h4 className="text-xs font-black uppercase">FIRMA ELECTRÓNICA PAdES</h4>
        </div>
        <span className="border border-black bg-lime-300 px-2 py-0.5 text-[9px] font-black">VÁLIDO SRI</span>
      </div>
      <div className="space-y-1.5 text-xs font-bold mb-4">
        <p>Emisor: <span className="font-mono">Security Data S.A.</span></p>
        <p>Titular: <span className="font-mono">Dra. Erika Salud</span></p>
        <p className="text-slate-600">Vence: 18 de Diciembre, 2026</p>
      </div>
      <div className="rounded-xl border-2 border-black bg-yellow-200 p-2.5 flex items-center gap-2 text-xs font-black">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <span>Listo para firmar recetas y certificados</span>
      </div>
    </div>
  );
}
export default DigitalCertStatusNeoBrutalist;
