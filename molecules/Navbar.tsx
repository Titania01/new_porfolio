import Image from "next/image";
import React from "react";
import { portfolioTheme, setTheme } from "../utils/entity";
import { scrollToElement } from "../utils/helpers";
import { IName } from "../utils/types";

const Navbar = ({ name, navLinks = Array(3).fill("link") }: IName) => {
  const theme = portfolioTheme.use();

  return (
    <nav className="lg:px-[13.5rem] md:px-[8rem] dark:bg-transparent dark:text-white flex items-center lg:justify-between h-10 lg:flex lg:items-center justify-between px-[2rem]">
      <h2 className="text-[#1f2937] dark:text-gray-200 invisible lg:visible md:visible font-bold">
        {name}
      </h2>
      <div className="flex items-center gap-8 lg:gap-8">
        {navLinks.map((link, linkIndex) => (
          <span
            onClick={() => scrollToElement(link)}
            key={`nav-link-${linkIndex}`}
            className="p-2 capitalize cursor-pointer select-none"
          >
            {link}
          </span>
        ))}
        <div className="" onClick={setTheme}>
          <Image
            className=""
            width={32}
            height={32}
            alt="theme-icon"
            src={`/vectors/${theme}--icon.svg`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
