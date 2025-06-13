'use client';

import { useRef, useEffect } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';

import VolverInicio from '@/components/VolverInicio'; // ✅ Importado

export default function Catalogo() {
  const galleryRef = useRef(null);

  const images = Array.from({ length: 8 }, (_, i) => ({
    type: 'image',
    src: `/images/catalogo/imagen${i + 1}.jpg`,
    thumb: `/images/catalogo/imagen${i + 1}.jpg`,
    alt: `Catálogo Producto ${i + 1}`,
  }));

  const videos = [
    {
      type: 'video',
      src: `/videos/catalogo/demo1.mp4`,
      alt: `Video Catálogo`,
    },
  ];

  const media = [];
  let imgIndex = 0;
  let vidIndex = 0;

  while (imgIndex < images.length || vidIndex < videos.length) {
    for (let i = 0; i < 2 && imgIndex < images.length; i++) {
      media.push(images[imgIndex++]);
    }
    if (vidIndex < videos.length) {
      media.push(videos[vidIndex++]);
    }
  }

  useEffect(() => {
    if (!galleryRef.current) return;

    const instance = lightGallery(galleryRef.current, {
      plugins: [lgThumbnail, lgZoom, lgVideo],
      speed: 500,
      licenseKey: '0000-0000-000-0000',
    });

    const handleAfterOpen = () => {
      const videoEl = document.querySelector('.lg-current video');
      if (videoEl) {
        videoEl.play().catch(() => {});
      }
    };

    galleryRef.current.addEventListener('lgAfterOpen', handleAfterOpen);

    return () => {
      galleryRef.current?.removeEventListener('lgAfterOpen', handleAfterOpen);
      instance.destroy();
    };
  }, []);

  return (
    <section className="w-full px-6 sm:px-12 py-20 bg-white dark:bg-gray-950">
      {/* Botón VolverInicio */}
      <div className="mb-8 text-center">
        <VolverInicio />
      </div>

      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12">
        Catálogo de Productos
      </h2>

      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {media.map((item) => (
          <a
            key={item.src}
            href={item.type === 'image' ? item.src : undefined}
            data-lg-size="1406-1390"
            data-src={item.type === 'image' ? item.src : undefined}
            data-video={
              item.type === 'video'
                ? JSON.stringify({
                    source: [{ src: item.src, type: 'video/mp4' }],
                    attributes: {
                      preload: false,
                      controls: true,
                      muted: false,
                      autoplay: true,
                    },
                  })
                : undefined
            }
            className="relative block rounded-xl overflow-hidden shadow-xl group cursor-pointer"
          >
            {item.type === 'image' ? (
              <img
                src={item.thumb}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-4 border-blue-500 text-blue-500 text-3xl sm:text-4xl font-bold bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:text-blue-400 ring-2 ring-transparent group-hover:ring-blue-500/40">
                  ▶
                </div>
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
