import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut } from "lucide-react";

export function SidebarNavLiquidGlass() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "Expedientes Pacientes", count: "24", icon: User },
    { id: "agenda", label: "Agenda del Día", count: "8", icon: Calendar },
    { id: "recetas", label: "Recetas PAdES-BES", count: "12", icon: FileText },
    { id: "facturas", label: "Facturación SRI", count: "$1.4K", icon: Receipt },
  ];

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-xs">
          ES
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900">Dra. Erika Salud</h4>
          <span className="text-[10px] text-slate-500">Medicina Familiar</span>
        </div>
      </div>
      <div className="space-y-1 mb-4">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-xl p-2 text-xs transition-colors ${
                isAct ? "bg-slate-100 font-bold text-slate-900" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-slate-500" />
                <span>{it.label}</span>
              </div>
              <span className="text-[10px] text-slate-400">{it.count}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 p-2 text-xs font-semibold text-rose-700 hover:bg-rose-100">
        <LogOut className="h-3.5 w-3.5" />
        <span>Salir</span>
      </button>
    </div>
  );
}
export default SidebarNavLiquidGlass;