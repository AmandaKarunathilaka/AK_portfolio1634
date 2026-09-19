"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="
        flex items-center gap-2 px-3 py-1.5 rounded-full
        bg-[#1A3D63]/80 hover:bg-[#4A7FA7]/40
        border border-[#4A7FA7]/40 hover:border-[#B3CFE5]
        text-[#F6FAFD] text-xs font-semibold
        transition-all duration-300 shadow-md cursor-pointer
      "
      title={language === "en" ? "日本語に切り替え" : "Switch to English"}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-[#B3CFE5]" />
      <div className="flex items-center gap-1">
        <span className={language === "en" ? "text-[#F6FAFD] font-bold" : "text-[#B3CFE5]/60"}>
          EN
        </span>
        <span className="text-[#4A7FA7]">/</span>
        <span className={language === "ja" ? "text-[#F6FAFD] font-bold" : "text-[#B3CFE5]/60"}>
          JA
        </span>
      </div>
    </motion.button>
  );
}
