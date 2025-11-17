export default function Home() {
  return (
    <div>
      <h1 className="title">Bem-vindo ao Painel de Consultas 🚀</h1>
      <p className="subtitle">
        Gerencie consultas, clientes e dados de forma rápida e moderna.
      </p>

      <div className="grid">
        <a href="/login" className="card">
          <h2>🔐 Login</h2>
          <p>Acesse sua conta e tenha controle total do sistema.</p>
        </a>

        <a href="/consulta" className="card">
          <h2>🔎 Consulta</h2>
          <p>Faça consultas rápidas e precisas.</p>
        </a>

        <a href="/dashboard" className="card">
          <h2>📊 Dashboard</h2>
          <p>Veja relatórios e dados importantes.</p>
        </a>
      </div>
    </div>
  );
}