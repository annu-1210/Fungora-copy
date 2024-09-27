import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  const currentYear = new Date().getFullYear();

  const Heading = "Newsletter";

  const Para =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";

  const FooterData = [
    {
      id: 1,
      title: "Overview",
      list: ["Home", "About", "Fungora", "Shop", "Product", "Contact us"],
    },
    {
      id: 2,
      title: "Resources",
      list: [
        " Customer services",
        "Track my order",
        "Delivery & Shipping info",
        "Returns Policy",
        "Fungora Store",
        "FAQ’s",
      ],
    },
  ];
  return (
    <footer className="relative bg-cover bg-tertiary bg-texture-background bg-blend-multiply">
      <div className="relative px-4 py-4 mx-auto overflow-hidden max-w-[1196px] ">
        <div className="flex flex-wrap justify-between gap-4 md:justify-center lg:justify-between">
          <div className="flex justify-between w-full max-w-[400px] lg:max-w-auto gap-20">
            {FooterData.map((data) => (
              <div key={data.id} className="">
                <h3 className="text-secondary text-[22px] font-CooperBlack mb-5">
                  {data.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {data.list.map((item, index) => (
                    <a key={index} href="/" className="transition-all duration-300 ease-in-out footer-links hover:scale-105 after:duration-300 ">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[380px] md:max-w-[600px] lg:max-w-[380px]">
            <h3 className="text-secondary text-[22px] font-CooperBlack">
              {Heading}
            </h3>
            <form className="flex items-center justify-between px-4 md:px-5 border border-secondary rounded-full py-3.5 w-full mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pr-3 !bg-transparent text-base md:text-lg lg:text-xl text-secondary font-HelveticaNue placeholder:text-base placeholder:md:text-lg placeholder:lg:text-xl placeholder:text-secondary placeholder:font-HelveticaNue outline-none"
              />
              <button className="" type="submit">
                <IoIosArrowRoundForward size={20} />
              </button>
            </form>
            <p className="mt-4 footer-links">{Para}</p>
            <div className="flex items-center gap-6 mt-4">buttons</div>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-4 pb-1 mt-6 border-t xsm:flex-row xsm:justify-between md:pt-4 md:mt-14 footer-links border-footerBorder">
          <p>&copy; {currentYear} Fungora, All rights reserved.</p>
          <p>Disclaimer • Terms of use</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
