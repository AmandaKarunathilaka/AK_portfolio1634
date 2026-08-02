export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  longDescription: string;
  features: string[];
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "ridelink",
    title: "RideLink - Car Pooling System",
    subtitle: "Node.js + Express + MongoDB + React + Tailwind CSS",
    period: "2026",
    description: "A modern carpooling web application connecting commuters for shared rides, reduced costs, and eco-friendly travel.",
    longDescription: "RideLink is a comprehensive full-stack carpooling platform designed to simplify daily commuting. Built with a scalable Node.js/Express REST API and a high-performance MongoDB database, it allows users to publish ride offers, search for available routes, manage ride bookings in real-time, and securely manage user authentication.",
    features: [
      "JWT-based Secure Authentication & User Roles",
      "Real-time Route Matching & Ride Creation",
      "Interactive Booking & Seat Reservation System",
      "Responsive Glassmorphism UI built with React & Tailwind CSS",
      "MongoDB aggregation for efficient geospatial ride queries"
    ],
    skills: ["Node.js", "Express", "MongoDB", "REST API", "React", "Tailwind CSS", "JWT", "Full-stack Development"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Next.js + Tailwind CSS + Framer Motion",
    period: "2026",
    description: "Personal developer portfolio showcasing projects, experience, technical skills, and interactive UI design.",
    longDescription: "An ultra-modern, responsive developer portfolio engineered with Next.js App Router and Framer Motion. Features a deep dark mode aesthetic, interactive animations, seamless navigation, and modular component architecture.",
    features: [
      "Smooth Framer Motion entrance animations & dynamic hero section",
      "Custom responsive grid layouts with glassmorphism aesthetic",
      "Interactive dynamic detail pages for projects",
      "SEO optimized metadata & clean responsive typography"
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    subtitle: "Python + NLP + Ollama",
    period: "2025",
    description: "Intelligent conversational assistant powered by local LLMs and Natural Language Processing.",
    longDescription: "An AI chatbot application leveraging local LLM inference with Ollama and Python backend pipelines. Capable of contextual understanding, document retrieval, and real-time interactive responses.",
    features: [
      "Local LLM integration using Ollama",
      "Natural Language Processing (NLP) pipeline",
      "Context retention and conversation history",
      "Fast API integration for web streaming"
    ],
    skills: ["Python", "Machine Learning", "NLP", "Flask", "Ollama"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "python-weather-system",
    title: "Python Weather Monitoring System",
    subtitle: "Tkinter Desktop Application",
    period: "2024",
    description: "Desktop application for real-time weather analytics and graphical temperature tracking.",
    longDescription: "A Python GUI application built using Tkinter for tracking current weather metrics, forecasts, and historical trends. Features clean data visualization and live status reports.",
    features: [
      "Intuitive Tkinter Graphical User Interface",
      "Real-time atmospheric data fetching",
      "Temperature and humidity telemetry charts",
      "Location-based search & saved favorites"
    ],
    skills: ["Python", "Tkinter", "GUI Design", "JSON Parsing"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "weather-app-api",
    title: "Weather App with OpenWeather API",
    subtitle: "REST API Integration",
    period: "2024",
    description: "Lightweight weather querying application communicating with OpenWeather REST endpoints.",
    longDescription: "A robust utility focusing on reliable REST API communication, JSON payload processing, and graceful error handling for weather telemetry worldwide.",
    features: [
      "OpenWeather API REST client integration",
      "Automatic unit conversion (Celsius/Fahrenheit)",
      "Robust HTTP error handling & offline fallback caching",
      "Compact responsive layout"
    ],
    skills: ["Python", "API", "JSON", "HTTP Requests"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
  {
    id: "java-university-management",
    title: "Java University Management System",
    subtitle: "Desktop Application",
    period: "2025",
    description: "Object-oriented Java desktop software managing students, courses, faculty, and academic records.",
    longDescription: "A comprehensive enterprise desktop application written in Java adhering strictly to Object-Oriented Programming (OOP) principles. Manages student enrollments, course catalogs, grading schemes, and database persistent storage.",
    features: [
      "Strict OOP architecture (Inheritance, Polymorphism, Encapsulation)",
      "Relational database storage integration",
      "Student & Teacher record management modules",
      "Grade calculation and automated transcript generation"
    ],
    skills: ["Java", "OOP", "Database Management", "SQL"],
    githubUrl: "https://github.com/AmandaKarunathilaka",
  },
];
