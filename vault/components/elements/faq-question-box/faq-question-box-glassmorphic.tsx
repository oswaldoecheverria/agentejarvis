import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export function FaqQuestionBoxGlassmorphic() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-xs font-sans text-slate-800">
      <div className="flex items-start justify-between gap-3 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
            <HelpCircle className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">
              ¿Cómo valido la firma electrónica de una receta en la farmacia?
            </h4>
            <span className="text-[10px] font-medium text-emerald-600 mt-0.5 inline-block">
              Validez legal garantizada · MSP & LOPDP
            </span>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <div className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-600 leading-relaxed">
          <p>
            Cada receta emitida cuenta con un sello criptográfico PAdES-BES y un código QR único.
            El farmacéutico solo debe escanear el código para verificar la vigencia ante el sistema nacional de salud.
          </p>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 p-2 text-[11px]">
            <span className="text-slate-500">¿Tienes dudas adicionales?</span>
            <button className="flex items-center gap-1 font-bold text-emerald-700 hover:underline">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Consultar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default FaqQuestionBoxGlassmorphic;