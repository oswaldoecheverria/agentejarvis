import React from "react";
import { Sun, CloudRain, Wind, Droplets, MapPin } from "lucide-react";

export function WeatherNeoBrutalist() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm border-3 border-black bg-cyan-200 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-3">
        <div className="flex items-center gap-1.5 text-xs font-black uppercase">
          <MapPin className="h-4 w-4 text-black" />
          <span>San Francisco, CA</span>
        </div>
        <span className="border-2 border-black bg-yellow-400 px-2 py-0.5 text-[9px] font-black uppercase shadow-[1.5px_1.5px_0px_#000]">
          EN VIVO
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-5xl font-black text-black tracking-tight">23°C</div>
          <div className="text-xs font-black uppercase mt-1">Parcialmente Nublado</div>
          <div className="text-[10px] font-bold text-black/70">Sensación térmica: 25°C</div>
        </div>

        <div className="flex h-16 w-16 items-center justify-center border-3 border-black bg-yellow-300 shadow-[3px_3px_0px_#000]">
          <Sun className="h-9 w-9 text-black" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 border-2 border-black bg-white p-2.5 shadow-[2px_2px_0px_#000]">
          <Wind className="h-4 w-4 text-black" />
          <div>
            <div className="text-[9px] font-black uppercase text-black/60">Viento</div>
            <div className="text-xs font-black text-black">18 km/h</div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-2 border-black bg-white p-2.5 shadow-[2px_2px_0px_#000]">
          <Droplets className="h-4 w-4 text-black" />
          <div>
            <div className="text-[9px] font-black uppercase text-black/60">Humedad</div>
            <div className="text-xs font-black text-black">68%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherNeoBrutalist;
