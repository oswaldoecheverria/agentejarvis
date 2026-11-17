import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ClinicalAlbumNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-10 w-10 mx-auto text-indigo-500 mb-1" />
          <span className="text-xs font-bold text-slate-500">Registro Fotográfico HD</span>
        </div>
        <div className="absolute top-3 right-3 rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff]">
          +12 FOTOS
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">DERMATOLOGÍA</span>
          <h4 className="text-sm font-bold text-slate-800 mt-0.5">Evolución Lesión Cutánea</h4>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default ClinicalAlbumNeumorphic;
