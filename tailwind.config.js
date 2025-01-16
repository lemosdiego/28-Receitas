/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "482px" },
        sm: { min: "483px", max: "768px" },
        md: { min: "769px", max: "1024px" },
        lg: { min: "1025px", max: "1200px" },
        xl: { min: "1201px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "-4px 2px 2px rgba(0, 0, 0, 0.7)",
        },
      });
    },
  ],
};
