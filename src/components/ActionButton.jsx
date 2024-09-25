import React from "react";
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "rounded-full text-center flex items-center justify-center",
    variants: {
      color: {
        primary: "bg-gradient-to-b from-purplePrimary to-purpleSecondary text-primary",
        secondary: "bg-teritary text-secondary ",
      },
      size: {
        sm: "w-[189px] h-[49px] lg:w-[138px] px-[23px] py-[11px] text-lg button-animation font-CooperBlack",
        md: "w-[142px] h-[47px] sm:w-[160px] sm:h-[59px] px-[26px] py-[10px] sm:py-[13px] text-xl sm:2xl",
        lg: "w-[155px] h-[38px] sm:w-[198px] sm:h-[46px] px-[23px] py-2 sm:py-[11px] text-base sm:text-lg",
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
