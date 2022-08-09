/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      mainbg: "url('/assets/img/background.jpg')",
    },
    extend: {
      fontFamily: {
        main: ["Javanese Text", "sans-serif"],
        secondary: ["Java Calligraphy", "sans-serif"],
      },
      colors: {
        choc: {
          dark: "#5A4327",
          semi: "#B68E43",
          light: "#B49750",
        },
        orange: {
          dark: "#EB8123",
          semi: "#FC941C",
          light: "#FCB920",
        },
        pastel: {
          dark: "#D8BD9E",
          semi: "#E2C9B4",
          light: "#FCEBCC",
        },
      },
    },
  },
  plugins: [],
};
