import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqClaymorphic() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere librerías propietarias pesadas.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, esquinas redondeadas 3D y variables estándar.",
    },
    {
      q: "¿Puedo personalizar los colores pasteles?",
      a: "Sí, todos los tonos pasteles y resplandores se configuran con clases utilitarias de Tailwind.",
    },
  ];

  return (
    <div className="w-full max-w-md rounded-[3rem] border-3 border-white bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.15)] font-sans text-slate-800">
      <div className="flex items-center gap-2.5 border-b border-purple-200/60 pb-4 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-white bg-white/80 text-purple-700 shadow-xs">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-black text-slate-800">Preguntas Frecuentes</h3>
          <p className="text-xs font-bold text-purple-900/60">Respuestas 3D sin complicaciones</p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border-2 border-white transition-all ${
                isOpen
                  ? "bg-white/90 shadow-md"
                  : "bg-white/60 hover:bg-white/80 shadow-xs"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-3.5 text-left font-black text-xs text-slate-800"
              >
                <span>{faq.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-white bg-gradient-to-tr from-purple-400 to-pink-400 text-white shadow-xs">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-purple-100 p-3.5 text-xs font-bold text-slate-700 leading-relaxed">
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

export default FaqClaymorphic;
