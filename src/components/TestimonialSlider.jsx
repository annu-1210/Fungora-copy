import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GiRoundStar } from "react-icons/gi";
import { testimonials } from "./common/Helper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Text from "./common/Text";

function TestimonialSlider() {
  return (
    <div className="w-[98%] sm:w-11/12 lg:w-8/12 lg:pl-10 pt-5 md:pt-7 lg:pt-0 flex gap-10">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          bulletClass: "custom-pagination-bullet",
          bulletActiveClass: "custom-pagination-bullet-active",
        }}
        breakpoints={{
          768: {
            pagination: false,
          },
        }}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        loop={false}
        className="custom-testimonial-wrapper swiper-wrapper"
      >
        {testimonials.map((slide, index) => (
          <SwiperSlide key={index} className="custom-testimonial-slide">
            <div className="relative w-full px-6 py-10 mx-auto transition-all duration-500 ease-in-out bg-quinary rounded-3xl group hover:bg-secondary max-h-[430px]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <GiRoundStar
                    key={index}
                    size={18}
                    className=" text-secondary group-hover:text-yellow-star"
                  />
                ))}
              </div>
              <h4>
                <Text label={slide.title} size="xl" color="primary" />
              </h4>
              <p>
                <Text label={slide.review} size="xsm" color="primary" />
              </p>
              <p>
                <Text label={slide.reviewer} size="lg" color="primary" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
