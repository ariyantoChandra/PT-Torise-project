import Reveal from "../ui/Reveal"; // Pastikan path ini benar
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import shadcn Card
import { Button } from "@/components/ui/button"; // Import shadcn Button

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
    <section id="pricing" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest uppercase text-teal-600 font-bold mb-3">
              Pricing / 料金
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold m-0">
              シンプルな料金プラン
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <Card
                className={`h-full flex flex-col relative ${p.featured ? "bg-slate-900 border-teal-500 border-2" : "bg-white border-slate-200"}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                    おすすめ
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`text-xs font-semibold tracking-wider uppercase mb-2 ${p.featured ? "text-teal-400" : "text-teal-600"}`}
                  >
                    {p.en}
                  </div>
                  <CardTitle
                    className={`text-2xl ${p.featured ? "text-white" : "text-slate-900"}`}
                  >
                    {p.name}
                  </CardTitle>
                  <CardDescription
                    className={`${p.featured ? "text-white/60" : "text-slate-500"}`}
                  >
                    {p.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-extrabold ${p.featured ? "text-teal-400" : "text-slate-900"}`}
                    >
                      {p.price}
                    </span>
                    <span
                      className={`text-sm ${p.featured ? "text-white/50" : "text-slate-400"}`}
                    >
                      {p.per}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-3 text-sm ${p.featured ? "text-white/80" : "text-slate-600"}`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.featured ? "bg-teal-500/20" : "bg-teal-100"}`}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10">
                            <polyline
                              points="2,5 4.5,7.5 8,3"
                              fill="none"
                              stroke={p.featured ? "#2dd4bf" : "#0d9488"}
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
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className={`w-full font-bold ${p.featured ? "bg-teal-500 hover:bg-teal-400 text-white" : "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-100"}`}
                    variant={p.featured ? "default" : "outline"}
                  >
                    <a href="#contact">
                      {p.price === "要相談"
                        ? "詳細を問い合わせる"
                        : "このプランで始める"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
