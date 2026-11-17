import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export function AlbumLightboxModalClaymorphic() {
  const [current, setCurrent] = useState(0);

  const photos = [
    { title: "Consultorio de Medicina Familiar", caption: "Instalaciones preparadas con filtro HEPA y esterilización continua." },
    { title: "Área de Toma de Muestras", caption: "Atención especializada para niños y adultos mayores." }
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl bg-slate-950 p-6 text-white shadow-2xl font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div>
          <h4 className="text-xs font-bold text-slate-200">{photos[current].title}</h4>
          <span className="text-[10px] text-slate-400">Foto {current + 1} de {photos.length}</span>
        </div>
        <button className="rounded-full bg-white/10 p-1.5 hover:bg-white/20">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative aspect-video w-full rounded-2xl bg-slate-900 mb-3 flex items-center justify-center overflow-hidden border border-white/10">
        <span className="text-xs text-slate-500 font-mono">[Vista Previa Fotográfica 16:9 WebP]</span>
        <button
          onClick={() => setCurrent((c) => (c > 0 ? c - 1 : photos.length - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c < photos.length - 1 ? c + 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">{photos[current].caption}</p>
    </div>
  );
}
export default AlbumLightboxModalClaymorphic;