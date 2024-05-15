/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E90FF',
        'custom-green': '#00FF00',
        'custom-red': '#FF0000',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

