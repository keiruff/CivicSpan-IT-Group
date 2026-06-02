/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e', // Emerald Green
          dark: '#16a34a',    // Darker Green for hover states
        },
        dark: {
          DEFAULT: '#020617', // Slate 950
          secondary: '#0f172a', // Slate 900
        },
        neutral: {
          light: '#e5e7eb',   // Slate 200
          muted: '#cbd5e1',   // Slate 300
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
