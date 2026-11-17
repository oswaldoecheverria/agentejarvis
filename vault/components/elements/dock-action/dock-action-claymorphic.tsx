import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionClaymorphic() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2.5 rounded-3xl bg-white/70 p-2.5 backdrop-blur-md shadow-[0_12px_24px_rgba(150,130,200,0.2),inset_0_3px_5px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(0,0,0,0.05)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all ${
              isSel
                ? "bg-violet-600 text-white shadow-[0_6px_12px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.4)] scale-105"
                : "bg-violet-50 text-violet-600 hover:bg-violet-100"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionClaymorphic;
