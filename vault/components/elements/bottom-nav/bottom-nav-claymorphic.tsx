import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavClaymorphic() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/60 bg-gradient-to-br from-violet-100 to-indigo-50 p-2.5 shadow-[0_12px_24px_rgba(99,102,241,0.18)] font-sans text-indigo-900">
      <div className="grid grid-cols-5 gap-1.5">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-200 ${
                isAct
                  ? "bg-white text-indigo-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_6px_12px_rgba(99,102,241,0.2)] font-extrabold scale-105"
                  : "text-indigo-400 hover:text-indigo-700 hover:bg-white/40"
              }`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-black text-white shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-bold">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavClaymorphic;