import React from "react";
import { CloudSun, Droplets, Wind } from "lucide-react";

export function ClaymorphicWeatherIsland() {
  return (
    <div className="w-full max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-amber-100 via-sky-100 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(14,165,233,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(14,165,233,0.15)] font-sans">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white bg-white/70 px-3 py-1 text-[10px] font-black uppercase text-sky-800 shadow-xs">
          Clima 3D
        </span>
        <span className="text-xs font-bold text-slate-600">Miami, FL</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-5xl font-black text-slate-800 tracking-tight">28°</div>
          <div className="text-xs font-bold text-sky-900/70 mt-1">Cielo Despejado</div>
        </div>

        {/* Puffy 3D Sun Cloud Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-[2.5rem] border-3 border-white bg-gradient-to-tr from-amber-300 via-yellow-200 to-sky-300 shadow-[0_12px_24px_rgba(245,158,11,0.35),inset_0_4px_6px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.1)]">
          <CloudSun className="h-10 w-10 text-amber-900" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/60 p-2.5 shadow-xs">
          <Droplets className="h-4 w-4 text-sky-600" />
          <span className="text-xs font-bold text-slate-700">42% Humedad</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-white bg-white/60 p-2.5 shadow-xs">
          <Wind className="h-4 w-4 text-sky-600" />
          <span className="text-xs font-bold text-slate-700">12 km/h</span>
        </div>
      </div>
    </div>
  );
}
