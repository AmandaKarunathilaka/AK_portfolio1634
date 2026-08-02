"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] py-20 text-[#F6FAFD]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#F6FAFD] mb-12">
          Contact Me
        </h2>

        {/* 📩 Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A3D63]/60 backdrop-blur-lg border border-[#4A7FA7]/30 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/60 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/60 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full mt-6 px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/60 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7]"
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-[#4A7FA7] hover:bg-[#1A3D63] border border-[#B3CFE5]/30 text-[#F6FAFD] font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
