import React, { useState, useEffect } from "react";
import { Terminal, Shield, Zap, AlertCircle } from "lucide-react";

export function CyberpunkTerminalHero() {
  const [logs, setLogs] = useState([
    "INITIALIZING NEURAL INTERFACE...",
    "CONNECTING TO PROTOCOL 0x7F9...",
    "BYPASSING QUANTUM FIREWALL: STATUS OK",
    "NODE ACTIVE: GRID OVERRIDE SECURED",
  ]);

  return (
    <div className="relative w-full max-w-lg overflow-hidden border-2 border-cyan-400 bg-[#050814] p-6 text-cyan-300 font-mono shadow-[0_0_30px_rgba(6,182,212,0.3)]">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-pink-500" />
      <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-pink-500" />
      <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-pink-500" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-pink-500" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/40 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-pink-400 animate-pulse" />
          <span className="text-xs font-black tracking-widest text-pink-400">
            CYBER_CORE // V.2099
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-ping" />
          <span className="text-cyan-400 font-bold">ONLINE</span>
        </div>
      </div>

      {/* Terminal Title */}
      <div className="my-5">
        <div className="text-[10px] text-pink-400 uppercase tracking-widest">
          ACCESO DE RED RESTRINGIDO
        </div>
        <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
          SISTEMA DE HIPER-CONEXIÓN NEURONAL
        </h2>
        <p className="mt-2 text-xs text-cyan-200/80 leading-relaxed">
          Incursión digital no destructiva en el tejido sintético de la red global.
        </p>
      </div>

      {/* Code Log stream */}
      <div className="rounded-lg border border-cyan-500/30 bg-black/60 p-3 space-y-1 text-[11px] shadow-inner">
        {logs.map((log, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-pink-400 font-bold">&gt;</span>
            <span className={i === logs.length - 1 ? "text-cyan-300 font-bold" : "text-cyan-500"}>
              {log}
            </span>
          </div>
        ))}
      </div>

      {/* Action CTA */}
      <div className="mt-5 flex items-center justify-between">
        <button className="flex items-center gap-2 border-2 border-pink-500 bg-pink-500/20 px-4 py-2 text-xs font-black uppercase text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:bg-pink-500 hover:text-black transition-all">
          <Zap className="h-3.5 w-3.5" /> EJECUTAR ENLACE
        </button>
        <span className="text-[10px] text-cyan-500">LATENCIA: 0.12ms</span>
      </div>
    </div>
  );
}
