import React from "react";
import { Zap, AlertTriangle, Flame, ShieldAlert, Sparkles, Terminal } from "lucide-react";

export function NeoBrutalistBadgeStack() {
  return (
    <div className="w-full max-w-md border-3 border-black bg-amber-100 p-6 shadow-[6px_6px_0px_#000] font-sans">
      <div className="mb-4 border-b-2 border-black pb-2">
        <h3 className="text-sm font-black uppercase tracking-wider text-black">
          Colección de Badges & Stickers
        </h3>
        <p className="text-[11px] font-bold text-black/60">Etiquetas gráficas de alto impacto visual</p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <div className="flex items-center gap-1.5 border-2 border-black bg-yellow-400 px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform">
          <Zap className="h-3.5 w-3.5 fill-black" />
          <span>ULTRA RÁPIDO</span>
        </div>

        <div className="flex items-center gap-1.5 border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform rotate-1">
          <Flame className="h-3.5 w-3.5 fill-black" />
          <span>TRENDING #1</span>
        </div>

        <div className="flex items-center gap-1.5 border-2 border-black bg-lime-400 px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform -rotate-1">
          <Sparkles className="h-3.5 w-3.5 fill-black" />
          <span>NUEVO RELEASE</span>
        </div>

        <div className="flex items-center gap-1.5 border-2 border-black bg-cyan-300 px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform">
          <Terminal className="h-3.5 w-3.5" />
          <span>CLI V2.0</span>
        </div>

        <div className="flex items-center gap-1.5 border-2 border-black bg-red-400 px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform rotate-2">
          <AlertTriangle className="h-3.5 w-3.5 fill-black" />
          <span>HIGH IMPACT</span>
        </div>

        <div className="flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 transition-transform">
          <span>DESCUENTO 40%</span>
        </div>
      </div>
    </div>
  );
}
