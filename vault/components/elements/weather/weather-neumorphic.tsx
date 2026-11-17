import React from "react";
import { Sun, CloudRain, Wind, Droplets, MapPin } from "lucide-react";

export function WeatherNeumorphic() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-[#bec3c9]/40 pb-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
          <MapPin className="h-4 w-4 text-emerald-600" />
          <span>San Francisco, CA</span>
        </div>
        <span className="rounded-full px-2.5 py-0.5 text-[9px] font-bold text-slate-500 shadow-[inset_1.5px_1.5px_3px_#bec3c9,inset_-1.5px_-1.5px_3px_#ffffff]">
          En vivo
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-5xl font-black text-slate-800 tracking-tight">23°C</div>
          <div className="text-xs font-semibold text-slate-600 mt-1">Parcialmente Nublado</div>
          <div className="text-[10px] text-slate-400">Sensación térmica: 25°C</div>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <Sun className="h-9 w-9 text-amber-500" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
          <Wind className="h-4 w-4 text-slate-500" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400">Viento</div>
            <div className="text-xs font-bold text-slate-700">18 km/h</div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
          <Droplets className="h-4 w-4 text-emerald-600" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400">Humedad</div>
            <div className="text-xs font-bold text-slate-700">68%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherNeumorphic;
