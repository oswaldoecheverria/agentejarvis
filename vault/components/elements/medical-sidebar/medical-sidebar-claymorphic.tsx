import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function MedicalSidebarClaymorphic() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs rounded-2xl border border-neutral-300 bg-white p-4 font-sans text-neutral-900 shadow-sm">
      <div className="flex items-center gap-2.5 border-b border-neutral-200 pb-3">
        <div className="flex h-9 w-9 items-center justify-center border border-neutral-900">
          <Stethoscope className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider">PANEL MÉDICO</h4>
          <p className="text-[11px] text-neutral-500">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between p-2 text-xs font-bold transition-colors ${
                isSel ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <div className="flex items-center gap-2">
                {it.icon}
                <span>{it.label}</span>
              </div>
              {it.count && <span className="text-[10px] opacity-70">[{it.count}]</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default MedicalSidebarClaymorphic;
