// components/VolverInicio.jsx
'use client';
import Link from 'next/link';

export default function VolverInicio() {
  return (
    <Link href="/" className="text-blue-600 hover:underline">
      Volver al inicio
    </Link>
  );
}
