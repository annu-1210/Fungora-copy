import React from "react";
import Text from "./Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GiRoundStar } from "react-icons/gi";

function Testimonials() {
  const Heading = "What people say about Fungora?";
  const testimonials = [
    {
      reviewer: "Ana",
      title: "Finally got what i really love",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
    {
      reviewer: "Sofia M",
      title: "Excellent website to buy Fungora.",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dus aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      reviewer: "Michal",
      title: "100% original & organic",
      review:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate",
    },
    {
      reviewer: "Sofia M",
      title: "Excellent website to buy Fungora.",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. dus aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section>
      <div className="pt-14 sm:py-20 md:pt-24 lg:py-32 xl:py-[180px] bg-cover bg-tertiary bg-texture-background bg-blend-multiply">
        <div className="px-[21px] md:px-6 xl:px-0 ml-auto max-w-[1200px] 2xl:max-w-[1296px] min-[1600px]:max-w-[1440px] 3xl:max-w-[1680px] flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="relative md:lg:w-4/12">
            <h2>
              <Text label={Heading} size="xxl" />
            </h2>
            <div className="hidden lg:flex absolute justify-start mt-12 gap-6 h-[20px] items-center w-full  z-10  left-0 "></div>
          </div>
          <div className="w-[98%] sm:w-11/12 lg:w-8/12 lg:pl-10 pt-5 md:pt-7 lg:pt-0">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              className="mySwiper"
            >
              {testimonials.map((slide, index) => (
                <SwiperSlide key={index} className="custom-testimonial-slide">
                  <div className="relative bg-cover bg-quinary bg-texture-background bg-blend-multiply bg-lightYellow py-10 px-6 rounded-3xl group w-full mx-auto max-w-[320px] sm:max-w-[350px] h-[372px] sm:h-[420px] 3xl:h-[430px] transition-all ease-in-out duration-500 hover:bg-primary">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <GiRoundStar
                          key={index}
                          size={18}
                          className="transition-colors duration-300 text-secondary hover:text-primary"
                        />
                      ))}
                    </div>
                    <h4>
                      <Text label={slide.title} size="xl" />
                    </h4>
                    <p>
                      <Text label={slide.review} size="xsm" />
                    </p>
                    <p>
                      <Text label={slide.reviewer} size="lg" />
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