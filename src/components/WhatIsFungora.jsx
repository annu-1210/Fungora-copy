import React from "react";
import Image from "next/image";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import { Star } from "./common/Icon";
import { useState, useEffect } from "react";

function WhatIsFungora() {
  const heading = "What is Fungora?";
  const description =
    "This isn't your average supplement. It's a liquid extract from the Lion's Mane mushroom.";

  const firstPara =
    "Our decision to focus on mushroom extracts is rooted in the incredible health benefits they offer. Not only are mushrooms rich in antioxidants, they also have anti-inflammatory properties and are a great source of immune-boosting beta-glucans.";
  const secondPara =
    "Additionally, mushrooms contain compounds that can improve cognitive function, enhance energy levels, and promote overall wellness.";
  const thirdPara =
    "Get your hands on this little bottle of magic. It's got the goodness of Lion's Mane mushrooms condensed into a liquid that's designed to enhance your daily well-being.";
  const fourthPara =
    "We’re committed to keeping it real with a pure, potent extract that provides a natural boost to both cognitive function and overall health.";

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

  return (
    <section id="whatIsFungora">
      <div className="relative pt-20 bg-tertiary md:pt-24 lg:pt-32 ">
        <Image
          src="/images/avif/mushroom-bg.avif"
          alt="mushroom-img"
          width={1000}
          height={700}
          className="bottom-[4%] md:bottom-0 xl:bottom-[-6%] left-0  absolute  md:max-w-[500px] lg:max-w-[700px] xl:max-w-[750px] 2xl:max-w-[900px] 3xl:max-w-[950px] z-10"
        />
        <div
          className="flex flex-col text-center md:text-start px-[21px] md:px-6 xl:px-0 m-auto xl:max-w-[1000px] 2xl:max-w-[1196px]"
          // style={{
          //   transform: `translateY(${(scrollPosition * -0.5}px)`
          //   transition: "transform 0.5s ease-out",
          // }}
        >
          <div className="relative flex flex-col gap-4 md:gap-8">
            <span className="absolute z-30 right-[50px] md:right-[20%] lg:right-[29%] xl:right-[12%] max-h-[80px] 2xl:right-[26%] 3xl:right-[10%] top-[-41%] sm:top-[-60%] md:top-0">
              <Star />
            </span>
            <p>
              <Text label={heading} size="md" color="primary" />
            </p>
            <h2>
              <Text label={description} size="xxl" color="primary" />
            </h2>
          </div>
          <div className="z-20 flex flex-col items-center justify-center text-center md:flex-row md:items-start md:justify-between md:text-start">
            <div className="md:w-6/12 md:pr-10">
              <p>
                <Text label={firstPara} size="sm" color="primary" />
              </p>
              <p>
                <Text label={secondPara} size="sm" color="primary" />
              </p>
              <Image
                src="/images/avif/image.avif"
                alt="image"
                width={565}
                height={696}
                className="pt-5 md:pt-8 2xl:pt-12 hidden md:block z-20 md:max-w-[320px] lg:max-w-[460px] max-h-[598px]"
              />
            </div>
            <div className="flex flex-col items-center md:items-end md:w-6/12 ">
              <Image
                src="/images/avif/girl-image.avif"
                alt="image"
                width={583}
                height={423}
                className="py-8 md:pb-0 2xl:pt-11 w-full max-w-[500px] md:max-w-full mx-auto md:mx-0"
              />
              <div>
                <p className="max-w-[425px] 3xl:max-w-[480px]">
                  <Text label={thirdPara} size="sm" color="primary" />
                </p>
                <p className="max-w-[425px] 3xl:max-w-[480px]">
                  <Text label={fourthPara} size="sm" color="primary" />
                </p>
                <div className="inline-block pt-5 md:pt-8 lg:pt-10 xl:pt-14 3xl:pt-16">
                  <ActionButton label="Shop now" color="tertiary" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/avif/whatIsFungora.avif"
          alt="image"
          width={599}
          height={742}
          className="pt-8 2xl:pt-12 relative z-20 md:hidden w-full max-w-[500px] md:max-w-full mx-auto md:mx-0 px-1"
        />
      </div>
    </section>
  );
}

export default WhatIsFungora;
