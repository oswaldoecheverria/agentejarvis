import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function PillRibbonGlassmorphic() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Control Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2 p-1 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45)]">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`flex items-center gap-1.5 shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isSel
                  ? "border border-white/40 bg-white/25 text-white shadow-md shadow-emerald-950/40"
                  : "text-emerald-100/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={`ml-1 rounded-full px-2 py-0.2 text-[10px] ${
                isSel ? "bg-emerald-400/30 text-emerald-200 border border-emerald-300/40" : "bg-black/20 text-emerald-200/60"
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
export default PillRibbonGlassmorphic;
