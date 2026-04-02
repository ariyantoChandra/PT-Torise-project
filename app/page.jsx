import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import NewsTicker from "./components/sections/NewsTicker";
import About from "./components/sections/About";
import Merit from "./components/sections/Merit";
import Flow from "./components/sections/Flow";
import Pricing from "./components/sections/Pricing";
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
      <About />
      <Merit />
      <Flow />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
