"use client";
import { createContext, useContext, useState } from "react";
import { ja } from "./ja";
import { id } from "./id";

const LanguageContext = createContext();

export const translations = { ja, id };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id"); // Default bahasa Jepang

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
