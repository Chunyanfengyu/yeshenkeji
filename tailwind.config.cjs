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
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        btn: "4px",
        panel: "6px",
      },
    },
  },
  plugins: [],
};
