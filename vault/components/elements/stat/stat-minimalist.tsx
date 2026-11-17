import React from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function StatMinimalist() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">// TELEMETRY // 24H</span>
        <span className="font-mono text-xs font-bold text-neutral-900 flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="font-mono text-3xl font-bold tracking-tight text-neutral-900">1,248 TPS</span>
        <p className="mt-0.5 text-xs text-neutral-500">Volumen transaccional continuo</p>
      </div>
      <div className="mt-5 border border-neutral-200 p-3.5">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: `${h}%` }} className="w-full bg-neutral-900" />
              <span className="font-mono text-[9px] text-neutral-500">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between font-mono text-xs text-neutral-600">
        <span>LATENCY: 12ms</span>
        <span className="flex items-center gap-1 text-neutral-900 hover:underline cursor-pointer">
          Logs <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatMinimalist;
