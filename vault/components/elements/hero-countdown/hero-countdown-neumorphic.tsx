import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Zap } from "lucide-react";

export function HeroCountdownNeumorphic() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-8 shadow-[12px_12px_24px_#c8d0e7,-12px_-12px_24px_#ffffff] font-sans text-slate-700">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-3">
        <Zap className="h-3.5 w-3.5" />
        <span>Jornada Médica Preventiva</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
        Cierre de Registro en Vivo
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "DÍAS", val: time.d },
          { label: "HORAS", val: time.h },
          { label: "MIN", val: time.m },
          { label: "SEG", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl bg-[#e0e5ec] p-3 text-center shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]">
            <span className="font-mono text-2xl font-black text-indigo-600">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-bold text-slate-500 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
        <span>ASEGURAR MI CUPO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default HeroCountdownNeumorphic;
