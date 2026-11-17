import React from "react";
import { Calendar as CalIcon, ChevronLeft, ChevronRight } from "lucide-react";

export function ClaymorphicCalendarWidget() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const dates = [12, 13, 14, 15, 16, 17, 18];

  return (
    <div className="w-full max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-b from-purple-100 via-pink-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.1)] font-sans">
      <div className="flex items-center justify-between border-b border-purple-200/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-purple-400 to-indigo-400 text-white shadow-xs">
            <CalIcon className="h-4 w-4" />
          </div>
          <span className="text-sm font-black text-slate-800">Noviembre 2026</span>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded-xl border border-white bg-white/70 text-purple-900 shadow-xs">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-xl border border-white bg-white/70 text-purple-900 shadow-xs">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
        {days.map((d, i) => (
          <span key={i} className="text-[10px] font-black uppercase text-purple-900/60">
            {d}
          </span>
        ))}
        {dates.map((num, i) => {
          const isToday = num === 15;
          return (
            <button
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-2xl border transition-all ${
                isToday
                  ? "border-2 border-white bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-black shadow-[0_8px_16px_rgba(168,85,247,0.4),inset_0_2px_3px_rgba(255,255,255,0.7)] scale-105"
                  : "border-transparent bg-white/50 text-slate-700 font-bold hover:bg-white/80"
              }`}
            >
              <span className="text-xs">{num}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
