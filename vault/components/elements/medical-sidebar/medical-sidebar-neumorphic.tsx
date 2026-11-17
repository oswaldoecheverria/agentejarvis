import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function MedicalSidebarNeumorphic() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-3 border-b border-slate-300/40 pb-3.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-indigo-600">
          <Stethoscope className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">PANEL MÉDICO</h4>
          <p className="text-[11px] font-semibold text-slate-500">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold transition-all ${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] translate-x-1"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={isSel ? "text-indigo-600" : "text-slate-500"}>{it.icon}</span>
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className={`rounded-xl px-2 py-0.5 text-[10px] font-bold ${
                  isSel
                    ? "bg-[#e0e5ec] text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]"
                    : "bg-[#d1d9e6] text-slate-600"
                }`}>
                  {it.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default MedicalSidebarNeumorphic;
