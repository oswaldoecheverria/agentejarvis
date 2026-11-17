import React, { useState } from "react";

export function CalculatorGlassmorphic() {
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
    <div className="relative w-full max-w-xs overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      {/* Frosted LCD Screen */}
      <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 text-right backdrop-blur-md shadow-inner">
        <div className="font-mono text-[10px] text-emerald-200/60 uppercase tracking-widest">RAD // GL-01</div>
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
                      ? "border-emerald-300/60 bg-emerald-500/40 text-emerald-100 shadow-sm"
                      : isAction
                      ? "border-amber-300/60 bg-amber-500/30 text-amber-200"
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
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-md active:scale-95"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorGlassmorphic;
