"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const path = usePathname();

  const linkClass = (href) =>
    `block px-5 py-3 rounded-lg mb-2 text-sm font-medium transition ${
      path === href
        ? "bg-[#1A1A1A] text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
        : "text-gray-300 hover:bg-[#151515] hover:text-white"
    }`;

  return (
    <aside className="hidden md:block w-72 bg-[#0D0D0D] border-r border-white/10 h-screen fixed left-0 top-0 p-6">
      <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
        🔥 PainelConsulta
      </h1>

      <nav>
        <Link href="/" className={linkClass("/")}>
          🏠 Home
        </Link>
        <Link href="/login" className={linkClass("/login")}>
          🔐 Login
        </Link>
        <Link href="/consulta" className={linkClass("/consulta")}>
          🔎 Consulta
        </Link>
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          📊 Dashboard
        </Link>
      </nav>

      <hr className="border-white/10 my-6" />

      <p className="text-xs text-gray-500 px-2">OSINT Intelligence System</p>
    </aside>
  );
}