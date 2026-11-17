import React, { useState } from "react";

export function CalculatorCyberpunk() {
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
    <div className="relative w-full max-w-xs border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-pink-500" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-pink-500" />

      {/* Cyber Display */}
      <div className="border border-cyan-500/40 bg-black/60 p-3.5 text-right shadow-inner">
        <div className="text-[10px] text-pink-400 uppercase tracking-widest">CYBER_CALC // HEX</div>
        <div className="text-3xl font-black text-white tracking-tight overflow-hidden drop-shadow-[0_0_10px_#06b6d4]">
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
                  className={`flex h-11 w-11 items-center justify-center border text-xs font-black transition-all active:scale-95 ${
                    isOp
                      ? "border-pink-500 bg-pink-500/20 text-pink-300 shadow-[0_0_8px_#ec4899]"
                      : isAction
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : "border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-500/20"
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
            className="col-span-2 flex h-11 items-center justify-center border border-cyan-500/40 bg-cyan-950/40 text-xs font-black text-white"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-11 w-11 items-center justify-center border border-cyan-500/40 bg-cyan-950/40 text-xs font-black text-white"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-11 w-11 items-center justify-center border border-pink-500 bg-pink-500 text-xs font-black text-black shadow-[0_0_12px_#ec4899]"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorCyberpunk;
