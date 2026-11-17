import React from "react";
import { Crosshair, Radio, Activity, Cpu } from "lucide-react";

export function CyberpunkStatusGrid() {
  const telemetry = [
    { label: "TARGET_LOCK", val: "SECTOR_09", stat: "100%", color: "border-cyan-400 text-cyan-300" },
    { label: "SHIELD_INTEGRITY", val: "7,840 GW", stat: "98.4%", color: "border-pink-500 text-pink-300" },
    { label: "REACTOR_SYNC", val: "4.8 THz", stat: "STABLE", color: "border-emerald-400 text-emerald-300" },
    { label: "HEX_COORDINATES", val: "34°N · 118°W", stat: "LOCKED", color: "border-amber-400 text-amber-300" },
  ];

  return (
    <div className="w-full max-w-lg border-2 border-cyan-500/80 bg-[#060a16] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Crosshair className="h-4 w-4 text-cyan-400 animate-spin" />
          <h3 className="text-xs font-black uppercase tracking-widest text-white">
            RETÍCULA DE TELEMETRÍA TÁCTICA
          </h3>
        </div>
        <span className="border border-pink-500 bg-pink-500/20 px-2 py-0.5 text-[9px] font-bold text-pink-300">
          SEC_LVL_5
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {telemetry.map((t, idx) => (
          <div
            key={idx}
            className={`border bg-black/40 p-3.5 transition-all hover:bg-cyan-950/30 ${t.color}`}
          >
            <div className="flex items-center justify-between text-[10px] opacity-70">
              <span>{t.label}</span>
              <span className="font-bold">{t.stat}</span>
            </div>
            <div className="mt-2 text-base font-black tracking-wider text-white">
              {t.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
