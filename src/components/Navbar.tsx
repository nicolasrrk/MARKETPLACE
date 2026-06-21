"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-[#1C1C1E] sticky top-0 z-50">
      {/* Thermal accent bar */}
      <div className="thermal-bar" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#F59E0B] text-xl font-bold tracking-tight">
              Genstore
            </span>
            <span className="text-[#64748B] text-xs hidden sm:block mt-1">
              — productos térmicos
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-[#94A3B8] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-[#94A3B8] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              Catálogo
            </Link>
            <Link
              href="/registros-y-claves"
              className="flex items-center gap-1.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1C1E] px-4 py-2 text-sm font-semibold transition-colors rounded-md"
            >
              <span className="text-xs">📋</span>
              Registros y Claves
            </Link>
          </nav>

          {/* Hamburger mobile */}
          <button
            className="md:hidden text-[#94A3B8] hover:text-white p-2"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuAbierto ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav mobile */}
        {menuAbierto && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            <Link
              href="/"
              className="block text-[#94A3B8] hover:text-white px-3 py-2 text-sm font-medium rounded-md"
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="block text-[#94A3B8] hover:text-white px-3 py-2 text-sm font-medium rounded-md"
              onClick={() => setMenuAbierto(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/registros-y-claves"
              className="block text-[#F59E0B] px-3 py-2 text-sm font-semibold"
              onClick={() => setMenuAbierto(false)}
            >
              📋 Registros y Claves
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
