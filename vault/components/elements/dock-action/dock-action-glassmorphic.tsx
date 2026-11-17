import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionGlassmorphic() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45),inset_0_1px_2px_rgba(255,255,255,0.35)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
              isSel
                ? "border border-white/40 bg-white/25 text-white shadow-md scale-110"
                : "text-emerald-200/70 hover:text-white hover:bg-white/10"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionGlassmorphic;
