// ============================================================
// SECUENCIA DE REGISTROS: CLIENTE[]
// GenStore — Marketplace de Productos Térmicos
// ============================================================
// La CLAVE PRIMARIA es: idCliente
// Formato de clave: CLI-XXX (ej: CLI-001)
// ============================================================

import type { Cliente } from "@/types";

export const clientes: Cliente[] = [
  // ── Registro 0 ──────────────────────────────────────────
  {
    idCliente: "CLI-001",          // CLAVE PRIMARIA
    nombre:    "María",
    apellido:  "González",
    telefono:  "3624-555101",
    email:     "mgonzalez@email.com",
  },
  // ── Registro 1 ──────────────────────────────────────────
  {
    idCliente: "CLI-002",          // CLAVE PRIMARIA
    nombre:    "Lucas",
    apellido:  "Fernández",
    telefono:  "3624-555202",
    email:     "lfernandez@email.com",
  },
  // ── Registro 2 ──────────────────────────────────────────
  {
    idCliente: "CLI-003",          // CLAVE PRIMARIA
    nombre:    "Valentina",
    apellido:  "Rodríguez",
    telefono:  "3624-555303",
    email:     "vrodriguez@email.com",
  },
];

// ============================================================
// FUNCIÓN AUXILIAR: buscar por CLAVE PRIMARIA
// ============================================================
export function buscarClientePorClave(id: string): Cliente | undefined {
  return clientes.find((c) => c.idCliente === id);
}
