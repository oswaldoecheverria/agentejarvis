import React, { useState } from "react";
import { Heart, MessageSquare, Cpu } from "lucide-react";

export function ProfileCyberpunk() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-pink-500" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-pink-500" />

      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative flex h-20 w-20 items-center justify-center border-2 border-cyan-400 bg-cyan-950/60 p-1 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          <span className="text-2xl font-black text-white">AV</span>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center border border-pink-500 bg-black text-pink-400">
            <Cpu className="h-3.5 w-3.5" />
          </div>
        </div>

        <h3 className="mt-4 text-base font-black uppercase text-white tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          ALEXANDER VANCE
        </h3>
        <p className="text-[11px] text-pink-400">SYS_ARCH // LEVEL 4</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full border border-cyan-500/30 bg-black/60 p-3 shadow-inner text-[10px]">
          <div>
            <div className="text-sm font-black text-white">124</div>
            <div className="text-[9px] uppercase tracking-wider text-cyan-500">Proyectos</div>
          </div>
          <div className="border-x border-cyan-500/20">
            <div className="text-sm font-black text-white">9.8k</div>
            <div className="text-[9px] uppercase tracking-wider text-cyan-500">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-black text-white">42</div>
            <div className="text-[9px] uppercase tracking-wider text-cyan-500">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-10 w-10 items-center justify-center border transition-all ${
              liked ? "border-pink-500 bg-pink-500/30 text-pink-300" : "border-cyan-400 bg-cyan-950/40 text-cyan-300"
            }`}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-pink-400" : ""}`} />
          </button>
          <button className="flex h-10 flex-1 items-center justify-center gap-2 border border-pink-500 bg-pink-500/20 text-xs font-black uppercase text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.3)] hover:bg-pink-500 hover:text-black transition-all">
            <MessageSquare className="h-3.5 w-3.5" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCyberpunk;
