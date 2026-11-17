import React, { useState } from "react";
import { Plus, Minus, Terminal } from "lucide-react";

export function FaqCyberpunk() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo se instala en mi proyecto React?",
      a: "Copias el archivo TSX directamente en tu carpeta de componentes. No requiere librerías propietarias pesadas.",
    },
    {
      q: "¿Es compatible con Tailwind CSS v4?",
      a: "Totalmente. Utiliza clases puras de Tailwind, bordes neón y sombras emisivas.",
    },
    {
      q: "¿Puedo alterar los códigos de color neón?",
      a: "Sí, todos los acentos cian (#06b6d4) y magenta (#ec4899) se configuran con clases utilitarias.",
    },
  ];

  return (
    <div className="relative w-full max-w-md border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4 text-[10px]">
        <div className="flex items-center gap-1.5 text-pink-400 font-black">
          <Terminal className="h-3.5 w-3.5" />
          <span>FAQ_DATABASE // KNOWLEDGE</span>
        </div>
        <span className="text-cyan-400">STATUS: OK</span>
      </div>

      <div className="space-y-2.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border transition-all ${
                isOpen
                  ? "border-pink-500 bg-pink-950/30 shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                  : "border-cyan-500/40 bg-black/40 hover:bg-cyan-950/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-3 text-left font-black text-xs text-white uppercase"
              >
                <span>{faq.q}</span>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-cyan-400 text-cyan-300">
                  {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-cyan-500/20 p-3 text-xs text-cyan-200 leading-relaxed">
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

export default FaqCyberpunk;
