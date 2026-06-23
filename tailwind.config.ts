import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#1672B8", d: "#115F9C", dd: "#0E4C7E", 50: "#E9F3FB", 100: "#CFE5F6" },
        green: { DEFAULT: "#3DA935", d: "#2F8C2A", dd: "#246B20", 50: "#EBF6E9", 100: "#D2ECCE" },
        ink: { DEFAULT: "#102A43", 800: "#163655", 700: "#27465F", 600: "#3C5872", 500: "#5E7790", 300: "#AFC0CF" },
        bd: "#DAE4ED",
        bd2: "#E7EEF4",
        bg: "#F7FAFC",
        bg2: "#EDF3F8",
        surface: "#FFFFFF",
        gold: "#E0A93B",
        wa: "#1FA855",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
