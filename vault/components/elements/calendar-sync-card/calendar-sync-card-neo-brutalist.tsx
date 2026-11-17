import React from "react";
import { Calendar, Check, ExternalLink } from "lucide-react";

export function CalendarSyncCardNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4" />
        <h4 className="text-xs font-black uppercase">SINCRONIZAR CON TU CALENDARIO</h4>
      </div>
      <p className="text-xs font-bold text-slate-800 mb-3">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl border-2 border-black bg-white py-1.5 text-center text-xs font-black shadow-[2px_2px_0px_#000] hover:bg-yellow-200">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CalendarSyncCardNeoBrutalist;
