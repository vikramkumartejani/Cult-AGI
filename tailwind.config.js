/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['"Darker Grotesque"', 'sans-serif'],  
        lexend: ['"Lexend"', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};
