import React, { useState } from "react";
import { ShieldAlert, Check } from "lucide-react";

export function CookieConsentBannerNeoBrutalist() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-2xl border-3 border-black bg-yellow-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-black uppercase">PRIVACIDAD & LOPDP (ECUADOR)</h4>
          <p className="text-xs font-bold text-slate-800 mt-1 leading-snug">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => setClosed(true)} className="rounded-xl border-2 border-black bg-black px-4 py-1 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
              ACEPTAR TODO
            </button>
            <button onClick={() => setClosed(true)} className="rounded-xl border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase text-black hover:bg-slate-100">
              CONFIGURAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CookieConsentBannerNeoBrutalist;
