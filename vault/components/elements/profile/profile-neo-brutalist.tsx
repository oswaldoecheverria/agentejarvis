import React, { useState } from "react";
import { Heart, MessageSquare, Award } from "lucide-react";

export function ProfileNeoBrutalist() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-xs sm:max-w-sm border-3 border-black bg-pink-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative flex h-20 w-20 items-center justify-center border-3 border-black bg-yellow-300 shadow-[3px_3px_0px_#000]">
          <span className="text-2xl font-black">AV</span>
          <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center border-2 border-black bg-lime-300 shadow-[1.5px_1.5px_0px_#000]">
            <Award className="h-4 w-4 text-black" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-black uppercase text-black">Alexander Vance</h3>
        <p className="text-xs font-bold text-black/70">Principal Cloud Architect</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full border-2 border-black bg-white p-3 shadow-[3px_3px_0px_#000]">
          <div>
            <div className="text-sm font-black text-black">124</div>
            <div className="text-[9px] font-black uppercase text-black/60">Proyectos</div>
          </div>
          <div className="border-x-2 border-black">
            <div className="text-sm font-black text-black">9.8k</div>
            <div className="text-[9px] font-black uppercase text-black/60">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-black text-black">42</div>
            <div className="text-[9px] font-black uppercase text-black/60">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-11 w-11 items-center justify-center border-2 border-black transition-all ${
              liked ? "bg-red-400 shadow-[2px_2px_0px_#000]" : "bg-white shadow-[3px_3px_0px_#000] hover:bg-yellow-200"
            }`}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-black text-black" : "text-black"}`} />
          </button>
          <button className="flex h-11 flex-1 items-center justify-center gap-2 border-2 border-black bg-black text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-colors">
            <MessageSquare className="h-4 w-4" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileNeoBrutalist;
