import React from "react";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

export function StatGlassmorphic() {
  const bars = [35, 60, 45, 80, 65, 90, 100];
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
          <Activity className="h-3.5 w-3.5 text-emerald-300" />
          TELEMETRÍA CLÍNICA
        </span>
        <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-300/30">
          <TrendingUp className="h-3 w-3" /> +18.4%
        </span>
      </div>
      <div className="relative z-10 mt-4">
        <span className="text-4xl font-extrabold tracking-tight text-white drop-shadow">1,248 TPS</span>
        <p className="mt-0.5 text-xs font-medium text-emerald-100/70">Volumen transaccional continuo</p>
      </div>
      {/* Sparkline Glass */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className="w-full rounded-t-md bg-gradient-to-t from-emerald-500/50 to-teal-300/90 shadow-sm"
              />
              <span className="text-[9px] font-semibold text-emerald-200/80">{['L','M','X','J','V','S','D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-medium text-emerald-200/80">
        <span>LATENCIA: 12ms</span>
        <span className="flex items-center gap-1 text-white hover:underline cursor-pointer">
          Métricas <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
export default StatGlassmorphic;
