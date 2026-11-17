"use client";

import React, { useState } from "react";
import { Power, Sun, Volume2, Shield } from "lucide-react";

export function NeumorphicControlCard() {
  const [active, setActive] = useState(true);
  const [volume, setVolume] = useState(65);

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e5e7eb] p-8 text-slate-700 shadow-[12px_12px_24px_#c5c7cb,-12px_-12px_24px_#ffffff]">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Soft UI / Neumorphism
          </span>
          <h4 className="text-lg font-extrabold text-slate-800">Control Táctil</h4>
        </div>

        {/* Soft Power Push Button */}
        <button
          onClick={() => setActive(!active)}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 ${
            active
              ? "bg-[#e5e7eb] text-emerald-600 shadow-[inset_4px_4px_8px_#c5c7cb,inset_-4px_-4px_8px_#ffffff]"
              : "bg-[#e5e7eb] text-slate-400 shadow-[6px_6px_12px_#c5c7cb,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#c5c7cb,inset_-4px_-4px_8px_#ffffff]"
          }`}
          title="Alternar Encendido"
        >
          <Power className="h-5 w-5" />
        </button>
      </div>

      {/* Tactile Slider Box */}
      <div className="mt-8 rounded-2xl bg-[#e5e7eb] p-5 shadow-[inset_4px_4px_8px_#c5c7cb,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-3">
          <span className="flex items-center gap-1.5">
            <Volume2 className="h-4 w-4" />
            <span>Intensidad Héctica</span>
          </span>
          <span className="text-emerald-600 font-mono">{volume}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full accent-emerald-500 cursor-pointer h-2 rounded-lg bg-[#d1d5db]"
        />
      </div>

      {/* Tactile Button Row */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {["MODO AMBIENTE", "FILTRO ACTIVO"].map((label, idx) => (
          <button
            key={idx}
            className="rounded-xl bg-[#e5e7eb] py-3 text-[11px] font-bold uppercase tracking-wider text-slate-600 shadow-[5px_5px_10px_#c5c7cb,-5px_-5px_10px_#ffffff] transition-all hover:text-slate-900 active:shadow-[inset_3px_3px_6px_#c5c7cb,inset_-3px_-3px_6px_#ffffff]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
