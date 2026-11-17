import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselMotionSliderGlassmorphic() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)] font-sans text-white">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft className="h-3.5 w-3.5 text-white" />
          </button>
          <button onClick={next} className="p-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-sm font-bold text-white">{slides[current].title}</h4>
        <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5 pt-3 border-t border-white/15">
        {slides.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-emerald-400" : "w-1.5 bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
export default CarouselMotionSliderGlassmorphic;
