import React, { useState } from "react";
import { User, Calendar, FileText, Receipt, Shield, LogOut, ChevronRight } from "lucide-react";

export function SidebarNavNeoBrutalist() {
  const [active, setActive] = useState("expedientes");

  const items = [
    { id: "expedientes", label: "EXPEDIENTES PACIENTES", count: "24", icon: User },
    { id: "agenda", label: "AGENDA DEL DÍA", count: "8", icon: Calendar },
    { id: "recetas", label: "RECETAS EMITIDAS", count: "12", icon: FileText },
    { id: "facturas", label: "FACTURACIÓN SRI", count: "$1.4K", icon: Receipt },
    { id: "seguridad", label: "DISPOSITIVOS SEGUROS", count: "OK", icon: Shield },
  ];

  return (
    <div className="w-full max-w-xs rounded-3xl border-3 border-black bg-emerald-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-black bg-white shadow-[2px_2px_0px_#000]">
          <span className="font-black text-sm">DRA</span>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase leading-tight">DRA. ERIKA SALUD</h4>
          <span className="text-[10px] font-bold bg-black text-white px-1.5 py-0.5 rounded uppercase mt-0.5 inline-block">
            MSP: 17-5421
          </span>
        </div>
      </div>
      <div className="space-y-1.5 mb-5">
        {items.map((it) => {
          const Icon = it.icon;
          const isAct = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setActive(it.id)}
              className={`flex w-full items-center justify-between rounded-xl border-2 border-black p-2.5 text-xs font-black transition-all ${
                isAct ? "bg-white shadow-[3px_3px_0px_#000] translate-x-1" : "bg-emerald-200/80 hover:bg-white/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{it.label}</span>
              </div>
              <span className="rounded border border-black bg-yellow-300 px-1.5 py-0.2 text-[10px]">
                {it.count}
              </span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-rose-400 p-2.5 text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-rose-500">
        <LogOut className="h-4 w-4" />
        <span>CERRAR SESIÓN</span>
      </button>
    </div>
  );
}
export default SidebarNavNeoBrutalist;