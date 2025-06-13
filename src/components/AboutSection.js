export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-tr from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left text-gray-300">
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-400 tracking-wide drop-shadow-lg">
            Quiénes Somos
          </h2>
          <p className="text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
            Somos una empresa innovadora, comprometida con la excelencia y la satisfacción
            del cliente. Con un equipo multidisciplinario, transformamos ideas en soluciones
            tecnológicas de alta calidad y rendimiento.
          </p>
          <div className="mt-10 flex justify-center md:justify-start gap-6">
            <a
              href="#servicesection"
              className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
              Conoce más
            </a>
        <a
           href="https://wa.me/5493518000426"
           target="_blank"
           rel="noopener noreferrer"
           className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Contáctanos
        </a>
        
          </div>
        </div>
        
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/aboutsection/imagen1.jpg"
            alt="About us"
            className="rounded-3xl shadow-2xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
