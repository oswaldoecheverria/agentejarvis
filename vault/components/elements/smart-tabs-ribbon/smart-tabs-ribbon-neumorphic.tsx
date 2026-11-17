import React, { useState } from "react";
import { ShieldCheck, Calendar, Activity, Users } from "lucide-react";

export function SmartTabsRibbonNeumorphic() {
  const [active, setActive] = useState("todos");

  const tabs = [
    { id: "todos", label: "Todas las Consultas", count: 18 },
    { id: "presenciales", label: "Presenciales", count: 12 },
    { id: "virtuales", label: "Telemedicina", count: 6 },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-100 p-1.5 font-sans">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map((t) => {
          const isAct = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${
                isAct ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>{t.label}</span>
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${isAct ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}`}>
                {t.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default SmartTabsRibbonNeumorphic;