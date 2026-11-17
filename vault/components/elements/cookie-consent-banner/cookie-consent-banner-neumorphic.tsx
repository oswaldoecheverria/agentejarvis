import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";

export function CookieConsentBannerNeumorphic() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          <ShieldAlert className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Privacidad & LOPDP (Ecuador)</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Protegemos tus datos clínicos con cifrado avanzado. Usamos cookies técnicas esenciales para tu sesión médica.
          </p>
          <div className="mt-3.5 flex items-center gap-3">
            <button onClick={() => setClosed(true)} className="rounded-xl bg-[#e0e5ec] px-4 py-1.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
              Aceptar Todo
            </button>
            <button onClick={() => setClosed(true)} className="rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900">
              Configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CookieConsentBannerNeumorphic;
