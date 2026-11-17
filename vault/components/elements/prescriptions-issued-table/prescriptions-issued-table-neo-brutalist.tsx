import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function PrescriptionsIssuedTableNeoBrutalist() {
  const rxs = [
    { code: "RX-2026-0842", patient: "CARLOS MENDOZA", dx: "J00 RINOFARINGITIS", status: "FIRMADA" },
    { code: "RX-2026-0841", patient: "VALERIA ORTIZ", dx: "K29 GASTRITIS", status: "FIRMADA" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl border-3 border-black bg-lime-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
        <div>
          <h3 className="text-xs font-black uppercase text-black">RECETAS ELECTRÓNICAS EMITIDAS</h3>
          <p className="text-[10px] font-bold text-slate-800">FIRMA CRIPTOGRÁFICA PAdES-BES</p>
        </div>
      </div>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-3 shadow-[2px_2px_0px_#000]">
            <div>
              <span className="font-mono text-[9px] font-black text-slate-600 block">{r.code}</span>
              <h5 className="font-black text-xs text-black">{r.patient}</h5>
              <span className="text-[10px] font-bold text-slate-700">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded border border-black bg-lime-400 px-1.5 py-0.5 text-[9px] font-black text-black">
                {r.status}
              </span>
              <button className="rounded border-2 border-black bg-white p-1 text-black shadow-[1px_1px_0px_#000]">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsIssuedTableNeoBrutalist;