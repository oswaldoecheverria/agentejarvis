import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function StatLiquidGlass() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-extrabold uppercase text-cyan-900">
          <Activity className="h-3.5 w-3.5 text-cyan-600" />
          TELEMETRÍA LIQUID
        </span>
        <span className="flex items-center gap-0.5 text-xs font-extrabold text-cyan-700 bg-cyan-100/80 px-2 py-0.5 rounded-full border border-cyan-300">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="relative z-10 mt-4">
        <span className="text-4xl font-black tracking-tight text-slate-900">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-semibold text-slate-600">Rendimiento acrílico de borde</p>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/35 p-3.5 backdrop-blur-md shadow-inner">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className="w-full rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-500 shadow-sm"
              />
              <span className="text-[9px] font-extrabold text-slate-600">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-extrabold text-slate-700">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-cyan-700 hover:underline cursor-pointer">
          Inspeccionar <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatLiquidGlass;
