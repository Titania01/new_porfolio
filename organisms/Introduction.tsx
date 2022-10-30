import { navData } from "../atoms/data";
import Navbar from "../molecules/Navbar";
import Image from "next/image";
import { portfolioTheme } from "../utils/entity";
import UpArrow from "../public/vectors/UpArrow";
import DownArrow from "../public/vectors/DownArrow";
import Button from "../atoms/Button";
import hands from "../public/vectors/hand.svg";

const Intro = () => {
  const theme = portfolioTheme.use();
  return (
    <div className="first-bg dark:bg-[#1F2937E5] dark:text-[#F9FAFB]">
      <Navbar {...navData} />
      <div className="dark:bg-[#1F2937E5] begee1">
        <div className="flex mx-auto container mt-[8.5rem] justify-between items-center">
          <div className="">
            <div className="flex">
              <p className="text-5xl font-medium leading-snug">Hi I&apos;m</p>
              <Image
                src="/vectors/hand.svg"
                width={50}
                height={50}
                alt="hand-meme"
              />
            </div>
            <h2 className="text-5xl font-bold text-[#1F2937] leading-snug">
              Badmus Adegbite
            </h2>
            <p className="text-xl  max-w-xl mt-8 mb-12">
              Apt and resourceful Frontend Software Engineer with 2 years of
              experience designing, developing, and managing apps and internal
              frameworks. Specializes in ReactJS, Next Js, Typescript, and
              responsive design. An excellent team player and an ingenious
              thinker. I lead an adventurous lifestyle when not working.
            </p>

            <div className="flex gap-3">
              <a href="#contact" className="w-[235px]">
                <Button
                  icon
                  bg
                  darkIcon={
                    theme === "light" ? (
                      <UpArrow />
                    ) : (
                      <UpArrow color="#F9FAFB" />
                    )
                  }
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
            <Image
              src="https://media1.giphy.com/media/u2pmTWUi0MXjyrMaVj/giphy.gif?cid=ecf05e472hvtvsxcati9968n75dur41zqfpcw7t4iov2gvo3&rid=giphy.gif&ct=g"
              alt="titania01"
              height="400"
              width="400"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
