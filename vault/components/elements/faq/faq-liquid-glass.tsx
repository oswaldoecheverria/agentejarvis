import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqLiquidGlass() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "¿Cómo se integra la licencia en proyectos de clientes?", a: "La licencia otorga uso ilimitado en repositorios ilimitados de clientes finales sin necesidad de pagar regalías adicionales." },
    { q: "¿Viene tipado con TypeScript y Tailwind v4?", a: "Sí, el 100% de los componentes están en TSX estricto y utilizan clases utilitarias estándar compatibles con Next.js y Vite." },
    { q: "¿Recibo actualizaciones cuando agregan nuevos estilos?", a: "Todas las expansiones y variantes de estilos futuros se sincronizan automáticamente en tu acceso de por vida." }
  ];

  return (
    <div className="w-full max-w-md p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] text-white">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <HelpCircle className="w-4 h-4 text-cyan-400" />
        <h3 className="font-semibold text-sm tracking-wide text-cyan-200">PREGUNTAS FRECUENTES</h3>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all">
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-3.5 text-left text-xs sm:text-sm font-medium hover:text-cyan-300"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-3.5 pb-3 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2 font-light">
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
export default FaqLiquidGlass;
