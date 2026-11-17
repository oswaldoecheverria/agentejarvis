import React from "react";
import { Sparkles, Star, Award, Heart } from "lucide-react";

export function ClaymorphicAvatarCard() {
  return (
    <div className="relative w-full max-w-sm rounded-[3rem] border-2 border-white/80 bg-gradient-to-b from-purple-100 via-indigo-50 to-pink-100 p-7 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.3),inset_0_4px_8px_rgba(255,255,255,0.9),inset_0_-6px_8px_rgba(147,51,234,0.12)] font-sans">
      <div className="flex flex-col items-center text-center">
        {/* Puffy 3D Avatar */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-[2.5rem] border-4 border-white bg-gradient-to-tr from-purple-400 via-indigo-300 to-pink-300 p-1 text-white shadow-[0_15px_30px_rgba(147,51,234,0.35),inset_0_6px_8px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.15)]">
          <span className="text-3xl font-black drop-shadow-sm">NX</span>
          <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-white bg-amber-300 text-amber-900 shadow-[0_6px_12px_rgba(245,158,11,0.4),inset_0_3px_4px_rgba(255,255,255,0.8)]">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-black text-slate-800 tracking-tight">Nexus Studio AI</h3>
        <p className="text-xs font-bold text-purple-700/80">Diseño Tridimensional Inflado</p>

        {/* Squishy clay badges */}
        <div className="mt-5 flex items-center gap-2">
          <span className="rounded-full border border-white bg-white/70 px-3.5 py-1 text-xs font-extrabold text-purple-800 shadow-[0_6px_14px_rgba(147,51,234,0.15),inset_0_2px_3px_rgba(255,255,255,0.9)]">
            ★ PRO CREATOR
          </span>
          <span className="rounded-full border border-white bg-pink-200/80 px-3.5 py-1 text-xs font-extrabold text-pink-800 shadow-[0_6px_14px_rgba(244,63,94,0.15),inset_0_2px_3px_rgba(255,255,255,0.9)]">
            LVL 48
          </span>
        </div>

        {/* Action button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white bg-gradient-to-r from-purple-500 to-indigo-500 py-3 text-xs font-black text-white shadow-[0_12px_24px_-6px_rgba(147,51,234,0.5),inset_0_3px_4px_rgba(255,255,255,0.6),inset_0_-3px_4px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all">
          <Heart className="h-4 w-4 fill-white" /> Seguir Creador
        </button>
      </div>
    </div>
  );
}
