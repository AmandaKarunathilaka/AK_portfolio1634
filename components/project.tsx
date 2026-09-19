"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false);
  const { language, t } = useLanguage();

  const initialLimit = 3;
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, initialLimit);

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-linear-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] py-20 text-[#F6FAFD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F6FAFD] tracking-tight">
            {t("projectsSection.title")}
          </h2>
          <p className="text-[#B3CFE5] max-w-xl mx-auto text-base sm:text-lg">
            {t("projectsSection.subtitle")}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((proj, index) => {
              const title = proj.title[language] || proj.title.en;
              const subtitle = proj.subtitle[language] || proj.subtitle.en;
              const description = proj.description[language] || proj.description.en;

              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="
                    flex flex-col justify-between h-full min-h-85
                    backdrop-blur-lg bg-[#1A3D63]/60 border border-[#4A7FA7]/30 rounded-2xl p-6 shadow-lg
                    hover:border-[#B3CFE5]/70 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300
                    group relative overflow-hidden
                  "
                >
                  {/* Top Card Section */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-[#F6FAFD] group-hover:text-[#B3CFE5] transition-colors">
                        {title}
                      </h3>
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#4A7FA7]/20 text-[#B3CFE5] border border-[#4A7FA7]/40 shrink-0">
                        {proj.period}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-[#4A7FA7]/90 uppercase tracking-wider">
                      {subtitle}
                    </p>

                    <p className="text-[#B3CFE5]/90 text-sm leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Bottom Card Section: Skills & Navigation Action */}
                  <div className="pt-6 mt-4 border-t border-[#4A7FA7]/20 space-y-4">
                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.skills.slice(0, 5).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#4A7FA7]/20 text-[#B3CFE5] border border-[#4A7FA7]/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {proj.skills.length > 5 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium text-[#B3CFE5]/70">
                          +{proj.skills.length - 5} {t("projectsSection.more")}
                        </span>
                      )}
                    </div>

                    {/* See More Navigation Link */}
                    <Link
                      href={`/projects/${proj.id}`}
                      className="
                        w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm
                        inline-flex items-center justify-between
                        bg-[#4A7FA7]/30 text-[#F6FAFD] border border-[#4A7FA7]/50
                        hover:bg-[#4A7FA7] hover:border-[#B3CFE5]
                        transition-all duration-300 group/btn
                      "
                    >
                      <span>{t("projectsSection.seeDetails")}</span>
                      <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Expand / Show More Projects Toggle Button */}
        {projectsData.length > initialLimit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base
                bg-linear-to-r from-[#1A3D63] to-[#4A7FA7] text-[#F6FAFD]
                border border-[#B3CFE5]/40 shadow-xl shadow-[#0A1931]/50
                hover:scale-95 active:scale-85 hover:border-[#B3CFE5]
                transition-all duration-200 cursor-pointer
              "
            >
              <span>
                {showAll
                  ? t("projectsSection.showLess")
                  : `${t("projectsSection.showMore")} (${projectsData.length - initialLimit} ${t("projectsSection.more")})`}
              </span>
              {showAll ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
