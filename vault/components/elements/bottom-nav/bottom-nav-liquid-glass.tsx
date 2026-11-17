import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavLiquidGlass() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-cyan-400/40 bg-slate-950/70 p-2 backdrop-blur-3xl shadow-[0_0_25px_rgba(6,182,212,0.25)] font-sans text-cyan-50">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 ${
                isAct
                  ? "bg-cyan-500/20 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)] text-cyan-200 scale-105"
                  : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              }`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[8px] font-black text-slate-950 shadow-[0_0_6px_#06b6d4]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-medium">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavLiquidGlass;