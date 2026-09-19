"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      title: t("about.educationTitle"),
      desc: t("about.educationDesc"),
      icon: <GraduationCap className="w-6 h-6 text-[#B3CFE5]" />,
    },
    {
      title: t("about.devFocusTitle"),
      desc: t("about.devFocusDesc"),
      icon: <Code className="w-6 h-6 text-[#B3CFE5]" />,
    },
    {
      title: t("about.aiTitle"),
      desc: t("about.aiDesc"),
      icon: <Rocket className="w-6 h-6 text-[#B3CFE5]" />,
    },
    {
      title: t("about.leadershipTitle"),
      desc: t("about.leadershipDesc"),
      icon: <Users className="w-6 h-6 text-[#B3CFE5]" />,
    },
  ];

  return (
    <section
      id="about"
      className="
      py-24
      bg-gradient-to-b
      from-[#0A1931]
      via-[#1A3D63]
      to-[#0A1931]
      text-[#F6FAFD]
      "
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("about.titlePrefix")}{" "}
            <span className="text-[#B3CFE5]">{t("about.titleSuffix")}</span>
          </h2>

          <div className="w-24 h-1 bg-[#4A7FA7] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-[#B3CFE5]/90">
              {t("about.p1")}
            </p>

            <p className="mt-4 text-[#B3CFE5]/80">
              {t("about.p2")}
            </p>

            {/* Highlight Box */}
            <div className="
              mt-6
              p-4
              rounded-lg
              bg-[#1A3D63]/70
              border border-[#4A7FA7]/40
              backdrop-blur-md
              text-[#F6FAFD]
            ">
              {t("about.highlight")}
            </div>
          </motion.div>

          {/* RIGHT HIGHLIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03 }}
                className="
                p-5
                rounded-xl
                bg-[#1A3D63]/60
                backdrop-blur-md
                border border-[#4A7FA7]/30
                hover:border-[#B3CFE5]
                transition duration-300
                "
              >
                <div className="p-2.5 w-fit rounded-lg bg-[#0A1931]/60 border border-[#4A7FA7]/30 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#F6FAFD]">{item.title}</h3>
                <p className="text-xs text-[#B3CFE5]/80 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}