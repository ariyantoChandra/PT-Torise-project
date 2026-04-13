"use client";
import { MapPin, Target, Flag, CheckCircle2 } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function CompanyPage() {
  const { t } = useLanguage();

  // URL ini dibentuk agar Maps langsung melakukan pencarian (q=...) ke alamat spesifik.
  const mapAddress =
    "Blok KK-1.60, Jl. Taman Surya 5 No.RT.7, RT.7/RW.19, Pegadungan, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11830";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="font-sans m-0 p-0">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("company.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("company.hero.jp")}
          </h1>
        </Reveal>
      </section>

      {/* --- 1. STATEMENT MESSAGE --- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <Reveal delay={100}>
            <p className="text-slate-700 leading-loose mb-6 text-base md:text-lg">
              {t("company.message.p1")}
            </p>
            <p className="text-slate-700 leading-loose mb-6 text-base md:text-lg">
              {t("company.message.p2")}
            </p>
            <p className="text-slate-700 leading-loose mb-6 text-base md:text-lg">
              {t("company.message.p3")}
            </p>
            <p className="text-slate-700 leading-loose text-base md:text-lg font-semibold text-teal-700">
              {t("company.message.p4")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- 2. VISION & MISSION BAGAN --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl text-slate-900 font-bold m-0 relative inline-block">
                {t("company.visionMission.title")}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-teal-500 rounded-full"></div>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card Visi */}
            <Reveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 h-full relative overflow-hidden flex flex-col transition-all hover:shadow-md">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                  {t("company.visionMission.vision.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base relative z-10">
                  {t("company.visionMission.vision.desc")}
                </p>
              </div>
            </Reveal>

            {/* Card Misi */}
            <Reveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 h-full relative overflow-hidden flex flex-col transition-all hover:shadow-md">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Flag className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">
                  {t("company.visionMission.mission.title")}
                </h3>
                <ul className="space-y-4 relative z-10">
                  {t("company.visionMission.mission.items").map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 leading-relaxed text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- 3. COMPANY PROFILE TABLE --- */}
      <section className="bg-white py-16 md:py-24 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="text-xs tracking-[3px] uppercase text-teal-600 font-bold mb-2">
                {t("company.profile.en")}
              </div>
              <h2 className="text-3xl text-slate-900 font-bold m-0">
                {t("company.profile.jp")}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              {t("company.profile.table").map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row border-b border-slate-200 last:border-0"
                >
                  <div className="w-full sm:w-1/3 md:w-1/4 bg-slate-50 p-4 md:p-6 text-sm font-bold text-slate-900 sm:border-r border-slate-200">
                    {row.label}
                  </div>
                  <div className="flex-1 p-4 md:p-6 text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- 4. KONTEN BISNIS (IMAGE GRID) --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-slate-900 font-bold m-0 relative inline-block">
                {t("company.business.title")}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-teal-500 rounded-full"></div>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-16">
            {/* --- SEKTOR 1: MANUFAKTUR & TEKNIS --- */}
            <Reveal delay={100}>
              <div>
                <h3 className="font-bold text-slate-900 mb-8 text-xl md:text-2xl text-center md:text-left">
                  {t("company.business.group1.title")}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {t("company.business.group1.items").map((item, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] shadow-sm bg-slate-200"
                    >
                      {/* Gambar Latar */}
                      <img
                        src={`/jobs/m-${index + 1}.jpg`}
                        alt={item}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80";
                        }}
                      />
                      {/* Overlay Gelap */}
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300" />
                      {/* Teks di Tengah */}
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <span className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* --- SEKTOR 2: JASA, MAKANAN & AGRIKULTUR --- */}
            <Reveal delay={200}>
              <div>
                <h3 className="font-bold text-slate-900 mb-8 text-xl md:text-2xl text-center md:text-left">
                  {t("company.business.group2.title")}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {t("company.business.group2.items").map((item, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] shadow-sm bg-slate-200"
                    >
                      {/* Gambar Latar */}
                      <img
                        src={`/jobs/j-${index + 1}.jpg`}
                        alt={item}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        // Fallback image
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80";
                        }}
                      />
                      {/* Overlay Gelap */}
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300" />
                      {/* Teks di Tengah */}
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <span className="text-white font-bold text-base md:text-lg lg:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- 5. ACCESS (PETA LOKASI) --- */}
      <section className="bg-white py-16 md:py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="text-xs tracking-[3px] uppercase text-teal-600 font-bold mb-2">
                {t("company.access.en")}
              </div>
              <h2 className="text-3xl text-slate-900 font-bold m-0">
                {t("company.access.jp")}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
              {/* GOOGLE MAPS IFRAME */}
              <div className="w-full aspect-video md:aspect-[16/10] bg-slate-200 rounded-2xl border border-slate-300 flex items-center justify-center overflow-hidden relative">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={mapSrc}
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* ALAMAT TEKS */}
              <div className="flex flex-col gap-6 p-2 md:p-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                    <MapPin size={22} className="text-teal-600" />
                    Address
                  </h3>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {t("company.access.address")}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">
                    Kawasan
                  </h3>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {t("company.access.station")}
                  </p>
                </div>
                <a
                  href={`http://googleusercontent.com/maps.google.com/maps?q=${encodeURIComponent(
                    mapAddress,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-bold hover:text-teal-700 transition-colors w-max mt-2 border-b-2 border-teal-600 pb-1"
                >
                  {t("company.access.mapBtn")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <Contact />
      <Footer />
    </div>
  );
}
