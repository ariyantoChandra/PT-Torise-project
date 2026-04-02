"use client"; // Jangan lupa tambahkan ini karena kita pakai hooks context
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { C } from "../../../lib/colors";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext"; // Import fitur bahasa

export default function Hero() {
  const { t } = useLanguage(); // Gunakan fungsi t

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: C.navy,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
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
      >
        {/* Left */}
        <div>
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
            >
              {t("hero.desc")}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
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
                href="#about"
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
          {/* Stats */}
          <Reveal delay={550}>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {[
                ["2,500+", t("hero.stats.placements")],
                ["98%", t("hero.stats.satisfaction")],
                ["15+", t("hero.stats.languages")],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: C.tealLight,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Bento grid (Disederhanakan untuk contoh) */}
        <Reveal delay={300} className="hero-bento">
          {/* ... Kode Bento grid tetap sama seperti sebelumnya ... */}
          {/* Bisa diterjemahkan bertahap dengan menambahkannya di ja.js dan id.js nantinya */}
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            [Illustration/Bento UI Here]
          </div>
        </Reveal>
      </div>
    </section>
  );
}
