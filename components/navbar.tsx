"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
          href=""
          className="text-xl font-bold text-[#F6FAFD] tracking-wide"
        >
          Amanda
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#B3CFE5] relative font-medium">

          {links.map((link) => (
            <motion.a
              key={link.name}
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

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#F6FAFD] md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

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
                key={link.name}
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