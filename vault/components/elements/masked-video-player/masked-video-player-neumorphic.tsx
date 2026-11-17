import React from "react";
import { Play } from "lucide-react";

export function MaskedVideoPlayerNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0e5ec] text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <Play className="h-6 w-6 fill-indigo-600 text-indigo-600 ml-1" />
        </button>
        <div className="absolute bottom-3 left-3 rounded-xl bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">
          02:45 min
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">CONOCE A LA DRA. ERIKA SALUD</h4>
        <p className="text-[11px] font-semibold text-slate-500 mt-1">Medicina preventiva integral y calidez humana</p>
      </div>
    </div>
  );
}
export default MaskedVideoPlayerNeumorphic;
