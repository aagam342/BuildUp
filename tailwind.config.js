/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#435ebe",
        "custom-dark-blue": "#1e1e2d",
        "custom-background": "#151521",
      },
      color: {
        "custom-blue": "#435ebe",
        "custom-dark-blue": "#1e1e2d",
        "custom-background": "#151521",
      },
    },
  },
  plugins: [],
};
