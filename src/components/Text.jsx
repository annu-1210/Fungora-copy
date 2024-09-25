import React from "react";
import { tv } from "tailwind-variants";

const text = tv(
  {
    base: "flex text-secondary",
    variants: {
      size: {
        sm: "font-HelveticaNue font-normal leading-7 text-lg xl:text-xl max-w-[530px] pt-5 md:pt-8 mx-auto md:mx-0",
        md: "font-CooperBold text-lg md:text-xl xl:text-2xl leading-7 lg:leading-8 xl:leading-none",
        lg: "text-[38px] leading-[38px] sm:text-[40px] sm:leading-[88.872%] md:text-[50px] xl:text-[70px] transition-all mx-auto md:mx-0 max-w-[620px] lg:max-w-[750px] xl:max-w-[900px] 3xl:max-w-[1070px] font-CooperBold md:font-CooperBlack",
        xl: " text-[58px] lg:text-[60px] xl:text-[70px] relative 3xl:text-[86px] text-center font-CooperBold md:font-CooperBlack leading-[50px] sm:leading-[88.372%] 3xl:leading-[88px] max-w-[537px] mx-auto ",
      },
    },
  },
  {
    twMerge: false,
  }
);

function Text({ label,size }) {
  return <span className={text({size })}>{label}</span>;
}

export default Text;
