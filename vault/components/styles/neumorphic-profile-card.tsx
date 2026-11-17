import React, { useState } from "react";
import { User, MessageSquare, Heart, Share2, Award } from "lucide-react";

export function NeumorphicProfileCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-7 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      <div className="flex flex-col items-center text-center">
        {/* Extruded Avatar Base */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#e0e5ec] p-1.5 shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-extrabold text-2xl shadow-inner">
            AV
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff]">
            <Award className="h-4 w-4 text-emerald-600" />
          </div>
        </div>

        <h3 className="mt-4 text-base font-bold text-slate-800">Alexander Vance</h3>
        <p className="text-xs text-slate-500 font-medium">Principal Cloud Architect</p>

        {/* Tactile metrics pill */}
        <div className="mt-5 grid grid-cols-3 gap-3 w-full rounded-2xl p-3 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
          <div>
            <div className="text-sm font-bold text-slate-800">124</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Proyectos</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">9.8k</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">42</div>
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Patentes</div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-6 flex items-center justify-center gap-4 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-150 active:scale-95 ${
              liked
                ? "bg-[#e0e5ec] text-red-500 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
                : "bg-[#e0e5ec] text-slate-600 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
            }`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
          </button>

          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] text-xs font-bold text-slate-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:text-emerald-700 active:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
            <MessageSquare className="h-4 w-4" /> Mensaje
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e5ec] text-slate-600 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
