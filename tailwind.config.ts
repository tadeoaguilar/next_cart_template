import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "next-box-s": "0px 1px 0px 0px #E5E5E5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      "green-next-900": "#002603",
      "green-next-800": "#173B1A",
      "green-next-700": "#2B572E",
      "green-next-600": "#406B42",
      "green-next-500": "#618062",
      "green-next-400": "#7A997C",
      "green-next-300": "#96B297",
      "green-next-200": "#B4CCB4",
      "green-next-100": "#DAE5DA",
      "green-next-50": "#EDF2EE",
      "gray-next-900": "#1A1A1A",
      "gray-next-800": "#333333",
      "gray-next-700": "#4D4D4D",
      "gray-next-600": "#666666",
      "gray-next-500": "#808080",
      "gray-next-400": "#999999",
      "gray-next-300": "#B3B3B3",
      "gray-next-200": "#CCCCCC",
      "gray-next-100": "#E6E6E6",
      "gray-next-50": "#F2F2F2",
      "white-next": "#FFFFFF",
      "soft-p-next": "#84D187",
      "primary-next": "#00B207",
      "hard-p-next": "#2C742F",
      "warning-next": "#FF8A00",
      "danger": "#EA4B48",
      "success": "#2C742F",
    },
  },
  plugins: [],
};
export default config;
