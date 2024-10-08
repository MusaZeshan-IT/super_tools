/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        // Custom screen sizes
        '2xs': '360px',
        '2xs-custom': '420px',
        'xs': '480px', // Custom screen size between extra-small and small
        'xs-custom': '560px', // Custom screen size between extra-small and small
        'sm-custom': '704px', // Custom screen size between small and medium
        'md-custom': '896px', // Custom screen size between medium and large
        'lg-custom': '1152px', // Custom screen size between large and extra-large
        'xl-custom': '1408px', // Custom screen size between extra-large and 2xl
      },
    },
  },
  plugins: [],
}
