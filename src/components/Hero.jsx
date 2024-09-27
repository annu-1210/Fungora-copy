import React from "react";
import Image from "next/image";
import Text from "./Text";
import { useState, useEffect } from "react";

function Hero() {
  const mainHeading = "Natural Mushroom Extract";

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.max(1 - scrollY / 500, 0.5);
  const opacity = Math.max(1 - scrollY / 300, 0);
  return (
    <section>
      <div className="max-w-[1920px] bg-primary relative bg-texture-background bg-cover bg-blend-multiply ">
        <Image
          src="/images/hero-bg-img.png"
          alt="hero-bg"
          width={1920}
          height={704}
          className="w-full  absolute top-[-15%] sm:top-0 left-0 bg-cover z-10 object-cover pointer-events-none h-[348px] md:h-[704px]"
        />
        <div className="pt-[188px] lg:pt-[180px] 3xl:pt-[221px] relative z-3x0">
          <h2
            style={{
              transform: `scale(${scale})`,
              opacity: `${opacity}`,
            }}
            className="transition-all duration-200"
          >
            <Text label={mainHeading} size="xxxl" color="primary" />
          </h2>
          <div className="relative z-30 flex flex-col items-center justify-center w-full h-full overflow-hidden pt-14 flex-nowrap">
            <Image
              src="/images/hero-bottle-img.webp"
              alt="hero-bottle-img"
              width={214}
              height={666}
              className="max-w-[170px] z-0 sm:max-w-[180px] 3xl:max-w-[214px] transition-all ease-in-out duration-500 lg:group-hover:scale-110 "
            />
            <div className="flex translate-x-[0%] justify-center gap-36 flex-nowrap absolute ">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <Image
                    key={index}
                    src="/images/Fungora-img.png"
                    alt="Fungora-img"
                    width={2016}
                    height={296}
                    className=" w-full  ease-in-out scale-105 object-cover hidden md:block transform transition-transform duration-500 translate-x-[calc(var(--scroll)*1px)] z-40"
                  />
                ))}
            </div>
            <div></div>
          </div>
        </div>
        {/* <Image
          src="/images/gradient1.png"
          alt="Fungora-img"
          width={1920}
          height={200}
          className="absolute top-[900px] bg-texture-background bg-cover bg-blend-multiply z-10"
        /> */}
      </div>
    </section>
  );
}

export default Hero;
