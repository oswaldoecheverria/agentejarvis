import React from "react";
import { Calendar } from "lucide-react";

export function CalendarSyncCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-4 w-4 text-indigo-600" />
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Sincronizar Calendario</h4>
      </div>
      <p className="text-xs text-slate-500 mb-3.5">
        Consulta médica: Viernes 14 Noviembre · 10:30 AM
      </p>
      <div className="grid grid-cols-3 gap-2.5">
        {["Google", "Apple", "Outlook"].map((cal) => (
          <button key={cal} className="rounded-xl bg-[#e0e5ec] py-2 text-center text-xs font-bold text-indigo-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
            {cal}
          </button>
        ))}
      </div>
    </div>
  );
}
export default CalendarSyncCardNeumorphic;
