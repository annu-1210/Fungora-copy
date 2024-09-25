import React from "react";
import { FaAmazon } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function FAB() {
  const FabLinks = [
    {
      id: 1,
      icon: <FaAmazon size={20} />,
    },
    {
      id: 2,
      icon: <FaFacebookF size={20} />,
    },
    {
      id: 3,
      icon: <FaInstagram size={20} />,
    },
    {
      id: 4,
      icon: <FaTiktok size={20} />,
    },
  ];

  return (
    <div className="gap-6 z-50 flex transition-all duration-200 ease-in-out lg:flex-col max-w-[232px] max-h-[232px]">
      {FabLinks.map((item) => {
        return (
          <a
            href="/"
            key={item.id}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all bg-secondary lg:bg-FabLinksBackground text-white lg:text-black"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}

export default FAB;
