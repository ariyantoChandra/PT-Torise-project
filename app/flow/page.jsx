"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function FlowPage() {
  const { t } = useLanguage();
  // State untuk melacak item mana yang terbuka (default: 0 agar tahap 1 langsung terbuka)
  const [openStep, setOpenStep] = useState(0);

  const toggleStep = (index) => {
    // Jika ditekan item yang sama, maka ditutup (null). Jika tidak, buka item tersebut.
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="font-sans m-0 p-0 bg-slate-50">
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

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* --- DAFTAR ALUR (ACCORDION / FAQ STYLE) --- */}
        <div className="space-y-4">
          {t("flowPage.steps").map((step, index) => {
            const isOpen = openStep === index;

            return (
              <Reveal key={index} delay={index * 50}>
                <div
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen
                      ? "border-teal-500 shadow-md ring-1 ring-teal-500/20"
                      : "border-slate-200 hover:border-teal-300"
                  }`}
                >
                  {/* HEADER (TOMBOL KLIK) */}
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-5 md:gap-6">
                      {/* Nomor Tahapan */}
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-teal-600 text-white shadow-md scale-105"
                            : "bg-teal-50 text-teal-600 group-hover:bg-teal-100 group-hover:scale-105"
                        }`}
                      >
                        {step.num}
                      </div>
                      {/* Judul Tahapan */}
                      <h3
                        className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                          isOpen
                            ? "text-teal-700"
                            : "text-slate-800 group-hover:text-teal-600"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Icon Panah (Chevron) */}
                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-teal-50 text-teal-600"
                          : "bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </button>

                  {/* KONTEN DROPDOWN (ANIMASI TINGGI) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Padding kiri disesuaikan dengan lebar box nomor + gap agar rata (14 * 4 = 56px + 24px gap = ~80px) */}
                      <div className="pl-5 pr-5 pb-6 pt-1 md:pl-[104px] md:pr-8 md:pb-8">
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4 md:border-none md:pt-0">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </main>

      <Contact imageSrc="/contact-flow.jpeg" />
      <Footer />
    </div>
  );
}
