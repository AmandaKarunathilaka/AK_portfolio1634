"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, any>> = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hi! I'm",
      name: "Amanda Karunathilaka",
      roles: ["Full Stack Developer", "AI Enthusiast", "Next.js Developer"],
      bio: "I design and develop modern, scalable web applications with a focus on clean user experiences and real-world problem solving. Passionate about full-stack development and AI-driven solutions.",
      labelName: "Name",
      labelPhone: "Phone",
      labelEmail: "Email",
      labelLinkedin: "Linkedin",
      contactBtn: "Contact Me",
      downloadCvBtn: "Download CV",
    },
    // About Section
    about: {
      titlePrefix: "About",
      titleSuffix: "Me",
      p1: "I am an aspiring Software Engineer and AI enthusiast currently pursuing my studies in Information and Communication Technology at LNBTI. I enjoy building modern web applications and solving real-world problems using technology.",
      p2: "My interests include full-stack development, artificial intelligence, and creating impactful digital solutions for education and business.",
      highlight: "🚀 Passionate about building scalable applications and exploring AI-driven innovations.",
      educationTitle: "Education",
      educationDesc: "BSc (Hons) Computing student at LNBTI",
      devFocusTitle: "Development Focus",
      devFocusDesc: "Modern Web Apps & Scalable Systems",
      aiTitle: "AI & Innovation",
      aiDesc: "Exploring ML models & intelligent tools",
      leadershipTitle: "Leadership & Community",
      leadershipDesc: "Active IEEE & IT Club Executive Leader",
    },
    // Experience Section
    experience: {
      title: "Experience",
      items: [
        {
          title: "Undergraduate in LNBTI",
          subtitle: "BSc (Hons) Computing",
          period: "2023 - Present",
          skills: ["React", "Next.js", "AI", "Problem Solving"],
        },
        {
          title: "IEEE Member",
          subtitle: "IEEE, Computer Society, WIE",
          period: "2025 - Present",
          skills: ["Networking", "Collaboration", "Tech Community"],
        },
        {
          title: "Secretary",
          subtitle: "Japanese Club - LNBTI",
          period: "MAY 2026 - Present",
          skills: ["Event Management", "Collaboration", "Communication", "Documentation"],
        },
        {
          title: "Assistant Secretary",
          subtitle: "IT Club - LNBTI",
          period: "OCT 2025 - MAY 2026",
          skills: ["Leadership", "Event Management", "Teamwork"],
        },
        {
          title: "Elementary & High School",
          subtitle: "Sri Sumangala Balika Maha Vidyalaya-Panadura",
          period: "2012 - 2023",
          skills: ["Discipline", "Creativity", "Basics"],
        },
      ],
    },
    // Skills Section
    skillsSection: {
      titlePrefix: "Technical",
      titleSuffix: "Skills",
      subtitle: "Technologies, frameworks, and tools I leverage to build efficient, scalable, and intuitive software applications.",
      catLanguages: "Languages & Core",
      catFrontend: "Frontend & Web Tech",
      catBackend: "Backend & AI",
      catTools: "Tools & Ecosystem",
    },
    // Projects Section
    projectsSection: {
      title: "Featured Projects",
      subtitle: "Explore some of my recent software development, web applications, and technical builds.",
      seeDetails: "See Details & Demo",
      showMore: "See More Projects",
      showLess: "Show Less Projects",
      more: "more",
    },
    // Contact Section
    contactSection: {
      title: "Contact Me",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendBtn: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out, Amanda. I'll get back to you as soon as possible!",
      errorTitle: "Failed to Send",
      errorDesc: "Something went wrong. Please try emailing directly at amandakarunathilaka490@gmail.com",
    },
    // Footer
    footer: {
      bio: "Full Stack Developer & AI enthusiast passionate about building modern web applications and delivering exceptional digital experiences.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      connectDesc: "Feel free to reach out via social channels or email.",
      backToTop: "Back to Top",
      rights: "All rights reserved.",
    },
    // Project Detail Page
    projectDetail: {
      backBtn: "Back to Projects",
      githubBtn: "GitHub Repository",
      liveDemoBtn: "Live Demo",
      overview: "Project Overview",
      keyFeatures: "Key Features & Capabilities",
      techTools: "Technologies & Tools",
      notFound: "Project not found",
    },
  },
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      about: "自己紹介",
      experience: "経歴",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ",
    },
    // Hero Section
    hero: {
      greeting: "こんにちは！",
      name: "アマンダー・カルナーティラカ",
      roles: ["フルスタックエンジニア", "AI愛好家", "Next.jsデベロッパー"],
      bio: "洗練されたユーザー体験と実践的な問題解決に重点を置き、モダンで拡張性の高いWebアプリケーションを設計・開発しています。フルスタック開発とAI技術を活用したソリューションに取り組んでいます。",
      labelName: "お名前",
      labelPhone: "電話番号",
      labelEmail: "メールアドレス",
      labelLinkedin: "LinkedIn",
      contactBtn: "お問い合わせ",
      downloadCvBtn: "履歴書をダウンロード",
    },
    // About Section
    about: {
      titlePrefix: "私について",
      titleSuffix: "(About)",
      p1: "私は現在、LNBTI（スリランカ）で情報通信技術（ICT）を専攻しているソフトウェアエンジニア志望の学生です。モダンなWebアプリケーションの構築や、テクノロジーを用いた課題解決に情熱を注いでいます。",
      p2: "フルスタック開発、人工知能、そして教育やビジネスに影響を与えるデジタルソリューションの作成に関心があります。",
      highlight: "🚀 拡張性の高いアプリケーションの構築とAIを活用した革新技術の探求に情熱を持っています。",
      educationTitle: "学歴",
      educationDesc: "LNBTI Computing学科 学士課程在学中",
      devFocusTitle: "開発の焦点",
      devFocusDesc: "モダンWebアプリ ＆ 拡張可能なシステム",
      aiTitle: "AI ＆ イノベーション",
      aiDesc: "機械学習モデル ＆ インテリジェントツールの研究",
      leadershipTitle: "リーダーシップ ＆ コミュニティ",
      leadershipDesc: "IEEEおよびITクラブの役員として活動中",
    },
    // Experience Section
    experience: {
      title: "経歴・職歴",
      items: [
        {
          title: "LNBTI 在学生",
          subtitle: "コンピューティング科学士課程 (BSc Hons)",
          period: "2023年 - 現在",
          skills: ["React", "Next.js", "AI", "問題解決"],
        },
        {
          title: "IEEE メンバー",
          subtitle: "IEEE, Computer Society, WIE",
          period: "2025年 - 現在",
          skills: ["ネットワーキング", "コラボレーション", "技術コミュニティ"],
        },
        {
          title: "幹事 / 書記 (Secretary)",
          subtitle: "LNBTI 日本語クラブ",
          period: "2026年5月 - 現在",
          skills: ["イベント企画", "チームワーク", "コミュニケーション", "ドキュメント作成"],
        },
        {
          title: "副幹事 (Assistant Secretary)",
          subtitle: "LNBTI ITクラブ",
          period: "2025年10月 - 2026年5月",
          skills: ["リーダーシップ", "イベント運営", "チームワーク"],
        },
        {
          title: "初等・中等・高等教育",
          subtitle: "Sri Sumangala Balika Maha Vidyalaya-Panadura",
          period: "2012年 - 2023年",
          skills: ["規律", "創造性", "基礎学力"],
        },
      ],
    },
    // Skills Section
    skillsSection: {
      titlePrefix: "技術",
      titleSuffix: "スキル",
      subtitle: "効率的で拡張性が高く、直感的なソフトウェアを構築するために活用している言語・フレームワーク・ツール。",
      catLanguages: "プログラミング言語 & 基礎",
      catFrontend: "フロントエンド & Web技術",
      catBackend: "バックエンド & AI",
      catTools: "開発ツール & エコシステム",
    },
    // Projects Section
    projectsSection: {
      title: "注目プロジェクト",
      subtitle: "最近開発したソフトウェア、Webアプリケーション、技術的成果物をご紹介します。",
      seeDetails: "詳細・デモを見る",
      showMore: "他のプロジェクトを見る",
      showLess: "閉じる",
      more: "件",
    },
    // Contact Section
    contactSection: {
      title: "お問い合わせ",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージ内容",
      sendBtn: "メッセージを送信",
      sending: "送信中...",
      successTitle: "送信完了しました！",
      successDesc: "お問い合わせありがとうございます。確認次第、返信させていただきます。",
      errorTitle: "送信に失敗しました",
      errorDesc: "エラーが発生しました。メール (amandakarunathilaka490@gmail.com) で直接ご連絡いただくか、後ほどお試しください。",
    },
    // Footer
    footer: {
      bio: "モダンなWebアプリケーション開発と優れたデジタル体験の提供に情熱を傾けるフルスタックエンジニア・AI愛好家。",
      navTitle: "ナビゲーション",
      connectTitle: "SNS & 連絡先",
      connectDesc: "SNSまたはメールでお気軽にご連絡ください。",
      backToTop: "トップへ戻る",
      rights: "All rights reserved.",
    },
    // Project Detail Page
    projectDetail: {
      backBtn: "プロジェクト一覧に戻る",
      githubBtn: "GitHubリポジトリ",
      liveDemoBtn: "ライブデモを見る",
      overview: "プロジェクト概要",
      keyFeatures: "主な機能・特徴",
      techTools: "使用技術・ツール",
      notFound: "プロジェクトが見つかりません",
    },
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ja")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ja" : "en";
    setLanguage(nextLang);
  };

  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation missing
        let fallback: any = translations["en"];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return typeof fallback === "string" ? fallback : keyPath;
      }
    }
    return typeof current === "string" ? current : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
