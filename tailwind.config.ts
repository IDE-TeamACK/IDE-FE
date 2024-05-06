import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        editor: "280px 1fr",

        // Complex site-specific column configuration
      },
      colors: {
        primary: "#4aee88",
        bgdark: "#11082F",
        bgpink: "#3A0D56",
        textpink: "#ED61E6",
        textblue: "#419AE5",
      },
    },
  },
  plugins: [],
};
export default config;
