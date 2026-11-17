import React from "react";
import { Activity, Flame, Zap, ShieldAlert } from "lucide-react";

export function CyberpunkSystemTelemetry() {
  return (
    <div className="w-full max-w-sm border-2 border-pink-500 bg-[#060814] p-5 font-mono text-pink-300 shadow-[0_0_25px_rgba(236,72,153,0.3)]">
      <div className="flex items-center justify-between border-b border-pink-500/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-cyan-400 animate-pulse" />
          <h4 className="text-xs font-black uppercase text-white tracking-wider">
            NÚCLEO TERMOMAGNÉTICO
          </h4>
        </div>
        <span className="text-[10px] text-pink-400 font-bold">ESTADO: VITAL</span>
      </div>

      <div className="space-y-3">
        {/* Core Temp Gauge */}
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-cyan-400 flex items-center gap-1">
              <Flame className="h-3 w-3" /> TEMPERATURA DEL PLASMA
            </span>
            <span className="text-white font-bold">1,840 °K</span>
          </div>
          <div className="h-2 w-full border border-cyan-500/40 bg-black p-0.5">
            <div className="h-full w-[72%] bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_8px_#ec4899]" />
          </div>
        </div>

        {/* Energy Flux */}
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-cyan-400 flex items-center gap-1">
              <Zap className="h-3 w-3" /> FLUJO CUÁNTICO
            </span>
            <span className="text-white font-bold">94.8%</span>
          </div>
          <div className="h-2 w-full border border-pink-500/40 bg-black p-0.5">
            <div className="h-full w-[94%] bg-pink-500 shadow-[0_0_8px_#ec4899]" />
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-pink-500/30 pt-3 flex items-center justify-between text-[10px]">
        <span className="text-cyan-400">DISIPADORES: 4/4 ACTIVOS</span>
        <span className="text-pink-400 font-bold">SIN RIESGO CRÍTICO</span>
      </div>
    </div>
  );
}
