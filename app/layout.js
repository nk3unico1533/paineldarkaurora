import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "PainelConsulta | OSINT",
  description: "Painel de consultas avançadas estilo OSINT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#0A0A0A] text-white flex">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-10 ml-0 md:ml-72 transition-all">
          {children}
        </main>

      </body>
    </html>
  );
}