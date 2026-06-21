// ============================================================
// DEFINICIÓN DE REGISTROS — GenStore Marketplace
// Algoritmos y Estructuras de Datos 2026
// ============================================================
// Cada tipo representa un REGISTRO según la materia.
// Cada propiedad representa un CAMPO del registro.
// La clave de cada registro está indicada con comentario.
// ============================================================

// ------------------------------------------------------------
// REGISTRO: PRODUCTO
// Representa cada artículo térmico disponible en el catálogo.
//
// PRODUCTO = Registro
//   codigoProducto : AN(10);   ← CLAVE PRIMARIA
//   nombre         : AN(100);
//   categoria      : AN(50);
//   precio         : R(8,2);
//   stock          : N(4);
//   capacidad      : AN(20);
//   descripcion    : AN(300);
//   imagen         : AN(200);
// Fin Registro;
// ------------------------------------------------------------
export type Producto = {
  codigoProducto: string;  // AN(10)  — CLAVE PRIMARIA
  nombre:         string;  // AN(100) — Campo Contenido
  categoria:      string;  // AN(50)  — Campo Contenido
  precio:         number;  // R(8,2)  — Campo Contenido
  stock:          number;  // N(4)    — Campo Contenido
  capacidad:      string;  // AN(20)  — Campo Contenido
  descripcion:    string;  // AN(300) — Campo Contenido
  imagen:         string;  // AN(200) — Campo Contenido (ruta al archivo)
};

// ------------------------------------------------------------
// REGISTRO: CLIENTE
// Representa cada persona que interactúa con GenStore.
//
// CLIENTE = Registro
//   idCliente : AN(10);   ← CLAVE PRIMARIA
//   nombre    : AN(50);
//   apellido  : AN(50);
//   telefono  : AN(15);
//   email     : AN(100);
// Fin Registro;
// ------------------------------------------------------------
export type Cliente = {
  idCliente: string;  // AN(10)  — CLAVE PRIMARIA
  nombre:    string;  // AN(50)  — Campo Contenido
  apellido:  string;  // AN(50)  — Campo Contenido
  telefono:  string;  // AN(15)  — Campo Contenido
  email:     string;  // AN(100) — Campo Contenido
};

// ------------------------------------------------------------
// REGISTRO: FECHA (subcampo — CAMPO CONTINENTE)
// Subcampo de Pedido. Está formado por tres campos contenidos.
// Por eso "fecha" es un CAMPO CONTINENTE dentro de Pedido.
// ------------------------------------------------------------
export type Fecha = {
  dia:  number;  // N(2) — Campo Contenido
  mes:  number;  // N(2) — Campo Contenido
  anio: number;  // N(4) — Campo Contenido
};

// ------------------------------------------------------------
// REGISTRO: PEDIDO
// Representa cada pedido generado por un cliente.
//
// PEDIDO = Registro
//   numeroPedido : AN(10);      ← CLAVE PRIMARIA
//   fecha = Registro            ← CAMPO CONTINENTE
//     dia  : N(2);
//     mes  : N(2);
//     anio : N(4);
//   Fin Registro;
//   idCliente : AN(10);         ← CLAVE FORÁNEA → referencia CLIENTE
//   total     : R(10,2);
// Fin Registro;
// ------------------------------------------------------------
export type Pedido = {
  numeroPedido: string;  // AN(10)   — CLAVE PRIMARIA
  fecha:        Fecha;   // Registro — CAMPO CONTINENTE (dia/mes/anio)
  idCliente:    string;  // AN(10)   — CLAVE FORÁNEA → CLIENTE.idCliente
  total:        number;  // R(10,2)  — Campo Contenido
};

// ------------------------------------------------------------
// CATEGORÍAS DE PRODUCTOS
// Valores válidos para el campo "categoria" del registro Producto.
// ------------------------------------------------------------
export type CategoriaProducto =
  | "Termos"
  | "Tazas Térmicas"
  | "Cantimploras"
  | "Botellas"
  | "Todos";
