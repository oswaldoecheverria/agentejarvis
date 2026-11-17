import React from "react";
import { Play } from "lucide-react";

export function MaskedVideoPlayerGlassmorphic() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="relative aspect-video w-full rounded-2xl border border-white/30 bg-black/30 overflow-hidden flex items-center justify-center">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md shadow-lg hover:scale-110 active:scale-95 transition-all">
          <Play className="h-5 w-5 fill-white text-white ml-0.5" />
        </button>
        <div className="absolute bottom-2.5 left-2.5 rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[10px] font-mono text-emerald-200">
          02:45 min
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] text-emerald-100/80 mt-0.5">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}
export default MaskedVideoPlayerGlassmorphic;
