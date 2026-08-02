"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    side: "right",
    title: "Undergraduate in LNBTI",
    subtitle: "BSc (Hons) Computing",
    period: "2023 - Present",
    skills: ["React", "Next.js", "AI", "Problem Solving"],
  },
  {
    side: "left",
    title: "IEEE Member",
    subtitle: "IEEE, Computer Society, WIE",
    period: "2025 - Present",
    skills: ["Networking", "Collaboration", "Tech Community"],
  },
  {
    side: "right",
    title: "Secretary",
    subtitle: "Japanese Club - LNBTI",
    period: "MAY 2026 - Present",
    skills: ["Event Management", "Collaboration", "Communication", "Documentation"],
  },
  {
    side: "left",
    title: "Assistant Secretary",
    subtitle: "IT Club - LNBTI",
    period: "OCT 2025 - MAY 2026",
    skills: ["Leadership", "Event Management", "Teamwork"],
  },
  {
    side: "right",
    title: "Elementary School",
    subtitle: "Sri Sumangala Balika Maha Vidyalaya-Panadura",
    period: "2012 - 2023",
    skills: ["Discipline", "Creativity", "Basics"],
  },
];

export default function ExperienceTree() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] py-20 flex justify-center text-[#F6FAFD]"
    >
      <div className="relative w-full max-w-5xl">

        {/* 🔖 Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#F6FAFD] mb-12">
          Experience
        </h2>

        {/* 🌳 Tree Trunk */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-[#4A7FA7] opacity-40" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center w-full my-16 ${exp.side === "left" ? "justify-start" : "justify-end"
              }`}
          >
            {/* 🌿 Branch Line */}
            <div
              className={`absolute top-1/2 w-24 h-[2px] bg-[#4A7FA7] opacity-40 ${exp.side === "left"
                ? "right-1/2"
                : "left-1/2"
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
                x: exp.side === "left" ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`w-[320px] backdrop-blur-lg bg-[#1A3D63]/60 border border-[#4A7FA7]/30 rounded-2xl p-5 shadow-lg ${exp.side === "left"
                ? "mr-auto ml-0 text-right"
                : "ml-auto mr-0 text-left"
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
              <div className="flex flex-wrap gap-2 mt-3 justify-start">
                {exp.skills.map((skill, i) => (
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
        ))}
      </div>
    </section>
  );
}