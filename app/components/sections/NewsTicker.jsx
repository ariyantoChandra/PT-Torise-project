"use client";
import { ChevronRight } from "lucide-react";
import { C } from "../../../lib/colors";
import Reveal from "../ui/Reveal";

export default function NewsTicker() {
  const news = [
    {
      date: "2025.06.01",
      text: "新しい特定技能2号の受け入れ対象業種が拡大されました。",
    },
    {
      date: "2025.05.20",
      text: "ベトナム・インドネシア向け日本語研修プログラムを強化しました。",
    },
    {
      date: "2025.04.15",
      text: "東京・大阪・名古屋にサポートセンターを新設しました。",
    },
    {
      date: "2025.03.30",
      text: "在留資格申請のオンライン対応を全国に拡大しました。",
    },
    {
      date: "2025.02.10",
      text: "外国人雇用支援セミナーを無料開催します（毎月第2木曜日）。",
    },
  ];

  return (
    <section
      style={{
        background: C.offWhite,
        borderTop: `1px solid ${C.gray100}`,
        borderBottom: `1px solid ${C.gray100}`,
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 3,
                  height: 20,
                  background: C.teal,
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: C.navy,
                }}
              >
                最新情報
              </span>
            </div>
            <span style={{ fontSize: 13, color: C.gray400 }}>
              / Information & News
            </span>
          </div>
        </Reveal>
        <div>
          {news.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  padding: "1rem 0",
                  borderBottom: `1px solid ${C.gray100}`,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.gray50;
                  e.currentTarget.style.paddingLeft = "12px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: C.teal,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.5px",
                    minWidth: 80,
                  }}
                >
                  {item.date}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: C.gray600,
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {item.text}
                </span>
                <ChevronRight
                  size={16}
                  color={C.gray400}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
