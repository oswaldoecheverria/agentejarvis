import React from "react";
import { Clock as ClockIcon, Radio } from "lucide-react";

export function ClockCyberpunk() {
  return (
    <div className="relative flex w-full max-w-xs flex-col items-center border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex w-full items-center justify-between border-b border-cyan-500/30 pb-2 mb-4 text-[10px] text-pink-400 uppercase tracking-widest">
        <span>CHRONO_CORE</span>
        <Radio className="h-3.5 w-3.5 animate-pulse" />
      </div>

      {/* Cyber Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-cyan-500/50 bg-black/60 shadow-[inset_0_0_15px_rgba(6,182,212,0.3)]">
        <div className="absolute top-1.5 h-2.5 w-1 bg-cyan-400" />
        <div className="absolute bottom-1.5 h-2.5 w-1 bg-cyan-400" />
        <div className="absolute left-1.5 h-1 w-2.5 bg-cyan-400" />
        <div className="absolute right-1.5 h-1 w-2.5 bg-cyan-400" />

        <div className="z-20 h-3 w-3 rounded-full border border-pink-500 bg-pink-500 shadow-[0_0_8px_#ec4899]" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-1 bg-cyan-300 shadow-[0_0_6px_#06b6d4]"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-0.5 bg-cyan-400 shadow-[0_0_6px_#06b6d4]"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-0.5 bg-pink-500 shadow-[0_0_8px_#ec4899]"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital */}
      <div className="mt-5 flex items-center gap-2 border border-pink-500 bg-pink-950/40 px-4 py-1.5 text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.3)]">
        <ClockIcon className="h-3.5 w-3.5" />
        <span className="text-xs font-bold tracking-widest text-white">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockCyberpunk;
