"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login realizado! (placeholder)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="bg-[#0d0d0d]/70 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.15)] w-full max-w-sm animate-fade">

        <h1 className="text-2xl font-bold mb-6 text-center text-cyan-400">
          🔐 Acesso ao Sistema
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="osint-input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Senha</label>
            <input
              type="password"
              className="osint-input mt-1"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}