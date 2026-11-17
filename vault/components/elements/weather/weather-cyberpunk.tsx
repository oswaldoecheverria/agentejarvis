import React from "react";
import { Sun, Wind, Droplets, Radio, MapPin } from "lucide-react";

export function WeatherCyberpunk() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2 text-[10px]">
        <div className="flex items-center gap-1.5 text-pink-400">
          <MapPin className="h-3.5 w-3.5" />
          <span>SECTOR_09 // SFO</span>
        </div>
        <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
      </div>

      <div className="my-5 flex items-center justify-between">
        <div>
          <div className="text-5xl font-black text-white tracking-tight drop-shadow-[0_0_10px_#06b6d4]">
            23°C
          </div>
          <div className="text-xs uppercase text-cyan-400 mt-1">ATMÓSFERA TÉRMICA</div>
          <div className="text-[10px] text-pink-400">SENSIBILIDAD: 25°C</div>
        </div>

        <div className="flex h-14 w-14 items-center justify-center border border-pink-500 bg-pink-500/20 text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.4)]">
          <Sun className="h-7 w-7" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-cyan-500/30 pt-3 text-[11px]">
        <div className="flex items-center gap-1.5">
          <Wind className="h-3.5 w-3.5 text-cyan-400" />
          <span>18 KM/H FLUX</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Droplets className="h-3.5 w-3.5 text-pink-400" />
          <span>68% HUMEDAD</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCyberpunk;
