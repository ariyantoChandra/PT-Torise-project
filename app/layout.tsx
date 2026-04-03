import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// IMPORT PROVIDER (Sesuaikan path jika perlu, mundur 1 folder dari app)
import { LanguageProvider } from "../lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torise Indonesia Global - Employment Support",
  description: "Employment Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* BUNGKUS DENGAN PROVIDER */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
