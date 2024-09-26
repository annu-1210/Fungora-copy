import React from "react";
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "rounded-full text-center flex items-center justify-center",
    variants: {
      color: {
        primary:
          "bg-gradient-to-b from-purplePrimary to-purpleSecondary text-primary",
        secondary: "bg-tertiary text-secondary ",
        tertiary:
          "bg-gradient-to-b from-purplePrimary to-purpleSecondary text-tertiary",
      },
      size: {
        sm: "w-[189px] h-[49px] lg:w-[138px] px-[23px] py-[11px] text-lg button-animation font-CooperBlack",
        md: "w-[142px] h-[47px] sm:w-[160px] sm:h-[59px] px-[26px] py-[10px] sm:py-[13px] text-xl sm:2xl font-CooperSemiBold",
        lg: "w-[155px] h-[38px] sm:w-[188px] xl:w-[198px] sm:h-[46px] px-2.5 md:px-3 lg:px-4 py-1.5 sm:py-[11px] text-base sm:text-lg font-CooperBold transition-all duration-300 ease-in-out",
      },
    },
  },
  {
    twMerge: false,
  }
);

function ActionButton({ label, color, size }) {
  return (
    <div>
      <button className={button({ color, size })}>{label}</button>
    </div>
  );
}

export default ActionButton;
