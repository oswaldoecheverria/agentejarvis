import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function StatNeumorphic() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase text-slate-600 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <Activity className="h-3.5 w-3.5 text-indigo-500" />
          TELEMETRÍA NEU
        </span>
        <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-bold tracking-tight text-slate-800">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-medium text-slate-500">Métricas de procesamiento extruido</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-3.5 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className="w-full rounded-t-md bg-indigo-500/80 shadow-[2px_2px_4px_#b8bec7]"
              />
              <span className="text-[9px] font-bold text-slate-500">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-600">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-indigo-600 hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatNeumorphic;
