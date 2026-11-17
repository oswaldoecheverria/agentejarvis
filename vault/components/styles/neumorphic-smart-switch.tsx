import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function NeumorphicSmartSwitch() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-7 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      <div className="flex items-center justify-between border-b border-[#bec3c9]/40 pb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-700">Control Inteligente</h3>
          <p className="text-[11px] text-slate-500 font-medium">Hogar Conectado</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] text-slate-600 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <Power className="h-4 w-4" />
        </div>
      </div>

      {/* Switches Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {/* WiFi Toggle */}
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-200 ${
            wifiOn
              ? "bg-[#e0e5ec] text-emerald-600 shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]"
              : "bg-[#e0e5ec] text-slate-500 shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff]"
          }`}
        >
          <Wifi className="h-6 w-6" />
          <span className="mt-2 text-xs font-bold">Wi-Fi</span>
          <span className="text-[10px] font-semibold opacity-70">{wifiOn ? "Activo" : "Apagado"}</span>
        </button>

        {/* Bluetooth Toggle */}
        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-200 ${
            btOn
              ? "bg-[#e0e5ec] text-blue-600 shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]"
              : "bg-[#e0e5ec] text-slate-500 shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff]"
          }`}
        >
          <Bluetooth className="h-6 w-6" />
          <span className="mt-2 text-xs font-bold">Bluetooth</span>
          <span className="text-[10px] font-semibold opacity-70">{btOn ? "Conectado" : "Inactivo"}</span>
        </button>
      </div>

      {/* Slider */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
          <span className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5" /> Nivel de Iluminación
          </span>
          <span>{brightness}%</span>
        </div>
        <div className="relative h-6 w-full rounded-full bg-[#e0e5ec] p-1 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
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
