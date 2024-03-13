/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#b000ff",
          "secondary": "#00e97d",
          "accent": "#d60000",
          "neutral": "#0f0d04",
          "base-100": "#fffbf5",
          "info": "#00d6ff",
          "success": "#00fec1",
          "warning": "#f26b00",
          "error": "#f4004a",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};