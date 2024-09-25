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
        HelveticaNue:["Helvetica Nue"],
      },
      colors: {
        bodyBackground: "var(--background)",
        primary :"var(--primaryColor)",
        secondary : "var(--secondaryColor)",
        teritary:"var(--teritaryColor)",
        quaternary:"var(--quaternaryColor)",
        purplePrimary: "#2d0051",
        purpleSecondary:"rgba(51, 0, 91, 0.87)",
        FabLinksBackground:"var(--fabLinksBackground)",
      },
      screens:{
        '3xl': '1920px',
      },
      backgroundImage: {
        'paper-texture': "url('/images/textured_paper.png')",
        'texture-background':"url('/images/Noise & Texture.png')",
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
