import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqNeumorphic() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere librerías propietarias pesadas.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, sombras extruidas suaves y variables estándar.",
    },
    {
      q: "¿Puedo personalizar los colores y sombras suaves?",
      a: "Sí, todos los tonos y sombras se configuran directamente con clases utilitarias de Tailwind.",
    },
  ];

  return (
    <div className="w-full max-w-md rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans text-slate-800">
      <div className="flex items-center gap-2.5 border-b border-[#bec3c9]/40 pb-4 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">Preguntas Frecuentes</h3>
          <p className="text-xs text-slate-500">Respuestas directas de arquitectura</p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl transition-all ${
                isOpen
                  ? "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-3.5 text-left font-bold text-xs text-slate-700"
              >
                <span>{faq.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff]">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-[#bec3c9]/30 p-3.5 text-xs text-slate-600 leading-relaxed">
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

export default FaqNeumorphic;
