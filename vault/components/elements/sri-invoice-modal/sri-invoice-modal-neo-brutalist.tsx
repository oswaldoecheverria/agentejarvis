import React from "react";
import { Receipt, Check, ArrowRight } from "lucide-react";

export function SriInvoiceModalNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Receipt className="h-4 w-4" />
          <h3 className="text-xs font-black uppercase">NUEVA FACTURA SRI</h3>
        </div>
        <span className="border border-black bg-yellow-300 px-1.5 py-0.2 text-[9px] font-black">SOAP XAdES</span>
      </div>
      <div className="space-y-2 text-xs font-bold mb-3">
        <div className="flex justify-between"><span>Consulta Médica:</span><span>$40.00</span></div>
        <div className="flex justify-between text-slate-600"><span>IVA (15%):</span><span>$6.00</span></div>
        <div className="flex justify-between text-base font-black border-t-2 border-black pt-1">
          <span>TOTAL:</span>
          <span>$46.00</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
        <span>EMITIR COMPROBANTE SRI</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default SriInvoiceModalNeoBrutalist;
