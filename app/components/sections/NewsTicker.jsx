"use client";
import { ChevronRight } from "lucide-react";
import { C } from "../../../lib/colors";
import Reveal from "../ui/Reveal";
import { useLanguage } from "../../../lib/i18n/LanguageContext";

export default function NewsTicker() {
  const { t } = useLanguage();
  const newsItems = t("news.items") || [];

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
                {t("news.title")}
              </span>
            </div>
            <span style={{ fontSize: 13, color: C.gray400 }}>
              {t("news.subtitle")}
            </span>
          </div>
        </Reveal>

        <div>
          {newsItems.map((item, i) => (
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
