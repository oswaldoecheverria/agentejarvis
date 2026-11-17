import React from "react";
import { CloudRain, Wind, Droplets, Sun, MapPin } from "lucide-react";

export function GlassWeatherWidget() {
  const hourly = [
    { time: "14:00", temp: "22°", pop: "10%" },
    { time: "15:00", temp: "24°", pop: "20%" },
    { time: "16:00", temp: "23°", pop: "60%" },
    { time: "17:00", temp: "21°", pop: "80%" },
    { time: "18:00", temp: "19°", pop: "40%" },
  ];

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-b from-sky-400/20 via-indigo-600/15 to-slate-900/40 p-6 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(15,23,42,0.4)]">
      {/* Refraction glows */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-white/80 text-xs font-semibold">
          <MapPin className="h-3.5 w-3.5 text-amber-300" />
          <span>San Francisco, CA</span>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
          En vivo
        </span>
      </div>

      {/* Main Temperature Display */}
      <div className="relative z-10 mt-6 flex items-center justify-between">
        <div>
          <div className="text-6xl font-extralight tracking-tighter text-white drop-shadow-md">
            23<span className="text-3xl font-light text-amber-300">°C</span>
          </div>
          <div className="mt-1 text-xs font-medium text-white/80">Parcialmente Nublado</div>
          <div className="text-[11px] text-white/50">Sensación térmica: 25°C</div>
        </div>

        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/10 shadow-inner backdrop-blur-xl">
          <Sun className="h-10 w-10 text-amber-300 animate-pulse" />
          <CloudRain className="absolute bottom-2 right-2 h-6 w-6 text-sky-200 drop-shadow" />
        </div>
      </div>

      {/* Mini Stats Bar */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-md">
          <Wind className="h-4 w-4 text-sky-300" />
          <div>
            <div className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">Viento</div>
            <div className="text-xs font-bold text-white">18 km/h SO</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-md">
          <Droplets className="h-4 w-4 text-cyan-300" />
          <div>
            <div className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">Humedad</div>
            <div className="text-xs font-bold text-white">68%</div>
          </div>
        </div>
      </div>

      {/* Hourly forecast carousel/pills */}
      <div className="relative z-10 mt-5 border-t border-white/15 pt-4">
        <div className="flex items-center justify-between gap-1.5">
          {hourly.map((h, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-xl p-2 text-center transition-all ${
                i === 0
                  ? "border border-white/30 bg-white/20 shadow-xs"
                  : "bg-white/[0.04] hover:bg-white/10"
              }`}
            >
              <span className="text-[10px] text-white/70 font-medium">{h.time}</span>
              <span className="my-1 text-xs font-bold text-white">{h.temp}</span>
              <span className="text-[9px] text-sky-300 font-semibold">{h.pop}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
