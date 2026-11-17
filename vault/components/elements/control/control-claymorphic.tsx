import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function ControlClaymorphic() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-indigo-100 via-sky-50 to-purple-100 p-6 shadow-[0_25px_50px_-12px_rgba(99,102,241,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(99,102,241,0.15)] font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-indigo-200/60 pb-4">
        <div>
          <h3 className="text-sm font-black text-slate-800">Control Inteligente</h3>
          <p className="text-[11px] font-bold text-indigo-900/60">Hogar Conectado</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-white bg-white/80 text-indigo-700 shadow-xs">
          <Power className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-white p-3.5 transition-all ${
            wifiOn
              ? "bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-[0_8px_16px_rgba(59,130,246,0.35),inset_0_2px_3px_rgba(255,255,255,0.7)]"
              : "bg-white/70 text-slate-500 shadow-xs"
          }`}
        >
          <Wifi className="h-6 w-6" />
          <span className="mt-1 text-xs font-black uppercase">Wi-Fi</span>
          <span className="text-[10px] font-bold opacity-80">{wifiOn ? "Activo" : "Apagado"}</span>
        </button>

        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center rounded-2xl border-2 border-white p-3.5 transition-all ${
            btOn
              ? "bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-[0_8px_16px_rgba(99,102,241,0.35),inset_0_2px_3px_rgba(255,255,255,0.7)]"
              : "bg-white/70 text-slate-500 shadow-xs"
          }`}
        >
          <Bluetooth className="h-6 w-6" />
          <span className="mt-1 text-xs font-black uppercase">Bluetooth</span>
          <span className="text-[10px] font-bold opacity-80">{btOn ? "Conectado" : "Inactivo"}</span>
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
          <span className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5 text-amber-500" /> Iluminación
          </span>
          <span>{brightness}%</span>
        </div>
        <div className="relative h-6 w-full rounded-full border-2 border-white bg-white/70 p-1 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 shadow-xs transition-all"
            style={{ width: `${brightness}%` }}
          />
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full mt-2 opacity-0 cursor-pointer absolute -translate-y-6"
        />
      </div>
    </div>
  );
}

export default ControlClaymorphic;
