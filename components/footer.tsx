"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#071324] border-t border-[#4A7FA7]/20 text-[#F6FAFD] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4A7FA7]/20">

        {/* Brand / About Column */}
        <div className="md:col-span-5 space-y-4">
          <a href="#home" className="text-2xl font-bold text-[#F6FAFD] tracking-wide inline-block">
            Amanda <span className="text-[#4A7FA7]">Karunathilaka</span>
          </a>
          <p className="text-[#B3CFE5]/80 text-sm leading-relaxed max-w-sm">
            {t("footer.bio")}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-base font-semibold text-[#F6FAFD] uppercase tracking-wider">
            {t("footer.navTitle")}
          </h4>
          <ul className="space-y-2 text-sm text-[#B3CFE5]/80">
            <li>
              <a href="#home" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.home")}</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.about")}</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.experience")}</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.skills")}</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.projects")}</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F6FAFD] transition duration-200">{t("nav.contact")}</a>
            </li>
          </ul>
        </div>

        {/* Social & Connect Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-base font-semibold text-[#F6FAFD] uppercase tracking-wider">
            {t("footer.connectTitle")}
          </h4>
          <p className="text-sm text-[#B3CFE5]/80">
            {t("footer.connectDesc")}
          </p>
          <div className="flex items-center gap-4 text-xl text-[#B3CFE5]">
            <a
              href="https://github.com/AmandaKarunathilaka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1A3D63]/80 border border-[#4A7FA7]/30 hover:bg-[#4A7FA7] hover:text-[#F6FAFD] transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1A3D63]/80 border border-[#4A7FA7]/30 hover:bg-[#4A7FA7] hover:text-[#F6FAFD] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:amandakarunathilaka490@gmail.com"
              className="p-3 rounded-full bg-[#1A3D63]/80 border border-[#4A7FA7]/30 hover:bg-[#4A7FA7] hover:text-[#F6FAFD] transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B3CFE5]/60">
        <p>© {new Date().getFullYear()} Amanda Karunathilaka. {t("footer.rights")}</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3D63]/60 border border-[#4A7FA7]/30 text-[#B3CFE5] hover:text-[#F6FAFD] hover:bg-[#4A7FA7]/40 transition duration-300 cursor-pointer"
        >
          <span>{t("footer.backToTop")}</span>
          <FaArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
