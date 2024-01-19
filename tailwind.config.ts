import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["var(--font-mullish)"],
        fraunces: ["var(--font-fraunces)"],
      },
      colors: {
        "primary-100": "#7390F9",
        "primary-200": "#242F65",
        "secondary-100": "#525665",
        "secondary-200": "#2F2F2F",
        "secondary-300": "#2A2C32",
        "tertiary-100": "#FF774C",
        "bord-100": "#E0E0E0",
        "bord-200": "#E7E7E7"
      },
      keyframes: {
        text: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "from, to": {
            borderColor: "#FFFF",
          },
          "50%": {
            borderColor: "#242F65",
          },
        },
      },
      animation: {
        // ! Custom animations with more than 1 animation separeted by commas dont work
        // still isse from https://github.com/tailwindlabs/tailwindcss/issues/5015
        "type-cursor": "text 3.5s steps(20, end), blink 0.5s step-end infinite",
        text: "text 3.5s steps(20, end)",
        blink: "blink 0.5s step-end infinite",
      },
      borderRadius: {
        "2.5xl": '20px'
      }
    },
  },
  plugins: [],
};
export default config;
