/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#f3eae3",
        darkCyan: "#377d6a",
      },
      spacing: {
        600: "600px",
        450: "450px",
      },
      fontFamily: {
        sans: ['"Montserrat", sans-serif'],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
