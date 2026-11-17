import React from "react";
import { Terminal, Shield, Power, Radio, Sliders } from "lucide-react";

export function CyberpunkActionStrip() {
  return (
    <div className="flex w-full max-w-md items-center justify-between border-2 border-cyan-400 bg-[#050714] p-3 font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center border border-pink-500 bg-pink-500/20 text-pink-400">
          <Power className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">MODO TÁCTICO</div>
          <div className="text-xs font-black text-white">INTERFAZ HUD</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border border-cyan-400 bg-cyan-950/60 px-3 py-1.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-400 hover:text-black transition-colors">
          <Sliders className="h-3 w-3" /> AJUSTAR
        </button>
        <button className="flex items-center gap-1 border border-pink-500 bg-pink-500 px-3 py-1.5 text-[11px] font-black text-black hover:bg-white transition-colors">
          <Terminal className="h-3 w-3" /> CONSOLA
        </button>
      </div>
    </div>
  );
}
