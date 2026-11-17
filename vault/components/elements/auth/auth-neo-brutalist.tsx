import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthNeoBrutalist() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 800);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm border-3 border-black bg-lime-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">
          <KeyRound className="h-6 w-6 text-black" />
        </div>
        <h3 className="mt-3 text-lg font-black uppercase text-black">Nexus Security Gateway</h3>
        <p className="text-xs font-bold text-black/70">Acceso autenticado seguro</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div>
          <label className="block text-[10px] font-black uppercase text-black mb-1">
            Correo de Ingeniero
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-4 w-4 text-black" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-black bg-white py-2 pl-9 pr-3 text-xs font-bold text-black shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-yellow-100"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase text-black mb-1">
            Llave de Seguridad
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-4 w-4 text-black" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border-2 border-black bg-white py-2 pl-9 pr-3 text-xs font-bold text-black shadow-[2px_2px_0px_#000] focus:outline-none focus:bg-yellow-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 border-2 border-black bg-black py-3 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all"
        >
          {success ? (
            <span className="flex items-center gap-1.5 text-lime-400">
              <ShieldCheck className="h-4 w-4" /> ACCESO AUTORIZADO
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              INICIAR SESIÓN <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default AuthNeoBrutalist;
