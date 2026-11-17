import React from "react";
import { Sun, CloudRain, Wind, Droplets, MapPin } from "lucide-react";

export function WeatherLiquidGlass() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] font-sans text-white">
      <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/25 blur-2xl" />

      <div className="flex items-center justify-between border-b border-white/15 pb-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
          <MapPin className="h-4 w-4 text-cyan-300" />
          <span>San Francisco, CA</span>
        </div>
        <span className="rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-md">
          Liquid Feed
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-5xl font-extralight text-white tracking-tight drop-shadow">
            23<span className="text-3xl font-light text-cyan-300">°C</span>
          </div>
          <div className="text-xs font-medium text-white/80 mt-1">Parcialmente Nublado</div>
          <div className="text-[10px] text-white/50">Sensación térmica: 25°C</div>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-inner backdrop-blur-xl">
          <Sun className="h-9 w-9 text-amber-300 animate-pulse" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md">
          <Wind className="h-4 w-4 text-cyan-300" />
          <div>
            <div className="text-[9px] uppercase font-bold text-white/60">Viento</div>
            <div className="text-xs font-bold text-white">18 km/h</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md">
          <Droplets className="h-4 w-4 text-sky-300" />
          <div>
            <div className="text-[9px] uppercase font-bold text-white/60">Humedad</div>
            <div className="text-xs font-bold text-white">68%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherLiquidGlass;
