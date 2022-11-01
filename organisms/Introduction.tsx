import { navData } from "../atoms/data";
import Navbar from "../molecules/Navbar";
import Image from "next/image";
import { portfolioTheme } from "../utils/entity";
import UpArrow from "../public/vectors/UpArrow";
import DownArrow from "../public/vectors/DownArrow";
import Button from "../atoms/Button";

const Intro = () => {
  const theme = portfolioTheme.use();
  return (
    <div className="first-bg dark:bg-[#1F2937E5] dark:text-[#F9FAFB]">
      <Navbar {...navData} />
      <div className="dark:bg-[#1F2937E5] begee1">
        <div className="flex  mx-auto flex-col-reverse md:flex-row md:justify-between container mt-[8.5rem] justify-between items-center">
          <div className="">
            <div className="flex mx-2">
              <p className="text-5xl font-medium leading-snug">Hi I&apos;m</p>
              <Image
                src="/vectors/hand.svg"
                width={50}
                height={50}
                alt="hand-meme"
                className=""
              />
            </div>
            <h2 className="text-3xl md:text-5xl mx-2 font-bold text-[#1F2937] leading-snug">
              Badmus Adegbite
            </h2>
            <p className="mx-2 md:text-xl max-w-xl mt-8 mb-12">
              Apt and resourceful Frontend Software Engineer with 2 years of
              experience designing, developing, and managing apps and internal
              frameworks. Specializes in ReactJS, Next Js, Typescript, and
              responsive design. An excellent team player and an ingenious
              thinker. I lead an adventurous lifestyle when not working.
            </p>

            <div className="mx-2 flex md:flex-row flex-col mb-[5rem] md:mb-0 md:gap-3">
              <a href="#contact" className="w-[235px]">
                <Button
                  icon
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
                  neutral
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
          </div>
          <div className="profile-pic">
            <Image
              src="https://media1.giphy.com/media/u2pmTWUi0MXjyrMaVj/giphy.gif?cid=ecf05e472hvtvsxcati9968n75dur41zqfpcw7t4iov2gvo3&rid=giphy.gif&ct=g"
              alt="titania01"
              height="350"
              width="350"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
