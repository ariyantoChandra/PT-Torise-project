"use client";
import { useState } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal"; // Pastikan path ini benar
import { Button } from "@/components/ui/button"; // Import shadcn Button
import { Input } from "@/components/ui/input"; // Import shadcn Input
import { Textarea } from "@/components/ui/textarea"; // Import shadcn Textarea

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest uppercase text-teal-600 font-bold mb-3">
              Contact / お問い合わせ
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold m-0">
              まずはお気軽にご相談ください
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Card */}
          <Reveal delay={100}>
            <div className="bg-slate-900 rounded-3xl p-10 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-teal-600/10" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-600/20 flex items-center justify-center mb-6">
                  <Phone size={26} className="text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  お電話でのご相談
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  専任スタッフが日本語・多言語でご対応します。まずはお気軽にお電話ください。
                </p>
                <div className="text-3xl font-extrabold text-teal-400 tracking-tight mb-2">
                  0120-XXX-XXX
                </div>
                <div className="text-sm text-white/50">
                  平日 9:00〜18:00（土日祝は除く）
                </div>
              </div>
              <Button
                asChild
                className="mt-8 bg-teal-600 hover:bg-teal-500 text-white font-bold h-12 w-full md:w-auto"
              >
                <a href="tel:0120XXXXXX">
                  <Phone size={17} className="mr-2" /> 今すぐ電話する
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Web form card menggunakan shadcn */}
          <Reveal delay={200}>
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                <Mail size={26} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Webフォームからご相談
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                24時間受付。1営業日以内にご返信いたします。
              </p>

              {sent ? (
                <div className="text-center p-8 bg-teal-50 rounded-xl">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold text-slate-900 mb-1">
                    送信が完了しました！
                  </div>
                  <div className="text-sm text-slate-600">
                    1営業日以内にご連絡いたします。
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Input
                    placeholder="お名前 / Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white h-12"
                  />
                  <Input
                    placeholder="メールアドレス / Email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="bg-white h-12"
                  />
                  <Input
                    placeholder="会社名 / Company"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="bg-white h-12"
                  />
                  <Textarea
                    placeholder="お問い合わせ内容 / Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-white min-h-[120px] resize-y"
                  />
                  <Button
                    onClick={handleSubmit}
                    className="bg-teal-600 hover:bg-teal-500 text-white font-bold h-12 mt-2"
                  >
                    送信する <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
