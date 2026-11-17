import React from "react";
import { Clock as ClockIcon, Bell } from "lucide-react";

export function ClockGlassmorphic() {
  return (
    <div className="relative flex w-full max-w-xs flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="flex w-full items-center justify-between border-b border-white/15 pb-2 mb-4 text-xs font-semibold text-emerald-100/80">
        <span>Hora Estándar</span>
        <Bell className="h-4 w-4 text-emerald-300" />
      </div>

      {/* Frosted Clock Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-inner">
        <div className="absolute top-2 h-2 w-1 rounded-full bg-emerald-200" />
        <div className="absolute bottom-2 h-2 w-1 rounded-full bg-emerald-200" />
        <div className="absolute left-2 h-1 w-2 rounded-full bg-emerald-200" />
        <div className="absolute right-2 h-1 w-2 rounded-full bg-emerald-200" />

        <div className="z-20 h-4 w-4 rounded-full border border-white/40 bg-emerald-400 shadow-md" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-1.5 rounded-full bg-white shadow-sm"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-1 rounded-full bg-emerald-100 shadow-sm"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-0.5 rounded-full bg-amber-300 shadow-sm"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital Capsule */}
      <div className="mt-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-inner">
        <ClockIcon className="h-4 w-4 text-emerald-300" />
        <span className="font-mono text-sm font-bold text-white">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockGlassmorphic;
