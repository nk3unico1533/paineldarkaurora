export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 text-white">
      <section className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bem-vindo ao Painel de Consultas <span className="inline-block">🚀</span>
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          Consulte dados como CPF, RG, Placa, Telefone, Nome, Email, CEP e CNPJ
          de forma rápida, moderna e intuitiva.
        </p>

        <div className="space-y-6">

          {/* CARD LOGIN */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:bg-neutral-800/60 transition shadow-lg backdrop-blur">
            <a href="/login" className="no-underline">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                🔐 Login
              </h2>
              <p className="text-gray-400">
                Acesse sua conta e tenha controle total do sistema.
              </p>
            </a>
          </div>

          {/* CARD CONSULTA */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:bg-neutral-800/60 transition shadow-lg backdrop-blur">
            <a href="/consulta" className="no-underline">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                🔎 Consulta
              </h2>
              <p className="text-gray-400">
                Faça consultas rápidas e precisas de CPF, Telefone, Placa e mais.
              </p>
            </a>
          </div>

          {/* CARD DASHBOARD */}
          <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:bg-neutral-800/60 transition shadow-lg backdrop-blur">
            <a href="/dashboard" className="no-underline">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
                📊 Dashboard
              </h2>
              <p className="text-gray-400">
                Veja relatórios, histórico de consultas e dados importantes.
              </p>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}