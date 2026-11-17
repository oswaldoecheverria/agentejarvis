import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqGlassmorphic() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere librerías propietarias pesadas.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, filtros backdrop-blur y variables estándar.",
    },
    {
      q: "¿Puedo personalizar los colores y transparencias?",
      a: "Sí, todos los gradientes y niveles de opacidad se configuran con clases de Tailwind como bg-emerald-500/20.",
    },
  ];

  return (
    <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="flex items-center gap-2.5 border-b border-white/15 pb-4 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-emerald-200">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Preguntas Frecuentes</h3>
          <p className="text-xs text-emerald-100/70">Respuestas directas de arquitectura</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "border-emerald-300/60 bg-emerald-500/20 shadow-sm"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-3.5 text-left font-bold text-xs text-white"
              >
                <span>{faq.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10">
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-white/10 p-3.5 text-xs text-emerald-100/80 leading-relaxed">
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

export default FaqGlassmorphic;
