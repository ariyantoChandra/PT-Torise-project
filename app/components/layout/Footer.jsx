"use client"; // Tambahkan ini karena kita pakai context
import { C } from "../../../lib/colors";
import { MapPin } from "lucide-react";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage(); // Ambil fungsi t untuk translate

  return (
    <footer
      style={{
        background: C.gray800,
        color: "rgba(255,255,255,0.65)",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${C.teal}, ${C.tealLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#fff",
                  fontFamily: "serif",
                }}
              >
                T
              </div>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>
                Torise Japan
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                margin: "0 0 1.25rem",
                maxWidth: 300,
              }}
            >
              {t("footer.desc")}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                fontSize: 13,
              }}
            >
              <MapPin
                size={15}
                color={C.teal}
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <span style={{ whiteSpace: "pre-line" }}>
                {t("footer.address")}
              </span>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {t("footer.services")}
            </div>
            {t("footer.serviceLinks").map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
              >
                {s}
              </a>
            ))}
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {t("footer.company")}
            </div>
            {t("footer.companyLinks").map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div style={{ fontSize: 12 }}>{t("footer.rights")}</div>
          <div style={{ fontSize: 12, color: C.teal }}>
            {t("footer.license")}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { 
          .footer-grid { grid-template-columns: 1fr !important; } 
        }
      `}</style>
    </footer>
  );
}
