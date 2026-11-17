import React, { useState } from "react";
import { Home, Layers, Compass, Settings, Bookmark } from "lucide-react";

export function NeumorphicTabBar() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "discover", label: "Explorar", icon: Compass },
    { id: "library", label: "Colección", icon: Layers },
    { id: "saved", label: "Guardados", icon: Bookmark },
    { id: "settings", label: "Ajustes", icon: Settings },
  ];

  return (
    <div className="w-full max-w-md rounded-[2.5rem] bg-[#e0e5ec] p-4 shadow-[12px_12px_24px_#bec3c9,-12px_-12px_24px_#ffffff] font-sans">
      <div className="flex items-center justify-between gap-1.5 rounded-2xl bg-[#e0e5ec] p-1.5 shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-[#e0e5ec] text-emerald-600 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="mt-1 text-[10px] font-bold">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
