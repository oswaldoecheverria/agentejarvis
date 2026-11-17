"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "¿Cómo protege el sistema los datos médicos bajo la LOPDP?",
    answer: "Todas las historias clínicas y recetas se almacenan con cifrado de grado militar en reposo y tránsito, contando con pistas de auditoría inmutables para cumplir con la legislación ecuatoriana.",
  },
  {
    id: 2,
    question: "¿Las recetas cuentan con firma electrónica válida ante el SRI y MSP?",
    answer: "Sí, emitimos firmas electrónicas bajo el estándar PAdES-BES reconocidas por los organismos de control, incluyendo código QR de validación criptográfica en tiempo real.",
  },
  {
    id: 3,
    question: "¿El sistema funciona sin depender de conexión permanente?",
    answer: "Diseñado bajo arquitectura Local-First resiliente: permite consultas de agenda y fichas previas sin latencia, sincronizando automáticamente al restablecer red.",
  },
];

export function FaqMotionAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <div className="w-full max-w-xl space-y-3 text-white">
      <div className="flex items-center gap-2 mb-4 px-1 text-xs font-mono uppercase tracking-wider text-emerald-400">
        <Sparkles className="h-4 w-4" />
        <span>Motion Accordion · MotionSites Pattern</span>
      </div>

      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-emerald-500/40 bg-zinc-950 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                : "border-zinc-800 bg-[#090d16] hover:border-zinc-700"
            }`}
          >
            <button
              onClick={() => toggle(faq.id)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors"
            >
              <div className="flex items-center gap-3 pr-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isOpen
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-zinc-900 text-zinc-400"
                  }`}
                >
                  <HelpCircle className="h-4 w-4" />
                </div>
                <h5 className="text-sm font-bold text-zinc-100">{faq.question}</h5>
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-emerald-400" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 animate-in fade-in slide-in-from-top-1 duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
