"use client"
import FAB from "@/components/FAB";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurCulture from "@/components/OurCulture";
import Subscribe from "@/components/Subscribe";
import WhatIsFungora from "@/components/WhatIsFungora";
import WhyFungora from "@/components/WhyFungora";
import Testimonials from "@/components/Testimonials";
import GrabNow from "@/components/GrabNow";
import Footer from "@/components/Footer";
// import localFont from 'next/font/local';

// const cooper = localFont({
//   src: [
//     {
//       path: './fonts/Cooper-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Cooper-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Cooper-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '/fonts/Cooper-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Cooper-ExtraBold.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Cooper-Black.woff2',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-cooper',
// });

export default function Home() {

  return (
    <section className="w-full">
      <div className="w-full max-w-[1920px] mx-auto relative overflow-hidden">
        <div className="hidden lg:flex fixed 3xl:absolute right-3 sm:right-5 top-[50vh] translate-y-[-50%] z-50"><FAB /></div>
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
