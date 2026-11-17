import React, { useState } from "react";
import { Delete } from "lucide-react";

export function NeumorphicCalculator() {
  const [display, setDisplay] = useState("1,420");

  const btnPress = (val: string) => {
    if (val === "C") setDisplay("0");
    else if (display === "0") setDisplay(val);
    else setDisplay(display + val);
  };

  const keys = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
  ];

  return (
    <div className="w-full max-w-xs rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      {/* Indented LCD Display */}
      <div className="rounded-2xl bg-[#e0e5ec] p-4 text-right shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">RAD</div>
        <div className="text-3xl font-mono font-bold text-slate-800 tracking-tight overflow-hidden">
          {display}
        </div>
      </div>

      {/* Keypad */}
      <div className="mt-5 space-y-3">
        {keys.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-4 gap-2.5">
            {row.map((k) => {
              const isOp = ["÷", "×", "-", "+"].includes(k);
              const isAction = ["C", "±", "%"].includes(k);
              return (
                <button
                  key={k}
                  onClick={() => btnPress(k)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold transition-all duration-150 active:scale-95 ${
                    isOp
                      ? "bg-[#e0e5ec] text-emerald-600 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
                      : isAction
                      ? "bg-[#e0e5ec] text-amber-600 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
                      : "bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        ))}
        {/* Bottom row */}
        <div className="grid grid-cols-4 gap-2.5">
          <button
            onClick={() => btnPress("0")}
            className="col-span-2 flex h-11 items-center justify-center rounded-xl bg-[#e0e5ec] text-xs font-bold text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0e5ec] text-xs font-bold text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:scale-95"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
