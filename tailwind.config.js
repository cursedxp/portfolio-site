/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // Custom breakpoint named 'xs'
      },
    },
  },
  plugins: [],
};
