import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function AppointmentCalendarGlassmorphic() {
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
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <Calendar className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider">SELECCIÓN DE TURNO</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`rounded-xl border py-2 text-center transition-all ${
                isSel ? "border-emerald-300 bg-white/25 text-white shadow-sm" : "border-white/10 hover:bg-white/10 text-emerald-100/70"
              }`}
            >
              <div className="text-[9px] font-medium">{d.name}</div>
              <div className="text-sm font-bold mt-0.5">{d.num}</div>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {times.map((t) => {
          const isSel = selectedTime === t;
          return (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-semibold ${
                isSel ? "border-emerald-400 bg-emerald-500/80 text-white shadow-sm" : "border-white/15 hover:bg-white/10 text-emerald-100/80"
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-emerald-300" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>CONFIRMAR AGENDAMIENTO</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default AppointmentCalendarGlassmorphic;
