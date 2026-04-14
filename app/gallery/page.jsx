"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import Contact from "../components/sections/Contact";

export default function GalleryPage() {
  const { t } = useLanguage();

  // Total gambar yang ada di folder public/gallery Anda
  const totalImages = 30;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const thumbnailsRef = useRef(null);

  // Fungsi untuk menentukan ekstensi gambar secara langsung agar loading cepat
  // Index 0-5 (Gambar 1-6) = webp
  // Index 6-29 (Gambar 7-30) = jpeg
  const getImageUrl = (index) => {
    const extension = index < 6 ? "webp" : "jpeg";
    return `/gallery/${index + 1}.${extension}`;
  };

  // Efek Auto-Fade (ganti gambar tiap 3 detik)
  useEffect(() => {
    if (isPaused) return; // Pause jika area galeri di-hover

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, totalImages]);

  // Efek untuk menggeser scroll thumbnail agar gambar aktif selalu terlihat di tengah
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));

  return (
    <div className="font-sans m-0 p-0 bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden shrink-0">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("gallery.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("gallery.hero.jp")}
          </h1>
        </Reveal>
      </section>

      {/* --- KONTEN GALERI --- */}
      <main className="flex-grow py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl text-slate-900 font-bold mb-4 relative inline-block">
                {t("gallery.title")}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-teal-500 rounded-full"></div>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-8 leading-relaxed">
                {t("gallery.desc")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-slate-100">
              {/* GAMBAR UTAMA (LARGE VIEWER) */}
              <div
                className="relative w-full aspect-[4/3] md:aspect-[16/7] rounded-2xl overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Looping semua gambar */}
                {Array.from({ length: totalImages }).map((_, index) => (
                  <img
                    key={index}
                    src={getImageUrl(index)}
                    alt={`Torise Gallery ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop&sig=${index}`;
                    }}
                  />
                ))}

                {/* Tombol Kiri */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/60 hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Tombol Kanan */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/60 hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* STRIP THUMBNAIL (BISA DI-SCROLL) */}
              <div className="mt-4 md:mt-6">
                <div
                  ref={thumbnailsRef}
                  className="flex gap-3 overflow-x-auto py-2 px-1 snap-x scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {Array.from({ length: totalImages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative shrink-0 w-20 h-16 md:w-28 md:h-20 rounded-xl overflow-hidden snap-center transition-all duration-300 ${
                        index === currentIndex
                          ? "ring-4 ring-teal-500 shadow-md scale-105"
                          : "opacity-50 hover:opacity-100 hover:scale-100"
                      }`}
                    >
                      <img
                        src={getImageUrl(index)}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=200&auto=format&fit=crop&sig=${index}`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Contact imageSrc="/contact-gallery.jpeg" />
      <Footer />

      {/* CSS Tambahan untuk menyembunyikan scrollbar di browser webkit */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `,
        }}
      />
    </div>
  );
}
