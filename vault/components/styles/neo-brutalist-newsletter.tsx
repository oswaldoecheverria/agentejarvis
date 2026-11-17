import React, { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";

export function NeoBrutalistNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-md border-3 border-black bg-yellow-300 p-6 shadow-[7px_7px_0px_#000] font-sans">
      <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0px_#000] mb-3">
        <Mail className="h-5 w-5 text-black" />
      </div>

      <h3 className="text-xl font-black uppercase tracking-tight text-black">
        CERO SPAM. SOLO CÓDIGO.
      </h3>
      <p className="mt-1 text-xs font-bold text-black/80 leading-relaxed">
        Recibe cada viernes un componente curado, tips de rendimiento de Tailwind y cero relleno publicitario.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="TU-CORREO@DEV.COM"
            required
            className="w-full border-3 border-black bg-white p-3 text-xs font-black uppercase text-black placeholder-black/40 shadow-[4px_4px_0px_#000] focus:outline-none focus:bg-pink-100"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border-3 border-black bg-black py-3 text-xs font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_#000] hover:bg-white hover:text-black hover:shadow-[5px_5px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all"
        >
          {submitted ? (
            <span className="flex items-center gap-1.5 text-lime-400">
              <CheckCircle2 className="h-4 w-4" /> ¡SUSCRITO CON ÉXITO!
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Send className="h-4 w-4" /> UNIRME A LA COMUNIDAD
            </span>
          )}
        </button>
      </form>

      <div className="mt-4 border-t-2 border-black pt-3 flex items-center justify-between text-[10px] font-black uppercase text-black/70">
        <span>🔒 Datos protegidos</span>
        <span>Sin trackers de terceros</span>
      </div>
    </div>
  );
}
