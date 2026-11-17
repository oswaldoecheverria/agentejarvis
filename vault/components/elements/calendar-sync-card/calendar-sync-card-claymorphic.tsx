import React from "react";
import { Calendar } from "lucide-react";

export function CalendarSyncCardClaymorphic() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4 text-emerald-300" />
        <h4 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Sincronizar Calendario</h4>
      </div>
      <p className="text-xs text-emerald-100/70 mb-3">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl border border-white/20 bg-white/10 py-1.5 text-center text-xs font-semibold text-white hover:bg-white/20">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CalendarSyncCardClaymorphic;
