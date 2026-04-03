"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function FlowPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans m-0 p-0 bg-white">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("flowPage.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("flowPage.hero.jp")}
          </h1>
        </Reveal>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* --- JUDUL HALAMAN --- */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-16 text-[#68b5b2]">
            {t("flowPage.title")}
          </h2>
        </Reveal>

        {/* --- DAFTAR ALUR LAYANAN --- */}
        <div className="flex flex-col">
          {t("flowPage.steps").map((step, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="flex flex-col">
                {/* Konten Step */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                  {/* Kotak Nomor (Kiri) */}
                  <div className="relative w-16 h-16 shrink-0 mt-1 mb-4 md:mb-0">
                    {/* Kotak Outline Background (Efek Bayangan) */}
                    <div className="absolute top-2 left-2 w-full h-full border-[1.5px] border-[#82c5c1] z-0"></div>
                    {/* Kotak Warna Utama */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#82c5c1] flex items-center justify-center z-10">
                      <span className="text-white text-3xl md:text-4xl font-light">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Teks Penjelasan (Kanan) */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Garis Pemisah dengan Panah (Hanya tampil jika bukan item terakhir) */}
                {index < t("flowPage.steps").length - 1 && (
                  <div className="py-10 md:py-14 relative flex justify-center">
                    {/* Garis Horizontal */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full h-px bg-[#bce3e1]"></div>
                    {/* Notch/Panah ke bawah di tengah garis */}
                    <div className="w-4 h-4 border-b border-r border-[#bce3e1] bg-white transform rotate-45 relative z-10"></div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
