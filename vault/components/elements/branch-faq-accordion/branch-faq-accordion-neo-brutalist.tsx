import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function BranchFaqAccordionNeoBrutalist() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "¿QUÉ INCLUYE LA CONSULTA FAMILIAR?", a: "Evaluación integral de signos vitales, diagnóstico clínico y emisión de receta electrónica PAdES." },
    { q: "¿LAS RECETAS SIRVEN EN CUALQUIER FARMACIA?", a: "Sí, cuentan con firma criptográfica avanzada y código QR validado ante el MSP." },
  ];

  return (
    <div className="w-full max-w-md rounded-3xl border-3 border-black bg-yellow-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <HelpCircle className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">PREGUNTAS POR ESPECIALIDAD</h3>
      </div>
      <div className="space-y-2">
        {faqs.map((f, i) => {
          const isOp = open === i;
          return (
            <div key={i} className="rounded-xl border-2 border-black bg-white overflow-hidden shadow-[2px_2px_0px_#000]">
              <button onClick={() => setOpen(isOp ? -1 : i)} className="flex w-full items-center justify-between p-3 text-xs font-black text-left">
                <span>{f.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOp ? "rotate-180" : ""}`} />
              </button>
              {isOp && (
                <div className="border-t-2 border-black bg-lime-100 p-3 text-xs font-bold text-slate-800">
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
export default BranchFaqAccordionNeoBrutalist;
