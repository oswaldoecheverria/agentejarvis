import React, { useState } from "react";
import { Moon, Sun, Bell, Volume2 } from "lucide-react";

export function ClaymorphicTogglePill() {
  const [active, setActive] = useState(true);

  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-[2.5rem] border-3 border-white bg-gradient-to-b from-indigo-100 to-purple-100 p-4 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(99,102,241,0.1)] font-sans">
      <div className="flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-white bg-white/80 text-indigo-700 shadow-xs">
          <Volume2 className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-black text-slate-800">Efectos 3D</div>
          <div className="text-[10px] font-bold text-indigo-900/60">Sonido háptico</div>
        </div>
      </div>

      {/* Puffy Squishy Toggle Switch */}
      <button
        onClick={() => setActive(!active)}
        className={`relative h-10 w-18 rounded-full border-2 border-white transition-colors duration-200 p-1 shadow-[inset_0_3px_5px_rgba(0,0,0,0.1)] ${
          active ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-slate-200"
        }`}
      >
        <div
          className={`h-7 w-7 rounded-full border-2 border-white bg-white shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_2px_3px_rgba(255,255,255,0.9)] transition-transform duration-200 ${
            active ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
