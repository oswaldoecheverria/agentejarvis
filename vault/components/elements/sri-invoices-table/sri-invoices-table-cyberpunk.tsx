import React from "react";
import { Receipt } from "lucide-react";

export function SriInvoicesTableCyberpunk() {
  const invoices = [
    { num: "001-002-000000412", client: "Carlos Mendoza", total: "$45.00", auth: "AUTORIZADO" },
  ];

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h3 className="text-xs font-bold uppercase text-slate-900 mb-3">Facturación SRI</h3>
      <div className="space-y-2">
        {invoices.map((inv, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5 text-xs">
            <div>
              <span className="text-[9px] text-slate-400 font-mono">{inv.num}</span>
              <p className="font-bold text-slate-900">{inv.client}</p>
            </div>
            <span className="font-bold text-slate-900">{inv.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SriInvoicesTableCyberpunk;