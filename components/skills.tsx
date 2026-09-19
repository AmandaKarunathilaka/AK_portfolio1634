"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiC,
  SiPython,
  SiMongodb,
  SiExpress,
  SiRender,
  SiSupabase,
} from "react-icons/si";
import { Brain, Code2, Layout, Database, Wrench, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skillsSection.catLanguages"),
      icon: <Code2 className="w-6 h-6 text-[#B3CFE5]" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-amber-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-orange-500" /> },
      ],
    },
    {
      title: t("skillsSection.catFrontend"),
      icon: <Layout className="w-6 h-6 text-[#B3CFE5]" />,
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Responsive UI", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: t("skillsSection.catBackend"),
      icon: <Database className="w-6 h-6 text-[#B3CFE5]" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SupaBase", icon: <SiSupabase className="text-green-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white-500" /> },
        { name: "Machine Learning", icon: <Brain className="text-purple-400" /> },
        { name: "REST APIs", icon: <Sparkles className="text-amber-300" /> },
      ],
    },
    {
      title: t("skillsSection.catTools"),
      icon: <Wrench className="w-6 h-6 text-[#B3CFE5]" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Render", icon: <SiRender className="text-white" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        w-full min-h-screen py-24
        bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931]
        text-[#F6FAFD] relative overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {t("skillsSection.titlePrefix")}{" "}
            <span className="text-[#B3CFE5]">{t("skillsSection.titleSuffix")}</span>
          </h2>
          <p className="text-[#B3CFE5]/80 max-w-xl mx-auto text-base sm:text-lg">
            {t("skillsSection.subtitle")}
          </p>
          <div className="w-24 h-1 bg-[#4A7FA7] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-2xl
                bg-[#1A3D63]/50 backdrop-blur-md
                border border-[#4A7FA7]/30 hover:border-[#4A7FA7]/60
                shadow-xl transition-all duration-300
              "
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#4A7FA7]/20">
                <div className="p-2.5 rounded-xl bg-[#0A1931]/60 border border-[#4A7FA7]/30">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F6FAFD]">{cat.title}</h3>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                      bg-[#0A1931]/70 backdrop-blur-sm
                      border border-[#4A7FA7]/30 hover:border-[#B3CFE5]
                      text-sm font-medium text-[#F6FAFD]
                      shadow-md transition-all duration-200 cursor-default
                    "
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
