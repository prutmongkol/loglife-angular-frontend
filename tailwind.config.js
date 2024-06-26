/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        power: "#48B86E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6587E8",
          secondary: "#82B7F9",
          accent: "#2B304C",
          neutral: "#ffffff",
          "base-100": "#F5F7F6",
          info: "#F25A3B",
          success: "#FFA143",
          warning: "#FDCE52",
          error: "#68C5B3",
          power: "#48B86E",
        },
      },
    ],
  },
}

