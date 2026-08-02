import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", /*allows the dark mode toggle button to work */
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          darkest: "#0A1931",
          dark: "#1A3D63",
          medium: "#4A7FA7",
          light: "#B3CFE5",
          lightest: "#F6FAFD",
        },
      },
    },
  },
  plugins: [],
};

export default config;