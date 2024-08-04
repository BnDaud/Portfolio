/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        height: `calc(100vh - 4rem)`,
      },
      colors: {
        navcolor: "#0f172a",
        new_bg: "#38bdf8",
        text_color: "#5bc8af",
      },
    },
  },
  plugins: [],
};
