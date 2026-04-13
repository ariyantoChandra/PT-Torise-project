"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ja } from "./ja";
import { id } from "./id";

const LanguageContext = createContext();

export const translations = { ja, id };

export function LanguageProvider({ children }) {
  // Set default ke bahasa Indonesia ("id")
  const [lang, setLangState] = useState("id");

  // useEffect akan berjalan di sisi Client saat website pertama kali dimuat
  useEffect(() => {
    // Mengecek apakah sebelumnya user sudah pernah memilih bahasa yang tersimpan di localStorage
    const savedLang = localStorage.getItem("preferred_language");
    if (savedLang) {
      setLangState(savedLang); // Gunakan bahasa yang tersimpan
    }
  }, []);

  // Fungsi khusus untuk mengubah state bahasa DAN menyimpannya ke localStorage
  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem("preferred_language", newLang);
  };

  // Fungsi `t` (translate) untuk memanggil teks dari kamus
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      if (value[k] === undefined) return key; // Jika kata tidak ditemukan, kembalikan key-nya
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook untuk dipakai di komponen
export function useLanguage() {
  return useContext(LanguageContext);
}
