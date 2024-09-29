import React from "react";
import FAB from "./common/FAB";
import { navLinks } from "./common/Helper";
import Image from "next/image";
import ActionButton from "./common/ActionButton";

function MobileHeader() {
  return (
    <>
      <aside className="z-50 flex justify-start w-full py-4 lg:hidden">
        <div className="flex gap-4 h-[calc(100vh-102px)] sm:h-[calc(100vh-110px)] backdrop-blur-sm flex-col items-center justify-between w-full rounded-[16px] p-4 bg-gradient-to-b from-purplePrimary to-purpleSecondary relative">
          <Image
            src="/images/png/star.png"
            alt="star"
            width={25}
            height={36}
            className="max-w-[30px] md:max-w-10 lg:max-w-full absolute right-24 top-3 w-fit h-fit"
          />
          <div className="relative z-50 flex flex-col items-center w-full gap-4 pt-9">
            {navLinks.map((item) => {
              return (
                <a
                  key={item.name}
                  href="/"
                  className="nav-links underline-animation "
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="z-50 flex flex-col items-center w-full gap-5">
            <ActionButton label="Shop now" color="secondary" size="md" />
            <FAB />
          </div>
        </div>
      </aside>
    </>
  );
}

export default MobileHeader;
