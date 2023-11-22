import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "circle-rotate": "circle-rotate 4s linear infinite",
        "spin-right": "spin-right 2s linear infinite",
        "spin-left": "spin-left 2s linear infinite",
      },

      keyframes: {
        "circle-rotate": {
          "0%": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "#000000",
            boxShadow:
              "0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 3rem #bc13fe, 0 0 0.9rem #bc13fe, 0 0 2.9rem #bc13fe, inset 0 0 1.4rem #bc13fe",
          },
          "100%": {
            borderColor: "transparent",
          },
        },
        "spin-right": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "spin-left": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      colors: {
        primary: "#303139",
        // secondary: "#CCCCD5",
        secondary: "#ffffff",
        tertiary: "#1b2432",
        "black-100": "#03191E",
        "black-200": "#525174",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "900px",
        lg: "1024px",
      },
    },
  },
  backgroundImage: {
    "hero-pattern": "url('/assets/herobg.webp')",
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
