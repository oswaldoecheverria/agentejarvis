import React, { useState } from "react";
import { Plus, Minus, ShoppingBag } from "lucide-react";

export function ClaymorphicCounterBadge() {
  const [count, setCount] = useState(3);

  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-[2.5rem] border-3 border-white bg-gradient-to-b from-sky-100 to-indigo-100 p-4 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(59,130,246,0.12)] font-sans">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-[0_8px_16px_rgba(59,130,246,0.35),inset_0_3px_4px_rgba(255,255,255,0.7)]">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[10px] font-black uppercase text-blue-900/60">Pack 3D</div>
          <div className="text-sm font-black text-slate-800">Unidades</div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-2xl border-2 border-white bg-white/70 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
        <button
          onClick={() => setCount(Math.max(1, count - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white bg-sky-200 text-blue-900 shadow-xs active:scale-90 transition-transform"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-6 text-center font-black text-sm text-slate-800">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-white bg-blue-500 text-white shadow-xs active:scale-90 transition-transform"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
