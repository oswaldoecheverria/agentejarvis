import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BranchFaqAccordionNeumorphic() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿Qué incluye la consulta familiar?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿Las recetas sirven en cualquier farmacia?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4 text-indigo-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Preguntas Frecuentes</h3>
      </div>
      <div className="space-y-2.5">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-2xl bg-[#e0e5ec] overflow-hidden shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff]">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3.5 text-xs font-bold text-slate-800 text-left">
                <span>{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-indigo-600 transition-transform ${isOp ? "rotate-180" : ""}`} />
              </button>
              {isOp && (
                <div className="p-3.5 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs text-slate-600 leading-relaxed">
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
export default BranchFaqAccordionNeumorphic;
