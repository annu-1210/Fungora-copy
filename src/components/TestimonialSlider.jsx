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
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          // el: '.swiper-pagination',
          // type: 'bullets',
          bulletClass: "swiper-pagination-bullet-active"
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
        className="custom-testimonial-wrapper swiper-wrapper"
      >
        {testimonials.map((slide, index) => (
          <SwiperSlide key={index} className="custom-testimonial-slide">
            <div className="relative bg-cover bg-quinary bg-texture-background bg-blend-multiply py-10 px-6 rounded-3xl group w-full mx-auto max-w-[320px] sm:max-w-[350px] h-[390px] sm:h-[420px] 3xl:h-[430px] transition-all ease-in-out duration-500 hover:bg-secondary">
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
