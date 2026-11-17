import React, { useState } from "react";
import { Heart, MessageSquare, Award } from "lucide-react";

export function ProfileGlassmorphic() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/15 p-1 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 font-extrabold text-xl text-white shadow-inner">
            AV
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-[#0e3328] text-emerald-300 shadow-md">
            <Award className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white tracking-tight">Alexander Vance</h3>
        <p className="text-xs font-medium text-emerald-100/70">Principal Cloud Architect</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md shadow-inner">
          <div>
            <div className="text-sm font-bold text-white">124</div>
            <div className="text-[9px] uppercase tracking-wider text-emerald-200/70">Proyectos</div>
          </div>
          <div className="border-x border-white/15">
            <div className="text-sm font-bold text-white">9.8k</div>
            <div className="text-[9px] uppercase tracking-wider text-emerald-200/70">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white">42</div>
            <div className="text-[9px] uppercase tracking-wider text-emerald-200/70">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 transition-all ${
              liked ? "bg-red-500/30 text-red-300 border-red-400" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-red-400 text-red-400" : ""}`} />
          </button>
          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold uppercase text-white shadow-[0_8px_20px_rgba(16,185,129,0.4)] hover:brightness-110 active:scale-95 transition-all">
            <MessageSquare className="h-4 w-4" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileGlassmorphic;
