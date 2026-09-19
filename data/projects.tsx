export interface Project {
  id: string;
  title: Record<"en" | "ja", string>;
  subtitle: Record<"en" | "ja", string>;
  period: string;
  description: Record<"en" | "ja", string>;
  longDescription: Record<"en" | "ja", string>;
  features: Record<"en" | "ja", string[]>;
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "ridelink",
    title: {
      en: "RideLink - Car Pooling System",
      ja: "RideLink - 相乗り（カープール）システム",
    },
    subtitle: {
      en: "Node.js + Express + MongoDB + React + Tailwind CSS",
      ja: "Node.js + Express + MongoDB + React + Tailwind CSS",
    },
    period: "2026",
    description: {
      en: "A modern carpooling web application connecting commuters for shared rides, reduced costs, and eco-friendly travel.",
      ja: "通勤者を接続して相乗りを提供し、交通費削減と環境に優しい移動を実現するモダンなカープールWebアプリ。",
    },
    longDescription: {
      en: "RideLink is a comprehensive full-stack carpooling platform designed to simplify daily commuting. Built with a scalable Node.js/Express REST API and a high-performance MongoDB database, it allows users to publish ride offers, search for available routes, manage ride bookings in real-time, and securely manage user authentication.",
      ja: "RideLinkは毎日の通勤を簡略化するために設計された包括的なフルスタック相乗りプラットフォームです。拡張性の高いNode.js/Express REST APIとMongoDBで構築され、乗車の募集、ルート検索、リアルタイムでの予約管理、セキュアなユーザー認証機能を提供します。",
    },
    features: {
      en: [
        "JWT-based Secure Authentication & User Roles",
        "Real-time Route Matching & Ride Creation",
        "Interactive Booking & Seat Reservation System",
        "Responsive Glassmorphism UI built with React & Tailwind CSS",
        "MongoDB aggregation for efficient geospatial ride queries",
      ],
      ja: [
        "JWTベースのセキュアなユーザー認証と権限管理",
        "リアルタイムルートマッチング＆相乗り募集作成",
        "直感的な座席予約・管理システム",
        "ReactとTailwind CSSによるガラスモルフィズムUI",
        "MongoDBアグリゲーションによる効率的な位置情報クエリ",
      ],
    },
    skills: ["Node.js", "Express", "MongoDB", "REST API", "React", "Tailwind CSS", "JWT", "Full-stack Development"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "portfolio-website",
    title: {
      en: "Portfolio Website",
      ja: "ポートフォリオウェブサイト",
    },
    subtitle: {
      en: "Next.js + Tailwind CSS + Framer Motion",
      ja: "Next.js + Tailwind CSS + Framer Motion",
    },
    period: "2026",
    description: {
      en: "Personal developer portfolio showcasing projects, experience, technical skills, and interactive UI design.",
      ja: "プロジェクト、経歴、技術スキル、およびインタラクティブなUIデザインを紹介する個人ポートフォリオ。",
    },
    longDescription: {
      en: "An ultra-modern, responsive developer portfolio engineered with Next.js App Router and Framer Motion. Features a deep dark mode aesthetic, interactive animations, seamless navigation, language toggle support (English / Japanese), and modular component architecture.",
      ja: "Next.js App RouterとFramer Motionを用いて構築された超モダンなレスポンシブポートフォリオ。シックなダークモードデザイン、スムーズなアニメーション、英語・日本語の言語切替機能、モジュール化されたコンポーネント構造が特徴です。",
    },
    features: {
      en: [
        "English & Japanese Bilingual Support with Toggle",
        "Smooth Framer Motion entrance animations & dynamic hero section",
        "Custom responsive grid layouts with glassmorphism aesthetic",
        "Interactive dynamic detail pages for projects",
        "SEO optimized metadata & clean responsive typography",
      ],
      ja: [
        "ワンクリックで切り替え可能な日英バイリンガル対応",
        "Framer Motionによるスムーズなアニメーション＆ヒーローセクション",
        "ガラスモルフィズムを取り入れたレスポンシブグリッドレイアウト",
        "プロジェクトごとの動的詳細ページ",
        "SEO最適化と読みやすいタイポグラフィ",
      ],
    },
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "i18n"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "ai-chatbot",
    title: {
      en: "AI Chatbot",
      ja: "AI チャットボット",
    },
    subtitle: {
      en: "Python + NLP + Ollama",
      ja: "Python + NLP + Ollama",
    },
    period: "2025",
    description: {
      en: "Intelligent conversational assistant powered by local LLMs and Natural Language Processing.",
      ja: "ローカルLLMと自然言語処理（NLP）を活用した知的な対話型アシスタント。",
    },
    longDescription: {
      en: "An AI chatbot application leveraging local LLM inference with Ollama and Python backend pipelines. Capable of contextual understanding, document retrieval, and real-time interactive responses.",
      ja: "OllamaとPythonバックエンドパイプラインによるローカルLLM推論を活用したAIチャットボット。文脈の理解、ドキュメント検索、リアルタイムでの対話応答を実現しています。",
    },
    features: {
      en: [
        "Local LLM integration using Ollama",
        "Natural Language Processing (NLP) pipeline",
        "Context retention and conversation history",
        "Fast API integration for web streaming",
      ],
      ja: [
        "Ollamaを使用したローカルLLMの統合",
        "自然言語処理（NLP）パイプラインの構築",
        "文脈保持および会話履歴管理",
        "Webストリーミング対応の高速API統合",
      ],
    },
    skills: ["Python", "Machine Learning", "NLP", "Flask", "Ollama"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "python-weather-system",
    title: {
      en: "Python Weather Monitoring System",
      ja: "Python 気象モニタリングシステム",
    },
    subtitle: {
      en: "Tkinter Desktop Application",
      ja: "Tkinter デスクトップアプリケーション",
    },
    period: "2024",
    description: {
      en: "Desktop application for real-time weather analytics and graphical temperature tracking.",
      ja: "リアルタイム気象アナリティクスとグラフによる気温追跡が可能なデスクトップアプリ。",
    },
    longDescription: {
      en: "A Python GUI application built using Tkinter for tracking current weather metrics, forecasts, and historical trends. Features clean data visualization and live status reports.",
      ja: "現在の気象データ、天気予報、および推移を追跡するためにTkinterで開発されたPython GUIアプリ。明確なデータ可視化とリアルタイムレポートが特徴です。",
    },
    features: {
      en: [
        "Intuitive Tkinter Graphical User Interface",
        "Real-time atmospheric data fetching",
        "Temperature and humidity telemetry charts",
        "Location-based search & saved favorites",
      ],
      ja: [
        "直感的なTkinterグラフィカルユーザーインターフェース",
        "リアルタイムな気象データの取得",
        "気温・湿度のテレメトリグラフ表示",
        "都市検索機能とお気に入り保存機能",
      ],
    },
    skills: ["Python", "Tkinter", "GUI Design", "JSON Parsing"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "weather-app-api",
    title: {
      en: "Weather App with OpenWeather API",
      ja: "OpenWeather API 気象情報アプリ",
    },
    subtitle: {
      en: "REST API Integration",
      ja: "REST API 連携アプリ",
    },
    period: "2024",
    description: {
      en: "Lightweight weather querying application communicating with OpenWeather REST endpoints.",
      ja: "OpenWeather REST APIエンドポイントと連携する軽量な気象情報検索アプリ。",
    },
    longDescription: {
      en: "A robust utility focusing on reliable REST API communication, JSON payload processing, and graceful error handling for weather telemetry worldwide.",
      ja: "信頼性の高いREST API通信、JSONデータ処理、およびエラーハンドリングに重点を置いた、世界中の気象データを取得する頑丈なユーティリティアプリです。",
    },
    features: {
      en: [
        "OpenWeather API REST client integration",
        "Automatic unit conversion (Celsius/Fahrenheit)",
        "Robust HTTP error handling & offline fallback caching",
        "Compact responsive layout",
      ],
      ja: [
        "OpenWeather API RESTクライアント連携",
        "単位の自動変換（摂氏 / 華氏）",
        "強固なHTTPエラーハンドリング＆オフラインキャッシュ機能",
        "コンパクトなレスポンシブレイアウト",
      ],
    },
    skills: ["Python", "API", "JSON", "HTTP Requests"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "java-university-management",
    title: {
      en: "Java University Management System",
      ja: "Java 大学管理システム",
    },
    subtitle: {
      en: "Desktop Application",
      ja: "デスクトップアプリケーション",
    },
    period: "2025",
    description: {
      en: "Object-oriented Java desktop software managing students, courses, faculty, and academic records.",
      ja: "学生、コース、教員、および成績記録を管理するオブジェクト指向Javaデスクトップソフト。",
    },
    longDescription: {
      en: "A comprehensive enterprise desktop application written in Java adhering strictly to Object-Oriented Programming (OOP) principles. Manages student enrollments, course catalogs, grading schemes, and database persistent storage.",
      ja: "オブジェクト指向プログラミング（OOP）原則に厳格に従ってJavaで開発された包括的な管理システム。履修登録、科目カタログ、成績計算、およびデータベース永続化を管理します。",
    },
    features: {
      en: [
        "Strict OOP architecture (Inheritance, Polymorphism, Encapsulation)",
        "Relational database storage integration",
        "Student & Teacher record management modules",
        "Grade calculation and automated transcript generation",
      ],
      ja: [
        "厳格なOOP設計（継承、多態性、カプセル化）",
        "リレーショナルデータベース（RDB）永続化の統合",
        "学生・教員情報管理モジュール",
        "成績計算および自動成績証明書生成機能",
      ],
    },
    skills: ["Java", "OOP", "Database Management", "SQL"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
];
