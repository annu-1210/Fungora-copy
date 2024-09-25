import React from "react";
import Image from "next/image";
import Text from "./Text";

function WhatIsFungora() {
  const subHeadingLabel = "What is Fungora?";
  const H2Label =
    "This isn't your average supplement. It's a liquid extract from the Lion's Mane mushroom.";
  const para1Label = "Our decision to focus on mushroom extracts is rooted in the incredible health benefits they offer. Not only are mushrooms rich in antioxidants, they also have anti-inflammatory properties and are a great source of immune-boosting beta-glucans.";
  const para2Label = "Additionally, mushrooms contain compounds that can improve cognitive function, enhance energy levels, and promote overall wellness.";
  const para3Label = "Get your hands on this little bottle of magic. It's got the goodness of Lion's Mane mushrooms condensed into a liquid that's designed to enhance your daily well-being.";
  const para4Label = "We’re committed to keep it real with a pure, potent extract that provides a natural boost to both cognitive function and overall health.";
  return (
    <section>
      <div className="bg-teritary pt-20 md:pt-24 lg:pt-32 relative bg-texture-background bg-cover bg-blend-multiply ">
        <Image
          src="/images/mushroom-bg.avif"
          alt="mushroom-img"
          width={1000}
          height={700}
          className="bottom-[4%] md:bottom-0 xl:bottom-[-4%] left-0  absolute  md:max-w-[500px] lg:max-w-[700px] xl:max-w-[750px] 2xl:max-w-[900px] 3xl:max-w-full z-0"
        />
        <div className="flex flex-col text-center md:text-start px-[21px] md:px-6 xl:px-0 m-auto xl:max-w-[1000px] 2xl:max-w-[1196px] gap-10 z-20">
          <div className="relative flex flex-col gap-4 md:gap-8">
            <Image
              src="/images/star.png"
              alt="star"
              width={25}
              height={36}
              className="max-w-[30px] md:max-w-10 lg:max-w-full absolute right-24 top-3 "
            />
            <p>
              <Text label={subHeadingLabel} size="md" />
            </p>
            <h2>
              <Text label={H2Label} size="lg" />
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between text-center md:text-start">
            <div>
              <p> <Text label={para1Label} size="sm" /></p>
              <p> <Text label={para2Label} size="sm" /></p>
              <Image
              src="/images/image.avif"
              alt="star"
              width={565}
              height={696}
              className="pt-5 md:pt-8 2xl:pt-12 hidden md:block z-20"
            />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsFungora;
