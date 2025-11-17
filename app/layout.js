import './globals.css';

export const metadata = {
  title: 'Painel Consulta',
  description: 'Sistema moderno de consulta com App Router'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header className="topbar">
          <div className="logo">🔥 PainelConsulta</div>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/consulta">Consulta</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
