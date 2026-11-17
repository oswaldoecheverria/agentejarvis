import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialMinimalist() {
  return (
    <div className="w-full max-w-xs sm:max-w-md border border-slate-900 bg-white p-7 font-sans text-slate-900 shadow-none">
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>TESTIMONIO // 01</span>
        <span>VERIFICADO</span>
      </div>

      <blockquote className="my-5 text-base font-serif leading-relaxed text-slate-950">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </blockquote>

      <div className="flex gap-1 border-b border-slate-200 pb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-slate-900 text-slate-900" />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between font-mono">
        <div>
          <div className="text-xs font-bold uppercase text-slate-950">Marcus Lindqvist</div>
          <div className="text-[10px] text-slate-500">Head of Engineering @ BoltStack</div>
        </div>
        <span className="text-[10px] text-slate-400">ID: ML-09</span>
      </div>
    </div>
  );
}

export default TestimonialMinimalist;
