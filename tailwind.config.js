/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-noir': '#050505',
        'graphite-studio': '#121212',
        'luxury-gold': '#D9A441',
        'warm-ivory': '#F7F5F2',
        'accent-white': '#FFFFFF',
        'platinum-mist': '#6B7280',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
