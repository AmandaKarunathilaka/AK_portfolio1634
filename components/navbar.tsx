"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-[#0A1931]/80
      border-b border-[#4A7FA7]/30
      shadow-[0_8px_32px_rgba(10,25,49,0.5)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-[#F6FAFD] tracking-wide"
        >
          Amanda
        </a>

        {/* Desktop Menu & Language Toggle */}
        <div className="hidden md:flex items-center gap-8 text-[#B3CFE5] relative font-medium">

          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group hover:text-[#F6FAFD] transition"
            >
              {link.name}

              {/* Underline glow effect */}
              <span className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-gradient-to-r from-[#4A7FA7] to-[#B3CFE5]
                transition-all duration-300
                group-hover:w-full
              " />
            </motion.a>
          ))}

          {/* Language Toggle */}
          <LanguageToggle />

        </div>

        {/* Mobile controls: Language toggle + Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#F6FAFD]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="
          md:hidden
          backdrop-blur-xl
          bg-[#0A1931]/95
          border-t border-[#4A7FA7]/30
        ">
          <div className="flex flex-col items-center gap-6 py-8 text-[#B3CFE5] text-lg">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F6FAFD] transition"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>
      )}

    </nav>
  );
}