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
        bodyBackground: "var(--background)",
        primary: "var(--primaryColor)",
        secondary: "var(--secondaryColor)",
        tertiary: "var(--tertiaryColor)",
        quaternary: "var(--quaternaryColor)",
        quinary: "var(--quinaryColor)",
        purplePrimary: "#2d0051",
        purpleSecondary: "rgba(51, 0, 91, 0.87)",
        FabLinksBackground: "var(--fabLinksBackground)",
        socialLinksBackground: "var(--socialLinksBackground)",
        footerBorder: "var(--footerBorder)",
        starYellowColor: "var(--starYellowColor)",
      },
      screens: {
        'xsm': '425px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'paper-texture': "url('/images/textured_paper.png')",
        'texture-background': "url('/images/Noise & Texture.png')",
      },
      translate: {
        'custom': '5.5918px',
      },
      scale: {
        'custom': '0.955266',
      },
    },
  },
  plugins: [],
};
