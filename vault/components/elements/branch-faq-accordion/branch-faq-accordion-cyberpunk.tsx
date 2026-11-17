import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BranchFaqAccordionCyberpunk() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿Qué incluye la consulta familiar?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿Las recetas sirven en cualquier farmacia?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Preguntas por Especialidad</h3>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-xl border border-white/10 bg-white/10 overflow-hidden">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3 text-xs font-semibold text-white text-left">
                <span>{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-emerald-300 transition-transform ${isOp ? "rotate-180" : ""}`} />
              </button>
              {isOp && (
                <div className="p-3 bg-black/20 text-xs text-emerald-100/80 leading-relaxed border-t border-white/10">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BranchFaqAccordionCyberpunk;
