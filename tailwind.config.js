/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        customR: "72px",
      },
      spacing: {
        height2: `calc(100vh - 8rem)`,
        height: `calc(100vh - 4rem)`,
      },
      colors: {
        navcolor: "#282f37", //old:"#0f172a", //new:#282f37
        new_bg: "#5bc8af", //blue:"#38bdf8", //green:"#5bc8af"
        text_color: "#5bc8af",
      },
    },
  },
  plugins: [],
};
