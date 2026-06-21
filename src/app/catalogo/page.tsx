import CatalogoCliente from "@/components/CatalogoCliente";

// ============================================================
// Página Catálogo
// Muestra la secuencia completa de registros productos[]
// con búsqueda (por nombre/descripción) y filtro (por categoría)
// ============================================================

export default function CatalogoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Encabezado */}
      <div className="mb-8">
        <div className="thermal-bar w-12 mb-4" />
        <h1 className="text-3xl font-bold text-[#1C1C1E]">Catálogo de Productos</h1>
        <p className="text-[#64748B] mt-2">
          Secuencia de registros{" "}
          <code className="font-mono text-[#F59E0B] bg-[#FEF3C7] px-1 rounded text-sm">
            productos[]
          </code>
          . Cada ítem es un registro identificado por su{" "}
          <code className="font-mono text-[#F59E0B] bg-[#FEF3C7] px-1 rounded text-sm">
            codigoProducto
          </code>
          .
        </p>
      </div>

      {/* Componente cliente con búsqueda y filtros */}
      <CatalogoCliente />
    </div>
  );
}
