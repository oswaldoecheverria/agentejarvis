import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function MedicalSidebarNeoBrutalist() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl border-3 border-black bg-cyan-200 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2.5 border-b-3 border-black pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_#000]">
          <Stethoscope className="h-5 w-5 text-black" />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase">PANEL MÉDICO</h4>
          <p className="text-[10px] font-bold text-black/70">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-xl border-2 border-black p-2.5 text-xs font-black transition-all ${
                isSel
                  ? "bg-black text-white shadow-[2px_2px_0px_#000] translate-x-1"
                  : "bg-white text-black hover:bg-yellow-100 shadow-[2px_2px_0px_#000]"
              }`}
            >
              <div className="flex items-center gap-2">
                {it.icon}
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className={`rounded-full px-1.5 py-0.2 text-[10px] border border-black ${
                  isSel ? "bg-lime-300 text-black" : "bg-black/10 text-black"
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
export default MedicalSidebarNeoBrutalist;
