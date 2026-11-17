import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut, ChevronRight } from "lucide-react";

export function SidebarNavGlassmorphic() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "Expedientes Pacientes", count: "24", icon: User },
    { id: "agenda", label: "Agenda del Día", count: "8", icon: Calendar },
    { id: "recetas", label: "Recetas Emitidas", count: "12", icon: FileText },
    { id: "facturas", label: "Facturación SRI", count: "$1.4k", icon: Receipt },
    { id: "seguridad", label: "Dispositivos Seguros", count: "Activo", icon: Shield },
  ];

  return (
    <div className="w-full max-w-xs rounded-[2.25rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-inner">
          <span className="font-bold text-sm text-emerald-200">ES</span>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-tight">Dra. Erika Salud</h4>
          <span className="text-[10px] text-emerald-200/80 font-medium">Médico Familiar · MSP 17-5421</span>
        </div>
      </div>
      <div className="space-y-1 mb-5">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-2xl p-2.5 text-xs font-medium transition-all duration-200 ${
                isAct
                  ? "bg-white/20 border border-white/40 shadow-inner text-emerald-100 font-bold translate-x-1"
                  : "text-emerald-100/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-emerald-300" />
                <span>{it.label}</span>
              </div>
              <span className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-emerald-200">
                {it.count}
              </span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-400/40 bg-rose-500/15 p-2.5 text-xs font-semibold text-rose-200 hover:bg-rose-500/25">
        <LogOut className="h-4 w-4" />
        <span>Cerrar Sesión</span>
      </button>
    </div>
  );
}
export default SidebarNavGlassmorphic;