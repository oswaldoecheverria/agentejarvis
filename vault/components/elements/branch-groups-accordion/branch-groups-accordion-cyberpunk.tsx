import React, { useState } from "react";
import { ChevronDown, Stethoscope, Heart, Activity } from "lucide-react";

export function BranchGroupsAccordionCyberpunk() {
  const [activeGroup, setActiveGroup] = useState(0);

  const groups = [
    {
      title: "Medicina Preventiva & Chequeos",
      count: "3 Servicios",
      icon: Stethoscope,
      items: ["Chequeo General Anual", "Evaluación de Riesgo Metabólico", "Control de Hipertensión"]
    },
    {
      title: "Salud Materno-Infantil",
      count: "2 Servicios",
      icon: Heart,
      items: ["Control de Niño Sano", "Vacunación y Crecimiento"]
    },
    {
      title: "Procedimientos Menores",
      count: "4 Servicios",
      icon: Activity,
      items: ["Curaciones Avanzadas", "Retiro de Puntos", "Nebulizaciones", "Lavado Otológico"]
    }
  ];

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xs font-sans text-slate-800">
      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
        Áreas de Atención Médica
      </h3>
      <div className="space-y-2">
        {groups.map((g, idx) => {
          const isOp = activeGroup === idx;
          const Icon = g.icon;
          return (
            <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setActiveGroup(isOp ? -1 : idx)}
                className="flex w-full items-center justify-between p-3.5 text-left text-xs font-bold text-slate-800 hover:bg-slate-50"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-emerald-600" />
                  <span>{g.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-medium">{g.count}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOp ? "rotate-180" : ""}`} />
                </div>
              </button>
              {isOp && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-3 space-y-1.5">
                  {g.items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-slate-600 py-1 border-b border-slate-100 last:border-none">
                      <span>{it}</span>
                      <button className="text-[10px] font-bold text-emerald-600 hover:underline">Agendar →</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BranchGroupsAccordionCyberpunk;