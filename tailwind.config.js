/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        Silver: "#F5F7FA",
        Dgry: "#4D4D4D",
        Grey: "#717171",
        brandPrimary: "#4CAF4F",
        DgryPrimary: "#252c2e",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
