import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselMotionSliderNeoBrutalist() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Arquitectura Local-First", tag: "PASO 01", desc: "Desarrollo local aislado sin riesgos en producción." },
    { title: "Trunk-Based Ágil", tag: "PASO 02", desc: "Commits semánticos guiados con control de calidad." },
    { title: "Efecto Glass Institucional", tag: "PASO 03", desc: "Cristal esmeralda satinado con bisel refractario." },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-3">
        <span className="border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-[11px] font-black uppercase shadow-[1.5px_1.5px_0px_#000]">
          {slides[current].tag}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={prev} className="p-1.5 rounded-lg border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-200 active:translate-y-0.5">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="p-1.5 rounded-lg border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-200 active:translate-y-0.5">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="min-h-[75px]">
        <h4 className="text-base font-black text-black uppercase tracking-tight">{slides[current].title}</h4>
        <p className="text-xs font-bold text-slate-800 mt-1.5 leading-relaxed">{slides[current].desc}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 pt-3 border-t-2 border-black">
        {slides.map((_, i) => (
          <div key={i} className={`h-2 transition-all border border-black ${i === current ? "w-6 bg-black" : "w-2 bg-white"}`} />
        ))}
      </div>
    </div>
  );
}
export default CarouselMotionSliderNeoBrutalist;
