import React from "react";
  import { Play } from "lucide-react";

export function MaskedVideoPlayerMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="relative aspect-video w-full rounded-xl bg-neutral-100 flex items-center justify-center">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white shadow-md hover:scale-105 transition-all">
          <Play className="h-5 w-5 fill-white text-white ml-0.5" />
        </button>
        <div className="absolute bottom-2 left-2 rounded bg-neutral-900/80 text-white px-2 py-0.5 text-[10px] font-mono">
          02:45
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">MEET DR. ERIKA SALUD</h4>
        <p className="text-[11px] text-neutral-500 mt-0.5">Family Medicine and clinical integrity</p>
      </div>
    </div>
  );
}
export default MaskedVideoPlayerMinimalist;
