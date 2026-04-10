"use client";

export default function LogoCarousel() {
  // Ganti '/logo-lainnya.png' dengan path gambar kedua yang Anda miliki
  const logos = [
    "/logo-lpk-i.png",
    "/logo.png",
    "/logo-lpk-i.png",
    "/logo.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-10 border-y border-slate-100 flex whitespace-nowrap">
      {/* Duplikasi array dua kali agar efek infinite-nya mulus tanpa patah */}
      <div className="flex gap-16 md:gap-32 items-center animate-marquee min-w-full pl-16">
        {[...logos, ...logos, ...logos, ...logos].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Partner Logo ${idx}`}
            className="h-14 md:h-20 w-auto object-contain inline-block"
          />
        ))}
      </div>
    </div>
  );
}
