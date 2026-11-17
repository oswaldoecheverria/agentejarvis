import React from "react";
import { Receipt, FileDown } from "lucide-react";

export function SriInvoicesTableNeumorphic() {
  const invoices = [
    { num: "001-002-000000412", client: "Carlos Mendoza", total: "$45.00", auth: "AUTORIZADO" },
    { num: "001-002-000000411", client: "Elena Rostova", total: "$65.00", auth: "AUTORIZADO" },
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Facturación SRI Emitida</h3>
          <span className="text-[10px] text-slate-500">Ambiente Producción XAdES-BES</span>
        </div>
      </div>
      <div className="space-y-3">
        {invoices.map((inv, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] text-xs">
            <div>
              <span className="font-mono text-[9px] text-slate-500 block">{inv.num}</span>
              <h5 className="font-bold text-slate-800">{inv.client}</h5>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-slate-900">{inv.total}</span>
              <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-blue-700 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff]">
                {inv.auth}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SriInvoicesTableNeumorphic;