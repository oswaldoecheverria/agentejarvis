"use client";

import React, { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Disc3, Heart } from "lucide-react";

export function NeumorphicAudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(true);

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#eef2f6] p-8 text-slate-700 shadow-[14px_14px_28px_#cbcfd4,-14px_-14px_28px_#ffffff]">
      {/* Vinyl Art Centerpiece */}
      <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#eef2f6] shadow-[inset_6px_6px_12px_#cbcfd4,inset_-6px_-6px_12px_#ffffff]">
        <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-[6px_6px_12px_#cbcfd4,-6px_-6px_12px_#ffffff] ${playing ? "animate-spin" : ""}`} style={{ animationDuration: "8s" }}>
          <Disc3 className="h-10 w-10 text-white" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h4 className="text-base font-extrabold text-slate-800">Synthesize Waves</h4>
        <p className="text-xs text-slate-500 font-medium">Bioluminescent Soundscapes</p>
      </div>

      {/* Track Progress Bar Extruded */}
      <div className="mt-6 h-2.5 w-full rounded-full bg-[#eef2f6] shadow-[inset_3px_3px_6px_#cbcfd4,inset_-3px_-3px_6px_#ffffff] overflow-hidden p-0.5">
        <div className="h-full w-2/3 rounded-full bg-emerald-500 shadow-sm" />
      </div>

      {/* Control Buttons */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2f6] text-slate-500 shadow-[5px_5px_10px_#cbcfd4,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#cbcfd4,inset_-3px_-3px_6px_#ffffff] transition-all">
          <SkipBack className="h-4 w-4" />
        </button>

        <button
          onClick={() => setPlaying(!playing)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[6px_6px_14px_#cbcfd4,-6px_-6px_14px_#ffffff] active:scale-95 transition-all"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 translate-x-0.5" />}
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2f6] text-slate-500 shadow-[5px_5px_10px_#cbcfd4,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#cbcfd4,inset_-3px_-3px_6px_#ffffff] transition-all">
          <SkipForward className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
