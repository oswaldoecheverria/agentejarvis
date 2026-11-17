import React from "react";
import { Play } from "lucide-react";

export function CampaignVideoCardNeoBrutalist() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-4 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] mb-3 flex items-center justify-center shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
          <Play className="h-5 w-5 fill-current ml-0.5" />
        </button>
      </div>
      <h4 className="text-xs font-bold text-slate-800 mb-1">Prevención de Picos Glucémicos</h4>
      <p className="text-[11px] text-slate-500">Guía médica con evidencia clínica.</p>
    </div>
  );
}
export default CampaignVideoCardNeoBrutalist;