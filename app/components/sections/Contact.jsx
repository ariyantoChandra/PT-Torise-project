// app/components/sections/Contact.jsx
"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

// Menerima prop imageSrc, dengan nilai default "/contact.jpg"
export default function Contact({ imageSrc = "/contact.jpg" }) {
  const { t } = useLanguage();

  const phoneNumber = "6281384554530";
  const waLink = `https://wa.me/${phoneNumber}`;

  return (
    <section
      id="contact"
      className="bg-white py-24 px-6 border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* SISI KIRI: Teks & WA Card */}
          <div className="flex flex-col h-full justify-center">
            <Reveal>
              <div className="text-xs tracking-widest uppercase text-teal-600 font-bold mb-3">
                {t("contact.tag")}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                {t("contact.desc")}
              </p>
            </Reveal>

            {/* WA Card */}
            <Reveal delay={150}>
              <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-lg border border-slate-800 max-w-md">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#25D366]/10" />

                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-5">
                  <WhatsAppIcon size={28} className="text-[#25D366]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {t("contact.waTitle")}
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  {t("contact.waSub")}
                </p>

                <div className="text-2xl font-extrabold text-[#25D366] tracking-tight mb-1">
                  +62 813-8455-4530
                </div>
                <div className="text-xs text-white/50 mb-6">
                  {t("contact.time")}
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 font-bold h-12 rounded-xl flex inline-flex items-center justify-center gap-2 transition-colors w-max px-6 relative z-10"
                >
                  {t("contact.waBtn")} <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* SISI KANAN: Gambar Dinamis */}
          <Reveal delay={250} className="h-full mt-8 lg:mt-0">
            <div className="w-full h-full min-h-[300px] lg:min-h-[500px] bg-slate-100 rounded-[32px] overflow-hidden relative border border-slate-200 flex items-center justify-center shadow-inner">
              <img
                src={imageSrc}
                alt="Contact Us"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/contact.jpg"; // Gambar cadangan jika file tidak ditemukan
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
