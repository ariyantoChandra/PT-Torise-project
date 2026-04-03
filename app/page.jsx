"use client";
// Menggunakan ./ karena folder components ada di dalam folder app (sejajar dengan page.jsx)
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import NewsTicker from "./components/sections/NewsTicker";
import Contact from "./components/sections/Contact";

export default function ToriseJapan() {

  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar />
      <Hero />
      <NewsTicker />
      <Contact />
      <Footer />
    </div>
  );
}
