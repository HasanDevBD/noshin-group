/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ltBackground: "#f9fcff",
        ltColor: "#2d3436",
        drBackground: "#2d3436",
        drColor: "#f8e9e9",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      backgroundImage: {
        darkLogo: "url('/assets/img/logo.png')",
        sldBg: "url('/assets/bg_img/Weed.jpg')",
        lightLogo: "url('/assets/img/logo_light.png')",
        "lt-gradient": "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)",
        "dr-gradient": "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
      },
    },
  },
  plugins: [],
};
