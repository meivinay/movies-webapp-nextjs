import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flexGrow: {
        3: "3",
      },
      boxShadow: {
        "rating-circle":
          "0px 0px 0px 8px rgb(240 249 255 / var(--tw-bg-opacity))",
        "movie-main-img":
          "8px -8px 0px 8px rgb(240 249 255 / var(--tw-bg-opacity))",
        "movie-main-meta":
          "0px 0px 0px 14px rgb(240 249 255 / var(--tw-bg-opacity))",
        "curve-meta-left-top":
          "-4px 0px 0px 0px rgb(240 249 255 / var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [],
};
export default config;
