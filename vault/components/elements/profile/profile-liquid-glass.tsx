import React, { useState } from "react";
import { Heart, MessageSquare, Award } from "lucide-react";

export function ProfileLiquidGlass() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] font-sans text-white">
      <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/25 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/20 p-1 backdrop-blur-xl shadow-inner">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 font-extrabold text-xl text-white shadow-inner">
            AV
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-black/40 text-cyan-300 shadow-md backdrop-blur-md">
            <Award className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white tracking-tight">Alexander Vance</h3>
        <p className="text-xs font-medium text-white/70">Principal Cloud Architect</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full rounded-2xl border border-white/25 bg-white/10 p-3 backdrop-blur-xl shadow-inner">
          <div>
            <div className="text-sm font-bold text-white">124</div>
            <div className="text-[9px] uppercase tracking-wider text-white/60">Proyectos</div>
          </div>
          <div className="border-x border-white/20">
            <div className="text-sm font-bold text-white">9.8k</div>
            <div className="text-[9px] uppercase tracking-wider text-white/60">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white">42</div>
            <div className="text-[9px] uppercase tracking-wider text-white/60">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 backdrop-blur-md transition-all ${
              liked ? "bg-red-500/40 text-red-200 border-red-300" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-red-400 text-red-400" : ""}`} />
          </button>
          <button className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/50 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-xs font-bold uppercase text-white shadow-[0_8px_20px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-95 transition-all">
            <MessageSquare className="h-4 w-4" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileLiquidGlass;
