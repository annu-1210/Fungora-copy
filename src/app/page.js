"use client";
import FAB from "@/components/common/FAB";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import OurCulture from "@/components/OurCulture";
import Subscribe from "@/components/Subscribe";
import WhatIsFungora from "@/components/WhatIsFungora";
import WhyFungora from "@/components/WhyFungora";
import Testimonials from "@/components/Testimonials";
import GrabNow from "@/components/GrabNow";
import Footer from "@/components/common/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1920px] mx-auto relative overflow-hidden scroll-smooth">
        <div className="absolute top-0 left-0 w-full h-full z-[99999] pointer-events-none">
          <Image
            src="/images/png/Noise-Texture.webp"
            alt="Noise & Texture-img"
            layout="fill"
            objectFit="cover"
            priority
            className="!pointer-events-none "
          />
        </div>

        <div className="hidden lg:flex fixed 3xl:absolute right-3 sm:right-5 top-[50vh] translate-y-[-50%] z-50">
          <FAB />
        </div>
        <Header />
        <Hero />
        <WhatIsFungora />
        <WhyFungora />
        <OurCulture />
        <Subscribe />
        <Testimonials />
        <GrabNow />
        <Footer />
      </div>
    </section>
  );
}
