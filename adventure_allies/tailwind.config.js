/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'login-page': "url('/public/images/mainPage.png')"
      },
      fontFamily: {
        'chinese-font': ['chineseFont'],
        'english-font': ['englishFont']
      }
    },
  },
  plugins: [],
}