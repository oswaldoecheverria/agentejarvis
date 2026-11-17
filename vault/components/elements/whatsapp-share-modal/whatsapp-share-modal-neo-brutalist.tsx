import React from "react";
import { MessageCircle, Send, Phone } from "lucide-react";

export function WhatsappShareModalNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <MessageCircle className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">ENVIAR RECETA POR WHATSAPP</h3>
      </div>
      <div className="mb-3">
        <label className="block text-[10px] font-black uppercase mb-1">NÚMERO DE TELÉFONO</label>
        <input
          type="text"
          defaultValue="+593 99 123 4567"
          className="w-full rounded-xl border-2 border-black bg-white px-3 py-1.5 text-xs font-bold text-black"
        />
      </div>
      <div className="rounded-xl border-2 border-black bg-white p-2.5 text-[11px] font-bold text-slate-800 mb-4">
        "Hola Carlos, adjunto tu receta médica firmada con validez nacional: https://erikasalud.com/r/089"
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black">
        <Send className="h-3.5 w-3.5" />
        <span>ENVIAR MENSAJE</span>
      </button>
    </div>
  );
}
export default WhatsappShareModalNeoBrutalist;
