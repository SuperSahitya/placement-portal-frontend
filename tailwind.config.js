/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blueLight: "1px 1px 10px  rgba(71, 81, 255, 0.3)",
      },
      colors: {
        primary: "#640000",
        secondary: "#F0F0F0",
      },
      fontSize: {
        sm: "0.75rem",
        md: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
      },
    },
  },
  plugins: [nextui()],
};
