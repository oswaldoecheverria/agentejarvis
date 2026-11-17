import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Zap } from "lucide-react";

export function HeroCountdownNeoBrutalist() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000] mb-3">
        <Zap className="h-3.5 w-3.5" />
        <span>JORNADA MÉDICA PREVENTIVA</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2">
        CIERRE DE REGISTRO EN VIVO
      </h2>
      <p className="text-xs font-bold text-slate-800 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "DÍAS", val: time.d },
          { label: "HORAS", val: time.h },
          { label: "MIN", val: time.m },
          { label: "SEG", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl border-3 border-black bg-white p-3 text-center shadow-[3px_3px_0px_#000]">
            <span className="font-mono text-2xl font-black text-black">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-black uppercase text-slate-600 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-3 border-black bg-black py-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>ASEGURAR MI CUPO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default HeroCountdownNeoBrutalist;
