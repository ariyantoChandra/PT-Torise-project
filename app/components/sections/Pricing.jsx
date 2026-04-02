"use client";
import { C } from "../../../lib/colors";
import Reveal from "../ui/Reveal";

export default function Pricing() {
  const plans = [
    {
      name: "基本プラン",
      en: "Basic",
      price: "¥50,000",
      per: "/月",
      desc: "小規模企業・初めての外国人雇用に最適",
      features: [
        "在留資格相談（月2回）",
        "書類チェックサービス",
        "メール・電話サポート",
        "日本語研修案内",
      ],
      featured: false,
    },
    {
      name: "スタンダード",
      en: "Standard",
      price: "¥120,000",
      per: "/月",
      desc: "中規模企業向けの充実したサポートプラン",
      features: [
        "在留資格申請代行",
        "採用活動サポート",
        "多言語対応スタッフ",
        "24hホットライン",
        "入国後生活支援",
      ],
      featured: true,
    },
    {
      name: "エンタープライズ",
      en: "Enterprise",
      price: "要相談",
      per: "",
      desc: "大規模受け入れ・カスタム対応が必要な企業に",
      features: [
        "専任チーム配置",
        "独自研修プログラム",
        "法人コンプライアンス",
        "カスタム報告書",
        "オンサイト訪問対応",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      style={{ background: C.offWhite, padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: C.teal,
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              Pricing / 料金
            </div>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                color: C.navy,
                fontWeight: 700,
                margin: 0,
              }}
            >
              シンプルな料金プラン
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                style={{
                  background: p.featured ? C.navy : C.white,
                  borderRadius: 20,
                  padding: "2rem",
                  border: p.featured
                    ? `2px solid ${C.teal}`
                    : `1px solid ${C.gray100}`,
                  position: "relative",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: C.teal,
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "4px 18px",
                      borderRadius: 100,
                      letterSpacing: "0.5px",
                    }}
                  >
                    おすすめ
                  </div>
                )}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: p.featured ? C.teal : C.teal,
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {p.en}
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: p.featured ? "#fff" : C.navy,
                      margin: "0 0 .5rem",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: p.featured ? "rgba(255,255,255,0.55)" : C.gray600,
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <span
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      color: p.featured ? C.tealLight : C.navy,
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: p.featured ? "rgba(255,255,255,0.45)" : C.gray400,
                    }}
                  >
                    {p.per}
                  </span>
                </div>
                <ul
                  style={{
                    margin: "0 0 2rem",
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: p.featured ? "rgba(255,255,255,0.8)" : C.gray600,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: p.featured
                            ? "rgba(13,148,136,0.3)"
                            : C.tealPale,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10">
                          <polyline
                            points="2,5 4.5,7.5 8,3"
                            fill="none"
                            stroke={C.teal}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    textDecoration: "none",
                    background: p.featured ? C.teal : "transparent",
                    color: p.featured ? "#fff" : C.navy,
                    border: p.featured ? "none" : `2px solid ${C.navy}`,
                    padding: "12px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    transition: "all 0.2s",
                  }}
                >
                  {p.price === "要相談"
                    ? "詳細を問い合わせる"
                    : "このプランで始める"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
