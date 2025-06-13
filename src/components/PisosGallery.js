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
import VolverInicio from '@/components/VolverInicio';

export default function PisosGallery() {
  const galleryRef = useRef(null);

  const images = Array.from({ length: 35 }, (_, i) => ({
    type: 'image',
    src: `/images/pisos/imagen${i + 1}.jpg`,
    thumb: `/images/pisos/imagen${i + 1}.jpg`,
    alt: `Piso Encastrable ${i + 1}`,
  }));

  const videos = Array.from({ length: 15 }, (_, i) => ({
    type: 'video',
    src: `/videos/pisos/demo${i + 1}.mp4`,
    alt: `Video Piso LED ${i + 1}`,
  }));

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

    const galleryInstance = lightGallery(galleryRef.current, {
      plugins: [lgThumbnail, lgZoom, lgVideo],
      speed: 500,
      licenseKey: '0000-0000-000-0000',
    });

    return () => galleryInstance.destroy();
  }, []);

  return (
    <section className="w-full px-6 sm:px-12 py-20 bg-white dark:bg-gray-950">
      {/* Volver al inicio */}
      <div className="mb-8 text-center">
        <VolverInicio />
      </div>

      <h2 className="text-4xl font-extrabold text-center text-yellow-500 mb-12">
        Galería de Pisos Encastrables y LED
      </h2>

      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {media.map((item, index) => (
          <a
            key={index}
            href={item.type === 'video' ? undefined : item.src}
            data-lg-size="1406-1390"
            data-src={item.type === 'video' ? undefined : item.src}
            data-video={
              item.type === 'video'
                ? JSON.stringify({
                    source: [
                      {
                        src: item.src,
                        type: 'video/mp4',
                      },
                    ],
                    attributes: {
                      preload: false,
                      controls: true,
                      muted: false,
                      autoplay: true,
                    },
                  })
                : undefined
            }
            className="relative block rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            {item.type === 'image' ? (
              <img
                src={item.thumb}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-full h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative group"
                aria-label={item.alt}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-4 border-yellow-400 text-yellow-400 text-3xl sm:text-4xl font-bold bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-300 group-hover:text-yellow-300 ring-2 ring-transparent group-hover:ring-yellow-500/40">
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
