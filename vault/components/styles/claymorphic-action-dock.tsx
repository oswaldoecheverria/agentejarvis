import React, { useState } from "react";
import { Compass, Sparkles, MessageCircle, Heart, FolderHeart } from "lucide-react";

export function ClaymorphicActionDock() {
  const [active, setActive] = useState(0);

  const items = [
    { icon: Compass, color: "from-purple-400 to-indigo-400 text-white" },
    { icon: Sparkles, color: "from-amber-300 to-orange-400 text-white" },
    { icon: MessageCircle, color: "from-cyan-400 to-blue-400 text-white" },
    { icon: Heart, color: "from-pink-400 to-rose-400 text-white" },
    { icon: FolderHeart, color: "from-emerald-400 to-teal-400 text-white" },
  ];

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 rounded-[3rem] border-3 border-white bg-gradient-to-r from-purple-100 via-indigo-50 to-pink-100 p-3 shadow-[0_25px_50px_-10px_rgba(147,51,234,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(147,51,234,0.1)] font-sans">
      {items.map((it, idx) => {
        const Icon = it.icon;
        const isSelected = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-13 w-13 items-center justify-center rounded-2xl border-2 border-white transition-all duration-200 ${
              isSelected
                ? `bg-gradient-to-br ${it.color} -translate-y-2 scale-110 shadow-[0_12px_24px_rgba(147,51,234,0.4),inset_0_3px_4px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.2)]`
                : "bg-white/80 text-purple-900 shadow-[0_6px_12px_rgba(147,51,234,0.15),inset_0_2px_3px_rgba(255,255,255,0.9)] hover:scale-105"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}
