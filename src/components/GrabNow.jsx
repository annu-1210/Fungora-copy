import React from "react";
import Image from "next/image";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";

function GrabNow() {
  const para = "Ready for a natural boost?";
  return (
    <section>
      <div className="relative">
        <div className="z-10 px-4 pt-24 pb-20 overflow-hidden md:overflow-visible sm:py-32 bg-tertiary ">
          <div className="max-w-[1196px] w-full bg-custom-gradient mx-auto rounded-[24px] px-5 sm:px-20 lg:px-32 py-10 lg:py-24 flex flex-col lg:flex-row gap-6 h-[420px] lg:h-full lg:justify-between  items-center relative z-20">
            <Image
              src="/images/png/star.png"
              alt="star"
              width={68}
              height={108}
              className=" absolute left-[71%] xsm:left-[55%] lg:left-[64%] top-[30%] xsm:top-16 md:top-9 z-40 max-w-[30px] md:max-w-10 lg:max-w-full"
            />
            <Image
              src="/images/png/star.png"
              alt="star"
              width={68}
              height={108}
              className=" absolute left-[47%] xsm:left-[42%]  lg:left-[56%] md:bottom-[-34%] bottom-[-84px] xsm:bottom-[-65px] lg:bottom-[-40%] z-40 max-w-[30px] md:max-w-10 lg:max-w-full"
            />
            <Image
              src="/images/hero-bottle-img.webp"
              alt="star"
              width={229}
              height={713}
              className=" z-10 max-w-[130px] xsm:max-w-[150px] md:max-w-[200px] lg:max-w-[229px] absolute transform top-[72%] xsm:top-[72%]  left-[64%] xsm:left-[54%] sm:left-[64%] lg:left-[62%] 3xl:left-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[42deg]"
            />
            <div className="relative z-0 ">
              <Image
                src="/images/png/bottle-today-mashroom-img.png"
                alt="mushroom"
                width={50}
                height={60}
                className=" absolute w-[50px] lg:w-[78px] right-[-10%] sm:right-[-5%] lg:right-[6%] top-[21%] lg:top-[12%] z-40"
              />
              <p className="text-center text-tertiary font-HelveticaNue font-normal leading-7 text-lg xl:text-xl max-w-[530px] xl:max-w-[677px] mx-auto md:mx-0 lg:text-start">
                {para}
              </p>
              <h2 className="pt-5">
                <Text
                  label={
                    <>
                      Grab your
                      <br /> bottle today!
                    </>
                  }
                  size="xxl"
                  color="secondary"
                />
              </h2>
            </div>
            <div className="z-50">
              <ActionButton label="Shop now" color="secondary" size="md" />
            </div>
          </div>
        </div>
        <Image
          src="/images/png/fungora-img-2.png"
          alt="fungora"
          width={2016}
          height={296}
          className="hidden z-0 md:block absolute top-[50px]  lg:top-0 h-[220px] xl:max-w-[1440px] 3xl:max-w-[1920px]"
        />
        <Image
          src="/images/png/fungora-img-mobile2.png"
          alt="fungora"
          width={2016}
          height={296}
          className="block z-0 md:hidden absolute top-[54px] sm:top-[89px] md:top-[50px] lg:top-0 w-full"
        />
      </div>
    </section>
  );
}

export default GrabNow;
