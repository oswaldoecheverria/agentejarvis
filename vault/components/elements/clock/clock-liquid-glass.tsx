import React from "react";
import { Clock as ClockIcon, Bell } from "lucide-react";

export function ClockLiquidGlass() {
  return (
    <div className="relative flex w-full max-w-xs flex-col items-center overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] font-sans text-white">
      <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/25 blur-2xl" />

      <div className="flex w-full items-center justify-between border-b border-white/20 pb-2 mb-4 text-xs font-semibold text-white/80">
        <span>Liquid Chrono</span>
        <Bell className="h-4 w-4 text-cyan-300" />
      </div>

      {/* Liquid Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-inner">
        <div className="absolute top-2 h-2 w-1 rounded-full bg-white/70" />
        <div className="absolute bottom-2 h-2 w-1 rounded-full bg-white/70" />
        <div className="absolute left-2 h-1 w-2 rounded-full bg-white/70" />
        <div className="absolute right-2 h-1 w-2 rounded-full bg-white/70" />

        <div className="z-20 h-3.5 w-3.5 rounded-full border border-white bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-1.5 rounded-full bg-white shadow-sm"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-1 rounded-full bg-cyan-200 shadow-sm"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-0.5 rounded-full bg-pink-400"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital */}
      <div className="mt-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 backdrop-blur-xl shadow-inner">
        <ClockIcon className="h-3.5 w-3.5 text-cyan-300" />
        <span className="font-mono text-sm font-bold text-white">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockLiquidGlass;
