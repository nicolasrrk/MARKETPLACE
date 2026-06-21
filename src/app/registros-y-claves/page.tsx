import { productos } from "@/data/productos";
import { clientes } from "@/data/clientes";
import { pedidos } from "@/data/pedidos";

// ============================================================
// Página Académica: Registros y Claves
// Explica todos los conceptos de la Unidad 2 aplicados a GenStore
// ============================================================

export default function RegistrosYClavesPage() {
  // Ejemplos de la secuencia real
  const ejemploProducto = productos[0];
  const ejemploCliente  = clientes[0];
  const ejemploPedido   = pedidos[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* ── Encabezado ──────────────────────────────────── */}
      <div className="mb-12 text-center">
        <div className="thermal-bar w-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-3">
          Registros y Claves
        </h1>
        <p className="text-[#64748B] max-w-xl mx-auto leading-relaxed">
          Fundamentos de la Unidad 2 aplicados al marketplace{" "}
          <strong>GenStore</strong>. Algoritmos y Estructuras de Datos 2026.
        </p>
      </div>

      {/* ── 1. Qué es un Registro ───────────────────────── */}
      <Section numero="1" titulo="¿Qué es un Registro?">
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un <strong>registro</strong> es un tipo de dato estructurado cuyos
          elementos pueden ser de <strong>diferentes tipos</strong>. Esta
          propiedad se denomina <em>heterogeneidad de los datos</em>.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un registro es tratado como una <strong>unidad</strong>: aunque está
          compuesto por elementos (campos), representa una sola entidad
          lógica. En GenStore, cada producto del catálogo es un registro completo.
        </p>
        <div className="bg-[#FEF3C7] border border-[#F59E0B]/40 rounded-xl p-4">
          <p className="text-sm font-semibold text-[#92400E] mb-2">Ejemplo en GenStore</p>
          <p className="text-sm text-[#78350F]">
            El producto <code className="font-mono">"{ejemploProducto.nombre}"</code> es
            un registro. Contiene campos de tipo texto (nombre, categoría) y
            numérico (precio, stock), demostrando la heterogeneidad.
          </p>
        </div>
      </Section>

      {/* ── 2. Qué es un Campo ──────────────────────────── */}
      <Section numero="2" titulo="¿Qué es un Campo?">
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un <strong>campo</strong> es la entidad lógica más pequeña que
          conforma un registro. Es la <strong>unidad mínima de información</strong>.
          Cada campo se define por tres elementos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { titulo: "NOMBRE", desc: "Identificador único del campo dentro del registro.", ejemplo: "codigoProducto" },
            { titulo: "TIPO",   desc: "Tipo de dato que almacena (AN = alfanumérico, N = entero, R = real).", ejemplo: "AN, N, R" },
            { titulo: "TAMAÑO", desc: "Longitud máxima del campo en el registro.", ejemplo: "(10), (4), (8,2)" },
          ].map((item) => (
            <div key={item.titulo} className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-center">
              <p className="font-bold text-[#F59E0B] text-lg mb-1">{item.titulo}</p>
              <p className="text-sm text-[#64748B] mb-2">{item.desc}</p>
              <code className="text-xs bg-[#F1F5F9] text-[#1C1C1E] px-2 py-1 rounded">{item.ejemplo}</code>
            </div>
          ))}
        </div>
        <p className="text-[#64748B] text-sm">
          El selector de campo (<code className="font-mono text-[#F59E0B]">.</code>) permite
          acceder a un campo específico:{" "}
          <code className="font-mono text-[#F59E0B] bg-[#FEF3C7] px-1 rounded">
            productos[0].codigoProducto
          </code>
        </p>
      </Section>

      {/* ── 3. Campo Contenido ──────────────────────────── */}
      <Section numero="3" titulo="Campo Contenido">
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un <strong>campo contenido</strong> es un campo simple que almacena
          un único dato elemental: un número, un texto, un valor lógico.
          No se descompone en subcampos.
        </p>
        <div className="overflow-x-auto">
          <table className="registro-table">
            <thead>
              <tr>
                <th>Campo</th>
                <th>Tipo</th>
                <th>Tamaño</th>
                <th>Valor de ejemplo</th>
                <th>Clasificación</th>
              </tr>
            </thead>
            <tbody>
              {[
                { campo: "nombre",    tipo: "AN", tam: "(100)", val: ejemploProducto.nombre },
                { campo: "categoria", tipo: "AN", tam: "(50)",  val: ejemploProducto.categoria },
                { campo: "precio",    tipo: "R",  tam: "(8,2)", val: `${ejemploProducto.precio.toFixed(2)}` },
                { campo: "stock",     tipo: "N",  tam: "(4)",   val: `${ejemploProducto.stock}` },
                { campo: "capacidad", tipo: "AN", tam: "(20)",  val: ejemploProducto.capacidad },
              ].map((fila) => (
                <tr key={fila.campo}>
                  <td><code className="font-mono text-sm">{fila.campo}</code></td>
                  <td><code className="font-mono text-[#64748B]">{fila.tipo}</code></td>
                  <td><code className="font-mono text-[#64748B]">{fila.tam}</code></td>
                  <td className="text-[#1C1C1E]">{fila.val}</td>
                  <td><span className="badge-contenido">Contenido</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 4. Campo Continente ─────────────────────────── */}
      <Section numero="4" titulo="Campo Continente">
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un <strong>campo continente</strong> es aquel que está formado por
          otros campos más simples (subcampos). No almacena un dato atómico
          sino una estructura de datos anidada.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          En GenStore, el campo <code className="font-mono text-[#F59E0B]">fecha</code>{" "}
          del registro PEDIDO es un campo continente, ya que contiene tres
          subcampos: <code className="font-mono">dia</code>,{" "}
          <code className="font-mono">mes</code> y{" "}
          <code className="font-mono">anio</code>.
        </p>
        <div className="codigo-registro mb-4">
          <span className="text-[#94A3B8]">{"// Campo CONTINENTE dentro del registro PEDIDO"}</span>
          {"\n"}
          <span className="text-green-400">{"fecha"}</span>
          {" = Registro\n"}
          {"    "}
          <span className="text-blue-300">dia</span>
          {" : N(2);   "}
          <span className="comentario">{"← Campo Contenido (subcampo)"}</span>
          {"\n    "}
          <span className="text-blue-300">mes</span>
          {" : N(2);   "}
          <span className="comentario">{"← Campo Contenido (subcampo)"}</span>
          {"\n    "}
          <span className="text-blue-300">anio</span>
          {" : N(4);   "}
          <span className="comentario">{"← Campo Contenido (subcampo)"}</span>
          {"\nFin Registro;"}
        </div>
        <div className="bg-[#D1FAE5] border border-green-300 rounded-xl p-4 text-sm">
          <p className="font-semibold text-[#065F46] mb-1">Acceso mediante selector de campo</p>
          <code className="font-mono text-[#065F46]">
            pedidos[0].fecha.dia → {ejemploPedido.fecha.dia}
            {"  |  "}
            pedidos[0].fecha.mes → {ejemploPedido.fecha.mes}
            {"  |  "}
            pedidos[0].fecha.anio → {ejemploPedido.fecha.anio}
          </code>
        </div>
      </Section>

      {/* ── 5. Qué es una Clave ─────────────────────────── */}
      <Section numero="5" titulo="¿Qué es una Clave?">
        <p className="text-[#64748B] leading-relaxed mb-4">
          Un <strong>campo clave</strong> es aquel que identifica al registro
          de manera <strong>única</strong> y lo diferencia de todos los demás
          registros de la secuencia. Debe ser irrepetible: dos registros no
          pueden tener el mismo valor en su campo clave.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              tipo: "Clave Primaria",
              color: "bg-[#FEF3C7] border-[#F59E0B]",
              texto: "text-[#92400E]",
              desc: "Identifica de forma única un registro. Ej: codigoProducto, idCliente, numeroPedido.",
            },
            {
              tipo: "Clave Secundaria",
              color: "bg-[#DBEAFE] border-blue-300",
              texto: "text-blue-800",
              desc: "No identifica unívocamente, pero permite ordenar la información. Ej: fecha.",
            },
            {
              tipo: "Clave Foránea",
              color: "bg-[#D1FAE5] border-green-300",
              texto: "text-green-800",
              desc: "Clave de otro registro que establece una relación. Ej: idCliente en Pedido.",
            },
          ].map((item) => (
            <div key={item.tipo} className={`${item.color} border rounded-xl p-4`}>
              <p className={`font-bold text-sm mb-2 ${item.texto}`}>{item.tipo}</p>
              <p className={`text-sm ${item.texto}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 6. Registros de GenStore ────────────────────── */}
      <Section numero="6" titulo="Registros que utiliza GenStore">
        <div className="space-y-6">
          {/* PRODUCTO */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            <div className="bg-[#1C1C1E] text-white px-5 py-3 flex items-center justify-between">
              <span className="font-mono font-bold">REGISTRO: PRODUCTO</span>
              <span className="text-[#F59E0B] text-xs">productos[]</span>
            </div>
            <div className="p-4">
              <div className="codigo-registro mb-4 text-sm">
                <span className="text-purple-400">PRODUCTO</span> = Registro{"\n"}
                {"    "}<span className="clave-highlight">codigoProducto</span> : AN(10);{"  "}
                <span className="comentario">← CLAVE PRIMARIA</span>{"\n"}
                {"    "}nombre         : AN(100);{"\n"}
                {"    "}categoria      : AN(50);{"\n"}
                {"    "}precio         : R(8,2);{"\n"}
                {"    "}stock          : N(4);{"\n"}
                {"    "}capacidad      : AN(20);{"\n"}
                {"    "}descripcion    : AN(300);{"\n"}
                {"    "}imagen         : AN(200);{"\n"}
                Fin Registro;
              </div>
              <p className="text-xs text-[#64748B]">
                Ejemplo real del registro 0 de la secuencia:{" "}
                <code className="font-mono text-[#F59E0B]">{ejemploProducto.codigoProducto}</code>
                {" → "}{ejemploProducto.nombre} · ${ejemploProducto.precio.toLocaleString("es-AR")}
              </p>
            </div>
          </div>

          {/* CLIENTE */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            <div className="bg-[#1C1C1E] text-white px-5 py-3 flex items-center justify-between">
              <span className="font-mono font-bold">REGISTRO: CLIENTE</span>
              <span className="text-[#F59E0B] text-xs">clientes[]</span>
            </div>
            <div className="p-4">
              <div className="codigo-registro mb-4 text-sm">
                <span className="text-purple-400">CLIENTE</span> = Registro{"\n"}
                {"    "}<span className="clave-highlight">idCliente</span> : AN(10);{"  "}
                <span className="comentario">← CLAVE PRIMARIA</span>{"\n"}
                {"    "}nombre    : AN(50);{"\n"}
                {"    "}apellido  : AN(50);{"\n"}
                {"    "}telefono  : AN(15);{"\n"}
                {"    "}email     : AN(100);{"\n"}
                Fin Registro;
              </div>
              <p className="text-xs text-[#64748B]">
                Ejemplo:{" "}
                <code className="font-mono text-[#F59E0B]">{ejemploCliente.idCliente}</code>
                {" → "}{ejemploCliente.nombre} {ejemploCliente.apellido}
              </p>
            </div>
          </div>

          {/* PEDIDO */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            <div className="bg-[#1C1C1E] text-white px-5 py-3 flex items-center justify-between">
              <span className="font-mono font-bold">REGISTRO: PEDIDO</span>
              <span className="text-[#F59E0B] text-xs">pedidos[]</span>
            </div>
            <div className="p-4">
              <div className="codigo-registro mb-4 text-sm">
                <span className="text-purple-400">PEDIDO</span> = Registro{"\n"}
                {"    "}<span className="clave-highlight">numeroPedido</span> : AN(10);{"  "}
                <span className="comentario">← CLAVE PRIMARIA</span>{"\n"}
                {"    "}<span className="text-green-400">fecha</span> = Registro{"          "}
                <span className="comentario">← CAMPO CONTINENTE</span>{"\n"}
                {"        "}dia  : N(2);{"\n"}
                {"        "}mes  : N(2);{"\n"}
                {"        "}anio : N(4);{"\n"}
                {"    "}Fin Registro;{"\n"}
                {"    "}<span className="text-blue-300">idCliente</span> : AN(10);{"  "}
                <span className="comentario">← CLAVE FORÁNEA → CLIENTE</span>{"\n"}
                {"    "}total     : R(10,2);{"\n"}
                Fin Registro;
              </div>
              <p className="text-xs text-[#64748B]">
                Ejemplo:{" "}
                <code className="font-mono text-[#F59E0B]">{ejemploPedido.numeroPedido}</code>
                {" → Fecha: "}
                {String(ejemploPedido.fecha.dia).padStart(2,"0")}/
                {String(ejemploPedido.fecha.mes).padStart(2,"0")}/
                {ejemploPedido.fecha.anio}
                {" · Cliente: "}
                <code className="font-mono text-green-600">{ejemploPedido.idCliente}</code>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 7. Claves de cada registro ──────────────────── */}
      <Section numero="7" titulo="Claves de cada Registro">
        <div className="overflow-x-auto">
          <table className="registro-table">
            <thead>
              <tr>
                <th>Registro</th>
                <th>Campo Clave</th>
                <th>Tipo de Clave</th>
                <th>Formato</th>
                <th>Justificación</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fila-clave">
                <td className="font-semibold">PRODUCTO</td>
                <td><code className="font-mono">codigoProducto</code></td>
                <td><span className="badge-clave">Primaria Simple</span></td>
                <td><code className="font-mono text-[#F59E0B]">PROD-XXX</code></td>
                <td className="text-sm text-[#64748B]">
                  Asignado por el sistema. Dos productos pueden tener el mismo nombre
                  pero nunca el mismo código.
                </td>
              </tr>
              <tr className="fila-clave">
                <td className="font-semibold">CLIENTE</td>
                <td><code className="font-mono">idCliente</code></td>
                <td><span className="badge-clave">Primaria Simple</span></td>
                <td><code className="font-mono text-[#F59E0B]">CLI-XXX</code></td>
                <td className="text-sm text-[#64748B]">
                  Asignado por el sistema. Garantiza unicidad aunque haya clientes con
                  el mismo nombre y apellido.
                </td>
              </tr>
              <tr className="fila-clave">
                <td className="font-semibold">PEDIDO</td>
                <td><code className="font-mono">numeroPedido</code></td>
                <td><span className="badge-clave">Primaria Simple</span></td>
                <td><code className="font-mono text-[#F59E0B]">PED-XXX</code></td>
                <td className="text-sm text-[#64748B]">
                  La fecha no puede ser clave (varios pedidos el mismo día). El
                  número de pedido es único e irrepetible.
                </td>
              </tr>
              <tr>
                <td className="font-semibold">PEDIDO</td>
                <td><code className="font-mono">idCliente</code></td>
                <td><span className="badge-continente">Foránea</span></td>
                <td><code className="font-mono text-green-600">CLI-XXX</code></td>
                <td className="text-sm text-[#64748B]">
                  Referencia la clave primaria de CLIENTE. Establece la relación
                  entre ambos registros.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 8. Relación entre Registros ─────────────────── */}
      <Section numero="8" titulo="Relación entre Registros">
        <p className="text-[#64748B] leading-relaxed mb-6">
          La <strong>clave foránea</strong>{" "}
          <code className="font-mono text-[#F59E0B]">idCliente</code> dentro
          del registro PEDIDO permite asociar cada pedido con el cliente que
          lo generó, sin duplicar la información del cliente en cada pedido.
        </p>

        {/* Diagrama de relación */}
        <div className="bg-[#1C1C1E] rounded-xl p-6 mb-6 overflow-x-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm font-mono">
            {/* CLIENTE */}
            <div className="bg-[#2D3748] rounded-lg p-4 text-center min-w-44">
              <p className="text-[#F59E0B] font-bold mb-2">CLIENTE</p>
              <p className="text-[#F59E0B] border border-[#F59E0B]/50 rounded px-2 py-1 text-xs mb-1">
                🔑 idCliente (PK)
              </p>
              <p className="text-[#94A3B8] text-xs">nombre</p>
              <p className="text-[#94A3B8] text-xs">apellido</p>
              <p className="text-[#94A3B8] text-xs">telefono</p>
              <p className="text-[#94A3B8] text-xs">email</p>
            </div>

            {/* Flecha */}
            <div className="text-center">
              <div className="text-[#F59E0B] text-2xl">→</div>
              <p className="text-[#64748B] text-xs mt-1">clave foránea</p>
            </div>

            {/* PEDIDO */}
            <div className="bg-[#2D3748] rounded-lg p-4 text-center min-w-44">
              <p className="text-[#F59E0B] font-bold mb-2">PEDIDO</p>
              <p className="text-[#F59E0B] border border-[#F59E0B]/50 rounded px-2 py-1 text-xs mb-1">
                🔑 numeroPedido (PK)
              </p>
              <p className="text-[#94A3B8] text-xs">fecha (continente)</p>
              <p className="text-green-400 text-xs border border-green-400/40 rounded px-1">
                idCliente (FK)
              </p>
              <p className="text-[#94A3B8] text-xs">total</p>
            </div>
          </div>
        </div>

        {/* Ejemplo con datos reales */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-sm font-semibold text-[#1C1C1E] mb-3">
            Ejemplo con datos reales de GenStore
          </p>
          <div className="space-y-2 text-sm font-mono">
            <p className="text-[#64748B]">
              {"// Registro CLIENTE:"}
            </p>
            <p>
              clientes[0] = {"{  "}
              <span className="text-[#F59E0B]">idCliente: "CLI-001"</span>
              {", nombre: \""}{clientes[0].nombre}{"\", apellido: \""}{clientes[0].apellido}{"\" ... }"}
            </p>
            <p className="text-[#64748B] mt-2">
              {"// Registros PEDIDO del mismo cliente (idCliente = \"CLI-001\"):"}
            </p>
            {pedidos.filter(p => p.idCliente === "CLI-001").map(p => (
              <p key={p.numeroPedido}>
                pedidos[x] = {"{  "}
                <span className="text-[#F59E0B]">numeroPedido: "{p.numeroPedido}"</span>
                {", "}
                <span className="text-green-500">idCliente: "{p.idCliente}"</span>
                {`, total: ${p.total.toLocaleString("es-AR")} }`}
              </p>
            ))}
          </div>
          <p className="text-xs text-[#64748B] mt-3">
            ↑ El mismo valor{" "}
            <code className="font-mono text-green-600">CLI-001</code>{" "}
            en ambos pedidos indica que pertenecen a{" "}
            <strong>{clientes[0].nombre} {clientes[0].apellido}</strong>,
            sin duplicar todos sus datos.
          </p>
        </div>
      </Section>
    </div>
  );
}

// ── Componente auxiliar para cada sección ─────────────────
function Section({
  numero,
  titulo,
  children,
}: {
  numero: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-5">
        <span className="w-9 h-9 rounded-full bg-[#F59E0B] text-[#1C1C1E] flex items-center justify-center font-bold text-sm flex-shrink-0">
          {numero}
        </span>
        <h2 className="text-xl font-bold text-[#1C1C1E]">{titulo}</h2>
      </div>
      <div className="pl-13 ml-4 border-l-2 border-[#E2E8F0] pl-6">
        {children}
      </div>
    </section>
  );
}
