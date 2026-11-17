import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function ControlMinimalist() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="w-full max-w-xs sm:max-w-sm border border-slate-900 bg-white p-6 font-sans text-slate-900 shadow-none">
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>CTRL // DOMÓTICA</span>
        <Power className="h-3.5 w-3.5 text-slate-900" />
      </div>

      <div className="mt-4">
        <h3 className="text-base font-bold uppercase tracking-tight text-slate-950">
          Control Inteligente
        </h3>
        <p className="font-mono text-[10px] text-slate-500">Hogar Conectado</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 font-mono">
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center border p-3 transition-colors ${
            wifiOn
              ? "border-slate-900 bg-slate-950 text-white"
              : "border-slate-300 bg-white text-slate-500 hover:bg-slate-50"
          }`}
        >
          <Wifi className="h-5 w-5" />
          <span className="mt-1 text-xs font-bold uppercase">Wi-Fi</span>
          <span className="text-[9px]">{wifiOn ? "[ACTIVO]" : "[OFF]"}</span>
        </button>

        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center border p-3 transition-colors ${
            btOn
              ? "border-slate-900 bg-slate-950 text-white"
              : "border-slate-300 bg-white text-slate-500 hover:bg-slate-50"
          }`}
        >
          <Bluetooth className="h-5 w-5" />
          <span className="mt-1 text-xs font-bold uppercase">Bluetooth</span>
          <span className="text-[9px]">{btOn ? "[ON]" : "[OFF]"}</span>
        </button>
      </div>

      <div className="mt-5 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-900 mb-2">
          <span className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5" /> ILUMINACIÓN
          </span>
          <span className="font-bold">{brightness}%</span>
        </div>
        <div className="relative h-2 w-full bg-slate-100 border border-slate-900">
          <div className="h-full bg-slate-900 transition-all" style={{ width: `${brightness}%` }} />
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full mt-2 opacity-0 cursor-pointer absolute -translate-y-4"
        />
      </div>
    </div>
  );
}

export default ControlMinimalist;
