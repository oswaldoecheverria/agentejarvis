import React, { useState } from "react";
import { Stethoscope, Baby, HeartPulse, Sparkles, Brain } from "lucide-react";

export function SpecialtiesNavRibbonClaymorphic() {
  const [active, setActive] = useState("familiar");

  const specs = [
    { id: "familiar", name: "Medicina Familiar", icon: Stethoscope },
    { id: "pediatria", name: "Pediatría", icon: Baby },
    { id: "cardiologia", name: "Cardiología", icon: HeartPulse },
    { id: "bienestar", name: "Nutrición", icon: Sparkles },
    { id: "psico", name: "Salud Mental", icon: Brain },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm font-sans">
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {specs.map((s) => {
          const Icon = s.icon;
          const isAct = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                isAct ? "bg-slate-900 text-white shadow-xs" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
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
export default SpecialtiesNavRibbonClaymorphic;