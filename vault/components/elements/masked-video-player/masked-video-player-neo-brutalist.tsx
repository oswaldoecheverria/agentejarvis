import React from "react";
import { Play, Sparkles } from "lucide-react";

export function MaskedVideoPlayerNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-cyan-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="relative aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 overflow-hidden flex items-center justify-center shadow-[3px_3px_0px_#000]">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000] hover:scale-105 transition-all">
          <Play className="h-5 w-5 fill-black text-black ml-0.5" />
        </button>
        <div className="absolute bottom-2 left-2 border-2 border-black bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase">
          02:45 MIN
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-black uppercase">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] font-bold text-slate-800 mt-0.5">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}
export default MaskedVideoPlayerNeoBrutalist;
