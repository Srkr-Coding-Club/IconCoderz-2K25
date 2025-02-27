/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 30px 30px rgba(241, 197, 90, 0.66) ",
        "4xl": "0 35px 35px rgba(255, 255, 255, 255)",
        '5xl': '0 35px 35px rgba(35, 207, 242, 0.4)',
      }
    },
  },
  plugins: [],
};
