import React from "react";

export function FooterInstitutionalLiquidGlass() {
  return (
    <footer className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/15">
        <div>
          <span className="font-bold text-sm tracking-tight text-white">ERIKASALUD</span>
          <p className="text-xs text-emerald-100/70 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs text-emerald-200/80 space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-bold text-white">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-emerald-200/70">
        <span>© 2026 ErikaSalud. LOPDP cumplido.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
}
export default FooterInstitutionalLiquidGlass;
