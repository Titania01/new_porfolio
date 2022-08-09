/* eslint-disable react/no-unescaped-entities */
import { portfolioTheme, setTheme } from "../utils/entity";
import Image from "next/image";

const Contact = ({ contact = "" }) => {
  const theme = portfolioTheme.use();
  return (
    <div id="contact">
      {contact ? (
        contact
      ) : (
        <div className="fourth-bg dark:bg-[#1F2937E5] dark:bg-none pt-[13.625rem]">
          {/* <div className="flex items-center justify-between gradient lg:pl-[3rem]">
            <div>
              <p className="mb-4 text-white">CONTACT</p>
              <p className="mb-4 text-white text-[2rem] font-bold">
                Let's Work Together
              </p>
              <div className="bg">
                <p className="text-[#1f2937] font-bold text-2xl">
                  adegbitebidmus@gmail.com
                </p>
              </div>
            </div>
            <div className="enve">
              <Image
                src="/images/message.png"
                alt="ms"
                height={88}
                width={88}
              />
            </div>
          </div> */}

          {/* <div className="ml-[16.5rem] mr-[22.5rem] dark:text-white">
            <p className="pb-4">SOCIAL</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center pl-4 last-bg">
                  <Image
                    src={`/vectors/${
                      theme == `light` ? "github" : "sun-github"
                    }.svg`}
                    alt="github"
                    height={32}
                    width={32}
                  />
                  <p className="pl-8 pr-[20rem]">Github</p>
                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center pl-4 last-bg">
                  <Image
                    alt="linkedIn"
                    height={32}
                    width={32}
                    src={`/vectors/${
                      theme == `light` ? "linkd" : "linkdin1"
                    }.svg`}
                  />
                  <p className="pl-8 pr-[20rem]">Linkedin</p>
                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mt-10">
                <div>
                  <div className="flex items-center pl-4 last-bg">
                    <Image
                      src={`/vectors/${
                        theme == `light` ? "pen" : "sun-pen"
                      }.svg`}
                      alt="codepen"
                      height={32}
                      width={32}
                    />
                    <p className="pl-8 pr-[20rem]">Codepen</p>
                    <Image
                      src="/vectors/red-arr.svg"
                      alt="red"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
                <div className="flex items-center pl-4 last-bg">
                  <div className="flex">
                    <Image
                      src={`/vectors/${
                        theme == `light` ? "bird" : "sun-bird"
                      }.svg`}
                      alt="twiter"
                      height={32}
                      width={32}
                    />
                    <p className="pl-8 pr-[20rem]">Twitter</p>
                    <Image
                      src="/vectors/red-arr.svg"
                      alt="red"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="mt-32 mb-4 text-center last bg-none">
            <p className=" dark:text-white">
              Copyright © 2021 <b>KEMI ANIKULAPO</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
