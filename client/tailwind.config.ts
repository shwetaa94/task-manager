/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: {
          "100": "#c1bdbd",
          "200": "#c0bdbd",
        },
        gainsboro: "#dedede",
        black: "#000",
        dimgray: "#676767",
        lightgray: "#cdcdcd",
        lightgray2: "#cecece",
        whitesmoke: "#f4f4f4",
        gray: "#797979",
    
        darkslateblue: "#0054a1",
        blueviolet: "#4b36cd",
        mediumslateblue: "#735cf2",
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
      base: "16px",
      inherit: "inherit",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
    },
    screens: {
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
