import React, { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Music2 } from "lucide-react";

export function ClaymorphicMusicPill() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-5 shadow-[0_25px_50px_-10px_rgba(236,72,153,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(236,72,153,0.12)] font-sans">
      <div className="flex items-center gap-3.5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.75rem] border-2 border-white bg-gradient-to-tr from-pink-400 to-rose-400 text-white shadow-[0_8px_18px_rgba(244,63,94,0.35),inset_0_3px_4px_rgba(255,255,255,0.7)]">
          <Music2 className="h-6 w-6" />
        </div>

        <div className="flex-1 overflow-hidden">
          <h4 className="text-sm font-black text-slate-800 truncate">Vaporwave Dreams</h4>
          <p className="text-xs font-bold text-pink-700/80">Neon Skyline</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlaying(!playing)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-[0_8px_18px_rgba(168,85,247,0.4),inset_0_3px_4px_rgba(255,255,255,0.7)] active:scale-90 transition-transform"
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white bg-white/70 text-purple-900 shadow-xs active:scale-90">
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
