import React from "react";
import { FileText, QrCode, Download } from "lucide-react";

export function PrescriptionsTableNeumorphic() {
  const list = [
    { id: "REC-2026-089", patient: "Carlos Mendoza", med: "Amoxicilina 500mg", status: "Firmada" },
    { id: "REC-2026-090", patient: "Valeria Gómez", med: "Losartán 50mg", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/40 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-indigo-600" />
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Recetas Electrónicas</h3>
        </div>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[10px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">ÚLTIMAS</span>
      </div>
      <div className="space-y-2.5">
        {list.map((r) => (
          <div key={r.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
            <div>
              <span className="font-mono text-[10px] font-bold text-slate-500">{r.id}</span>
              <p className="font-bold text-slate-800">{r.patient}</p>
              <p className="text-[11px] text-slate-500">{r.med}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">
                <QrCode className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsTableNeumorphic;
