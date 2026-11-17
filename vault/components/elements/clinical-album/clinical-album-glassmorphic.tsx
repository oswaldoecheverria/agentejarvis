import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ClinicalAlbumGlassmorphic() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="relative aspect-video w-full rounded-2xl border border-white/30 bg-black/20 overflow-hidden flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-emerald-300 mb-1" />
          <span className="text-xs font-medium text-emerald-100">Registro Fotográfico HD</span>
        </div>
        <div className="absolute top-2.5 right-2.5 rounded-full border border-white/30 bg-emerald-950/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-200 backdrop-blur-md">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">DERMATOLOGÍA</span>
          <h4 className="text-sm font-bold text-white mt-0.5">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-200 hover:bg-white/25 transition-colors">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default ClinicalAlbumGlassmorphic;
