import React, { useState } from "react";
import { Home, Search, Bell, Settings, User } from "lucide-react";

export function DockFloatingActionNeumorphic() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Bell, Settings, User];

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#e0e5ec] p-2.5 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
              isSel
                ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                : "bg-[#e0e5ec] text-slate-500 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-800"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionNeumorphic;
