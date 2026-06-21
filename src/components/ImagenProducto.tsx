"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallback: string; // emoji de categoría
  className?: string;
  fill?: boolean;
};

// Componente cliente: intenta mostrar la imagen real,
// si no existe muestra el ícono de categoría como fallback.
export default function ImagenProducto({ src, alt, fallback, className }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <span className="text-6xl opacity-25 select-none">{fallback}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className ?? "object-cover"}
      onError={() => setError(true)}
    />
  );
}
