"use client";
import { ArrowRight } from "lucide-react";
import { C } from "../../../lib/colors";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.navy,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "80px 0", // Menambah padding atas/bawah agar konten tidak terlalu mentok
      }}
    >
      {/* Background geometric shapes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 65%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "8%",
            width: 2,
            height: 200,
            background: `linear-gradient(to bottom, transparent, ${C.teal}, transparent)`,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "18%",
            width: 2,
            height: 120,
            background: `linear-gradient(to bottom, transparent, ${C.tealLight}, transparent)`,
            opacity: 0.25,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 1.5rem 60px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid" // Class untuk mobile grid
      >
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="hero-content-col">
          {" "}
          {/* Class untuk mobile centering */}
          <Reveal delay={100}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(13,148,136,0.15)",
                border: `1px solid rgba(13,148,136,0.35)`,
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: "1.5rem",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: C.tealLight,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: C.tealLight,
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                }}
              >
                {t("hero.badge")}
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 1.5rem",
                fontFamily: "'Georgia', serif",
              }}
            >
              {t("hero.title1")}
              <span
                style={{
                  display: "block",
                  background: `linear-gradient(90deg, ${C.teal}, ${C.tealLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("hero.titleHighlight")}
              </span>
              {t("hero.title2")}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.75,
                margin: "0 0 2.5rem",
                maxWidth: 480,
              }}
              className="hero-desc" // Class untuk mobile centering
            >
              {t("hero.desc")}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              className="hero-buttons" // Class untuk mobile centering
            >
              <a
                href="#contact"
                style={{
                  background: C.teal,
                  color: "#fff",
                  padding: "14px 30px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.tealLight;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.teal;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t("hero.consultBtn")} <ArrowRight size={16} />
              </a>
              <a
                href="/company"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  padding: "14px 26px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                }}
              >
                {t("hero.moreBtn")}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Kolom Kanan: Bento grid / Image */}
        <Reveal delay={300} className="hero-bento">
          {" "}
          {/* Class untuk mobile grid item */}
          <img
            src="/homepage.jpg"
            alt="Torise Indonesia Homepage Illustration"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              display: "block",
            }}
          />
        </Reveal>
      </div>

      {/* --- CSS Respon Khusus Mobile --- */}
      <style>{`
        @media (max-width: 768px) { 
          /* 1. Mengubah grid 2 kolom menjadi 1 kolom bertumpuk */
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important;
            text-align: center; /* Memusatkan semua teks di mobile */
            padding-top: 80px !important; 
          } 

          /* 2. REMOVE THE SWAP - Let standard 1 -> 2 order place Text above Image */
          /* Perintah 'order' dari codingan sebelumnya telah dihapus */

          /* Adjust bento (image area) on mobile */
          .hero-bento { 
            width: 100%;
            max-width: 350px; 
            margin: 0 auto; /* Center horizontally in the grid cell */
          }

          /* Adjust content (text area) on mobile */
          .hero-content-col { 
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center; /* Center horizontally in the grid cell */
          }

          /* Center buttons in mobile */
          .hero-buttons {
            justify-content: center;
          }

          /* Center description in mobile and ensure auto margins for centering */
          .hero-desc {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
