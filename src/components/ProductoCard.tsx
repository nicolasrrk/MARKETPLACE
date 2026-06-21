import Link from "next/link";
import type { Producto } from "@/types";
import ImagenProducto from "@/components/ImagenProducto";

// ============================================================
// ProductoCard — muestra un REGISTRO PRODUCTO como tarjeta
// La prop "producto" es un registro completo de la secuencia.
// Se accede a cada campo con la notación: producto.campo
// ============================================================

type Props = {
  producto: Producto;
  mostrarCodigo?: boolean;
};

export default function ProductoCard({ producto, mostrarCodigo = false }: Props) {
  const precioFormateado = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(producto.precio);

  const stockBajo = producto.stock < 10;

  return (
    <Link href={`/producto/${producto.codigoProducto}`} className="block">
      <article className="product-card h-full flex flex-col">
        {/* Imagen placeholder */}
        <div className="relative bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] h-48 flex items-center justify-center overflow-hidden">
          {/* Imagen del producto */}
          <ImagenProducto
            src={producto.imagen}
            alt={producto.nombre}
            fallback={iconoCategoria(producto.categoria)}
            className="object-cover"
          />
          {/* Capacidad badge */}
          <span className="absolute top-3 right-3 bg-white text-[#64748B] text-xs font-semibold px-2 py-1 rounded-md border border-[#E2E8F0]">
            {producto.capacidad}
          </span>
          {/* Código si se solicita */}
          {mostrarCodigo && (
            <span className="absolute top-3 left-3 badge-clave">
              {producto.codigoProducto}
            </span>
          )}
        </div>

        {/* Datos del registro */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          {/* Campo: categoria */}
          <span className="text-[#F59E0B] text-xs font-semibold uppercase tracking-wide">
            {producto.categoria}
          </span>

          {/* Campo: nombre */}
          <h3 className="text-[#1C1C1E] font-semibold text-base leading-tight">
            {producto.nombre}
          </h3>

          {/* Campo: descripcion (recortado) */}
          <p className="text-[#64748B] text-sm line-clamp-2 flex-1">
            {producto.descripcion}
          </p>

          {/* Campo: precio y stock */}
          <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0] mt-auto">
            <span className="text-[#1C1C1E] font-bold text-lg">
              {precioFormateado}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${
              stockBajo
                ? "bg-red-50 text-red-600"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}>
              Stock: {producto.stock}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Icono según categoría (visual placeholder) ──────────────
function iconoCategoria(categoria: string): string {
  switch (categoria) {
    case "Termos":           return "🫙";
    case "Tazas Térmicas":  return "☕";
    case "Cantimploras":     return "🥤";
    case "Botellas":         return "💧";
    default:                 return "📦";
  }
}
