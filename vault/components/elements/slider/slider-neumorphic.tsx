import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselMotionSliderNeumorphic() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "FASE 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "FASE 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "FASE 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-xl bg-[#e0e5ec] px-3 py-1 text-[10px] font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="p-1.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
          </button>
          <button onClick={next} className="p-1.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-sm font-bold text-slate-800">{slides[current].title}</h4>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 pt-3 border-t border-slate-300/40">
        {slides.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${i === current ? "w-5 bg-indigo-500 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" : "w-2 bg-[#c8d0e7]"}`} />
        ))}
      </div>
    </div>
  );
}
export default CarouselMotionSliderNeumorphic;
