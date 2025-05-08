import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Park Residence - Versati",
  description: "Conquiste seu apê completo em Diadema! Lazer, segurança e condições facilitadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}
      {/* Botão Flutuante do WhatsApp */}
<a
  href="https://wa.me/5511941646726?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Green%20Park%20Residence."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
  aria-label="Fale conosco no WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.375 0 0 5.375 0 12c0 2.15.563 4.175 1.55 5.938L0 24l6.238-1.538C7.938 23.45 9.95 24 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0zm0 22c-1.75 0-3.45-.45-4.95-1.275l-.35-.2-3.7.913.95-3.612-.2-.363C2.6 15.925 2 14 2 12 2 6.475 6.475 2 12 2s10 4.475 10 10-4.475 10-10 10zm5.138-7.775c-.275-.138-1.625-.8-1.875-.9-.25-.1-.45-.138-.65.138-.2.275-.75.9-.925 1.075-.175.175-.325.2-.6.063-.275-.138-1.163-.425-2.213-1.35-.813-.725-1.363-1.625-1.525-1.9-.163-.275-.018-.425.125-.563.138-.137.275-.35.412-.525.138-.175.183-.3.275-.5.092-.2.046-.375-.025-.525-.075-.15-.65-1.575-.888-2.15-.237-.575-.475-.5-.65-.5-.175 0-.375-.025-.575-.025-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.1 3.2 5.088 4.475.712.3 1.263.475 1.688.6.712.225 1.363.2 1.875.125.575-.088 1.625-.663 1.85-1.3.225-.637.225-1.187.15-1.3-.075-.112-.25-.175-.525-.312z"/>
  </svg>
</a>
      </body>
    </html>
  );
}

