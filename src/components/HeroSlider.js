'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const images = [
  '/images/heroslider/imagen1.jpg',
  '/images/heroslider/imagen2.jpg',
  '/images/heroslider/imagen3.jpg',
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
   
    { label: 'NOSOTROS', path: '#nosotros' },
    { label: 'PRODUCTOS', path: '#productos' },
    { label: 'CONTACTOS', path:  'https://wa.me/5493518000426' },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={`object-cover absolute transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-0' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center px-4 sm:px-6 md:px-12 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
        <div>
          <h1
            className={`${geistSans.variable} font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_4px_8px_rgba(255,223,0,0.6)]`}
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              PLC
            </span>
          </h1>
          <p
            className={`${geistMono.variable} mt-2 sm:mt-3 font-semibold uppercase tracking-widest text-yellow-100 drop-shadow-md`}
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              solutions
            </span>
          </p>
        </div>

        <nav
          className="relative flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 md:px-10 bg-white/15 text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-white z-20 backdrop-blur-md rounded-full shadow-lg ring-1 ring-white/25 transition-colors duration-300"
          aria-label="Main navigation"
        >
          {/* Menú horizontal para md+ */}
          <ul className="hidden md:flex gap-14">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  className="hover:text-yellow-300 focus:text-yellow-300 focus:outline-none transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            


          </ul>

          {/* Botón hamburguesa para móviles */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-4 p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Menú desplegable para móvil */}
          {menuOpen && (
            <ul
              className="absolute top-full right-0 mt-2 w-40 bg-white/90 backdrop-blur-md rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30 flex flex-col"
              role="menu"
              aria-orientation="vertical"
            >
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-300 hover:text-white transition"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
