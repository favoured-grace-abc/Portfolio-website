/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#ffffff",
        cardDark: "#ffffff",
        borderDark: "#e5e7eb",
        textMuted: "#52525b",
      },
    },
  },
  plugins: [],
};
