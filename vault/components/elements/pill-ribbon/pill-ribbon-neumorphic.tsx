import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function PillRibbonNeumorphic() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-3 p-2 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff]">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`flex items-center gap-2 shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                isSel ? "bg-[#e0e5ec] text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]" : "bg-[#d1d9e6] text-slate-600"
              }`}>
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default PillRibbonNeumorphic;
