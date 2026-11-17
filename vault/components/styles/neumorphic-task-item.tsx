import React, { useState } from "react";
import { Check, Plus, Calendar, ListTodo } from "lucide-react";

export function NeumorphicTaskItem() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Optimizar Shaders WebGL a 60 FPS", done: true },
    { id: 2, text: "Diseñar especificación de Neo-Brutalismo", done: false },
    { id: 3, text: "Configurar canal CI/CD con Docker", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="w-full max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans">
      <div className="flex items-center justify-between border-b border-[#bec3c9]/40 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
            <ListTodo className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800">Sprint Activo</h3>
            <p className="text-[11px] text-slate-500 font-medium">3 tareas asignadas</p>
          </div>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className={`flex cursor-pointer items-center justify-between rounded-2xl p-3.5 transition-all duration-200 ${
              t.done
                ? "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] opacity-75"
                : "bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:scale-[1.01]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-lg transition-all ${
                  t.done
                    ? "bg-emerald-500 text-white shadow-xs"
                    : "shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
                }`}
              >
                {t.done && <Check className="h-3.5 w-3.5" />}
              </div>
              <span
                className={`text-xs font-semibold ${
                  t.done ? "text-slate-400 line-through" : "text-slate-700"
                }`}
              >
                {t.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
