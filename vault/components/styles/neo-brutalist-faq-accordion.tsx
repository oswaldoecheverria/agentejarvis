import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function NeoBrutalistFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere instalar librerías propietarias pesadas.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, sombras duras sin blur y utilidades nativas.",
    },
    {
      q: "¿Puedo cambiar los colores y grosor de bordes?",
      a: "Sí, todos los colores son variables estándar de Tailwind como bg-yellow-300 o border-black.",
    },
  ];

  return (
    <div className="w-full max-w-lg border-3 border-black bg-white p-6 shadow-[7px_7px_0px_#000] font-sans">
      <div className="flex items-center gap-2.5 border-b-3 border-black pb-4 mb-5">
        <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-yellow-400 shadow-[2px_2px_0px_#000]">
          <HelpCircle className="h-5 w-5 text-black" />
        </div>
        <div>
          <h3 className="text-base font-black text-black uppercase tracking-tight">Preguntas Frecuentes</h3>
          <p className="text-xs font-bold text-black/60">Respuestas directas sin rodeos corporativos</p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border-2 border-black transition-all ${
                isOpen ? "bg-amber-100 shadow-[3px_3px_0px_#000]" : "bg-slate-50 hover:bg-yellow-50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-3.5 text-left font-black text-xs uppercase tracking-wide text-black"
              >
                <span>{faq.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000]">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="border-t-2 border-black bg-white p-3.5 text-xs font-bold text-black/80 leading-relaxed">
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
