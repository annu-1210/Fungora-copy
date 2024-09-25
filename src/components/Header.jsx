// "use client"
import React, { useState } from "react";
import Image from "next/image";
import ActionButton from "./ActionButton";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import FAB from "./FAB";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    {
      name: "About us",
    },
    {
      name: "What’s Fungora",
    },
    {
      name: "Why Fungora",
    },
    {
      name: "Our Culture",
    },
  ];
  return (
    <nav className="absolute top-0 w-full px-4 pt-7 mx-auto lg:pt-[30px] 3xl:pt-[33px] z-20 ">
      <Image
        src="/images/navbar-bg.avif"
        width={1440}
        height={20}
        alt=""
        className="w-full max-w-[1920px] top-0 lg:top-[-70%] left-0 absolute z-0"
      />
      <div className="relative z-20 flex items-center justify-between  mx-auto max-w-[1440px]">
        <a href="/" className="flex items-center gap-1">
          <Image
            src="/images/fungora-logo.png"
            alt="fungora-logo"
            width={38}
            height={42}
          />
          <p className="text-xl font-medium text-secondary">FUNGORA</p>
        </a>
        <div className="items-center hidden gap-8 lg:flex">
          {navLinks.map((item) => {
            return (
              <a
                key={item.name}
                href="/"
                className="nav-links underline-animation"
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
            {!isOpen ? <CiMenuFries size={30} /> : <RxCross2 size={20} />}
          </div>
        </div>
      </div>
      {isOpen && (
        <aside className="flex justify-start w-full py-4 lg:hidden ">
          <div className="flex gap-4 h-[calc(100vh-102px)] sm:h-[calc(100vh-110px)] backdrop-blur-sm flex-col items-center justify-between w-full rounded-[16px] p-4 bg-gradient-to-b from-purplePrimary to-purpleSecondary relative">
            <Image
              src="/images/star.png"
              alt="star"
              width={25}
              height={36}
              className="max-w-[30px] md:max-w-10 lg:max-w-full absolute right-24 top-3 w-fit h-fit"
            />
            <div className="relative z-40 flex flex-col items-center w-full gap-4 pt-9">
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

            <div className="flex flex-col w-full gap-5 items-center">
              <ActionButton label="Shop now" color="secondary" size="sm" />
              <FAB />
            </div>
          </div>
        </aside>
      )}
    </nav>
  );
}

export default Header;