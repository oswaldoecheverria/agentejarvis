import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavNeoBrutalist() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "INICIO", icon: Home },
    { id: "citas", label: "CITAS", icon: Calendar, badge: "3" },
    { id: "pacientes", label: "PACIENTES", icon: Users },
    { id: "recetas", label: "RECETAS", icon: FileText },
    { id: "ajustes", label: "AJUSTES", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border-3 border-black bg-yellow-300 p-2 shadow-[5px_5px_0px_#000] font-sans">
      <div className="grid grid-cols-5 gap-1.5">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl border-2 border-black transition-transform active:translate-y-0.5 ${
                isAct ? "bg-white shadow-[2px_2px_0px_#000]" : "bg-yellow-200 hover:bg-yellow-100"
              }`}
            >
              {n.badge && (
                <span className="absolute -top-1.5 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-black bg-rose-500 px-1 text-[9px] font-black text-white shadow-[1px_1px_0px_#000]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 text-black mb-1" />
              <span className="text-[9px] font-black uppercase text-black truncate w-full text-center">
                {n.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavNeoBrutalist;