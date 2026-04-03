"use client";
import {
  TrendingUp,
  UserPlus,
  Award,
  AlertCircle,
  Settings,
  Languages,
  Lightbulb,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function MeritPage() {
  const { t } = useLanguage();

  const prosIcons = [
    <UserPlus size={40} />,
    <TrendingUp size={40} />,
    <Award size={40} />,
  ];
  const consIcons = [
    <Settings size={32} />,
    <AlertCircle size={32} />,
    <Languages size={32} />,
  ];

  return (
    <div className="font-sans m-0 p-0 bg-white">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("advantage.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("advantage.hero.jp")}
          </h1>
        </Reveal>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24">
        {/* --- JUDUL HALAMAN --- */}
        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-teal-600 font-light text-center md:text-left mb-12 max-w-4xl">
            {t("advantage.title")}
          </h2>
        </Reveal>

        {/* --- PROS & CONS INFOGRAPHIC --- */}
        <Reveal delay={100}>
          <div className="flex flex-col gap-8">
            {/* ROW 1: KEMAMPUAN (PROS) */}
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm bg-[#8dbcb8]">
              {/* Label Kiri */}
              <div className="bg-teal-600 md:bg-transparent p-6 md:w-1/4 flex items-center justify-center md:justify-start md:pl-10">
                <h3 className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {t("advantage.pros.title")}
                </h3>
              </div>
              {/* Kolom Kanan (Cards) */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                {t("advantage.pros.items").map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm relative pt-12 mt-8 md:mt-10"
                  >
                    <div className="absolute -top-10 bg-slate-900 text-white w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      {prosIcons[idx]}
                    </div>
                    <p className="text-slate-800 font-medium text-sm leading-relaxed border-b-2 border-yellow-300 pb-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: KEKURANGAN (CONS) */}
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm border-2 border-[#8dbcb8] bg-slate-50">
              {/* Label Kiri */}
              <div className="bg-slate-200 md:w-1/4 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#8dbcb8]">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {t("advantage.cons.title")}
                </h3>
              </div>
              {/* Kolom Kanan (Cards) */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {t("advantage.cons.items").map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center pt-8 relative"
                  >
                    <div className="absolute top-0 text-slate-600 flex flex-col items-center">
                      {consIcons[idx]}
                    </div>
                    <p className="text-slate-700 font-medium text-sm leading-relaxed mt-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ARROW BANNER (BOTTOM) */}
            <div className="bg-teal-500 text-white py-4 px-6 md:px-12 rounded-b-3xl shadow-md text-center clip-arrow">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300">
                {t("advantage.transition")}
              </h3>
              <p className="text-sm md:text-base text-white/90 mt-1">
                {t("advantage.transitionDesc")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- TEKS PENJELASAN KEKHAWATIRAN --- */}
        <Reveal delay={150}>
          <div className="text-slate-700 leading-loose space-y-6 text-base md:text-lg max-w-5xl mx-auto">
            <p>{t("advantage.intro.p1")}</p>
            <p>{t("advantage.intro.p2")}</p>
          </div>
        </Reveal>

        {/* --- LIGHTBULB SOLUTION SECTION --- */}
        <Reveal delay={200}>
          <div className="relative mt-20">
            {/* Ikon Bohlam Melayang */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 text-yellow-500">
              <Lightbulb size={80} className="fill-yellow-500 drop-shadow-md" />
            </div>

            {/* Kotak Latar Kuning */}
            <div className="bg-[#fcfbee] border border-[#d1d5db] rounded-2xl pt-20 pb-10 px-6 md:px-12 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-10">
                {t("advantage.solution.title")}
              </h3>

              <div className="space-y-4 max-w-4xl mx-auto">
                {t("advantage.solution.items").map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-teal-500 rounded-full py-4 px-6 md:px-8 text-slate-700 text-sm md:text-base leading-relaxed flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <Contact />
      <Footer />

      {/* Efek CSS khusus untuk Arrow Banner */}
      <style>{`
        .clip-arrow {
          clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%, 5% 50%);
        }
        @media (max-width: 768px) {
          .clip-arrow {
            clip-path: none;
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
}
