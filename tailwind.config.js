/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#f3eae3",
        darkCyan: "#377d6a",
        darkCyanHover: "#1a4031",
      },
      spacing: {
        600: "600px",
        450: "450px",
        340: "340px",
      },
      fontFamily: {
        sans: ['"Montserrat", sans-serif'],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
