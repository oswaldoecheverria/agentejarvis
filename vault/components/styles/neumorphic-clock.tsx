import React from "react";
import { Clock as ClockIcon, Bell } from "lucide-react";

export function NeumorphicClock() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center rounded-[2.5rem] bg-[#e0e5ec] p-8 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      <div className="flex w-full items-center justify-between text-slate-500 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider">Hora Estándar</span>
        <Bell className="h-4 w-4 text-slate-500" />
      </div>

      {/* Indented Clock Dial */}
      <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff]">
        {/* Hour markers */}
        <div className="absolute top-2.5 h-2 w-1 rounded-full bg-slate-400" />
        <div className="absolute bottom-2.5 h-2 w-1 rounded-full bg-slate-400" />
        <div className="absolute left-2.5 h-1 w-2 rounded-full bg-slate-400" />
        <div className="absolute right-2.5 h-1 w-2 rounded-full bg-slate-400" />

        {/* Center Pivot Pin with extruded shadow */}
        <div className="z-20 h-4 w-4 rounded-full bg-emerald-500 shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff]" />

        {/* Hour Hand */}
        <div
          className="absolute z-10 h-12 w-1.5 rounded-full bg-slate-700 shadow-sm"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />

        {/* Minute Hand */}
        <div
          className="absolute z-10 h-18 w-1 rounded-full bg-slate-500 shadow-sm"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />

        {/* Second Hand */}
        <div
          className="absolute z-10 h-20 w-0.5 rounded-full bg-emerald-500 shadow-sm"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital readout capsule */}
      <div className="mt-6 flex items-center gap-2 rounded-full px-5 py-2 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
        <ClockIcon className="h-4 w-4 text-emerald-600" />
        <span className="font-mono text-base font-bold text-slate-700">10:24:30 AM</span>
      </div>
    </div>
  );
}
