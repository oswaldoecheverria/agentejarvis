import React, { useState } from "react";

export function CalculatorMinimalist() {
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
    <div className="w-full max-w-xs border border-slate-900 bg-white p-6 font-mono text-slate-900 shadow-none">
      {/* Swiss Display */}
      <div className="border border-slate-900 bg-slate-50 p-3.5 text-right">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest">CALCULATOR // MOD.01</div>
        <div className="text-3xl font-bold text-slate-950 tracking-tight overflow-hidden">
          {display}
        </div>
      </div>

      {/* Keypad */}
      <div className="mt-5 space-y-2">
        {keys.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-4 gap-1.5">
            {row.map((k) => {
              const isOp = ["÷", "×", "-", "+"].includes(k);
              const isAction = ["C", "±", "%"].includes(k);
              return (
                <button
                  key={k}
                  onClick={() => btnPress(k)}
                  className={`flex h-10 w-10 items-center justify-center border text-xs font-bold transition-colors ${
                    isOp
                      ? "border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
                      : isAction
                      ? "border-slate-400 bg-slate-100 text-slate-900 hover:bg-slate-200"
                      : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        ))}
        {/* Bottom row */}
        <div className="grid grid-cols-4 gap-1.5">
          <button
            onClick={() => btnPress("0")}
            className="col-span-2 flex h-10 items-center justify-center border border-slate-200 bg-white text-xs font-bold text-slate-900 hover:bg-slate-100"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-xs font-bold text-slate-900 hover:bg-slate-100"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-10 w-10 items-center justify-center border border-slate-900 bg-slate-950 text-xs font-bold text-white hover:bg-slate-800"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorMinimalist;
