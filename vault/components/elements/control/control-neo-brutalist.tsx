import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function ControlNeoBrutalist() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="w-full max-w-xs sm:max-w-sm border-3 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-4">
        <div>
          <h3 className="text-sm font-black uppercase text-black">Control Inteligente</h3>
          <p className="text-[11px] font-bold text-black/70">Hogar Conectado</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">
          <Power className="h-4 w-4 text-black" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center border-2 border-black p-3.5 transition-all ${
            wifiOn
              ? "bg-lime-300 shadow-[3px_3px_0px_#000]"
              : "bg-white shadow-[2px_2px_0px_#000] opacity-60"
          }`}
        >
          <Wifi className="h-6 w-6 text-black" />
          <span className="mt-1 text-xs font-black uppercase">Wi-Fi</span>
          <span className="text-[10px] font-bold">{wifiOn ? "ACTIVO" : "APAGADO"}</span>
        </button>

        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center border-2 border-black p-3.5 transition-all ${
            btOn
              ? "bg-cyan-300 shadow-[3px_3px_0px_#000]"
              : "bg-white shadow-[2px_2px_0px_#000] opacity-60"
          }`}
        >
          <Bluetooth className="h-6 w-6 text-black" />
          <span className="mt-1 text-xs font-black uppercase">Bluetooth</span>
          <span className="text-[10px] font-bold">{btOn ? "CONECTADO" : "INACTIVO"}</span>
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-black uppercase text-black mb-2">
          <span className="flex items-center gap-1">
            <Sun className="h-3.5 w-3.5" /> ILUMINACIÓN
          </span>
          <span>{brightness}%</span>
        </div>
        <div className="relative h-6 w-full border-2 border-black bg-white p-0.5 shadow-[2px_2px_0px_#000]">
          <div
            className="h-full bg-pink-400 border-r-2 border-black transition-all"
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

export default ControlNeoBrutalist;
