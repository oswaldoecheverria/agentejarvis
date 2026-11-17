import React, { useState } from "react";
import { Copy, Check, MessageCircle, Send } from "lucide-react";

export function ShareBarFloatingNeumorphic() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <span className="text-[10px] font-bold uppercase text-slate-500 ml-1">Compartir:</span>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-indigo-600">
        <MessageCircle className="h-4 w-4" />
      </button>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-indigo-600">
        <Send className="h-4 w-4" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-xs font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        <span>{copied ? "Copiado" : "Enlace"}</span>
      </button>
    </div>
  );
}
export default ShareBarFloatingNeumorphic;
