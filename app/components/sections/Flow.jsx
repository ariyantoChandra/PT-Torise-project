"use client";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function Flow() {
  const { t } = useLanguage();
  return (
    <section
      id="flow"
      className="bg-slate-900 py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,184,166,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase text-teal-400 font-bold mb-3">
              {t("flow.tag")}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold m-0">
              {t("flow.title")}
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-[32px] overflow-hidden border border-white/10">
          {t("flow.steps").map((s, i) => (
            <Reveal key={s.num} delay={i * 70}>
              <div className="bg-slate-900/90 hover:bg-teal-900/20 p-8 md:p-10 relative transition-colors h-full">
                <div className="text-5xl font-black text-teal-500/20 leading-none mb-4 font-mono tracking-tighter">
                  {s.num}
                </div>
                <div className="w-8 h-1 bg-teal-500 rounded-full mb-5" />
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <div className="text-xs text-teal-400 mb-4 tracking-wide font-medium">
                  {s.sub}
                </div>
                <p className="text-sm text-white/60 leading-relaxed m-0">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
