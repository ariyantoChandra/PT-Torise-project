// app/components/layout/Footer.jsx
"use client";
import Link from "next/link";
// Menghapus import { C } from "../../lib/colors"; yang menyebabkan error
import { useLanguage } from "../../../lib/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

// --- CUSTOM SVG ICONS (Safer than depending on certain lucide-react versions for brands) ---
const FacebookIcon = ({ size = 18 }) => (
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
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
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
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
// ---------------------------------------------------------------------------------------------

export default function Footer() {
  const { t } = useLanguage();

  // Data sosial media resmi Anda
  const socialLinks = [
    {
      icon: <FacebookIcon size={18} />,
      href: "https://www.facebook.com/share/1EAjaUnDcQ/",
      name: "Facebook",
    },
    {
      icon: <InstagramIcon size={18} />,
      href: "https://instagram.com/pt.toriseindonesiaglobal",
      name: "Instagram",
    },
  ];

  return (
    <footer className="bg-[#0B1A2C] text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
            <img
              src="/logo-lpk-i.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div className="font-extrabold text-xl text-white tracking-wide text-teal-400">
              Torise Indonesia
            </div>
          </div>
          <p className="text-sm leading-loose mb-6">{t("footer.desc")}</p>
          {/* Ikon Sosial Media di bawah deskripsi */}
          <div className="flex gap-4 mb-4 justify-center md:justify-start">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-400 transition-all"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Kolom 2: Informasi (Links) */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">
            {t("footer.services")}
          </h4>
          <ul className="space-y-4 text-sm p-0 m-0 list-none">
            {t("footer.serviceLinks").map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Perusahaan (Links) */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">
            {t("footer.company")}
          </h4>
          <ul className="space-y-4 text-sm p-0 m-0 list-none">
            {t("footer.companyLinks").map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 4: Kontak (Info) */}
        <div className="text-sm">
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">
            Contact
          </h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <MapPin size={22} className="text-teal-500 shrink-0 mt-1" />
              <p className="leading-loose m-0 whitespace-pre-line">
                {t("footer.address")}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Phone size={18} className="text-teal-500 shrink-0" />
              <p className="m-0">081384554530</p>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Mail size={18} className="text-teal-500 shrink-0" />
              <p className="m-0">toriseindonesia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Baris Bawah: Hak Cipta */}
      <div className="max-w-7xl mx-auto text-center text-xs mt-16 pt-8 border-t border-slate-800 tracking-wide text-slate-600">
        <p className="m-0 mb-2">{t("footer.rights")}</p>
        <p className="m-0 opacity-80">{t("footer.license")}</p>
      </div>
    </footer>
  );
}
