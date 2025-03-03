import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue : "#0072b1",
        secondaryBlue : "#27AAE1",
        primaryGreen : "#01b2ac",
        secondaryGreen : "#01b2ac90",
        primaryBlack : "#231F20",
        primaryGray : "#a3a3a3",
        primaryCran : "#00caa5",
        secondaryGray : "#A7A7A7",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
