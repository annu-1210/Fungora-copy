import React from "react";
import Image from "next/image";
import Text from "./Text";
import ActionButton from "./ActionButton";

function Subscribe() {
  const description = "Subscribe Fungora to get exclusive discounts";
  const detail =
    "Our product offerings are designed to cater to a variety of health-conscious consumers. We will offer a range of extract ratios, with a focus on higher extract ratios than our competitors, to ensure our customers get the most benefit from every serving.";

  return (
    <section>
      <div className="relative pt-20 bg-cover md:pt-24 lg:pt-32 xl:pt-44 bg-tertiary bg-texture-background bg-blend-multiply">
        <Image
          src="/images/mushroom-bg-3.avif"
          alt="mushroom"
          width={1000}
          height={700}
          className=" bottom-[-8%] md:bottom-[-80%] xl:bottom-[-75%] 3xl:bottom-[-80%] left-0
        z-0 absolute md:max-w-[500px] lg:max-w-[700px] xl:max-w-[750px]
        2xl:max-w-[900px] 3xl:max-w-full"
        />
        <div className="px-[21px] md:px-6 xl:px-0 m-auto xl:max-w-[1200px] 3xl:max-w-[1460px] flex flex-col md:flex-row justify-center text-center md:text-start md:justify-between items-center">
          <Image
            src="/images/image-4.avif"
            alt="image"
            width={553}
            height={652}
            className="pt-5 md:pt-0 w-full max-w-[340px] xsm:max-w-[384px] sm:max-w-[500px] md:max-w-[360px] lg:max-w-[406px] xl:max-w-[500px] max-auto md:mx-0 z-10"
          />
          <div className="order-1 md:w-6/12 lg:w-7/12 md:order-2">
            <h2>
              <Text label={description} size="xxl" />
            </h2>
            <p className="max-w-[677px]">
              <Text label={detail} size="sm" />
            </p>
            <form>
              <div className="flex justify-between border border-secondary rounded-full pl-3 pr-1.5 md:px-4 py-1.5 lg:py-3.5 w-full max-w-[633px] mt-4 md:mt-6 xl:mt-[35px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full pr-3 !bg-transparent text-base md:text-lg lg:text-xl placeholder:!bg-transparent text-secondary opacity-65 font-HelveticaNue placeholder:text-base placeholder:md:text-lg placeholder:lg:text-xl placeholder:text-secondary placeholder:opacity-65 placeholder:font-HelveticaNue outline-none"
                />
                <ActionButton
                  label="subscribe and save"
                  size="lg"
                  color="tertiary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
