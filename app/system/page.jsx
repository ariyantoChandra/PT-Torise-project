"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export default function SystemPage() {
  const { t } = useLanguage();

  return (
    <div className="font-sans m-0 p-0 bg-slate-50">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("system.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("system.hero.jp")}
          </h1>
        </Reveal>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
        {/* --- 1. INTRO SECTION --- */}
        <Reveal>
          <div className="text-slate-700 leading-loose space-y-6 text-base md:text-lg">
            <p>{t("system.intro.p1")}</p>
            <p>{t("system.intro.p2")}</p>
            <p>{t("system.intro.p3")}</p>
          </div>
        </Reveal>

        {/* --- 2. ABOUT SKILL TYPE 1 & 2 (Yellow Box) --- */}
        <Reveal delay={100}>
          <div className="bg-[#fcfbee] border border-[#d1d5db] rounded-xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900">
              {t("system.aboutSkill.title")}
            </h2>

            <div className="mb-8">
              <h3 className="text-teal-600 font-bold mb-3 text-lg">
                {t("system.aboutSkill.type1.title")}
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>{t("system.aboutSkill.type1.p1")}</p>
                <p>{t("system.aboutSkill.type1.p2")}</p>
              </div>
            </div>

            <div>
              <h3 className="text-teal-600 font-bold mb-3 text-lg">
                {t("system.aboutSkill.type2.title")}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t("system.aboutSkill.type2.p1")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- 3. TRANSITION SECTION --- */}
        <Reveal delay={100}>
          <div>
            <h2 className="text-2xl md:text-3xl text-teal-600 font-light mb-8">
              {t("system.transition.title")}
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4 mb-8">
              <p>{t("system.transition.p1")}</p>
              <p className="text-sm">{t("system.transition.note")}</p>
              <p>{t("system.transition.p2")}</p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-transparent border-l-4 border-teal-400 p-6 rounded-r-lg">
              <p className="text-teal-700 font-bold leading-relaxed text-lg underline decoration-teal-200 underline-offset-4">
                {t("system.transition.highlight")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- 4. OVERVIEW TABLE --- */}
        <Reveal delay={100}>
          <div>
            <h2 className="text-2xl md:text-3xl text-teal-600 font-light mb-8">
              {t("system.table.title")}
            </h2>

            <div className="overflow-x-auto border-t-2 border-slate-300">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    {t("system.table.headers").map((head, idx) => (
                      <th
                        key={idx}
                        className="p-4 bg-white font-bold text-slate-800 border-b border-r border-slate-200 last:border-r-0 w-1/3 text-center"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t("system.table.rows").map((row, idx) => (
                    <tr
                      key={idx}
                      className="bg-white border-b border-slate-200"
                    >
                      <td className="p-4 align-top text-slate-700 border-r border-slate-200 font-medium text-sm w-[15%]">
                        {row.label}
                      </td>
                      <td className="p-4 align-top text-slate-600 border-r border-slate-200 text-sm whitespace-pre-line leading-relaxed">
                        {Array.isArray(row.col1) ? (
                          <ul className="list-disc pl-4 space-y-1">
                            {row.col1.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          row.col1
                        )}
                      </td>
                      <td className="p-4 align-top text-slate-600 text-sm whitespace-pre-line leading-relaxed">
                        {Array.isArray(row.col2) ? (
                          <ul className="list-disc pl-4 space-y-1">
                            {row.col2.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          row.col2
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-right text-xs text-slate-500 mt-2">
              {t("system.table.footerNote")}
            </p>
          </div>
        </Reveal>

        {/* --- 5. EXTRA SECTIONS --- */}
        <Reveal delay={100}>
          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl text-teal-600 font-light flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-teal-500 rounded-sm"></div>
                {t("system.extra.exam.title")}
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {t("system.extra.exam.desc")}
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl text-teal-600 font-light flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-teal-500 rounded-sm"></div>
                {t("system.extra.partner.title")}
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {t("system.extra.partner.desc")}
              </p>
            </div>
          </div>
        </Reveal>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
