import React from "react";
import Image from "next/image";

function WhyFungora() {
  return (
    <section id="whyFungora">
      <div className="relative z-10 bg-tertiary ">
        <div
          className="relative z-10 px-[21px] md:px-6 xl:px-0 m-auto xl:max-w-[1000px] 2xl:max-w-[1211px] pt-10 md:pt-20 lg:pt-24 xl:pt-24 pb-10 lg:pb-24 xl:pb-32"
          style={{ objectFit: "cover" }}
        >
          <video
            controls
            muted
            loop
            objectFit
            className="rounded-[24px] transition-all duration-300 sm:rounded-[52px] border-[5px] mx-auto border-secondary object-cover w-full h-full aspect-video z-30"
            poster="/images/png/poster.png"
            style={{ objectFit: "cover" }}
          >
            <source src="/fungora-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src="/images/png/why-fungora-mushroom.png"
            alt="mushroom-img"
            width={80}
            height={87}
            className="max-w-[20px] md:max-w-[50px] 3xl:max-w-full bottom-[81%] sm:bottom-[21%] absolute left-[60%] sm:left-[-3%]"
          />
        </div>
        <Image
          src="/images/avif/mushroom-bg-2.avif"
          alt="mushroom-img"
          width={1000}
          height={700}
          className="hidden md:block bottom-[-8%] md:bottom-[-80%] xl:bottom-[-75%] 3xl:bottom-[-80%] z-[-1] absolute right-0 md:max-w-[500px] lg:max-w-[700px] xl:max-w-[750px] 2xl:max-w-[900px] 3xl:max-w-full"
        />
      </div>
    </section>
  );
}

export default WhyFungora;
