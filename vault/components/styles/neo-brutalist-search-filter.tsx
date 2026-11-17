import React, { useState } from "react";
import { Search, Filter, X, ArrowRight } from "lucide-react";

export function NeoBrutalistSearchFilter() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("TODOS");

  const tags = ["TODOS", "FRONTEND", "BACKEND", "DEVOPS", "IA TOOLS"];

  return (
    <div className="w-full max-w-lg border-3 border-black bg-cyan-200 p-6 shadow-[7px_7px_0px_#000] font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-black text-black uppercase tracking-tight">Explorador de Recursos</h3>
        <span className="border-2 border-black bg-white px-2 py-0.5 text-[10px] font-black uppercase shadow-[2px_2px_0px_#000]">
          v2.4
        </span>
      </div>

      {/* Chunky Search input */}
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-black" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="BUSCAR HERRAMIENTAS..."
          className="w-full border-3 border-black bg-white py-2.5 pl-10 pr-20 text-xs font-black uppercase text-black placeholder-black/50 shadow-[4px_4px_0px_#000] focus:outline-none focus:bg-yellow-100"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-12 text-black hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <button className="absolute right-2 flex h-7 w-7 items-center justify-center border-2 border-black bg-yellow-400 shadow-[1.5px_1.5px_0px_#000] hover:bg-yellow-300">
          <ArrowRight className="h-3.5 w-3.5 text-black" />
        </button>
      </div>

      {/* Filter Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`border-2 border-black px-3 py-1 text-[11px] font-black uppercase tracking-wider transition-all ${
                isSelected
                  ? "bg-black text-white shadow-[2px_2px_0px_#000] translate-x-[1px] translate-y-[1px]"
                  : "bg-white text-black shadow-[3px_3px_0px_#000] hover:bg-pink-300 hover:text-black"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
