import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function ControlGlassmorphic() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <div>
          <h3 className="text-sm font-bold text-white">Control Inteligente</h3>
          <p className="text-[11px] text-emerald-100/70">Hogar Conectado</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-emerald-200 backdrop-blur-md shadow-inner">
          <Power className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 backdrop-blur-md transition-all ${
            wifiOn
              ? "border-emerald-300/60 bg-emerald-500/30 text-emerald-100 shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
              : "border-white/10 bg-white/5 text-white/50"
          }`}
        >
          <Wifi className="h-6 w-6" />
          <span className="mt-1 text-xs font-bold">Wi-Fi</span>
          <span className="text-[10px] opacity-70">{wifiOn ? "Activo" : "Apagado"}</span>
        </button>

        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 backdrop-blur-md transition-all ${
            btOn
              ? "border-cyan-300/60 bg-cyan-500/30 text-cyan-100 shadow-[0_4px_12px_rgba(6,182,212,0.3)]"
              : "border-white/10 bg-white/5 text-white/50"
          }`}
        >
          <Bluetooth className="h-6 w-6" />
          <span className="mt-1 text-xs font-bold">Bluetooth</span>
          <span className="text-[10px] opacity-70">{btOn ? "Conectado" : "Inactivo"}</span>
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-semibold text-emerald-100/90 mb-2">
          <span className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5 text-amber-300" /> Iluminación
          </span>
          <span>{brightness}%</span>
        </div>
        <div className="relative h-5 w-full rounded-full border border-white/20 bg-black/20 p-1 backdrop-blur-md">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-sm transition-all"
            style={{ width: `${brightness}%` }}
          />
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full mt-2 opacity-0 cursor-pointer absolute -translate-y-5"
        />
      </div>
    </div>
  );
}

export default ControlGlassmorphic;
