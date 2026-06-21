"use client";

import { useState, useMemo } from "react";
import { productos, categorias } from "@/data/productos";
import ProductoCard from "@/components/ProductoCard";

// ============================================================
// CatalogoCliente — búsqueda y filtrado de la secuencia productos[]
// Demuestra acceso a campos: nombre, categoria, descripcion
// ============================================================

export default function CatalogoCliente() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // Filtrado sobre la secuencia de registros
  const productosFiltrados = useMemo(() => {
    const termino = busqueda.toLowerCase().trim();
    return productos.filter((p) => {
      const coincideCategoria =
        categoriaActiva === "Todos" || p.categoria === categoriaActiva;
      const coincideBusqueda =
        termino === "" ||
        p.nombre.toLowerCase().includes(termino) ||
        p.descripcion.toLowerCase().includes(termino) ||
        p.codigoProducto.toLowerCase().includes(termino);
      return coincideCategoria && coincideBusqueda;
    });
  }, [busqueda, categoriaActiva]);

  return (
    <div>
      {/* ── Barra de búsqueda ────────────────────────────── */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por nombre, descripción o código..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] bg-[#F8FAFC]"
            />
          </div>
          {busqueda && (
            <button
              onClick={() => setBusqueda("")}
              className="px-4 py-2.5 text-sm text-[#64748B] hover:text-[#1C1C1E] border border-[#E2E8F0] rounded-lg transition-colors"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* ── Filtros por categoría ────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
              categoriaActiva === cat
                ? "bg-[#F59E0B] border-[#F59E0B] text-[#1C1C1E] font-semibold"
                : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#F59E0B] hover:text-[#1C1C1E]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Resultado ────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#64748B]">
          {productosFiltrados.length === productos.length
            ? `${productos.length} productos en catálogo`
            : `${productosFiltrados.length} resultado${productosFiltrados.length !== 1 ? "s" : ""}`}
        </p>
        <p className="text-xs text-[#94A3B8]">
          Campo clave: <span className="font-mono text-[#F59E0B]">codigoProducto</span>
        </p>
      </div>

      {/* ── Grilla de productos ───────────────────────────── */}
      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productosFiltrados.map((producto) => (
            <ProductoCard
              key={producto.codigoProducto}
              producto={producto}
              mostrarCodigo={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#64748B]">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-medium">No se encontraron productos</p>
          <p className="text-sm mt-1">Probá con otro término o categoría</p>
          <button
            onClick={() => { setBusqueda(""); setCategoriaActiva("Todos"); }}
            className="mt-4 text-[#F59E0B] text-sm font-medium hover:underline"
          >
            Ver todos los productos
          </button>
        </div>
      )}
    </div>
  );
}
