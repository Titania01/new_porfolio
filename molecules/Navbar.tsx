import Image from "next/image";
import React from "react";
import { portfolioTheme, setTheme } from "../utils/entity";
import { scrollToElement } from "../utils/helpers";
import { IName } from "../utils/types";

const Navbar = ({ name, navLinks = Array(3).fill("link") }: IName) => {
  const theme = portfolioTheme.use();

  return (
    <nav className="relative mx-auto container p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[#1f2937] dark:text-gray-200 cursor-pointer font-bold">
          {name}
        </h2>
        <div className="hidden md:flex  space-x-6">
          {navLinks.map((link, linkIndex) => (
            <span
              onClick={() => scrollToElement(link)}
              key={`nav-link-${linkIndex}`}
              className="p-2 capitalize cursor-pointer hover:-rotate-12 select-none"
            >
              {link}
            </span>
          ))}
        </div>
        <div className="p-2 cursor-pointer" onClick={setTheme}>
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
