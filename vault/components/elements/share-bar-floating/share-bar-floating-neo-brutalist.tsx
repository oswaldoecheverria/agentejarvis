import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Send } from "lucide-react";

export function ShareBarFloatingNeoBrutalist() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-2xl border-3 border-black bg-white p-2 shadow-[5px_5px_0px_#000] font-sans">
      <span className="text-[10px] font-black uppercase text-black ml-1 mr-1">COMPARTIR:</span>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[1px_1px_0px_#000]">
        <MessageCircle className="h-4 w-4 text-black" />
      </button>
      <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-cyan-300 shadow-[1px_1px_0px_#000]">
        <Send className="h-4 w-4 text-black" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-xl border-2 border-black bg-yellow-300 px-2.5 py-1.5 text-[11px] font-black shadow-[1px_1px_0px_#000]">
        {copied ? <Check className="h-3.5 w-3.5 text-black" /> : <Copy className="h-3.5 w-3.5 text-black" />}
        <span>{copied ? "COPIADO" : "ENLACE"}</span>
      </button>
    </div>
  );
}
export default ShareBarFloatingNeoBrutalist;
