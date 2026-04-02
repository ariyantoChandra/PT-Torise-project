import { C } from "@/lib/colors";
import { MapPin } from "lucide-react";

export default function Footer() {
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
              外国人労働者と企業を繋ぐ専門の登録支援機関。すべての人が日本で安心して働けるよう支援します。
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
              <span>
                〒100-0005 東京都千代田区丸の内1-1-1
                <br />
                ToriseJapan Bldg. 8F
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
              Services
            </div>
            {[
              "外国人雇用支援",
              "在留資格申請",
              "生活サポート",
              "日本語研修",
              "採用コンサルティング",
            ].map((s) => (
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.tealLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
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
              Company
            </div>
            {[
              "会社概要",
              "採用情報",
              "プライバシーポリシー",
              "特定商取引法",
            ].map((s) => (
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.tealLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
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
          <div style={{ fontSize: 12 }}>
            © 2025 Torise Japan Co., Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: C.teal }}>
            登録支援機関 登録番号 第XXXXX号
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
