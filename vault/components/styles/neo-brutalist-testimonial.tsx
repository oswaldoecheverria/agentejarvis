import React from "react";
import { Star, Quote } from "lucide-react";

export function NeoBrutalistTestimonial() {
  return (
    <div className="relative w-full max-w-md border-3 border-black bg-lime-300 p-6 shadow-[6px_6px_0px_#000] font-sans">
      {/* Decorative Sticker */}
      <div className="absolute -top-3.5 -right-3.5 rotate-6 border-2 border-black bg-yellow-400 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_#000]">
        ★ 100% REAL FEEDBACK
      </div>

      {/* Quote Icon */}
      <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0px_#000]">
        <Quote className="h-5 w-5 text-black" />
      </div>

      {/* Testimonial Text */}
      <p className="mt-4 text-base font-extrabold leading-snug text-black">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </p>

      {/* Star Rating */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex h-6 w-6 items-center justify-center border border-black bg-yellow-400 text-black shadow-[1.5px_1.5px_0px_#000]">
            <Star className="h-3.5 w-3.5 fill-black" />
          </div>
        ))}
      </div>

      {/* Author info */}
      <div className="mt-5 flex items-center gap-3 border-t-2 border-black pt-4">
        <div className="flex h-11 w-11 items-center justify-center border-2 border-black bg-pink-400 font-black text-black shadow-[2px_2px_0px_#000]">
          ML
        </div>
        <div>
          <div className="text-sm font-black text-black uppercase tracking-wide">
            Marcus Lindqvist
          </div>
          <div className="text-xs font-bold text-black/70">
            Head of Engineering @ BoltStack
          </div>
        </div>
      </div>
    </div>
  );
}
