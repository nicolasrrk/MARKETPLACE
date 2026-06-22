import { notFound } from "next/navigation";
import Link from "next/link";
import { buscarProductoPorClave, productos } from "@/data/productos";
import ImagenProducto from "@/components/ImagenProducto";

// ============================================================
// Página de Detalle de Producto
// Accede al registro usando su CLAVE PRIMARIA (codigoProducto)
// Equivalente a: buscar en la secuencia hasta encontrar la clave
// ============================================================

type Props = {
  params: Promise<{ codigo: string }>;
};

export default async function ProductoDetallePage({ params }: Props) {
  const { codigo } = await params;

  // Búsqueda por CLAVE PRIMARIA
  const producto = buscarProductoPorClave(codigo);

  if (!producto) {
    notFound();
  }

  const precioFormateado = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(producto.precio);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-2 text-sm text-[#64748B] mb-8">
        <Link href="/" className="hover:text-[#F59E0B] transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/catalogo" className="hover:text-[#F59E0B] transition-colors">Catálogo</Link>
        <span>/</span>
        <span className="text-[#1C1C1E] font-medium">{producto.nombre}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Imagen placeholder */}
        <div className="relative bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] rounded-2xl h-80 lg:h-full min-h-64 overflow-hidden flex items-center justify-center">
          <ImagenProducto
            src={producto.imagen}
            alt={producto.nombre}
            fallback={iconoCategoria(producto.categoria)}
            className="object-contain p-6"
          />
          <p className="absolute bottom-3 right-3 text-[#94A3B8] text-xs font-mono bg-white/80 px-2 py-1 rounded">
            {producto.imagen}
          </p>
        </div>

        {/* Datos del registro */}
        <div className="flex flex-col gap-5">
          {/* Clave primaria destacada */}
          <div className="flex items-center gap-3">
            <span className="badge-clave">🔑 Clave Primaria</span>
            <code className="font-mono text-[#F59E0B] font-bold text-lg">
              {producto.codigoProducto}
            </code>
          </div>

          {/* Categoria */}
          <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wide">
            {producto.categoria}
          </p>

          {/* Nombre */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] leading-tight">
            {producto.nombre}
          </h1>

          {/* Capacidad */}
          <span className="inline-flex items-center gap-1.5 text-sm text-[#64748B]">
            <span>💧</span> Capacidad: <strong>{producto.capacidad}</strong>
          </span>

          {/* Descripción */}
          <p className="text-[#64748B] leading-relaxed">
            {producto.descripcion}
          </p>

          {/* Precio y stock */}
          <div className="flex items-center gap-4 py-4 border-t border-b border-[#E2E8F0]">
            <span className="text-3xl font-bold text-[#1C1C1E]">
              {precioFormateado}
            </span>
            <span className={`text-sm px-3 py-1.5 rounded-lg font-medium ${
              producto.stock < 10
                ? "bg-red-50 text-red-600"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}>
              {producto.stock < 10 ? "⚠️" : "✓"} {producto.stock} unidades en stock
            </span>
          </div>

          {/* Tabla de campos del registro — vista académica */}
          <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4">
            <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
              Campos de este registro PRODUCTO
            </p>
            <div className="overflow-x-auto">
            <table className="registro-table text-xs">
              <thead>
                <tr>
                  <th>Campo</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th>Clasificación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="fila-clave">
                  <td className="font-mono font-bold">codigoProducto</td>
                  <td>AN(10)</td>
                  <td className="font-mono text-[#F59E0B] font-bold">{producto.codigoProducto}</td>
                  <td><span className="badge-clave">Clave Primaria</span></td>
                </tr>
                <tr>
                  <td className="font-mono">nombre</td>
                  <td>AN(100)</td>
                  <td>{producto.nombre}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">categoria</td>
                  <td>AN(50)</td>
                  <td>{producto.categoria}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">precio</td>
                  <td>R(8,2)</td>
                  <td>{producto.precio.toFixed(2)}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">stock</td>
                  <td>N(4)</td>
                  <td>{producto.stock}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">capacidad</td>
                  <td>AN(20)</td>
                  <td>{producto.capacidad}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">descripcion</td>
                  <td>AN(300)</td>
                  <td className="max-w-xs truncate">{producto.descripcion.substring(0, 40)}…</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
                <tr>
                  <td className="font-mono">imagen</td>
                  <td>AN(200)</td>
                  <td className="font-mono text-[#94A3B8]">{producto.imagen}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>

      {/* Otros productos */}
      <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:text-[#D97706] transition-colors"
        >
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}

function iconoCategoria(categoria: string): string {
  switch (categoria) {
    case "Termos":          return "🫙";
    case "Tazas Térmicas": return "☕";
    case "Cantimploras":    return "🥤";
    case "Botellas":        return "💧";
    default:                return "📦";
  }
}

// Generación estática de rutas (por clave primaria)
export async function generateStaticParams() {
  return productos.map((p) => ({ codigo: p.codigoProducto }));
}
