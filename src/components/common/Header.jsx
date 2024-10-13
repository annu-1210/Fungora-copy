import React, { useState } from "react";
import Image from "next/image";
import ActionButton from "./ActionButton";
import { RxCross2 } from "react-icons/rx";
import { Logo } from "./Icon";
import { Menu } from "./Icon";
import { navLinks } from "./Helper";
import HeaderMobile from "./HeaderMobile";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full px-4 pt-7 mx-auto lg:pt-[30px] 3xl:pt-[33px] z-50 ">
      <Image
        src="/images/avif/navbar-bg.avif"
        width={1440}
        height={20}
        alt=""
        className="w-full max-w-[1920px] top-0 lg:top-[-70%] left-0 absolute z-0"
      />
      <div className="relative z-20 flex items-center justify-between  mx-auto max-w-[1440px]">
        <a href="/" className="flex items-center gap-1 w-[152px] h-[42px]">
          <Logo width={152} height={42} />
        </a>
        <div className="items-center hidden gap-8 lg:flex">
          {navLinks.map((item) => {
            return (
              <a
                key={item.name}
                href={item.link}
                className="nav-links underline-animation hover:after:animate-underline-scale"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="hidden sm:flex">
            <ActionButton label="Shop now" color="primary" size="sm" />
          </div>
          <div className="flex lg:hidden" onClick={toggleNavbar}>
            {!isOpen ? <Menu width={30} height={10} /> : <RxCross2 size={20} />}
          </div>
        </div>
      </div>
      {isOpen && <HeaderMobile isOpen={isOpen} />}
    </nav>
  );
}

export default Header;
