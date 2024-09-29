import React from "react";
import { FaAmazon } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Icon from "./Icon";

function FAB() {
  const FabLinks = [
    {
      id: 1,
      icon: <FaAmazon />,
    },
    {
      id: 2,
      icon: <FaFacebookF />,
    },
    {
      id: 3,
      icon: <FaInstagram />,
    },
    {
      id: 4,
      icon: <FaTiktok />,
    },
  ];

  return (
    <div className="gap-6 z-50 flex transition-all duration-200 ease-in-out lg:flex-col max-w-[232px] max-h-[232px]">
      {FabLinks.map((item) => {
        return (
          <Icon
            key={item.id}
            className="text-white bg-secondary lg:bg-FabLinksBackground lg:text-secondary"
          >
            {item.icon}
          </Icon>
        );
      })}
    </div>
  );
}

export default FAB;
