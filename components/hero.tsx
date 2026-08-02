"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaUser } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center justify-center
        pt-28 pb-16 px-6
        bg-gradient-to-b
        from-[#0A1931] via-[#1A3D63] to-[#0A1931]
        text-[#F6FAFD]
        relative overflow-hidden
      "
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#4A7FA7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#B3CFE5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT COLUMN: Photo with custom frame & animations */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

            {/* Animated rotating dashed outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8] rounded-full border-2 border-dashed border-[#B3CFE5]/40"
            />

            {/* Pulsing subtle glow ring */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 rounded-full border border-[#4A7FA7]/50 shadow-[0_0_30px_rgba(74,127,167,0.3)]"
            />

            {/* Main Floating Photo Frame */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-[#B3CFE5]/80 shadow-2xl shadow-[#1A3D63]/50 group cursor-pointer"
            >
              <Image
                src="/profile_1.jpg"
                alt="Amanda - Profile Photo"
                fill
                sizes="(max-width: 768px) 300px, 400px"
                priority
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Text & Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#F6FAFD]">
            Hi! <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B3CFE5] via-[#4A7FA7] to-[#B3CFE5]">I'm</span> Amanda Karunathilaka
          </h1>

          {/* Role & Description */}
          <div className="text-lg md:text-xl font-medium text-[#B3CFE5] min-h-[28px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Next.js Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </div>

          <p className="text-[#B3CFE5]/90 text-base md:text-lg leading-relaxed max-w-2xl">
            I design and develop modern, scalable web applications with a focus on clean user experiences and real-world problem solving. Passionate about full-stack development and AI-driven solutions.
          </p>

          {/* Contact Details Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5 rounded-2xl bg-[#1A3D63]/60 border border-[#4A7FA7]/30 backdrop-blur-md w-full max-w-4xl shadow-lg">
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#4A7FA7]/20 text-[#B3CFE5] shrink-0">
                <FaUser className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#B3CFE5]/70 uppercase tracking-wider">Name</p>
                <p className="text-sm font-semibold text-[#F6FAFD]">Amanda Karunathilaka</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#4A7FA7]/20 text-[#B3CFE5] shrink-0">
                <FaPhoneAlt className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#B3CFE5]/70 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-[#F6FAFD]">+94710622707</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#4A7FA7]/20 text-[#B3CFE5] shrink-0">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#B3CFE5]/70 uppercase tracking-wider">Email</p>
                <p className="text-xs min-[440px]:text-[13px] sm:text-[12px] md:text-[13px] xl:text-sm font-semibold text-[#F6FAFD] select-all">
                  amandakarunathilaka490@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-[#4A7FA7]/20 text-[#B3CFE5] shrink-0">
                <FaLinkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#B3CFE5]/70 uppercase tracking-wider">Linkedin</p>
                <p className="text-sm font-semibold text-[#F6FAFD]">Amanda Karunathilaka</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="
                px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base
                bg-[#4A7FA7] text-[#F6FAFD]
                hover:bg-[#1A3D63] border border-[#B3CFE5]/30
                shadow-lg shadow-[#1A3D63]/50
                hover:scale-105 active:scale-95
                transition-all duration-300
              "
            >
              Contact Me
            </a>

            <a
              href="#home"
              className="
                px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base
                border border-[#B3CFE5]/40 text-[#B3CFE5]
                hover:bg-[#1A3D63]/50 hover:text-[#F6FAFD] hover:border-[#B3CFE5]
                hover:scale-105 active:scale-95
                transition-all duration-300
              "
            >
              Download CV
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

