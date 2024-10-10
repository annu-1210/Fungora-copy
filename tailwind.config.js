/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CooperNormal: ["CooperNormal"],
        CooperMedium: ["CooperMedium"],
        CooperSemibold: ["CooperSemibold"],
        CooperBold: ["CooperBold"],
        CooperExtrabold: ["CooperExtrabold"],
        CooperBlack: ["CooperBlack"],
        HelveticaNue: ["Helvetica Nue"],
      },
      colors: {
        bodyBackground: "rgb(255 239 211)",
        primary: "rgba(252, 235, 147, 1)",
        secondary: "rgba(51, 0, 91, 1)",
        tertiary: "rgba(255, 239, 211, 1)",
        quaternary: "rgba(255, 225, 72, 0)",
        quinary: "rgba(237, 221, 193, 1)",
        "FabLinks-Background": "rgb(51, 0, 91, 0.05)",
        "SocialLinks-Background": "rgb(51, 0, 91, 0.14)",
        "footer-Border": "rgb(51, 0, 91, 0.15)",
        "yellow-star": "rgba(255, 184, 0, 1)",
        "pagination-bullets":"#9b7d96",
      },
      screens: {
        'xsm': '425px',
        '3xl': '1920px',
      },
      translate: {
        'custom': '5.5918px',
      },
      scale: {
        'custom': '0.955266',
      },
      backgroundImage:{
        "custom-gradient":"linear-gradient(180deg, #2d0051, rgba(51, 0, 91, .87))",
      },
      animation: {
        'underline-scale': 'underline-scale 0.3s ease-in-out',
      },
      keyframes: {
        'underline-scale': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
