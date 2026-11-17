import React from "react";
import { AlertOctagon, Zap, ShieldAlert, Radio } from "lucide-react";

export function CyberpunkGlitchBadge() {
  return (
    <div className="w-full max-w-sm border-2 border-pink-500 bg-[#070914] p-5 font-mono text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center border-2 border-pink-500 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          <AlertOctagon className="h-6 w-6 text-pink-400 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
              ALERTA DE ANOMALÍA
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-ping" />
          </div>
          <h4 className="text-sm font-black text-white uppercase tracking-tight">
            BRECHA EN SECTOR NEÓN
          </h4>
        </div>
      </div>

      <div className="mt-4 border-t border-pink-500/30 pt-3">
        <p className="text-[11px] text-pink-200/80 leading-relaxed">
          Sobrecarga de flujo de plasma detectada en el sub-nodo 09. Protocolo de contingencia activado.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="border border-cyan-400 bg-cyan-950/60 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
          CÓDIGO: 0xEE71
        </span>
        <button className="border border-pink-500 bg-pink-500 px-3 py-1 text-xs font-black text-black uppercase hover:bg-white transition-colors">
          AISLAR NODO
        </button>
      </div>
    </div>
  );
}
