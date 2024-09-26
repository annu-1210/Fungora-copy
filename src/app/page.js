"use client"
import FAB from "@/components/FAB";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurCulture from "@/components/OurCulture";
import Subscribe from "@/components/Subscribe";
import WhatIsFungora from "@/components/WhatIsFungora";
import WhyFungora from "@/components/WhyFungora";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1920px] mx-auto relative ">
        <div className="hidden lg:flex fixed 3xl:absolute right-3 sm:right-5 top-[50vh] translate-y-[-50%] z-50"><FAB /></div>
        <Header />
        <Hero />
        <WhatIsFungora />
        <WhyFungora />
        <OurCulture />
        <Subscribe/>
        <Testimonials/>
      </div>
    </section>
  );
}
