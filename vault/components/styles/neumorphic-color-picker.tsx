import React, { useState } from "react";
import { Palette, Check } from "lucide-react";

export function NeumorphicColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#10b981");

  const colors = [
    { name: "Emerald", hex: "#10b981" },
    { name: "Cyan", hex: "#06b6d4" },
    { name: "Indigo", hex: "#6366f1" },
    { name: "Amber", hex: "#f59e0b" },
    { name: "Rose", hex: "#f43f5e" },
  ];

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <Palette className="h-5 w-5 text-slate-700" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">Selector de Tono</h3>
          <p className="text-[11px] text-slate-500 font-medium">Acento de interfaz</p>
        </div>
      </div>

      {/* Main Preview Swatch */}
      <div className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-xl shadow-[3px_3px_6px_rgba(0,0,0,0.15)] transition-colors"
            style={{ backgroundColor: selectedColor }}
          />
          <div>
            <div className="text-xs font-bold text-slate-700">Código Hex</div>
            <div className="font-mono text-xs font-semibold text-slate-500 uppercase">
              {selectedColor}
            </div>
          </div>
        </div>
        <span className="rounded-lg bg-[#e0e5ec] px-2.5 py-1 text-[10px] font-bold text-slate-600 shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff]">
          CSS Var
        </span>
      </div>

      {/* Palette circles */}
      <div className="mt-5 flex items-center justify-between">
        {colors.map((c) => {
          const isSelected = selectedColor === c.hex;
          return (
            <button
              key={c.hex}
              onClick={() => setSelectedColor(c.hex)}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-200 ${
                isSelected
                  ? "shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] scale-95"
                  : "shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:scale-105"
              }`}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-xl text-white shadow-xs"
                style={{ backgroundColor: c.hex }}
              >
                {isSelected && <Check className="h-4 w-4" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
