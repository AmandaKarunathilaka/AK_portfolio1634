"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Direct Web3Forms submission to amandakarunathilaka490@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "79173eb0-f9ed-49bf-[#DEMO_OR_KEY]", // Fallback endpoint for web client
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Backup mechanism: FormSubmit standard POST
        submitViaFormSubmit();
      }
    } catch (err) {
      console.error("Form submission error, using fallback:", err);
      submitViaFormSubmit();
    }
  };

  const submitViaFormSubmit = () => {
    // Create hidden form to guarantee cross-origin delivery without CORS or activation locks
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/amandakarunathilaka490@gmail.com";
    form.target = "_blank";

    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "Name";
    nameInput.value = formData.name;
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "Email";
    emailInput.value = formData.email;
    form.appendChild(emailInput);

    const messageInput = document.createElement("input");
    messageInput.type = "hidden";
    messageInput.name = "Message";
    messageInput.value = formData.message;
    form.appendChild(messageInput);

    const subjectInput = document.createElement("input");
    subjectInput.type = "hidden";
    subjectInput.name = "_subject";
    subjectInput.value = `Portfolio Contact from ${formData.name}`;
    form.appendChild(subjectInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] py-20 text-[#F6FAFD]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#F6FAFD] mb-12">
          {t("contactSection.title")}
        </h2>

        {/* 📩 Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A3D63]/60 backdrop-blur-lg border border-[#4A7FA7]/30 rounded-2xl p-8 shadow-lg relative overflow-hidden"
        >
          {/* Form Controls */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-[#B3CFE5]/80 uppercase tracking-wider mb-2">
                {t("hero.labelName")} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("contactSection.namePlaceholder")}
                className="w-full px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/50 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#B3CFE5]/80 uppercase tracking-wider mb-2">
                {t("hero.labelEmail")} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("contactSection.emailPlaceholder")}
                className="w-full px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/50 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7] transition"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-xs font-semibold text-[#B3CFE5]/80 uppercase tracking-wider mb-2">
              {t("contactSection.messagePlaceholder")} *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t("contactSection.messagePlaceholder")}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[#0A1931]/60 text-[#F6FAFD] placeholder-[#B3CFE5]/50 border border-[#4A7FA7]/30 focus:outline-none focus:ring-2 focus:ring-[#4A7FA7] transition resize-none"
            ></textarea>
          </div>

          {/* Feedback Status Banners */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex items-start space-x-3"
              >
                <FaCheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">{t("contactSection.successTitle")}</p>
                  <p className="text-xs text-emerald-300/90 mt-0.5">{t("contactSection.successDesc")}</p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 flex items-start space-x-3"
              >
                <FaExclamationCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">{t("contactSection.errorTitle")}</p>
                  <p className="text-xs text-rose-300/90 mt-0.5">{errorMessage || t("contactSection.errorDesc")}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              mt-6 w-full py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base
              bg-[#4A7FA7] hover:bg-[#1A3D63] border border-[#B3CFE5]/30 text-[#F6FAFD]
              shadow-lg shadow-[#1A3D63]/50 hover:scale-[1.01] active:scale-[0.99]
              transition duration-300 flex items-center justify-center space-x-2 cursor-pointer
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            <FaPaperPlane className={`w-4 h-4 ${status === "loading" ? "animate-bounce" : ""}`} />
            <span>{status === "loading" ? t("contactSection.sending") : t("contactSection.sendBtn")}</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
