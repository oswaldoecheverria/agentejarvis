import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings } from "lucide-react";

export function BottomNavCyberpunk() {
  const [active, setActive] = useState("citas");

  const navs = [
    { id: "inicio", label: "SYS_HOME", icon: Home },
    { id: "citas", label: "APPTS", icon: Calendar, badge: "03" },
    { id: "pacientes", label: "USERS", icon: Users },
    { id: "recetas", label: "RX_PAD", icon: FileText },
    { id: "ajustes", label: "CFG", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md border border-cyan-400 bg-slate-950 p-2 font-mono text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
      <div className="grid grid-cols-5 gap-1">
        {navs.map((n) => {
          const Icon = n.icon;
          const isAct = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 transition-all ${
                isAct
                  ? "bg-cyan-500/20 border-b-2 border-cyan-400 text-cyan-200 shadow-[inset_0_0_8px_rgba(6,182,212,0.3)]"
                  : "text-cyan-600 hover:text-cyan-300"
              }`}
            >
              {n.badge && (
                <span className="absolute top-0.5 right-1 rounded border border-rose-500 bg-rose-950/80 px-1 text-[8px] font-bold text-rose-400 shadow-[0_0_6px_#f43f5e]">
                  {n.badge}
                </span>
              )}
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-[9px] tracking-widest">{n.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default BottomNavCyberpunk;