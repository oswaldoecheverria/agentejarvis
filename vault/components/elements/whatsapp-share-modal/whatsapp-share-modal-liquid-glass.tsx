import React from "react";
import { MessageCircle, Send } from "lucide-react";

export function WhatsappShareModalLiquidGlass() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Enviar por WhatsApp</h3>
      </div>
      <div className="mb-3">
        <label className="block text-[10px] font-semibold text-emerald-200/80 uppercase mb-1">Teléfono</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white focus:outline-none"
        />
      </div>
      <div className="rounded-xl border border-white/10 bg-white/10 p-2.5 text-xs text-emerald-100/80 mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110">
        <Send className="h-3.5 w-3.5" />
        <span>Enviar Mensaje</span>
      </button>
    </div>
  );
}
export default WhatsappShareModalLiquidGlass;
