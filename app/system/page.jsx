"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Reveal from "../components/ui/Reveal";
import { useLanguage } from "../../lib/i18n/LanguageContext";

// --- CUSTOM SVG ICONS (Lebih aman dari error Lucide React) ---
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
// -------------------------------------------------------------

export default function SystemPage() {
  const { t } = useLanguage();
  const mapAddress =
    "Blok KK-1.60, Jl. Taman Surya 5 No.RT.7, RT.7/RW.19, Pegadungan, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11830";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="font-sans m-0 p-0 bg-slate-50">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="bg-slate-900 pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl" />
        <Reveal>
          <div className="text-sm tracking-[4px] text-teal-400 font-bold mb-3 uppercase">
            {t("contactPage.hero.en")}
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-extrabold m-0">
            {t("contactPage.hero.jp")}
          </h1>
        </Reveal>
      </section>

      {/* --- BAGIAN PETA & DESKRIPSI LOKASI --- */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Sisi Kiri: Teks Deskripsi */}
          <Reveal delay={100}>
            <div className="relative pl-6">
              {/* Garis Vertikal Hijau sebagai dekorasi samping */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[80%] bg-[#8dbcb8] rounded-full" />

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a5b9e] tracking-wide mb-4">
                {t("contactPage.title")}
              </h2>

              {/* Garis Horizontal Pendek */}
              <div className="w-16 h-1.5 bg-[#8dbcb8] mb-6" />

              <h3 className="text-lg md:text-xl font-bold text-slate-400 tracking-wider mb-6">
                {t("contactPage.subtitle")}
              </h3>

              <p className="text-slate-500 leading-loose text-base md:text-lg text-justify">
                {t("contactPage.desc")}
              </p>
            </div>
          </Reveal>

          {/* Sisi Kanan: Google Maps */}
          <Reveal delay={200} className="h-full">
            <div className="w-full aspect-[4/3] md:aspect-[16/11] bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={mapSrc}
                className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              {/* Efek border bawah hijau seperti di referensi */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#8dbcb8]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- BANNER SOCIAL MEDIA --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Gambar */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/homepage.jpg')" }}
        />
        {/* Overlay Abu-abu Gelap (Mirip referensi) */}
        <div className="absolute inset-0 bg-slate-600/80 backdrop-blur-[2px]" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Teks Follow Us */}
          <Reveal>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-wider mb-2">
                {t("contactPage.social.title")}
              </h2>
              {/* Garis Putih Pendek */}
              <div className="w-20 h-1.5 bg-white mb-6 mt-4" />
              <p className="text-xl md:text-2xl text-white/90 font-light">
                {t("contactPage.social.subtitle")}
              </p>
            </div>
          </Reveal>

          {/* Icon Sosial Media (Warna Asli Facebook & Instagram) */}
          <Reveal delay={150}>
            <div className="flex items-center justify-start md:justify-end gap-5 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/share/1EAjaUnDcQ/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(24,119,242,0.4)] transition-all shadow-lg"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://instagram.com/pt.toriseindonesiaglobal"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(188,24,136,0.4)] transition-all shadow-lg"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
