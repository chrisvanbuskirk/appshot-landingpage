import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b11",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        glow: "0 0 40px 10px rgba(120, 119, 198, 0.35)",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        grid: "grid 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(2%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        blob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        grid: {
          from: { backgroundPosition: "0 0, 0 0" },
          to: { backgroundPosition: "100px 0, 0 100px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

