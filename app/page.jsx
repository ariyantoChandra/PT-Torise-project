"use client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import NewsTicker from "./components/sections/NewsTicker";
import Contact from "./components/sections/Contact";
import Reveal from "./components/ui/Reveal";
import { useLanguage } from "../lib/i18n/LanguageContext";

export default function ToriseJapan() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      }}
      className="font-sans"
    >
      <Navbar />
      <Hero />
      <NewsTicker />

      {/* --- COMPANY MESSAGE SECTION (Background Gambar + Blur Navy, Rata Kiri) --- */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* 1. Gambar Latar Belakang (Silakan ganti /contact.jpg dengan path gambar Anda) */}
        <img
          src="/contact.jpg"
          alt="Company Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 2. Overlay Navy (Senada dengan Hero) dan Efek Blur */}
        <div className="absolute inset-0 bg-[#0d2340]/55 backdrop-blur-md" />

        <div className="max-w-5xl mx-auto relative z-10 text-left">
          <Reveal>
            {/* Ukuran judul diperkecil dari text-5xl menjadi text-4xl */}
            <h2 className="text-2xl md:text-4xl font-serif text-yellow-400 mb-8 md:mb-10">
              {t("company.message.title")}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            {/* Ukuran paragraf diperkecil menjadi text-sm / md:text-base */}
            <p className="text-white/95 leading-loose mb-6 text-sm md:text-base">
              {t("company.message.p1")}
            </p>
            <p className="text-white/95 leading-loose mb-6 text-sm md:text-base">
              {t("company.message.p2")}
            </p>
            <p className="text-white/95 leading-loose mb-6 text-sm md:text-base">
              {t("company.message.p3")}
            </p>
            <p className="text-white/95 leading-loose text-sm md:text-base">
              {t("company.message.p4")}
            </p>
          </Reveal>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
