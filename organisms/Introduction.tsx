import { navData } from "../atoms/data";
import Navbar from "../molecules/Navbar";
import Avatar from "../atoms/Avatar";
import Image from "next/image";
import { portfolioTheme } from "../utils/entity";
import UpArrow from "../public/vectors/UpArrow";
import DownArrow from "../public/vectors/DownArrow";
import Button from "../atoms/Button";
import profilePic from "../public/image/profilePic.jpg";
// import Slidebar from "../molecules/Slidebar";

const Intro = () => {
  const theme = portfolioTheme.use();
  return (
    <div className="first-bg">
      <Navbar {...navData} />
      <div className="dark:bg-[#1F2937E5] dark:bg-none begee1">
        <div className="flex mx-auto container justify-between items-center">
          <div className="">
            <p className="text-base font-medium leading-snug ml-[12rem]">
              Hi I&apos;m
            </p>
            <h2 className="text-5xl font-bold text-[#1F2937] leading-snug">
              Badmus Adegbite
            </h2>
            <p className="text-xl max-w-lg mt-8 mb-12">
              Apt and resourceful Frontend software engineer with 2 years of
              experience designing, developing, and managing apps and internal
              frameworks. Specializes in ReactJS, Next Js, Typescript, and
              responsive design. An excellent team player and an ingenious
              thinker. I lead an adventurous lifestyle when not working.
            </p>

            <div className="flex">
              <a href="#contact" className="w-[235px]">
                <Button
                  icon
                  darkIcon={
                    theme === "light" ? (
                      <UpArrow />
                    ) : (
                      <UpArrow color="#1F2937" />
                    )
                  }
                  black
                  text="Let's work together"
                  font={false}
                />
              </a>
              <a href="#project" className="w-[260px]">
                <Button
                  icon
                  bg
                  darkIcon={
                    theme === "light" ? (
                      <DownArrow />
                    ) : (
                      <DownArrow color="#F9FAFB" />
                    )
                  }
                  text="See some of my works"
                  font={false}
                />
              </a>
            </div>

            {/* <div className="lg:flex lg:flex-row flex-col md:justify-center md:items-center md:flex pt-5">
              <div className="mr-10 deep-blue dark:bg-white">
                <p className="mr-4 dark:text-[#1f2937]">
                  Let&apos;s work together
                </p>
                <Image
                  src="/vectors/arr-right.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
              <div className="white">
                <p className="mr-4">See some of my works</p>
                <Image
                  src="/vectors/arr-down.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className="profile-pic">
            <Image src={profilePic} className="rounded-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
