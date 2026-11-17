import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function PrescriptionsTableNeoBrutalist() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <h3 className="text-xs font-black uppercase">RECETAS ELECTRÓNICAS PAdES</h3>
        </div>
        <span className="text-[10px] font-black bg-yellow-300 border border-black px-1.5 py-0.2">ÚLTIMAS</span>
      </div>
      <div className="space-y-2">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-slate-50 text-xs">
            <div>
              <span className="font-mono text-[10px] font-black text-slate-600">{r.id}</span>
              <p className="font-black text-black">{r.patient}</p>
              <p className="text-[11px] font-bold text-slate-700">{r.med}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-black bg-lime-300 hover:bg-lime-400">
                <QrCode className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 rounded-lg border border-black bg-black text-white hover:bg-slate-800">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsTableNeoBrutalist;
