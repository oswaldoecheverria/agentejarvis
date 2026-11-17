import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function PrescriptionsIssuedTableNeumorphic() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "FIRMADA" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis Aguda", status: "FIRMADA" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Historial de Recetas Electrónicas</h3>
          <p className="text-[10px] text-slate-500">Firma criptográfica PAdES-BES con QR</p>
        </div>
      </div>
      <div className="space-y-3">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
            <div>
              <span className="font-mono text-[9px] font-bold text-slate-500 block">{r.code}</span>
              <h5 className="font-bold text-xs text-slate-800">{r.patient}</h5>
              <span className="text-[10px] text-slate-500">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-teal-700 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff] flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                {r.status}
              </span>
              <button className="rounded-xl bg-[#e0e5ec] p-2 text-slate-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsIssuedTableNeumorphic;