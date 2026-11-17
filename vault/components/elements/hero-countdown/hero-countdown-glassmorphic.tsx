import React, { useState, useEffect } from "react";
import { Timer, ArrowRight, Sparkles } from "lucide-react";

export function HeroCountdownGlassmorphic() {
  const [time, setTime] = useState({ d: 4, h: 18, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t.s > 0 ? { ...t, s: t.s - 1 } : { ...t, s: 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-8 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-200 mb-3">
        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
        <span>Jornada Médica Preventiva</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
        Cierre de Registro en Vivo
      </h2>
      <p className="text-xs text-emerald-100/80 mb-6">
        Acceso prioritario a chequeos integrales y exámenes de laboratorio con tarifa preferencial.
      </p>
      <div className="grid grid-cols-4 gap-2.5 mb-6">
        {[
          { label: "Días", val: time.d },
          { label: "Horas", val: time.h },
          { label: "Min", val: time.m },
          { label: "Seg", val: time.s }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-white/30 bg-white/10 p-3 text-center backdrop-blur-md">
            <span className="font-mono text-2xl font-bold text-white">{String(item.val).padStart(2, '0')}</span>
            <span className="block text-[10px] font-medium uppercase text-emerald-200/80 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
        <span>Asegurar Mi Cupo</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default HeroCountdownGlassmorphic;
