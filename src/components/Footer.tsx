import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-[#64748B] mt-auto">
      <div className="thermal-bar" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm">
              <span className="text-[#F59E0B] font-bold">Genstore</span>
              {" "}— Marketplace de Productos Térmicos
            </p>
            <p className="text-xs mt-1">
              Proyecto académico · Algoritmos y Estructuras de Datos 2026
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/catalogo" className="hover:text-white transition-colors">Catálogo</Link>
            <Link href="/registros-y-claves" className="hover:text-[#F59E0B] transition-colors font-medium">
              Registros y Claves
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-4 text-xs text-center">
          Los datos son ficticios y las imágenes son placeholders.
        </div>
      </div>
    </footer>
  );
}
