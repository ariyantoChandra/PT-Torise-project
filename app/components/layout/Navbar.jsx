"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Globe } from "lucide-react"; // Import Globe untuk icon bahasa
import { C } from "../../../lib/colors";
import { useLanguage } from "../../../lib/i18n/LanguageContext"; // Import fitur bahasa

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage(); // Gunakan fitur bahasa

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Menu sekarang menggunakan fungsi t() dari kamus
  const links = [
    { label: t("nav.company"), en: "Company", href: "#about" },
    { label: t("nav.merit"), en: "Merit", href: "#merit" },
    { label: t("nav.flow"), en: "Flow", href: "#flow" },
    { label: t("nav.pricing"), en: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(13,35,64,0.85)" : "rgba(13,35,64,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? `1px solid rgba(255,255,255,0.08)` : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              color: "#fff",
              fontFamily: "serif",
              letterSpacing: "-0.5px",
            }}
          >
            T
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
                letterSpacing: "0.5px",
                lineHeight: 1.1,
              }}
            >
              Torise Japan
            </div>
            <div
              style={{
                fontSize: 10,
                color: C.tealLight,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              {t("nav.support")}
            </div>
          </div>
        </div>
        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          className="nav-links"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: 6,
                color: "rgba(255,255,255,0.82)",
                fontSize: 14,
                fontWeight: 500,
                transition: "all 0.2s",
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ fontSize: 12, opacity: 0.65 }}>{l.label}</span>
            </a>
          ))}
        </div>
        {/* CTA & Switcher Bahasa */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* TOMBOL SWITCHER BAHASA */}
          <button
            onClick={() => setLang(lang === "ja" ? "id" : "ja")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 8,
              fontSize: 13,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            <Globe size={14} /> {lang === "ja" ? "ID" : "JA"}
          </button>

          <a
            href="#contact"
            style={{
              background: C.teal,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.3px",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.tealLight;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.teal;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t("nav.contact")} <ArrowRight size={14} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
            className="menu-btn"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: C.navy,
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            padding: "1rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: 15,
                borderBottom: `1px solid rgba(255,255,255,0.06)`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: "block",
              marginTop: 16,
              textAlign: "center",
              background: C.teal,
              color: "#fff",
              padding: "12px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {t("nav.contact")}
          </a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
