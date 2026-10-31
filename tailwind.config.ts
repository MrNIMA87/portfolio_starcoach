import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08080A",
        surface: "#121216",
        borderSubtle: "#23232A",
        gold: "#D4AF37",
        saffron: "#E5A93C",
        burgundy: "#4A1521",
        textPrimary: "#F5F5F7",
        textMuted: "#9E9EA8",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "radial-gradient(circle at 50% 0%, rgba(74, 21, 33, 0.35), rgba(8, 8, 10, 0) 70%)",
        "gold-glow": "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12), transparent 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
