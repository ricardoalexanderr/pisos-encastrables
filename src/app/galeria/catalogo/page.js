import Catalogo from '@/components/Catalogo';

export const metadata = {
  title: 'Catálogo de Productos',
  description: 'Explora nuestra galería de productos con imágenes y videos en alta calidad.',
};

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Catalogo />
    </main>
  );
}
