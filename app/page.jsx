"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function CompanyPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans m-0 p-0">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        {/* Dekorasi Background */}
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

      {/* --- TOP MESSAGE --- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-10 md:mb-16">
              <div className="text-xs tracking-[3px] uppercase text-teal-600 font-bold mb-2">
                {t("company.message.en")}
              </div>
              <h2 className="text-3xl text-slate-900 font-bold m-0">
                {t("company.message.jp")}
              </h2>
            </div>
          </Reveal>

          {/* GRID RESPONSIVE: 1 kolom di HP, 2 kolom di PC */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
            
            {/* FOTO: Kotak di HP (aspect-square), Persegi Panjang di PC (aspect-3/4) */}
            <Reveal delay={100}>
              <div className="w-full aspect-square md:aspect-[3/4] bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center shadow-inner">
                <span className="text-slate-400 text-sm font-medium">[ Photo Placeholder ]</span>
              </div>
            </Reveal>

            {/* KONTEN PESAN */}
            <Reveal delay={200}>
              <div>
                <h3 className="text-xl md:text-2xl text-slate-900 font-bold leading-relaxed mb-6 border-l-4 border-teal-500 pl-4">
                  {t("company.message.quote")}
                </h3>
                <p className="text-slate-600 leading-loose mb-4">
                  {t("company.message.p1")}
                </p>
                <p className="text-slate-600 leading-loose mb-10">
                  {t("company.message.p2")}
                </p>
                <div className="text-right text-lg font-bold text-slate-900">
                  {t("company.message.name")}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- COMPANY PROFILE TABLE --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 border-t border-slate-200">
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
                  // RESPONSIVE TABLE: Tumpuk atas-bawah di HP, Sebelahan di PC
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

      <Footer />
    </div>
  );
}