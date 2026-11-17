import React, { useState } from "react";
import { Terminal, Shield, Cpu, Activity, Database } from "lucide-react";

export function DockFloatingActionCyberpunk() {
  const [active, setActive] = useState(0);
  const icons = [Terminal, Shield, Cpu, Activity, Database];

  return (
    <div className="flex items-center gap-2 border-2 border-cyan-400 bg-black/90 p-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
      {icons.map((Icon, idx) => {
        const isSel = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex h-10 w-10 items-center justify-center transition-all ${
              isSel
                ? "bg-cyan-400 text-black shadow-[0_0_10px_#06b6d4]"
                : "border border-cyan-900 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-950/40"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
export default DockFloatingActionCyberpunk;
