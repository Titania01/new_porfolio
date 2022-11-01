import Image from "next/image";
import React, { useState } from "react";
import { portfolioTheme, setTheme } from "../utils/entity";
import { scrollToElement } from "../utils/helpers";
import { IName } from "../utils/types";
import styles from "../styles/UtilsStyles/Home.module.scss";

const Navbar = ({ name, navLinks = Array(3).fill("link") }: IName) => {
  const theme = portfolioTheme.use();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative dark:bg-[#1F2937E5] mx-auto container p-6">
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
          {/* <Image
            className=""
            width={32}
            height={32}
            alt="theme-icon"
            src={`/vectors/${theme}--icon.svg`}
          /> */}
        </div>
        <button
          className={`block ${styles.hamburger} ${
            isOpen && styles.open
          } md:hidden focus:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`${styles.hamburgerTop} ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          ></span>
          <span
            className={`${styles.hamburgerMiddle} ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          ></span>
          <span
            className={`${styles.hamburgerBottom} ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "mr-0" : "-mr-64"
        } md:hidden right-6 rounded-md top-0 space-y-6 flex flex-col items-center mt-20 fixed ${
          theme === "light" ? "bg-white" : "bg-footer"
        }  max-w-md font-bold p-5 px-8 z-10 transition-all duration-500 drop-shadow-sm`}
      >
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#project" onClick={() => setIsOpen(false)}>
          Work
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
