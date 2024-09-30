import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import Image from "next/image";
import { OurCultureDetails } from "./common/Helper";
import OurCultureSlider from "./OurCultureSlider";

function OurCulture() {
  const heading = "Our culture";
  const description = "Discover the Fungora way";
  const firstPara =
    "Imagine a place where mushrooms are more than just a pizza topping. That's us! Central to our philosophy is the commitment to your health and the pursuit of enhancing it through our carefully crafted extract.";
  const secondPara =
    "Join our community and immerse yourself in the Fungora way, fostering a life that's not only balanced and enriched but radiates vitality.";

  return (
    <section>
      <div className="relative z-20 pt-8 md:py-20 lg:py-28 xl:py-36 bg-primary ">
        <div className="px-[21px] md:px-6 xl:px-0 ml-auto max-w-[1200px] 2xl:max-w-[1296px] min-[1600px]:max-w-[1440px] 3xl:max-w-[1680px] flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-start">
          <div className="relative lg:w-5/12">
            <Image
              src="/images/png/star.png"
              alt="star"
              width={68}
              height={108}
              className=" max-w-[30px] md:max-w-10 lg:max-w-full absolute right-[17%] md:right-[22%] lg:right-0 xl:right-[11%] top-[-5%] xsm:top-[-32%] sm:top-[-60%] md:top-[-8%] z-20"
            />
            <p>
              <Text label={heading} size="md" color="primary" />
            </p>
            <h2 className="pt-4 md:pt-5">
              <Text label={description} size="xxl" color="primary" />
            </h2>
            <div>
              <p>
                <Text label={firstPara} size="sm" color="primary" />
              </p>
              <p>
                <Text label={secondPara} size="sm" color="primary" />
              </p>
            </div>
            <div className="inline-block pt-5 md:pt-7">
              <ActionButton label="Shop now" color="tertiary" size="sm" />
            </div>
          </div>
          <OurCultureSlider />
        </div>
      </div>
    </section>
  );
}

export default OurCulture;
