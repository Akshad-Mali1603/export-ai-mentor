/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
    '50': '#f8fafc',
    '100': '#f1f5f9',
    '200': '#e2e8f0',
    '300': '#cad5e2',
    '400': '#90a1b9',
    '500': '#62748e',
    '600': '#45556c',
    '700': '#314158',
    '800': '#1d293d',
    '900': '#0f172b',
    '950': '#020618',
},

        primary: "#7C3AED",    // Purple
        support: "#14B8A6",    // Teal
        dark: "#1f2937",       // Dark background
        light: "#f9fafb",      // Light background
        mentorBlue: "#2563eb", // Optional custom color
      }
    },
  },
  plugins: [],
}
