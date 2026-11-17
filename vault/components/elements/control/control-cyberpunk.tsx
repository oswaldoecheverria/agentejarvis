import React, { useState } from "react";
import { Power, Wifi, Bluetooth, Sun } from "lucide-react";

export function ControlCyberpunk() {
  const [wifiOn, setWifiOn] = useState(true);
  const [btOn, setBtOn] = useState(false);
  const [brightness, setBrightness] = useState(65);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-white">
            CONTROL_GRID // SYS
          </h3>
          <p className="text-[10px] text-pink-400">RED NEURONAL</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center border border-pink-500 bg-pink-500/20 text-pink-400">
          <Power className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <button
          onClick={() => setWifiOn(!wifiOn)}
          className={`flex flex-col items-center justify-center border p-3 transition-all ${
            wifiOn
              ? "border-cyan-400 bg-cyan-950/70 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
              : "border-cyan-900 bg-black/40 text-cyan-700"
          }`}
        >
          <Wifi className="h-5 w-5" />
          <span className="mt-1 font-bold">WI-FI</span>
          <span className="text-[9px]">{wifiOn ? "ONLINE" : "OFF"}</span>
        </button>

        <button
          onClick={() => setBtOn(!btOn)}
          className={`flex flex-col items-center justify-center border p-3 transition-all ${
            btOn
              ? "border-pink-500 bg-pink-950/70 text-pink-200 shadow-[0_0_12px_rgba(236,72,153,0.4)]"
              : "border-pink-950 bg-black/40 text-pink-700"
          }`}
        >
          <Bluetooth className="h-5 w-5" />
          <span className="mt-1 font-bold">BLUETOOTH</span>
          <span className="text-[9px]">{btOn ? "LOCKED" : "OFF"}</span>
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-[11px] text-cyan-400 mb-1.5">
          <span className="flex items-center gap-1">
            <Sun className="h-3 w-3" /> FLUJO DE FOTONES
          </span>
          <span className="text-white font-bold">{brightness}%</span>
        </div>
        <div className="relative h-2 w-full border border-cyan-500/40 bg-black p-0.5">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_8px_#ec4899] transition-all"
            style={{ width: `${brightness}%` }}
          />
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

export default ControlCyberpunk;
