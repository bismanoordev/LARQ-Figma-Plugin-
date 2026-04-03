import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSansJP: ["var(--font-noto-sans-jp)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
