/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB0776",
        primaryLight: "#EB0776"
      },
      backgroundColor: {
        backgroundColor: "var(--background)",
      },
      backgroundImage: {
        glass: "var(--glass-background)"
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'serif'],
      }
    },
  },

  plugins: [],
}
