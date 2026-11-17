import React from "react";
import { Receipt, ArrowRight } from "lucide-react";

export function SriInvoiceModalMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4 text-emerald-300" />
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Facturación SRI</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-emerald-200">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs mb-3.5">
        <div className="flex justify-between text-emerald-100"><span>Consulta Médica:</span><span>$40.00</span></div>
        <div className="flex justify-between text-emerald-200/60"><span>IVA (15%):</span><span>$6.00</span></div>
        <div className="flex justify-between text-base font-bold text-white border-t border-white/15 pt-1.5">
          <span>Total:</span>
          <span>$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110">
        <span>Emitir Comprobante SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default SriInvoiceModalMinimalist;
