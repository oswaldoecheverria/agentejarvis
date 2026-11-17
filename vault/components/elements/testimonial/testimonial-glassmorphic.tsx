import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialGlassmorphic() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-md overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      {/* Quote Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-inner text-emerald-200">
        <Quote className="h-5 w-5" />
      </div>

      <p className="mt-4 text-base font-medium leading-relaxed text-white drop-shadow">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </p>

      {/* 5 Stars */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300 drop-shadow" />
        ))}
      </div>

      {/* Author info */}
      <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-tr from-emerald-500 to-teal-400 font-bold text-white shadow-inner">
          ML
        </div>
        <div>
          <div className="text-sm font-bold text-white">Marcus Lindqvist</div>
          <div className="text-xs text-emerald-100/70">Head of Engineering @ BoltStack</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialGlassmorphic;
