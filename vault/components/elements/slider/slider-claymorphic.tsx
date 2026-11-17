import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselMotionSliderClaymorphic() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs font-sans text-neutral-800">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
            <ChevronLeft className="h-3.5 w-3.5 text-neutral-600" />
          </button>
          <button onClick={next} className="p-1 rounded-md border border-neutral-200 hover:bg-neutral-50">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
          </button>
        </div>
      </div>
      <div className="min-h-[70px]">
        <h4 className="text-sm font-semibold text-neutral-900">{slides[current].title}</h4>
        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5 pt-3 border-t border-neutral-100">
        {slides.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all ${i === current ? "w-5 bg-neutral-900" : "w-1.5 bg-neutral-300"}`} />
        ))}
      </div>
    </div>
  );
}
export default CarouselMotionSliderClaymorphic;
