/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#3758F9',
        dark: {
          50: '#F4F7FF',
          100: '#E4ECF9',
          200: '#B8C9F2',
          300: '#7E9DF2',
          400: '#4E72F2',
          500: '#3758F9', // Primary brand color
          600: '#2A46D7',
          700: '#1F32B5',
          800: '#141E93',
          900: '#090B31',
          bg: '#090E1A',
          card: '#121826',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
