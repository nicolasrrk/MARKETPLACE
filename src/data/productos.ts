// ============================================================
// SECUENCIA DE REGISTROS: PRODUCTO[]
// GenStore — Marketplace de Productos Térmicos
// ============================================================
// Cada elemento del arreglo es un REGISTRO completo.
// La CLAVE PRIMARIA es: codigoProducto
// Formato de clave: PROD-XXX (ej: PROD-001)
// ============================================================

import type { Producto } from "@/types";

export const productos: Producto[] = [
  // ── Registro 0 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-001",            // CLAVE PRIMARIA
    nombre:         "Termo Clásico Acero 500ml",
    categoria:      "Termos",
    precio:         8500.00,
    stock:          42,
    capacidad:      "500ml",
    descripcion:    "Termo de acero inoxidable 304 de doble pared. Mantiene bebidas calientes hasta 12 horas y frías hasta 24 horas. Tapa rosca antigoteo.",
    imagen:         "/productos/termo-clasico-500.webp",
  },
  // ── Registro 1 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-002",            // CLAVE PRIMARIA
    nombre:         "Termo Stanley Adventure 1L",
    categoria:      "Termos",
    precio:         22000.00,
    stock:          18,
    capacidad:      "1L",
    descripcion:    "Termo de alta resistencia con asa lateral y boca ancha. Acero inoxidable 18/8. Apto para lavavajillas. Ideal para actividades al aire libre.",
    imagen:         "/productos/termo-stanley-1l.webp",
  },
  // ── Registro 2 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-003",            // CLAVE PRIMARIA
    nombre:         "Taza Térmica con Tapa 350ml",
    categoria:      "Tazas Térmicas",
    precio:         5200.00,
    stock:          67,
    capacidad:      "350ml",
    descripcion:    "Taza térmica de doble pared con tapa deslizable. Mantiene la temperatura hasta 6 horas. Diseño ergonómico y base antideslizante.",
    imagen:         "/productos/taza-termica-350.webp",
  },
  // ── Registro 3 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-004",            // CLAVE PRIMARIA
    nombre:         "Mug Térmico Matera 450ml",
    categoria:      "Tazas Térmicas",
    precio:         6800.00,
    stock:          31,
    capacidad:      "450ml",
    descripcion:    "Mug especial para mate. Diseño mate-friendly con boca amplia. Acero inoxidable interior. Tapa con cierre hermético y filtro integrado.",
    imagen:         "/productos/mug-matera-450.webp",
  },
  // ── Registro 4 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-005",            // CLAVE PRIMARIA
    nombre:         "Cantimplora Deportiva 750ml",
    categoria:      "Cantimploras",
    precio:         9400.00,
    stock:          55,
    capacidad:      "750ml",
    descripcion:    "Cantimplora deportiva con boquilla de silicona. Libre de BPA. Doble pared al vacío. Mosquetón incluido para colgar en mochila.",
    imagen:         "/productos/cantimplora-deportiva-750.webp",
  },
  // ── Registro 5 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-006",            // CLAVE PRIMARIA
    nombre:         "Cantimplora Outdoor 1.5L",
    categoria:      "Cantimploras",
    precio:         14500.00,
    stock:          24,
    capacidad:      "1.5L",
    descripcion:    "Cantimplora de gran capacidad para trekking y camping. Tapa de seguridad con bloqueo. Acero inoxidable 18/8. Conserva temperatura 18 horas.",
    imagen:         "/productos/cantimplora-outdoor-15.webp",
  },
  // ── Registro 6 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-007",            // CLAVE PRIMARIA
    nombre:         "Botella Slim 600ml",
    categoria:      "Botellas",
    precio:         7200.00,
    stock:          83,
    capacidad:      "600ml",
    descripcion:    "Botella de diseño slim de acero inoxidable. Entra en porta-vasos de auto. Tapa de rosca hermética. Disponible en varios colores.",
    imagen:         "/productos/botella-slim-600.webp",
  },
  // ── Registro 7 ──────────────────────────────────────────
  {
    codigoProducto: "PROD-008",            // CLAVE PRIMARIA
    nombre:         "Botella Plegable Silicona 500ml",
    categoria:      "Botellas",
    precio:         4900.00,
    stock:          49,
    capacidad:      "500ml",
    descripcion:    "Botella colapsable de silicona de grado alimentario. Se pliega cuando está vacía. Perfecta para viajes. Libre de BPA y ftalatos.",
    imagen:         "/productos/botella-plegable-500.webp",
  },
];

// ============================================================
// FUNCIÓN AUXILIAR: buscar por CLAVE PRIMARIA
// Acceso directo a un registro usando su clave.
// Equivalente a: Leer secuencia hasta encontrar codigoProducto = X
// ============================================================
export function buscarProductoPorClave(codigo: string): Producto | undefined {
  return productos.find((p) => p.codigoProducto === codigo);
}

// ============================================================
// FUNCIÓN AUXILIAR: filtrar por categoría (campo secundario)
// ============================================================
export function filtrarPorCategoria(categoria: string): Producto[] {
  if (categoria === "Todos") return productos;
  return productos.filter((p) => p.categoria === categoria);
}

// ============================================================
// FUNCIÓN AUXILIAR: buscar por nombre (campo secundario)
// ============================================================
export function buscarPorNombre(termino: string): Producto[] {
  const t = termino.toLowerCase();
  return productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(t) ||
      p.descripcion.toLowerCase().includes(t)
  );
}

// ============================================================
// Lista de categorías únicas disponibles en el catálogo
// ============================================================
export const categorias = ["Todos", "Termos", "Tazas Térmicas", "Cantimploras", "Botellas"];
