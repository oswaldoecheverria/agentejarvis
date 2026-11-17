import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function AppointmentCalendarClaymorphic() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");

  const days = [
    { num: 10, name: "Mon" },
    { num: 11, name: "Tue" },
    { num: 12, name: "Wed" },
    { num: 13, name: "Thu" },
    { num: 14, name: "Fri" },
  ];

  const times = ["09:00", "10:30", "14:00", "16:30"];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm font-sans text-neutral-900">
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-2.5 mb-3">
        <Calendar className="h-4 w-4 text-neutral-900" />
        <span className="text-xs font-bold uppercase tracking-wider">APPOINTMENT SCHEDULE</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5 mb-3.5">
        {days.map((d, idx) => {
          const isSel = selectedDay === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`rounded-xl border py-2 text-center transition-all ${
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-600"
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
              className={`flex items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-medium ${
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-700"
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-neutral-500" />
              <span>{t}</span>
            </button>
          );
        })}
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-2.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
        <span>Confirm Appointment</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default AppointmentCalendarClaymorphic;
