import React from "react";
import Icon from "./Icon";
import { FabLinks } from "./Helper";

function FAB() {

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
