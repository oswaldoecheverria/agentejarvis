import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FaqMinimalist() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere dependencias externas propietarias.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, filetes de 1px y selectores nativos.",
    },
    {
      q: "¿Puedo alterar las proporciones de la cuadrícula?",
      a: "Sí, el espaciado modular responde a clases estándar de padding y margin de Tailwind.",
    },
  ];

  return (
    <div className="w-full max-w-md border border-slate-900 bg-white p-6 font-mono text-slate-900 shadow-none">
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4 text-[10px] uppercase tracking-widest text-slate-500">
        <span>PREGUNTAS // FAQ.01</span>
        <span>INDEXADO</span>
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-900">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-2.5">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between text-left font-bold text-xs uppercase tracking-tight text-slate-950 py-1"
              >
                <span>{faq.q}</span>
                <span className="font-bold text-slate-500">{isOpen ? "[-]" : "[+]"}</span>
              </button>

              {isOpen && (
                <div className="mt-2 text-[11px] text-slate-600 leading-relaxed font-sans pb-1">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqMinimalist;
