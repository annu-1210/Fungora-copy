import React from "react";
import Text from "./common/Text";
import { PrevIcon } from "@/app/svgs/icons";
import { NextIcon } from "@/app/svgs/icons";

function Testimonials() {
  const Heading = "What people say about Fungora?";

  return (
    <section>
      <div className="pt-14 sm:py-20 md:pt-24 lg:py-32 xl:py-[180px]  bg-tertiary ">
        <div className="px-[21px] md:px-6 xl:px-0 ml-auto max-w-[1200px] 2xl:max-w-[1296px] min-[1600px]:max-w-[1440px] 3xl:max-w-[1680px] flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="relative md:lg:w-4/12">
            <h2>
              <Text label={Heading} size="xxl" color="primary" />
            </h2>
            <div className="hidden lg:flex absolute justify-start mt-12 gap-6 h-[20px] items-center w-full  z-10  left-0 ">
              <button className="custom-prev-button">
                <PrevIcon width={50} />
              </button>
              <button className="custom-next-button max-w-[55px] flex justify-center items-center w-full swiper-button-disabled">
                <NextIcon width={55} />
              </button>
            </div>
          </div>
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
