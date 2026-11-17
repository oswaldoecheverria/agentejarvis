import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavMinimalist() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border-t border-slate-200 bg-white p-2 font-mono text-slate-900">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 text-[10px] uppercase transition-colors ${
                isAct ? "border-b-2 border-slate-900 font-bold" : "text-slate-400 hover:text-slate-900"
              }`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 rounded bg-slate-900 px-1 text-[8px] font-bold text-white">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span>{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavMinimalist;