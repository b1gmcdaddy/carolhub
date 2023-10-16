/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#ffa31a",
        "custom-bg2": "#808080",
        "custom-bg3": "#292929",
        "custom-bg4": "#1b1b1b",
      },
      textColor: {
        "hub-color": "#ffa31a",
      },
    },
  },
  plugins: [],
};
