/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "482px" }, // Telas menores que 480px (smartphones pequenos)
        sm: { min: "483px", max: "768px" }, // Telas de 481px até 767px (smartphones grandes)
        md: { min: "769px", max: "1024px" }, // Telas de 768px até 1023px (tablets e telas pequenas)
        lg: { min: "1025px", max: "1200px" }, // Telas de 1024px até 1279px (laptops pequenos e médios)
        xl: { min: "1201px" }, // Telas de 1280px até 1535px (laptops grandes e desktops)
      },
    },
  },
  plugins: [],
};
