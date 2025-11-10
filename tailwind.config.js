/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        // Total duration is 6s (3 columns * 2s gap) for a continuous loop
        shimmer: 'shimmer 6s infinite cubic-bezier(0.4, 0, 0.6, 1)', 
      },
    },
    },
  },
  darkMode: "class",
  plugins: [],
};
