/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2ae08e",
          secondary: "#18af99",
          accent: "#008204",
          neutral: "#161B1D",
          "base-100": "#fff",
          info: "#45A6D3",
          success: "#1B8853",
          warning: "#A0800D",
          error: "#F33F6F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
