/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#1c95f3",
        blueGreen: "#00e3d0",
        blackColor: "#363636",
        whiteColor: "#ffffff",
        grayColor: "#777777",
        lightColor: "#8b8b8b",
        redColor: "#f30a5c",
        violetColor: "#7442ce",
        orangeColor: "#ffb400",
        greenColor: "#58d819",
        borderColor: "#e5e7eb",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1350px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

