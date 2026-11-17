import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialLiquidGlass() {
  return (
    <div className="relative w-full max-w-md p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50">
      {/* Specular flare */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-1 text-cyan-300 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
        ))}
      </div>

      <p className="text-sm font-light text-slate-100 leading-relaxed mb-6 italic">
        "La integración con nuestro stack fue instantánea. Pasamos de maquetar durante semanas a desplegar vistas completas con acabado cristal en solo un par de horas."
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 border border-white/40 flex items-center justify-center font-bold text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
          ML
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-medium text-sm text-white">
            <span>Marcus Lindqvist</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <span className="text-xs text-cyan-200/70 font-mono">VP of Product en NordicDev</span>
        </div>
      </div>
    </div>
  );
}
export default TestimonialLiquidGlass;
