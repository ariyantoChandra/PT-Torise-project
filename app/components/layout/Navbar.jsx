"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { C } from "@/lib/colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "会社概要", en: "Company", href: "#about" },
    { label: "メリット", en: "Merit", href: "#merit" },
    { label: "ご利用の流れ", en: "Flow", href: "#flow" },
    { label: "料金", en: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(13,35,64,0.85)" : "rgba(13,35,64,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? `1px solid rgba(255,255,255,0.08)` : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Isi kode Navbar persis seperti sebelumnya, tidak ada yang diubah */}
      {/* ... */}
    </nav>
  );
}
