import React from "react";
import { FileText, Printer } from "lucide-react";

export function PrescriptionsIssuedTableMinimalist() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "Firmada" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h3 className="text-xs font-bold uppercase text-slate-900 mb-3">Historial de Recetas</h3>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5 text-xs">
            <div>
              <span className="text-[9px] text-slate-400 font-mono">{r.code}</span>
              <p className="font-bold text-slate-900">{r.patient}</p>
            </div>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsIssuedTableMinimalist;