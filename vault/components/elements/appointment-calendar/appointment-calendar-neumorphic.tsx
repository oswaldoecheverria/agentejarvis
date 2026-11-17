import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function AppointmentCalendarNeumorphic() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "Lun" },
    { num: 11, name: "Mar" },
    { num: 12, name: "Mié" },
    { num: 13, name: "Jue" },
    { num: 14, name: "Vie" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3.5">
        <Calendar className="h-4 w-4 text-indigo-600" />
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">SELECCIÓN DE TURNO</span>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`rounded-2xl py-2.5 text-center transition-all ${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] hover:text-slate-900"
              }`}
            >
              <div className="text-[9px] font-bold">{d.name}</div>
              <div className="text-sm font-extrabold mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold ${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff]"
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-indigo-500" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
        <span>CONFIRMAR AGENDAMIENTO</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default AppointmentCalendarNeumorphic;
