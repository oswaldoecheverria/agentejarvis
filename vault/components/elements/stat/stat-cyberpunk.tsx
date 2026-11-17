import React from "react";
import { TrendingUp, Terminal, ArrowUpRight } from "lucide-react";

export function StatCyberpunk() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm border border-cyan-400 bg-black/90 p-6 font-mono text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2.5 text-xs">
        <span className="inline-flex items-center gap-1.5 font-black text-cyan-300">
          <Terminal className="h-3.5 w-3.5" />
          SYS_METRIC // TELEMETRY
        </span>
        <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-3xl font-black tracking-widest text-cyan-300">1,248 TPS</span>
        <p className="mt-0.5 text-xs text-cyan-400/70">FLUJO DE NÚCLEO CUÁNTICO</p>
      </div>
      <div className="mt-5 border border-cyan-400/40 bg-cyan-950/20 p-3.5">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: `${h}%` }} className="w-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              <span className="text-[9px] text-cyan-400/80">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-cyan-400/80">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-cyan-300 hover:underline cursor-pointer">
          DIAGNÓSTICO <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatCyberpunk;
