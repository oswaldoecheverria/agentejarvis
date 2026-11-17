import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Users } from "lucide-react";

export function PillRibbonClaymorphic() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "Todos", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "Medicina Familiar", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "Telemedicina", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "Crónicos", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2 font-sans">
      <div className="flex items-center gap-2">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`flex items-center gap-1.5 shrink-0 rounded-full px-3.5 py-1.5 text-xs transition-colors ${
                isSel ? "bg-neutral-900 text-white font-medium" : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className="text-[10px] opacity-70 ml-1">({opt.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default PillRibbonClaymorphic;
