import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#935542",
          light: "#C2755E",
          hover: "#A65D48",
          dark: "#7D4233"
        },
        linen: "#F5EBE6",
        forest: {
          DEFAULT: "#1C1C19",
          card: "#2A2A25",
          dark: "#151513",
          deep: "#0e0e0c"
        },
        sand: "#E6CEC4",
        gold: {
          DEFAULT: "#E6B959",
          light: "rgba(194, 117, 94, 0.16)"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
};
export default config;

