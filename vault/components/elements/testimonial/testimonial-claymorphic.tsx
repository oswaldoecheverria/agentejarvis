import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialClaymorphic() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-md rounded-[3rem] border-3 border-white bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(236,72,153,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(236,72,153,0.15)] font-sans text-slate-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-white bg-white/80 text-pink-500 shadow-xs">
        <Quote className="h-5 w-5" />
      </div>

      <p className="mt-4 text-sm font-black leading-relaxed text-slate-800">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </p>

      {/* 5 Stars */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Author info */}
      <div className="mt-5 flex items-center gap-3 border-t border-purple-200/60 pt-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-pink-400 to-rose-400 font-black text-white shadow-xs">
          ML
        </div>
        <div>
          <div className="text-sm font-black text-slate-800">Marcus Lindqvist</div>
          <div className="text-xs font-bold text-pink-800/70">Head of Engineering @ BoltStack</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialClaymorphic;
