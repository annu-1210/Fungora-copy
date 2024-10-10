import React from "react";
import Image from "next/image";
import Text from "./common/Text";
import { useState, useEffect } from "react";

function Hero() {
  const mainHeading = "Natural Mushroom Extract";

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(1 - scrollPosition / 500, 0.5);
  const opacity = Math.max(1 - scrollPosition / 300, 0);
  return (
    <section>
      <div className="max-w-[1920px] bg-primary relative  ">
        <Image
          src="/images/png/hero-bg-img.png"
          alt="hero-bg"
          width={1920}
          height={704}
          className="w-full absolute top-[-15%] sm:top-0 left-0 bg-cover z-10 object-cover pointer-events-none h-[348px] md:h-[704px]"
        />
        <div className="pt-[188px] lg:pt-[180px] 3xl:pt-[221px] relative z-30">
          <h2
            style={{
              transform: `scale(${scale})`,
              opacity: `${opacity}`,
            }}
            className="transition-all duration-300"
          >
            <Text label={mainHeading} size="xxxl" color="primary" />
          </h2>
          <div className="relative z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden pt-14 flex-nowrap ">
            <Image
              src="/images/hero-bottle-img.webp"
              alt="hero-bottle-img"
              width={214}
              height={666}
              className="max-w-[170px] relative block z-50 sm:max-w-[180px] 3xl:max-w-[214px] transition-all ease-in-out duration-500 "
            />
            <div className="flex translate-x-[0%]  gap-36 flex-nowrap absolute justify-center h-full overflow-hidden  z-50 w-full items-center">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <Image
                    key={index}
                    src="/images/png/Fungora-img.png"
                    alt="Fungora-img"
                    width={2016}
                    height={296}
                    style={{
                      transform: `translateX(${scrollPosition * 2}px)`,
                    }}
                    className="z-50 hidden object-cover w-full transition-transform duration-500 ease-in-out transform scale-105 md:block"
                  />
                ))}
            </div>
            <div className="absolute z-50 flex justify-center w-full gap-8 overflow-hidden flex-nowrap">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <Image
                    key={index}
                    src="/images/png/fungora-img-mobile.png"
                    alt="Fungora-img"
                    width={2016}
                    height={296}
                    style={{
                      transform: `translateX(${scrollPosition * 2}px)`,
                    }}
                    className="z-50 block object-cover w-full transition-transform duration-500 ease-in-out transform scale-105 md:hidden"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-156px] z-40 w-full h-40 ">
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

export default Hero;
