"use client";
import { HeartHandshake } from "lucide-react";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <Reveal>
            <div className="text-xs tracking-widest uppercase text-teal-600 font-bold mb-4">
              {t("about.tag")}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-7">
              {t("about.title1")} <br />
              {t("about.title2")}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t("about.p2")}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid grid-cols-2 gap-4">
              {t("about.cards").map((card, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    {card.title}
                  </div>
                  <div className="text-xs text-slate-600">{card.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-[4/5] flex flex-col justify-end p-8 relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-teal-500/20" />
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-teal-500/30 flex items-center justify-center">
                  <HeartHandshake size={40} className="text-white/70" />
                </div>
              </div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 z-10">
                <div className="w-8 h-1 bg-teal-400 rounded-full mb-3" />
                <p className="text-white/90 leading-relaxed italic mb-3">
                  "{t("about.quote")}"
                </p>
                <div className="text-sm text-teal-400 font-bold">
                  {t("about.quoteAuthor")}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 min-w-[140px]">
              <div className="text-3xl font-extrabold text-teal-600">
                {t("about.statNum")}
              </div>
              <div className="text-xs text-slate-600 font-bold mt-1">
                {t("about.statLabel")}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                {t("about.statSub")}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
