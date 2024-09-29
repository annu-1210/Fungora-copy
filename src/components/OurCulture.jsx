import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import Image from "next/image";
import { OurCultureDetails } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { slides } from "./common/Helper";

function OurCulture() {
  const heading = "Our culture";
  const description = "Discover the Fungora way";
  const bottleImage = "/images/avif/slider-bottle.avif";

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
              {OurCultureDetails.map((detail, index) => {
                return (
                  <p key={index}>
                    <Text label={detail} size="sm" color="primary" />
                  </p>
                );
              })}
            </div>
            <div className="inline-block pt-5 md:pt-7">
              <ActionButton label="Shop now" color="tertiary" size="sm" />
            </div>
          </div>
          <div className="w-[98%] sm:w-11/12 lg:w-7/12 3xl:w-7/12 lg:pl-10 3xl:pl-0 pt-5 md:pt-7 lg:pt-0">
            <Swiper
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="custom-swiper-slide">
                  <div className="relative mt-20">
                    <Image
                      src={bottleImage}
                      alt="image"
                      width={199}
                      height={616}
                      className=" absolute z-10 w-full max-w-[150px] lg:max-w-[160px] h-[435px] lg:h-[500px] min-[1600px]:max-w-[190px] min-[1600px]:h-[590px] left-1/2 -translate-x-1/2 top-[-10%]"
                    />
                    <Image
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      width={398}
                      height={694}
                      className="relative z-0 w-full "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCulture;
