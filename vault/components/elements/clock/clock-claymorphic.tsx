import React from "react";
import { Clock as ClockIcon, Bell } from "lucide-react";

export function ClockClaymorphic() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center rounded-[3rem] border-3 border-white bg-gradient-to-br from-indigo-100 via-sky-50 to-purple-100 p-6 shadow-[0_25px_50px_-12px_rgba(99,102,241,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(99,102,241,0.15)] font-sans text-slate-800">
      <div className="flex w-full items-center justify-between border-b border-indigo-200/60 pb-2 mb-4 text-xs font-black text-indigo-950 uppercase">
        <span>Hora 3D</span>
        <Bell className="h-4 w-4 text-indigo-600" />
      </div>

      {/* 3D Inflated Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-3 border-white bg-white/80 shadow-[0_10px_20px_rgba(99,102,241,0.2),inset_0_3px_5px_rgba(255,255,255,0.9)]">
        <div className="absolute top-2 h-2.5 w-1.5 rounded-full bg-indigo-300" />
        <div className="absolute bottom-2 h-2.5 w-1.5 rounded-full bg-indigo-300" />
        <div className="absolute left-2 h-1.5 w-2.5 rounded-full bg-indigo-300" />
        <div className="absolute right-2 h-1.5 w-2.5 rounded-full bg-indigo-300" />

        <div className="z-20 h-4 w-4 rounded-full border border-white bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-md" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-2 rounded-full bg-slate-700 shadow-xs"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-1.5 rounded-full bg-indigo-500 shadow-xs"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-0.5 rounded-full bg-pink-500"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital Capsule */}
      <div className="mt-5 flex items-center gap-2 rounded-full border-2 border-white bg-white/90 px-4 py-1.5 shadow-xs">
        <ClockIcon className="h-4 w-4 text-indigo-600" />
        <span className="font-mono text-sm font-black text-slate-800">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockClaymorphic;
