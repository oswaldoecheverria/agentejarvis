import React, { useState } from "react";
import { Users, Calendar, FileText, Receipt, Stethoscope } from "lucide-react";

export function MedicalSidebarGlassmorphic() {
  const [active, setActive] = useState("pacientes");
  const items = [
    { id: "pacientes", label: "Expedientes Pacientes", count: 24, icon: <Users className="h-4 w-4" /> },
    { id: "citas", label: "Agenda de Citas", count: 3, icon: <Calendar className="h-4 w-4" /> },
    { id: "recetas", label: "Recetas PAdES-BES", count: 12, icon: <FileText className="h-4 w-4" /> },
    { id: "facturas", label: "Facturación SRI", count: null, icon: <Receipt className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center gap-2.5 border-b border-white/20 pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-emerald-200">
          <Stethoscope className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-200">PANEL MÉDICO</h4>
          <p className="text-[11px] font-medium text-emerald-100/70">Dra. Erika Salud</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {items.map((it) => {
          const isSel = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-semibold transition-all ${
                isSel
                  ? "border border-white/30 bg-white/20 text-white shadow-sm"
                  : "text-emerald-100/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={isSel ? "text-emerald-300" : "text-emerald-300/70"}>{it.icon}</span>
                <span>{it.label}</span>
              </div>
              {it.count && (
                <span className="rounded-full bg-emerald-400/30 border border-emerald-300/40 px-1.5 py-0.2 text-[10px] text-emerald-200">
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
export default MedicalSidebarGlassmorphic;
