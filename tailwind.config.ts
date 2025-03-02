import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'glowing': 'glowing 3s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'glowing': {
          '0%': { textShadow: '0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ffcc00' },
          '50%': { textShadow: '0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00' },
          '100%': { textShadow: '0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ffcc00' },
        },
      }
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
};
export default config;
