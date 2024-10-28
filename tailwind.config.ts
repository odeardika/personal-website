import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#F6F6F6",
        dark_blue : "#102237",
        gray_blue : '#142D48'
      },
    },
  },
  plugins: [],
};
export default config;
