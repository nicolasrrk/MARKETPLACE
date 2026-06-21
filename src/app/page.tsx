import Link from "next/link";
import { productos } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";

// ============================================================
// Página de inicio — GenStore
// Muestra los primeros 4 productos de la secuencia productos[]
// ============================================================

export default function HomePage() {
  const destacados = productos.slice(0, 4);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-[#1C1C1E] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-4">
              Productos térmicos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Todo lo que necesitás para mantener la temperatura
            </h1>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              Termos, tazas, cantimploras y botellas de alta calidad.
              Cada producto en nuestro catálogo es un{" "}
              <span className="text-[#F59E0B] font-medium">registro único</span>{" "}
              identificado por su código.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1C1E] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Ver catálogo
              </Link>
              <Link
                href="/registros-y-claves"
                className="border border-white/20 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Registros y Claves →
              </Link>
            </div>
          </div>
        </div>
        <div className="thermal-bar" />
      </section>

      {/* ── Estadísticas ──────────────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: productos.length.toString(), label: "Registros en catálogo" },
              { valor: "4", label: "Categorías disponibles" },
              { valor: "PROD-XXX", label: "Formato de clave primaria" },
              { valor: "8", label: "Campos por registro" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-[#F59E0B]">{stat.valor}</p>
                <p className="text-sm text-[#64748B] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos destacados ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1C1E]">Productos destacados</h2>
            <p className="text-[#64748B] text-sm mt-1">
              Los primeros 4 registros de la secuencia{" "}
              <code className="font-mono text-[#F59E0B] bg-[#FEF3C7] px-1 rounded">productos[]</code>
            </p>
          </div>
          <Link
            href="/catalogo"
            className="text-sm text-[#F59E0B] hover:text-[#D97706] font-semibold hidden md:block"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destacados.map((producto) => (
            <ProductoCard
              key={producto.codigoProducto}
              producto={producto}
              mostrarCodigo={true}
            />
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/catalogo"
            className="text-[#F59E0B] font-semibold text-sm"
          >
            Ver todos los productos →
          </Link>
        </div>
      </section>

      {/* ── Banner académico ──────────────────────────────── */}
      <section className="bg-[#FEF3C7] border-t border-b border-[#F59E0B]/30 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-4xl">📋</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-[#92400E]">
                Proyecto Académico — Algoritmos y Estructuras de Datos 2026
              </h3>
              <p className="text-[#78350F] text-sm mt-1">
                Este sitio demuestra el uso de{" "}
                <strong>Registros, Campos y Claves</strong>. Cada producto es un
                registro; <code className="font-mono">codigoProducto</code> es la
                clave que lo identifica unívocamente.
              </p>
            </div>
            <Link
              href="/registros-y-claves"
              className="bg-[#92400E] hover:bg-[#78350F] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Ver página académica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
