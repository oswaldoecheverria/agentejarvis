import React, { useState } from "react";

export function CalculatorClaymorphic() {
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
    <div className="w-full max-w-xs rounded-[3rem] border-3 border-white bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.15)] font-sans text-slate-800">
      {/* 3D LCD Display */}
      <div className="rounded-2xl border-2 border-white bg-white/80 p-3.5 text-right shadow-[0_6px_12px_rgba(168,85,247,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)]">
        <div className="font-mono text-[10px] font-bold text-purple-900/60 uppercase tracking-widest">3D CALC</div>
        <div className="text-3xl font-mono font-black text-slate-800 tracking-tight overflow-hidden">
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
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white text-xs font-black transition-all active:scale-90 ${
                    isOp
                      ? "bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-xs"
                      : isAction
                      ? "bg-amber-200 text-amber-900 shadow-xs"
                      : "bg-white/90 text-slate-800 shadow-xs hover:bg-white"
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
            className="col-span-2 flex h-11 items-center justify-center rounded-xl border border-white bg-white/90 text-xs font-black text-slate-800 shadow-xs"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-white/90 text-xs font-black text-slate-800 shadow-xs"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white bg-gradient-to-tr from-pink-500 to-purple-500 text-xs font-black text-white shadow-md active:scale-90"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorClaymorphic;
