/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        cu: "1166px",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        baloo2: ["var(--font-baloo2)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")], // Add this plugin
};
