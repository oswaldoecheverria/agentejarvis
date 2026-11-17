import React, { useState } from "react";

export function CalculatorNeoBrutalist() {
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
    <div className="w-full max-w-xs border-3 border-black bg-yellow-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      {/* Brutalist Display */}
      <div className="border-3 border-black bg-white p-3.5 text-right shadow-[3px_3px_0px_#000]">
        <div className="font-mono text-[10px] font-black uppercase text-black/60">CALC // 01</div>
        <div className="text-3xl font-mono font-black text-black tracking-tight overflow-hidden">
          {display}
        </div>
      </div>

      {/* Keypad */}
      <div className="mt-5 space-y-2.5">
        {keys.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-4 gap-2">
            {row.map((k) => {
              const isOp = ["÷", "×", "-", "+"].includes(k);
              const isAction = ["C", "±", "%"].includes(k);
              return (
                <button
                  key={k}
                  onClick={() => btnPress(k)}
                  className={`flex h-11 w-11 items-center justify-center border-2 border-black text-xs font-black transition-all active:translate-x-[1px] active:translate-y-[1px] ${
                    isOp
                      ? "bg-pink-400 text-black shadow-[2px_2px_0px_#000]"
                      : isAction
                      ? "bg-cyan-300 text-black shadow-[2px_2px_0px_#000]"
                      : "bg-white text-black shadow-[2px_2px_0px_#000] hover:bg-yellow-100"
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
            className="col-span-2 flex h-11 items-center justify-center border-2 border-black bg-white text-xs font-black text-black shadow-[2px_2px_0px_#000]"
          >
            0
          </button>
          <button
            onClick={() => btnPress(".")}
            className="flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-xs font-black text-black shadow-[2px_2px_0px_#000]"
          >
            .
          </button>
          <button
            onClick={() => setDisplay("3,480")}
            className="flex h-11 w-11 items-center justify-center border-2 border-black bg-lime-400 text-xs font-black text-black shadow-[2px_2px_0px_#000] hover:bg-lime-300"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorNeoBrutalist;
