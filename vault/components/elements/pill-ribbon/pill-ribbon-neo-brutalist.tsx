import React, { useState } from "react";
import { Stethoscope, HeartPulse, Video, Home, Users } from "lucide-react";

export function PillRibbonNeoBrutalist() {
  const [active, setActive] = useState("todos");
  const options = [
    { id: "todos", label: "TODOS", count: 28, icon: <Stethoscope className="h-3.5 w-3.5" /> },
    { id: "familiar", label: "MEDICINA FAMILIAR", count: 12, icon: <Users className="h-3.5 w-3.5" /> },
    { id: "telemed", label: "TELEMEDICINA", count: 8, icon: <Video className="h-3.5 w-3.5" /> },
    { id: "cronicos", label: "CRÓNICOS", count: 5, icon: <HeartPulse className="h-3.5 w-3.5" /> },
    { id: "domicilio", label: "A DOMICILIO", count: 3, icon: <Home className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="w-full max-w-xl overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center gap-2">
        {options.map((opt) => {
          const isSel = active === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setActive(opt.id)}
              className={`flex items-center gap-1.5 shrink-0 rounded-xl border-2 border-black px-3.5 py-1.5 text-xs font-black uppercase transition-all ${
                isSel
                  ? "bg-black text-white shadow-[3px_3px_0px_#000] -translate-y-0.5"
                  : "bg-white text-black hover:bg-yellow-300 shadow-[2px_2px_0px_#000]"
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              <span className={`ml-1 rounded-md px-1.5 py-0.2 text-[10px] border border-black ${
                isSel ? "bg-lime-400 text-black font-black" : "bg-slate-100 text-black"
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
export default PillRibbonNeoBrutalist;
