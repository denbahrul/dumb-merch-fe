import { green } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {},
    extend: {
      colors: {
        background: {
          primary: "#0B0B0B",
          secondary: "#181818",
          teritery: "#464646",
          quaternary: "#212121",
        },
        border: {
          primary: "#BCBCBC",
        },
        red: "#F74D4D",
        green: "#56C05A",
        gray: {
          textA: "#6A6A6A",
          textB: "#B7B7B7",
          textC: "#ABABAB",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
