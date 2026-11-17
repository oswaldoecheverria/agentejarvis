import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function StatClaymorphic() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-extrabold uppercase text-purple-900 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]">
          <Activity className="h-3.5 w-3.5 text-purple-700" />
          MÉTRICAS 3D
        </span>
        <span className="text-xs font-black text-purple-900 flex items-center gap-0.5 bg-white/50 px-2 py-0.5 rounded-full">
          <TrendingUp className="h-3 w-3 text-emerald-600" /> +18.4%
        </span>
      </div>
      <div className="mt-4">
        <span className="text-4xl font-black tracking-tight text-purple-950">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-bold text-purple-800/80">Estadísticas en arcilla inflada</p>
      </div>
      <div className="mt-5 rounded-2xl border border-white/60 bg-white/50 p-3.5 shadow-[0_6px_14px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className="w-full rounded-t-lg bg-gradient-to-t from-purple-500 to-indigo-500 shadow-sm"
              />
              <span className="text-[9px] font-black text-purple-800">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black text-purple-950">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-purple-700 hover:underline cursor-pointer">
          Detalles <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatClaymorphic;
