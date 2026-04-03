"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { C } from "../../../lib/colors";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: t("nav.company"), href: "/company" },
    { label: t("nav.merit"), href: "/#merit" },
    { label: t("nav.flow"), href: "/#flow" },
    { label: t("nav.system"), href: "/system" },
    { label: t("nav.gallery"), href: "/gallery" },
  ];

  // Efek shrink (mengecil saat scroll)
  const navHeight = scrolled ? 70 : 110;
  const logoSize = scrolled ? 40 : 64;
  const titleSize = scrolled ? 18 : 26;
  const subSize = scrolled ? 10 : 13;
  const linkSize = scrolled ? 14 : 16;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(13,35,64,0.95)" : "rgba(13,35,64,0.3)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? `1px solid rgba(255,255,255,0.08)`
          : "1px solid transparent",
        transition: "all 0.4s ease",
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
          height: navHeight,
          transition: "height 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo-lpk-i.png"
            alt="Torise Indonesia Logo"
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: "8px",
              objectFit: "contain",
              transition: "all 0.4s ease",
            }}
          />
          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: titleSize,
                color: "#fff",
                letterSpacing: "0.5px",
                lineHeight: 1.1,
                transition: "all 0.4s ease",
              }}
            >
              Torise Indonesia
            </div>
            <div
              style={{
                fontSize: subSize,
                color: C.tealLight,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: scrolled ? "2px" : "6px",
                fontWeight: 600,
                transition: "all 0.4s ease",
              }}
            >
              {t("nav.support")}
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 12 }}
          className="nav-links"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                textDecoration: "none",
                padding: "10px 16px",
                borderRadius: 8,
                color: "rgba(255,255,255,0.85)",
                fontSize: linkSize,
                fontWeight: 600,
                transition: "all 0.3s ease",
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Switcher Bahasa & Menu Burger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => setLang(lang === "ja" ? "id" : "ja")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              padding: scrolled ? "8px 12px" : "10px 16px",
              borderRadius: 8,
              fontSize: linkSize - 1,
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            <Globe
              size={scrolled ? 14 : 16}
              style={{ transition: "all 0.4s ease" }}
            />{" "}
            {lang === "ja" ? "ID" : "JA"}
          </button>

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
            {open ? <X size={32} /> : <Menu size={32} />}
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
            paddingBottom: "2rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 0",
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                borderBottom: `1px solid rgba(255,255,255,0.06)`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 992px) {
          .nav-links { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
