import React from "react";
import Image from "next/image";

function WhyFungora() {
  return (
    <section>
      <div className="relative z-0 bg-cover bg-teritary bg-texture-background bg-blend-multiply">
        <div className="relative z-0 px-[21px] md:px-6 xl:px-0 m-auto xl:max-w-[1000px] 2xl:max-w-[1211px] pt-10 md:pt-20 lg:pt-24 xl:pt-24 pb-10 lg:pb-24 xl:pb-32">
          <video
            width="600"
            height="400"
            controls
            autoPlay
            muted
            loop
            className="rounded-[24px] transition-all duration-300 sm:rounded-[52px] border-[5px] mx-auto border-secondary object-cover w-full h-full aspect-video"
            poster="/poster.png"
          >
            <source src="/fungora-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src="/images/why-fungora-mushroom.png"
            alt="mushroom-img"
            width={80}
            height={87}
            className="max-w-[20px] md:max-w-[50px] 3xl:max-w-full bottom-[81%] sm:bottom-[21%] absolute left-[60%] sm:left-[-3%]"
          />
          <Image
            src="/images/why-fungora-shell.png"
            alt="shell-img"
            width={66}
            height={66}
            className="absolute z-30 duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 md:opacity-0 md:group-hover:opacity-100 max-w-[40px] md:max-w-full"
          />
        </div>
        <Image
          src="/images/mushroom-bg-2.avif"
          alt="mushroom-img"
          width={1000}
          height={700}
          className="hidden md:block bottom-[-8%] md:bottom-[-80%] xl:bottom-[-75%] 3xl:bottom-[-80%] z-[-1] absolute right-0 md:max-w-[500px] lg:max-w-[700px] xl:max-w-[750px] 2xl:max-w-[900px]  3xl:max-w-full"
        />
      </div>
    </section>
  );
}

export default WhyFungora;
