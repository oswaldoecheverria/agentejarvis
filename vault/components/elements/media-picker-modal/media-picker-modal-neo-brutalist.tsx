import React, { useState } from "react";
import { Image, Upload, Check, Search } from "lucide-react";

export function MediaPickerModalNeoBrutalist() {
  const [selected, setSelected] = useState(0);

  const media = [
    { title: "Consultorio Quito Norte", size: "240 KB", format: "WEBP" },
    { title: "Equipo Electrocardiograma", size: "180 KB", format: "WEBP" },
    { title: "Jornada Comunitaria", size: "320 KB", format: "WEBP" },
    { title: "Certificado Senescyt", size: "150 KB", format: "PNG" },
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <h3 className="text-xs font-black uppercase text-slate-900">Selector de Medios Clínicos</h3>
        <span className="text-[10px] text-slate-400">4 archivos disponibles</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {media.map((m, idx) => {
          const isSel = selected === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`relative rounded-2xl border p-3 cursor-pointer transition-all ${
                isSel ? "border-emerald-600 bg-emerald-50/50 shadow-xs" : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              {isSel && (
                <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="h-16 w-full rounded-xl bg-slate-200 mb-2 flex items-center justify-center text-slate-400">
                <Image className="h-6 w-6" />
              </div>
              <h5 className="text-[11px] font-bold text-slate-900 truncate">{m.title}</h5>
              <div className="flex items-center justify-between text-[9px] text-slate-400 mt-0.5">
                <span>{m.format}</span>
                <span>{m.size}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-2">
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
          Cancelar
        </button>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800">
          Insertar Medio Seleccionado
        </button>
      </div>
    </div>
  );
}
export default MediaPickerModalNeoBrutalist;