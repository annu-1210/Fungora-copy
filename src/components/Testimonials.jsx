import React from "react";
import Text from "./common/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GiRoundStar } from "react-icons/gi";
import { testimonials } from "./common/Helper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { navigationButtons } from "./common/Helper";

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
              {navigationButtons.map((btn, index) => {
                return (
                  <button key={index} className={btn.className}>
                    {btn.icon}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-[98%] sm:w-11/12 lg:w-8/12 lg:pl-10 pt-5 md:pt-7 lg:pt-0">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  pagination: false,
                },
              }}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
            >
              {testimonials.map((slide, index) => (
                <SwiperSlide key={index} className="custom-testimonial-slide">
                  <div className="relative bg-cover bg-quinary bg-texture-background bg-blend-multiply py-10 px-6 rounded-3xl group w-full mx-auto max-w-[320px] sm:max-w-[350px] h-[372px] sm:h-[420px] 3xl:h-[430px] transition-all ease-in-out duration-500 hover:bg-secondary">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <GiRoundStar
                          key={index}
                          size={18}
                          className=" text-secondary group-hover:text-starYellowColor"
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
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
