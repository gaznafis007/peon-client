/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#3949AB",
        primaryLight: "#29B6F6",
        secondaryLight: "#5C6BC0",
      },
    },
  },
  plugins: [],
};
