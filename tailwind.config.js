/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      slg: "1024px",
      lg: "1200px",
    },
    colors: {
      main: "#f9d806",
      submain: "#ffee80",
      submain2: "#fff000",
    },
  },
  plugins: [],
};
