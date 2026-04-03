"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Reveal from "./components/ui/Reveal";
import { useLanguage } from "../lib/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="font-sans m-0 p-0 bg-[#0d2340] flex flex-col min-h-screen">
      <Navbar />

      {/* --- KONTEN 404 --- */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 md:py-48 text-center relative overflow-hidden">
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <Reveal>
          <div className="relative">
            {/* Teks 404 Besar (Warna diubah jadi putih transparan agar seperti bayangan/watermark) */}
            <h1 className="text-8xl md:text-[150px] font-extrabold text-white tracking-tighter leading-none mb-4 select-none drop-shadow-sm">
              404
            </h1>

            {/* Teks "Oops" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full rotate-12 shadow-sm">
              Oops!
            </div>
          </div>

          {/* 2. Warna Judul diubah menjadi putih (text-white) */}
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6 mt-4">
            {t("notFound.title")}
          </h2>

          {/* 3. Warna Deskripsi diubah menjadi putih redup (text-white/70) */}
          <p className="text-white/70 mb-10 max-w-md mx-auto text-base md:text-lg leading-relaxed">
            {t("notFound.desc")}
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Home size={20} />
            {t("notFound.backBtn")}
          </Link>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
