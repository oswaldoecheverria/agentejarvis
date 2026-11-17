import React from "react";
import { Receipt, ArrowRight } from "lucide-react";

export function SriInvoiceModalNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/40 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4 text-indigo-600" />
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Facturación SRI</h3>
        </div>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs mb-3.5">
        <div className="flex justify-between"><span>Consulta Médica:</span><span className="font-bold text-slate-800">$40.00</span></div>
        <div className="flex justify-between text-slate-500"><span>IVA (15%):</span><span className="font-bold">$6.00</span></div>
        <div className="flex justify-between text-base font-bold text-slate-900 border-t border-slate-300/40 pt-1.5">
          <span>Total:</span>
          <span className="text-indigo-600">$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        <span>Emitir Comprobante SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default SriInvoiceModalNeumorphic;
