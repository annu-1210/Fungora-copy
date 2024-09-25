import React from "react";
import Text from "./Text";
import ActionButton from "./ActionButton";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function OurCulture() {
  const heading = "Our culture";
  const description = "Discover the Fungora way";
  const details = [
    "Imagine a place where mushrooms are more than just a pizza topping. That's us! Central to our philosophy is the commitment to your health and the pursuit of enhancing it through our carefully crafted extract.",
    "Join our community and immerse yourself in the Fungora way, fostering a life that's not only balanced and enriched but radiates vitality.",
  ];

  return (
    <section>
      <div className="relative z-20 pt-8 bg-cover md:py-20 lg:py-28 xl:py-36 bg-primary bg-texture-background bg-blend-multiply">
        <div className="px-[21px] md:px-6 xl:px-0 ml-auto max-w-[1200px] 2xl:max-w-[1296px] min-[1600px]:max-w-[1440px] 3xl:max-w-[1680px] flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-start">
          <div className="relative lg:w-5/12">
          <Image
              src="/images/star.png"
              alt="star"
              width={68}
              height={108}
              className=" max-w-[30px] md:max-w-10 lg:max-w-full absolute right-[17%] md:right-[22%] lg:right-0 xl:right-[11%] top-[-32%] sm:top-[-60%] md:top-[-8%] z-20"
            />
         
            <p>
              <Text label={heading} size="md" />
            </p>
            <h2 className="pt-4 md:pt-5">
              <Text label={description} size="lg" />
            </h2>
            {details.map((detail, index) => {
              return (
                <p key={index}>
                  <Text label={detail} size="sm" />
                </p>
              );
            })}
            <div className="inline-block pt-5 md:pt-7">
              <ActionButton label="Shop now" color="primary" size="sm" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default OurCulture;
