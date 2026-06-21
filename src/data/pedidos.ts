// ============================================================
// SECUENCIA DE REGISTROS: PEDIDO[]
// GenStore — Marketplace de Productos Térmicos
// ============================================================
// La CLAVE PRIMARIA es: numeroPedido
// "fecha" es un CAMPO CONTINENTE (contiene dia, mes, anio)
// "idCliente" es CLAVE FORÁNEA → referencia CLIENTE.idCliente
// ============================================================

import type { Pedido } from "@/types";

export const pedidos: Pedido[] = [
  // ── Registro 0 ──────────────────────────────────────────
  {
    numeroPedido: "PED-001",         // CLAVE PRIMARIA
    fecha: {                         // CAMPO CONTINENTE
      dia:  10,                      //   subcampo: N(2)
      mes:   6,                      //   subcampo: N(2)
      anio: 2026,                    //   subcampo: N(4)
    },
    idCliente: "CLI-001",            // CLAVE FORÁNEA → CLIENTE[idCliente="CLI-001"]
    total:     8500.00,
  },
  // ── Registro 1 ──────────────────────────────────────────
  {
    numeroPedido: "PED-002",         // CLAVE PRIMARIA
    fecha: {                         // CAMPO CONTINENTE
      dia:  12,
      mes:   6,
      anio: 2026,
    },
    idCliente: "CLI-001",            // CLAVE FORÁNEA → mismo cliente, otro pedido
    total:     22000.00,
  },
  // ── Registro 2 ──────────────────────────────────────────
  {
    numeroPedido: "PED-003",         // CLAVE PRIMARIA
    fecha: {                         // CAMPO CONTINENTE
      dia:  14,
      mes:   6,
      anio: 2026,
    },
    idCliente: "CLI-002",            // CLAVE FORÁNEA → CLIENTE[idCliente="CLI-002"]
    total:     14300.00,
  },
];

// ============================================================
// FUNCIÓN AUXILIAR: buscar por CLAVE PRIMARIA
// ============================================================
export function buscarPedidoPorClave(nro: string): Pedido | undefined {
  return pedidos.find((p) => p.numeroPedido === nro);
}

// ============================================================
// FUNCIÓN AUXILIAR: buscar pedidos de un cliente (por clave foránea)
// Demuestra cómo la clave foránea vincula Pedido → Cliente
// ============================================================
export function pedidosPorCliente(idCliente: string): Pedido[] {
  return pedidos.filter((p) => p.idCliente === idCliente);
}
