/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B4EFF",
        secondary: "#B8DDE3",
        backbg: "rgba(43, 78, 255, 0.7);",
         headercolor: "#002859",
        buttoncolor: "#97e180",
        cardheader: "#002859",
        ictcardcolor: "#204780",
        backgroundcolor: "#00aa65",
        card2color:"#204780"
      },
      screens: {
        md: { max: "800px" },
        sm: { max: "639px" },
      },
      boxShadow: {
        shadow1: "0px 30px 40px 0px rgba(1, 11, 60, 0.1)",
        shadow2: "0px 30px 60px 0px rgba(0, 4, 48, 0.3)",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-from-right': 'slideIn 1s ease-in-out forwards',
      },
    },
  },
  
  plugins: [],
}

