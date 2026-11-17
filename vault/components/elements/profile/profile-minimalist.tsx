import React, { useState } from "react";
import { Heart, MessageSquare } from "lucide-react";

export function ProfileMinimalist() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-xs sm:max-w-sm border border-slate-900 bg-white p-6 font-sans text-slate-900 shadow-none">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="flex h-18 w-18 items-center justify-center border border-slate-900 bg-slate-100 font-mono text-xl font-bold">
          AV
        </div>

        <h3 className="mt-4 text-base font-bold uppercase tracking-tight text-slate-950">
          Alexander Vance
        </h3>
        <p className="font-mono text-[11px] text-slate-500">Principal Cloud Architect</p>

        {/* 3 Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 w-full border-y border-slate-900 py-3 font-mono">
          <div>
            <div className="text-sm font-bold text-slate-950">124</div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Proyectos</div>
          </div>
          <div className="border-x border-slate-200">
            <div className="text-sm font-bold text-slate-950">9.8k</div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Seguidores</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-950">42</div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Patentes</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 flex items-center gap-3 w-full font-mono">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-10 w-10 items-center justify-center border border-slate-900 transition-colors ${
              liked ? "bg-slate-900 text-white" : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-white" : ""}`} />
          </button>
          <button className="flex h-10 flex-1 items-center justify-center gap-2 border border-slate-900 bg-slate-900 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors">
            <MessageSquare className="h-3.5 w-3.5" /> Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileMinimalist;
