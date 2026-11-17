import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionLiquidGlass() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/25 p-2 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
              isSel
                ? "bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white shadow-md scale-105"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionLiquidGlass;
