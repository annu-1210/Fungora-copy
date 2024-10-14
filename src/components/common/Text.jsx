import React from "react";
import { tv } from "tailwind-variants";

const text = tv(
  {
    base: "flex z-10 relative",
    variants: {
      color: {
        primary: "text-secondary",
        secondary: "text-tertiary",
      },
      size: {
        xsm: "text-base lg:text-lg font-HelveticaNue !leading-[24px] pt-4 md:pt-6 lg:pt-[30px] group-hover:text-tertiary",
        sm: "font-HelveticaNue font-normal leading-7 text-lg xl:text-xl max-w-[530px] xl:max-w-[677px] pt-5 md:pt-8 mx-auto md:mx-0",
        md: "font-CooperBold text-lg md:text-xl xl:text-2xl leading-7 lg:leading-8 xl:leading-none text-center md:text-start justify-center md:justify-start",
        lg: "text-base md:text-lg lg:text-xl font-HelveticaNue font-bold !leading-[24px] pt-8 md:pt-6 lg:pt-[30px] group-hover:text-tertiary",
        xl: "text-xl xl:text-2xl font-CooperBlack max-w-[244px] !leading-[24px] pt-4 md:pt-6 group-hover:text-tertiary",
        xxl: "text-[38px] leading-[38px] sm:text-[40px] sm:leading-[42px] md:leading-[88.372%] md:text-[50px] lg:text-[60px] xl:text-[70px] 3xl:text-[86px] transition-all mx-auto md:mx-0 max-w-[620px] lg:max-w-[750px] xl:max-w-[900px] 3xl:max-w-[1070px] font-CooperBold sm:font-CooperBlack",
        xxxl: "text-[58px] lg:text-[60px] xl:text-[70px] relative 3xl:text-[86px] text-center font-CooperBold md:font-CooperBlack leading-[50px] sm:leading-[88.372%] 3xl:leading-[88px] max-w-[537px] mx-auto ",
      },
    },
  },
  {
    twMerge: false,
  }
);

function Text({ label, size, color }) {
  return <span className={text({ size, color })}>{label}</span>;
}

export default Text;
