import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialNeumorphic() {
  return (
    <div className="w-full max-w-xs sm:max-w-md rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans text-slate-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] text-slate-700">
        <Quote className="h-5 w-5" />
      </div>

      <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-700">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </p>

      {/* 5 Stars */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex h-6 w-6 items-center justify-center rounded-lg shadow-[inset_1.5px_1.5px_3px_#bec3c9,inset_-1.5px_-1.5px_3px_#ffffff]">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          </div>
        ))}
      </div>

      {/* Author info */}
      <div className="mt-5 flex items-center gap-3 border-t border-[#bec3c9]/40 pt-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e5ec] font-bold text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]">
          ML
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">Marcus Lindqvist</div>
          <div className="text-xs text-slate-500">Head of Engineering @ BoltStack</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialNeumorphic;
