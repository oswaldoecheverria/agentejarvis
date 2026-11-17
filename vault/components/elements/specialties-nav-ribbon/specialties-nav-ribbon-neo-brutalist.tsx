import React, { useState } from "react";
import { Stethoscope, Baby, HeartPulse, Sparkles, Brain, Eye } from "lucide-react";

export function SpecialtiesNavRibbonNeoBrutalist() {
  const [active, setActive] = useState("familiar");

  const specs = [
    { id: "familiar", name: "MEDICINA FAMILIAR", icon: Stethoscope },
    { id: "pediatria", name: "PEDIATRÍA PREVENTIVA", icon: Baby },
    { id: "cardiologia", name: "SALUD CARDIOVASCULAR", icon: HeartPulse },
    { id: "bienestar", name: "NUTRICIÓN Y METABOLISMO", icon: Sparkles },
    { id: "psico", name: "SALUD MENTAL INTEGRAL", icon: Brain },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border-3 border-black bg-white p-3 shadow-[5px_5px_0px_#000] font-sans">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {specs.map((s) => {
          const Icon = s.icon;
          const isAct = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl border-2 border-black px-3 py-2 text-xs font-black transition-all ${
                isAct ? "bg-amber-300 shadow-[3px_3px_0px_#000] translate-y-[-2px]" : "bg-slate-100 hover:bg-yellow-100"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default SpecialtiesNavRibbonNeoBrutalist;