/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1400px",
        },
      },
      colors: {
        primary: "#FEEE00",
        secondary: "#E44542",
        neutral: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
