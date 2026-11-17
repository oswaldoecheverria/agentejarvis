import React from "react";
import { Image, ZoomIn } from "lucide-react";

export function ClinicalAlbumMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="relative aspect-video w-full rounded-xl bg-neutral-100 flex items-center justify-center">
        <div className="text-center p-4">
          <Image className="h-8 w-8 mx-auto text-neutral-400 mb-1" />
          <span className="text-xs text-neutral-500">Clinical Photographic Record</span>
        </div>
        <div className="absolute top-2 right-2 rounded-md bg-neutral-900 text-white px-2 py-0.5 text-[10px] font-bold">
          +12 PHOTOS
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase text-neutral-400">DERMATOLOGY</span>
          <h4 className="text-sm font-semibold text-neutral-900 mt-0.5">Skin Lesion Progression</h4>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default ClinicalAlbumMinimalist;
