"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export default function GalleryPage() {
  const { t } = useLanguage();

  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="font-sans m-0 p-0">
      <Navbar />

      {/* --- HERO BANNER GALLERY --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
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

      {/* --- CAROUSEL SECTION --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-slate-900 font-bold mb-4">
                {t("gallery.title")}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {t("gallery.desc")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {/* CAROUSEL WRAPPER */}
            <div className="px-2 md:px-12">
              <Carousel
                opts={{
                  align: "center", // Dibuat center agar posisinya pas di tengah
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {images.map((index) => (
                    <CarouselItem
                      key={index}
                      // PERBAIKAN: Menghapus pembagi (basis-1/2, dll) agar lebarnya 100% (1 gambar per slide)
                      className="pl-2 md:pl-4"
                    >
                      <div className="p-1">
                        {/* PERBAIKAN: Mengubah aspect-square menjadi aspect-video agar bentuknya persegi panjang landscape yang cantik */}
                        <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-200 border border-slate-300 shadow-sm overflow-hidden relative">
                          <img
                            src={`/gallery/img_${index}.webp`}
                            alt={`Gallery Torise ${index}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex border-teal-600 text-teal-600 hover:bg-teal-50" />
                <CarouselNext className="hidden md:flex border-teal-600 text-teal-600 hover:bg-teal-50" />
              </Carousel>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
