import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavGlassmorphic() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-[0_15px_35px_rgba(3,20,14,0.4)] font-sans text-white">
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
                  ? "bg-white/20 border border-white/40 shadow-inner text-emerald-200"
                  : "text-emerald-100/70 hover:bg-white/10"
              }`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-400 px-1 text-[9px] font-bold text-slate-900 shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px] font-semibold tracking-tight">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavGlassmorphic;