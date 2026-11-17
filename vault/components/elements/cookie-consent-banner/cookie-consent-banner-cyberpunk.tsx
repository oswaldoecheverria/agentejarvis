import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";

export function CookieConsentBannerCyberpunk() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Privacidad & LOPDP (Ecuador)</h4>
          <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => setClosed(true)} className="rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1 text-xs font-bold text-white shadow-sm hover:brightness-110">
              Aceptar Todo
            </button>
            <button onClick={() => setClosed(true)} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-100 hover:bg-white/20">
              Configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CookieConsentBannerCyberpunk;
