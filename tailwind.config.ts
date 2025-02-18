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
      },
    },
  },
  plugins: [],
} satisfies Config;
