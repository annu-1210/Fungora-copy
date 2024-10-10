import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { slides } from "./common/Helper";

function OurCultureSlider() {
  const bottleImage = "/images/avif/slider-bottle.avif";
  return (
    <div className="w-[98%] sm:w-11/12 lg:w-7/12 3xl:w-7/12 lg:pl-10 3xl:pl-0 pt-5 md:pt-7 lg:pt-0 flex items-center justify-center">
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
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
  );
}

export default OurCultureSlider;
