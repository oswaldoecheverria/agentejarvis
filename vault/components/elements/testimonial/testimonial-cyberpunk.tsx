import React from "react";
import { Star, Terminal } from "lucide-react";

export function TestimonialCyberpunk() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-md border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-pink-400" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            COMM_LOG // FEEDBACK
          </span>
        </div>
        <span className="text-[9px] font-bold text-cyan-400 border border-cyan-500/50 px-1.5 py-0.5">
          5.0 ★
        </span>
      </div>

      <p className="mt-4 text-xs font-bold leading-relaxed text-cyan-100">
        “Migramos toda nuestra infraestructura de diseño a estos componentes en un solo fin de semana.
        Cero basura, cero wrappers innecesarios. Es la velocidad pura que buscábamos.”
      </p>

      {/* 5 Stars */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-pink-400 text-pink-400 drop-shadow-[0_0_6px_#ec4899]" />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-cyan-500/30 pt-4">
        <div className="flex h-10 w-10 items-center justify-center border border-pink-500 bg-pink-500/20 font-black text-pink-300">
          ML
        </div>
        <div>
          <div className="text-xs font-black uppercase text-white">Marcus Lindqvist</div>
          <div className="text-[10px] text-pink-400">Head of Engineering @ BoltStack</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCyberpunk;
