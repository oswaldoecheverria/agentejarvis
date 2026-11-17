import React, { useState } from "react";
import { Heart, MessageSquare, Award } from "lucide-react";

export function ProfileClaymorphic() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.15)] font-sans text-slate-800">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-[2rem] border-3 border-white bg-gradient-to-tr from-purple-400 to-pink-300 p-1 shadow-[0_10px_20px_rgba(168,85,247,0.3),inset_0_3px_4px_rgba(255,255,255,0.8)]">
          <span className="text-2xl font-black text-white">AV</span>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-xl border border-white bg-amber-300 text-amber-900 shadow-sm">
            <Award className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-black text-slate-800">Alexander Vance</h3>
        <p className="text-xs font-bold text-purple-700/80">Principal Cloud Architect</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full rounded-2xl border-2 border-white bg-white/70 p-3 shadow-xs">
          <div>
            <div className="text-sm font-black text-slate-800">124</div>
            <div className="text-[9px] font-bold uppercase text-purple-900/60">Proyectos</div>
          </div>
          <div className="border-x border-purple-200">
            <div className="text-sm font-black text-slate-800">9.8k</div>
            <div className="text-[9px] font-bold uppercase text-purple-900/60">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-black text-slate-800">42</div>
            <div className="text-[9px] font-bold uppercase text-purple-900/60">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-white transition-all ${
              liked ? "bg-red-400 text-white" : "bg-white/80 text-purple-900 shadow-xs"
            }`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-white text-white" : ""}`} />
          </button>
          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-white bg-gradient-to-r from-purple-500 to-indigo-500 text-xs font-black uppercase text-white shadow-[0_8px_16px_rgba(168,85,247,0.4),inset_0_2px_3px_rgba(255,255,255,0.7)] active:scale-95 transition-all">
            <MessageSquare className="h-4 w-4" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileClaymorphic;
