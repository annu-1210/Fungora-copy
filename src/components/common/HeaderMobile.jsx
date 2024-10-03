import React from "react";
import FAB from "./FAB";
import { navLinks } from "./Helper";
import Image from "next/image";
import ActionButton from "./ActionButton";

function HeaderMobile({ isOpen }) {
  return (
    <>
      <aside
        className={`z-50 flex justify-start w-full py-4 lg:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex gap-4 h-[calc(100vh-102px)] sm:h-[calc(100vh-110px)] backdrop-blur-sm flex-col items-center justify-between w-full rounded-[16px] p-4 bg-custom-gradient relative">
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
                  href={item.link}
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

export default HeaderMobile;
