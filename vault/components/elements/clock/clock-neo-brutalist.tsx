import React from "react";
import { Clock as ClockIcon, Bell } from "lucide-react";

export function ClockNeoBrutalist() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center border-3 border-black bg-lime-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex w-full items-center justify-between border-b-2 border-black pb-2 mb-4 font-black text-xs uppercase">
        <span>HORA ESTÁNDAR</span>
        <Bell className="h-4 w-4 text-black" />
      </div>

      {/* Brutalist Clock Dial */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-3 border-black bg-white shadow-[4px_4px_0px_#000]">
        <div className="absolute top-2 h-2.5 w-1.5 bg-black" />
        <div className="absolute bottom-2 h-2.5 w-1.5 bg-black" />
        <div className="absolute left-2 h-1.5 w-2.5 bg-black" />
        <div className="absolute right-2 h-1.5 w-2.5 bg-black" />

        <div className="z-20 h-4 w-4 rounded-full border-2 border-black bg-pink-400" />

        {/* Hands */}
        <div
          className="absolute z-10 h-11 w-2 border border-black bg-black"
          style={{ transform: "rotate(45deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-16 w-1.5 border border-black bg-black"
          style={{ transform: "rotate(160deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
        <div
          className="absolute z-10 h-18 w-0.5 bg-red-600"
          style={{ transform: "rotate(270deg) translateY(-50%)", transformOrigin: "bottom center" }}
        />
      </div>

      {/* Digital Capsule */}
      <div className="mt-5 flex items-center gap-2 border-2 border-black bg-yellow-300 px-4 py-1.5 shadow-[2px_2px_0px_#000]">
        <ClockIcon className="h-4 w-4 text-black" />
        <span className="font-mono text-sm font-black text-black">10:24:30 AM</span>
      </div>
    </div>
  );
}

export default ClockNeoBrutalist;
