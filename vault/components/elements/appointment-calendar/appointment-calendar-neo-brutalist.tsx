import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function AppointmentCalendarNeoBrutalist() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "LUN" },
    { num: 11, name: "MAR" },
    { num: 12, name: "MIÉ" },
    { num: 13, name: "JUE" },
    { num: 14, name: "VIE" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-amber-200 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3">
        <Calendar className="h-4 w-4 text-black" />
        <span className="text-xs font-black uppercase">SELECCIONA FECHA Y HORA</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`rounded-xl border-2 border-black py-2 text-center transition-all ${
                isSel ? "bg-black text-white shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-200"
              }`}
            >
              <div className="text-[9px] font-black">{d.name}</div>
              <div className="text-sm font-black mt-0.5">{d.num}</div>
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
              className={`flex items-center justify-center gap-1.5 rounded-xl border-2 border-black py-1.5 text-xs font-black ${
                isSel ? "bg-lime-400 text-black shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-100"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black py-2 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>CONFIRMAR CITA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default AppointmentCalendarNeoBrutalist;
