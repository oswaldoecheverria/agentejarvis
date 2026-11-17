import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionNeoBrutalist() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-2 rounded-2xl border-3 border-black bg-white p-2 shadow-[5px_5px_0px_#000]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black transition-all ${
              isSel
                ? "bg-lime-300 shadow-[2px_2px_0px_#000] -translate-y-1"
                : "bg-slate-100 hover:bg-yellow-200 shadow-[1px_1px_0px_#000]"
            }`}
          >
            <Icon className="h-5 w-5 text-black" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionNeoBrutalist;
