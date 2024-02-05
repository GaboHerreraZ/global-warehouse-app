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
        main: "#fcb904",
        secondary: "#fb0695",
        background: "#efefef",
        others: "#a0a0a0",
        default: "#525251",
      },
    },
  },
  plugins: [],
};
export default config;
