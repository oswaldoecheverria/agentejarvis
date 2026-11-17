import React from "react";
import { Sun, Wind, Droplets, MapPin } from "lucide-react";

export function WeatherMinimalist() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm border border-slate-900 bg-white p-6 font-mono text-slate-900 shadow-none">
      <div className="flex items-center justify-between border-b border-slate-900 pb-2 text-[10px] uppercase tracking-widest text-slate-500">
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> SFO // 37°N
        </span>
        <span className="font-bold text-slate-950">[LIVE]</span>
      </div>

      <div className="my-5 flex items-baseline justify-between">
        <div>
          <div className="text-5xl font-bold tracking-tight text-slate-950">23°C</div>
          <div className="text-xs uppercase text-slate-700 mt-1">Parcialmente Nublado</div>
          <div className="text-[10px] text-slate-400">APARENTE: 25°C</div>
        </div>

        <div className="flex h-12 w-12 items-center justify-center border border-slate-900 bg-slate-100">
          <Sun className="h-6 w-6 text-slate-900" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-slate-900 pt-3 text-xs">
        <div className="flex items-center gap-2">
          <Wind className="h-3.5 w-3.5 text-slate-500" />
          <span>18 KM/H SO</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="h-3.5 w-3.5 text-slate-500" />
          <span>68% HUMEDAD</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherMinimalist;
