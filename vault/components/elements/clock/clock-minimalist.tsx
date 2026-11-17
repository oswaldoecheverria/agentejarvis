import React from "react";
import { Clock as ClockIcon } from "lucide-react";

export function ClockMinimalist() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center border border-slate-900 bg-white p-6 font-mono text-slate-900 shadow-none">
      <div className="flex w-full items-center justify-between border-b border-slate-900 pb-2 mb-4 text-[10px] uppercase tracking-widest text-slate-500">
        <span>CHRONO // 01</span>
        <span>UTC-5</span>
      </div>

      {/* Swiss Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-slate-900 bg-slate-50">
        <div className="absolute top-1.5 h-2 w-0.5 bg-slate-900" />
        <div className="absolute bottom-1.5 h-2 w-0.5 bg-slate-900" />
        <div className="absolute left-1.5 h-0.5 w-2 bg-slate-900" />
        <div className="absolute right-1.5 h-0.5 w-2 bg-slate-900" />

        <div className="z-20 h-2.5 w-2.5 rounded-full bg-slate-900" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-1 bg-slate-900"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-0.5 bg-slate-900"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-[1px] bg-red-600"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital */}
      <div className="mt-5 flex items-center gap-2 border border-slate-900 bg-white px-4 py-1.5">
        <ClockIcon className="h-3.5 w-3.5 text-slate-900" />
        <span className="text-xs font-bold tracking-wider">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockMinimalist;
