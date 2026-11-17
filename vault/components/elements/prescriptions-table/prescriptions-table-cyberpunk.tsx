import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function PrescriptionsTableCyberpunk() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-emerald-300" />
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Recetas Electrónicas</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-emerald-200">ÚLTIMAS</span>
      </div>
      <div className="space-y-2">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
            <div>
              <span className="font-mono text-[10px] text-emerald-200/70">{r.id}</span>
              <p className="font-semibold text-white">{r.patient}</p>
              <p className="text-[11px] text-emerald-100/70">{r.med}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
                <QrCode className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 rounded-lg border border-white/20 bg-emerald-500/80 text-white hover:brightness-110">
                <Download className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsTableCyberpunk;
