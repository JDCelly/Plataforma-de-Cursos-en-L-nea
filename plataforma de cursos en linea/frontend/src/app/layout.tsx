import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Cambiamos el título que sale en la pestaña del navegador
export const metadata: Metadata = {
  title: "Mi Plataforma de Cursos",
  description: "Aprende a tu propio ritmo",
};

// 2. ¡AQUÍ ESTÁ LA MAGIA! Tus nuevos botones del menú
const navLinks = [
  { href: "/", label: "🏠 Inicio" },
  { href: "/usuarios", label: "👤 Usuarios" },
  { href: "/cursos", label: "📚 Cursos" },
  { href: "/lecciones", label: "📖 Lecciones" },
  { href: "/inscripciones", label: "📝 Inscripciones" },
  // 👇 Aquí puse un nombre de relleno para tu 5ta historia
  { href: "/certificados", label: "⭐ certificados" }, 
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-zinc-900 text-white flex flex-col shrink-0">
          <div className="p-4 border-b border-zinc-700">
            {/* 3. El nuevo título de tu menú lateral */}
            <h1 className="text-sm font-bold text-zinc-100 leading-tight">
              🚀 Plataforma de Cursos
            </h1>
            <p className="text-xs text-zinc-400 mt-1">Mi Proyecto Final</p>
          </div>
          <nav className="flex-1 py-4">
            <ul className="space-y-1 px-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-zinc-700">
            <p className="text-xs text-zinc-500">Mi Proyecto - 2026 ✅</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-zinc-50">{children}</main>
      </body>
    </html>
  );
}