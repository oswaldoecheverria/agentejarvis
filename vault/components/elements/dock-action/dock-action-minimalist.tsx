import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionMinimalist() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-xs">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
              isSel
                ? "bg-neutral-900 text-white"
                : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionMinimalist;
