/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-blue-200": "#0fa3b1",
        "sky-blue-100": "#b5e2fa",
        "cream-100": "#f9f7f3",
        "cream-200": "#f9f7f3",
        orange: "#f7a072",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-7': 'linear-gradient(sky-blue-200,sky-blue-100,cream-100,cream-200,orange,black,white)',
      },
    },

  },
  plugins: [],
};
