"use client";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// WAJIB ADA 'export default function'
export default function BenefitPage() {
  return (
    <div className="font-sans m-0 p-0">
      <Navbar />

      <section className="py-32 px-6 text-center min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Halaman Keunggulan / Benefit</h1>
      </section>

      <Footer />
    </div>
  );
}
