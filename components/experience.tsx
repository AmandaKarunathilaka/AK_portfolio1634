"use client";

import { motion } from "framer-motion";
import { useLanguage, translations } from "@/context/LanguageContext";

export default function ExperienceTree() {
  const { language, t } = useLanguage();

  const experiencesList = translations[language]?.experience?.items || translations["en"].experience.items;

  // Preserve side layouts
  const sides = ["right", "left", "right", "left", "right"];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] py-20 flex justify-center text-[#F6FAFD]"
    >
      <div className="relative w-full max-w-5xl">

        {/* 🔖 Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#F6FAFD] mb-12">
          {t("experience.title")}
        </h2>

        {/* 🌳 Tree Trunk */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-[#4A7FA7] opacity-40" />

        {experiencesList.map((exp: any, index: number) => {
          const side = sides[index % sides.length];
          return (
            <div
              key={index}
              className={`relative flex items-center w-full my-16 ${
                side === "left" ? "justify-start" : "justify-end"
              }`}
            >
              {/* 🌿 Branch Line */}
              <div
                className={`absolute top-1/2 w-24 h-[2px] bg-[#4A7FA7] opacity-40 ${
                  side === "left" ? "right-1/2" : "left-1/2"
                }`}
              />

              {/* 🌟 Glowing Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-4 h-4 bg-[#B3CFE5] rounded-full shadow-[0_0_15px_#4A7FA7]"
                />
              </div>

              {/* 📦 Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: side === "left" ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-[320px] backdrop-blur-lg bg-[#1A3D63]/60 border border-[#4A7FA7]/30 rounded-2xl p-5 shadow-lg ${
                  side === "left" ? "mr-auto ml-0 text-right" : "ml-auto mr-0 text-left"
                }`}
              >
                <h3 className="text-lg font-bold text-[#F6FAFD]">
                  {exp.title}
                </h3>

                <p className="text-[#B3CFE5] text-sm mt-1">
                  {exp.subtitle}
                </p>

                <p className="text-[#B3CFE5]/70 text-xs mt-1">
                  {exp.period}
                </p>

                {/* Skills */}
                <div className={`flex flex-wrap gap-2 mt-3 ${side === "left" ? "justify-end" : "justify-start"}`}>
                  {exp.skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#4A7FA7]/20 text-[#B3CFE5] border border-[#4A7FA7]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}