import React, { useState } from "react";
import { Copy, Check, MessageCircle, Send } from "lucide-react";

export function ShareBarFloatingClaymorphic() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-md text-white font-sans">
      <span className="text-[10px] font-semibold text-emerald-200 ml-2">Compartir:</span>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
        <MessageCircle className="h-3.5 w-3.5" />
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-200 hover:bg-white/20">
        <Send className="h-3.5 w-3.5" />
      </button>
      <button onClick={copy} className="flex items-center gap-1 rounded-full border border-white/30 bg-emerald-500/80 px-3 py-1 text-xs font-bold text-white shadow-sm">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        <span>{copied ? "Copiado" : "Enlace"}</span>
      </button>
    </div>
  );
}
export default ShareBarFloatingClaymorphic;
