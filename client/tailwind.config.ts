import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#cecece",
        black: "#000",
        darkslateblue: "#0054a1",
        dimgray: "#606060",
        blueviolet: "#4b36cd",
        gainsboro: "rgba(230, 230, 230, 0.3)",
        mediumslateblue: "#735cf2",
        white: "#fff",
        whitesmoke: "#ebebeb",
        darkgray: "#999",
        darkslategray: "#2d2d2d",
        slateblue: "#4534ac",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        barlow: "Barlow",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
