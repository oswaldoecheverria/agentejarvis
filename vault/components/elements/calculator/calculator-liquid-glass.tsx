import React, { useState } from "react";

export function CalculatorLiquidGlass() {
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
    <div className="relative w-full max-w-xs overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] font-sans text-white">
      <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/25 blur-2xl" />

      {/* Screen */}
      <div className="rounded-2xl border border-white/25 bg-white/10 p-3.5 text-right backdrop-blur-xl shadow-inner">
        <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest">LIQUID CALC</div>
        <div className="text-3xl font-mono font-bold text-white tracking-tight overflow-hidden drop-shadow">
          {display}
        </div>
      </div>

      {/* Keypad */}
      <div className="mt-5 space-y-2">
        {keys.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-4 gap-2">
            {row.map((k) => {
              const isOp = ["÷", "×", "-", "+"].includes(k);
              const isAction = ["C", "±", "%"].includes(k);
              return (
                <button
                  key={k}
                  onClick={() => btnPress(k)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-bold backdrop-blur-md transition-all active:scale-95 ${
                    isOp
                      ? "border-cyan-300/60 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 text-cyan-100 shadow-xs"
                      : isAction
                      ? "border-amber-300/60 bg-amber-400/20 text-amber-200"
                      : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        ))}
        {/* Bottom row */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => btnPress("0")}
            className="col-span-2 flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-bold text-white hover:bg-white/20"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-bold text-white hover:bg-white/20"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-xs font-bold text-white shadow-md active:scale-95"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorLiquidGlass;
