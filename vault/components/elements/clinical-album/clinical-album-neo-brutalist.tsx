import React from "react";
import { Image, ZoomIn, Sparkles } from "lucide-react";

export function ClinicalAlbumNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-pink-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="relative aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 overflow-hidden flex items-center justify-center shadow-[3px_3px_0px_#000]">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-black mb-1" />
          <span className="text-xs font-black uppercase">FOTOGRAFÍA CLÍNICA 16:9</span>
        </div>
        <div className="absolute top-2 right-2 border-2 border-black bg-white px-2 py-0.5 text-[10px] font-black uppercase shadow-[1.5px_1.5px_0px_#000]">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded">DERMATOLOGÍA</span>
          <h4 className="text-sm font-black uppercase mt-1">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default ClinicalAlbumNeoBrutalist;
