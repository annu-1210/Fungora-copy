import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import Image from "next/image";
import { Star } from "./common/Icon";
import OurCultureSlider from "./OurCultureSlider";

function OurCulture() {
  const heading = "Our culture";
  const description = "Discover the Fungora way";
  const firstPara =
    "Imagine a place where mushrooms are more than just a pizza topping. That's us! Central to our philosophy is the commitment to your health and the pursuit of enhancing it through our carefully crafted extract.";
  const secondPara =
    "Join our community and immerse yourself in the Fungora way, fostering a life that's not only balanced and enriched but radiates vitality.";

  return (
    <section id="ourCulture">
      <div className="relative z-20 pt-8 md:py-20 lg:py-28 xl:py-36 bg-primary ">
        <div className="px-[21px] md:px-6 xl:px-0 ml-auto max-w-[1200px] 2xl:max-w-[1296px] min-[1600px]:max-w-[1440px] 3xl:max-w-[1680px] flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-start">
          <div className="relative flex flex-col lg:w-5/12 ">
            <span className="absolute right-[22%] xsm:right-[17%] md:right-[22%] lg:right-0 xl:right-[11%] top-[-16%] xsm:top-[-32%] sm:top-[-60%] md:top-[-8%] z-20">
              <Star />
            </span>

            <p className="flex items-center justify-center lg:justify-start">
              <Text label={heading} size="md" color="primary" />
            </p>
            <h2 className="flex items-center justify-center pt-4 text-center lg:text-start md:pt-5">
              <Text label={description} size="xxl" color="primary" />
            </h2>
            <div className="flex-col hidden lg:flex 3xl:max-w-[550px] ">
              <p className="flex items-center justify-center">
                <Text label={firstPara} size="sm" color="primary" />
              </p>
              <p className="flex items-center justify-center">
                <Text label={secondPara} size="sm" color="primary" />
              </p>
            </div>
            <div className="flex items-center justify-center pt-5 lg:justify-start md:pt-7">
              <ActionButton label="Shop now" color="tertiary" size="sm" />
            </div>
          </div>
          <OurCultureSlider />
          <div className="flex flex-col lg:hidden">
            <p className="flex items-center justify-center">
              <Text label={firstPara} size="sm" color="primary" />
            </p>
            <p className="flex items-center justify-center">
              <Text label={secondPara} size="sm" color="primary" />
            </p>
          </div>
        </div>
        <div className=" w-full h-32 absolute top-[-126px] flex z-[-1] ">
          <Image
            src="/images/png/gradient-bg-2.webp"
            alt="gradient-bg"
            layout="fill"
            objectFit="cover"
            className="relative z-10"
          />
        </div>
        <div className=" w-full h-32 absolute bottom-[-126px] flex z-0 ">
          <Image
            src="/images/png/gradient-bg-1.webp"
            alt="gradient-bg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCulture;
