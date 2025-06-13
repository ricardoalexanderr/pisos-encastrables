'use client';

import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="w-full">
        <HeroSlider />
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-gray-100">
        <AboutSection />
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="bg-gray-100">
        <ServicesSection />
      </section>

      {/* BOTÓN WHATSAPP */}
      <WhatsAppButton />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
