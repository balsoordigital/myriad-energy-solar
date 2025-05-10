/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#595959",
        grayBg: "#F5F5F5",
        darkGrayBg: "rgba(0, 0, 0, 0.08)",
        themeColor: "#028599",
        dangerColor: "#FF3F5F",
        buttonColor: "#19B04B",
        cwActive: "rgba(118, 118, 128, 0.12)",
      },
    },
  },
  plugins: [],
}