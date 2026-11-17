import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function StatNeoBrutalist() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-pink-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
          <Activity className="h-3.5 w-3.5" />
          TELEMETRÍA 24H
        </span>
        <span className="flex items-center gap-0.5 font-mono text-xs font-black text-emerald-900 bg-lime-300 px-2 py-0.5 rounded-full border-2 border-black">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-black tracking-tight">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-bold text-black/80">Rendimiento de transacciones en vivo</p>
      </div>
      
      {/* Sparkline de barras sólidas */}
      <div className="mt-5 rounded-2xl border-3 border-black bg-white p-3.5 shadow-[4px_4px_0px_#000]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className="w-full rounded-t-md border-2 border-black bg-lime-400"
              />
              <span className="text-[9px] font-black">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-black hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatNeoBrutalist;
