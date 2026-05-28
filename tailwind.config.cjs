/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0a0e27",
        deepgray: "#121212",
        neon: {
          purple: "#6366f1",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
