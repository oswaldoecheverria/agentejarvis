import React, { useState } from "react";
import { Mail, Check, ArrowRight, ArrowLeft, Send } from "lucide-react";

export function NewsletterDigestWizardMinimalist() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900">Asistente de Boletín Clínico</h3>
          <p className="text-[10px] text-slate-500">Paso {step} de 3</p>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                step === s
                  ? "bg-emerald-600 text-white"
                  : step > s
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {step > s ? <Check className="h-3 w-3" /> : s}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Título del Boletín</label>
            <input
              type="text"
              defaultValue="Consejos médicos para el cambio estacional"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Resumen Clínico</label>
            <textarea
              rows={3}
              defaultValue="Medidas de prevención respiratoria y vacunación recomendada por la Dra. Erika Salud."
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block mb-1">Audiencia Objetivo</label>
          {["Todos los pacientes activos (1,240)", "Pacientes con consultas en los últimos 6 meses (420)", "Suscriptores del blog público (850)"].map((aud, i) => (
            <label key={i} className="flex items-center gap-2.5 rounded-xl border border-slate-200 p-3 text-xs text-slate-700 cursor-pointer hover:bg-slate-50">
              <input type="radio" name="aud" defaultChecked={i === 0} />
              <span>{aud}</span>
            </label>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs space-y-2">
          <p className="font-bold text-slate-900">Listo para Despacho</p>
          <p className="text-slate-600">Se enviará el boletín con firma PAdES institucional a 1,240 suscriptores verificados.</p>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
        <button
          disabled={step === 1}
          onClick={() => setStep(step - 1)}
          className="flex items-center gap-1 text-xs font-bold text-slate-500 disabled:opacity-30"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Atrás</span>
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-1 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
          >
            <span>Continuar</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <button className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm">
            <Send className="h-3.5 w-3.5" />
            <span>Enviar Ahora</span>
          </button>
        )}
      </div>
    </div>
  );
}
export default NewsletterDigestWizardMinimalist;