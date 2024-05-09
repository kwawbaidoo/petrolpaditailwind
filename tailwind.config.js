/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        padiRed: '#E0334C',
        padicream: '#FFEFF1',
        hrcolor: '#EFF0F6',
      },
      boxShadow:{
        'reqshadow': '0px 4px 4px 0px rgba(0,0,0,0.08)',
        'faqshadow': '0px 6px 16px 0px rgba(224, 51, 76,0.19)',
        'faqminoshadow': '0px 5px 10px 0px rgba(0,0,0,0.06)',

      },
      fontFamily:{
        dmSansFont: ['DM sans']
      }
    },
  },
  plugins: [],
}

