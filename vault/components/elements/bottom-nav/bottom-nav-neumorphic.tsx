import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavNeumorphic() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "citas", label: "Citas", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "Pacientes", icon: Users },
    { id: "recetas", label: "Recetas", icon: FileText },
    { id: "ajustes", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-3 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="grid grid-cols-5 gap-2">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl transition-all duration-200 ${
                isAct
                  ? "shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-teal-700 font-bold"
                  : "shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] text-slate-500 hover:text-slate-800"
              }`}
            >
              {n.badge && (
                <span className="absolute top-1 right-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-teal-600 px-1 text-[8px] font-bold text-white shadow-xs">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[10px]">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavNeumorphic;