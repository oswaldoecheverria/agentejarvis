import React from "react";
import { MessageCircle, Send } from "lucide-react";

export function WhatsappShareModalNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4 text-emerald-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Enviar por WhatsApp</h3>
      </div>
      <div className="mb-3.5">
        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Teléfono</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-2xl bg-[#e0e5ec] px-3.5 py-2 text-xs font-bold text-slate-800 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] focus:outline-none"
        />
      </div>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 text-xs text-slate-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-emerald-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        <Send className="h-3.5 w-3.5" />
        <span>Enviar Mensaje</span>
      </button>
    </div>
  );
}
export default WhatsappShareModalNeumorphic;
