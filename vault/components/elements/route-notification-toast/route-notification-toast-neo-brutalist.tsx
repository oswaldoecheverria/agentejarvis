import React, { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

export function RouteNotificationToastNeoBrutalist() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#e0e5ec] p-3.5 text-slate-800 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] font-sans">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <h5 className="text-xs font-bold text-slate-800">Cita Confirmada con Éxito</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Se ha notificado vía WhatsApp al paciente.</p>
          </div>
        </div>
        <button onClick={() => setVisible(false)} className="text-slate-400 hover:text-slate-600">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default RouteNotificationToastNeoBrutalist;