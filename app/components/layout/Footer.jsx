"use client"; // Tambahkan ini karena kita pakai context
import Link from "next/link";
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
          {/* --- BAGIAN KIRI (Logo & Info) --- */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: "1.25rem",
              }}
            >
              {/* Logo Gambar */}
              <img
                src="/logo-lpk-i.png"
                alt="Torise Indonesia Logo"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "0.5px",
                }}
              >
                Torise Indonesia
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

          {/* --- BAGIAN TENGAH (Layanan) --- */}
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
            {t("footer.serviceLinks").map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* --- BAGIAN KANAN (Perusahaan) --- */}
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
            {t("footer.companyLinks").map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  marginBottom: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* --- BAGIAN BAWAH (Copyright) --- */}
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
