'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg
        className="w-16 h-16 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    title: 'Pisos Encastrables',
    description:
      'Instalación profesional y rápida de pisos modulares para espacios únicos y funcionales.',
    href: '/galeria/pisos-encastrables', // ✅ CORRECTO
  },
  {
    icon: (
      <svg
        className="w-16 h-16 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: 'Luces LED',
    description:
      'Soluciones en iluminación LED eficientes y de diseño para transformar tus ambientes.',
    href: '/galeria/luces-led',
  },
  {
    icon: (
      <svg
        className="w-16 h-16 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    title: 'Catálogo',
    description:
      'Explora nuestro catálogo completo con productos exclusivos y ofertas especiales.',
    href: '/galeria/catalogo',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(255, 198, 0, 0.3)' },
};

export default function ServicesSection() {
  return (
    <section
        id="servicesection"
    className="w-full bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-50 py-20 px-6 sm:px-12">
      <h2 className="text-5xl font-extrabold text-center text-yellow-600 mb-16 drop-shadow-lg">
        Nuestros Servicios       
      </h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map(({ icon, title, description, href }, i) => (
          <Link href={href} key={i}>
            <motion.article
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer transition-transform"
              role="link"
              tabIndex={0}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.15, color: '#FBBF24' }}
              >
                {icon}
              </motion.div>

              <h3 className="text-3xl font-semibold text-yellow-700 mb-4">{title}</h3>

              <p className="text-gray-700 dark:text-gray-800 mb-8 max-w-[320px]">
                {description}
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-yellow-600 transition-colors"
              >
                Ver Galería
              </motion.button>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
