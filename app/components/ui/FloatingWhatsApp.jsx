"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  // Nomor WA diambil dari data PPT
  const phoneNumber = "6281384554530";
  const waLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-300"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
