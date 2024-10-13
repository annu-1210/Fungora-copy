import React from "react";
import SocialIcon from "./Social_Icon";
import { FabLinks } from "./Helper";

function FAB() {
  return (
    <div className="gap-6 z-50 flex transition-all duration-200 ease-in-out lg:flex-col max-w-[232px] max-h-[232px]">
      {FabLinks.map((item) => {
        return (
          <SocialIcon
            key={item.id}
            className="text-white bg-secondary lg:bg-FabLinks-Background lg:text-secondary"
          >
            {item.icon}
          </SocialIcon>
        );
      })}
    </div>
  );
}

export default FAB;
