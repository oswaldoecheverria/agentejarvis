import React, { useState, useEffect } from "react";
import { Timer, ArrowRight } from "lucide-react";

export function HeroCountdownMinimalist() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-2xl border border-neutral-200 bg-white p-8 font-sans text-neutral-900 shadow-sm">
      <div className="inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 mb-3">
        <Timer className="h-3.5 w-3.5" />
        <span>Clinical Preventive Summit</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-950 mb-2">Live Registration Countdown</h2>
      <p className="text-xs text-neutral-500 mb-6">Priority access to clinical diagnostics and comprehensive checkup.</p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "Days", val: time.d },
          { label: "Hours", val: time.h },
          { label: "Min", val: time.m },
          { label: "Sec", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
            <span className="font-mono text-2xl font-bold text-neutral-900">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] text-neutral-500 uppercase mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
        <span>Reserve Spot</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default HeroCountdownMinimalist;
