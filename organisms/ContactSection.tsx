/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { portfolioTheme } from "../utils/entity";
import Image from "next/image";
import Button from "../atoms/Button";

const contacts = [
  {
    logo: "/vectors/github.svg",
    darkLogo: "/vectors/sun-github.svg",
    name: "Github",
    icon: "/vectors/red-arr.svg",
  },
  {
    logo: "/vectors/linkd.svg",
    darkLogo: "/vectors/linkdin1.svg",
    name: "Linkedin",
    icon: "/vectors/red-arr.svg",
  },
  {
    logo: "/vectors/pen.svg",
    darkLogo: "/vectors/sun-pen.svg",
    name: "Codepen",
    icon: "/vectors/red-arr.svg",
  },
  {
    logo: "/vectors/bird.svg",
    darkLogo: "/vectors/sun-bird.svg",
    name: "Twitter",
    icon: "/vectors/red-arr.svg",
  },
];

const Contact = ({ contact = "" }) => {
  const theme = portfolioTheme.use();
  return (
    <div id="contact">
      {contact ? (
        contact
      ) : (
        <div className="fourth-bg dark:bg-[#1F2937E5] dark:bg-none pt-28">
          <div className="flex items-center justify-between gradient lg:pl-[3rem]">
            <div>
              <p className="text-lg text-[#E5E7EB] dark:text-[#1F2937]">
                CONTACT
              </p>
              <p className="mb-6 text-3xl dark:text-[#1F2937] text-white text-[2rem] font-bold">
                Let's Work Together
              </p>
              <div className="bg">
                <Button font size text="adegbitebidmus@gmail.com" />
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
          </div>
          <div className="mx-[12.94rem]">
            <div className="p-12">
              <p className="text-lg mb-2">SOCIALS</p>
              <div className="flex flex-wrap gap-10">
                {contacts.map((contact: any, index: number) => (
                  <a
                    className="w-[36.75rem]"
                    href={`${
                      index === 0
                        ? "https://github.com/Titania01"
                        : index === 1
                        ? "https://www.linkedin.com/in/badmus-adegbite-905747166/"
                        : index === 2
                        ? "https://codepen.io/titania01"
                        : "https://twitter.com/BadmusAdegbite"
                    }`}
                    rel="noreferrer"
                    target="_blank"
                    key={`index-${index}`}
                  >
                    <Button
                      text={contact.name}
                      logo
                      icon
                      width
                      font
                      size
                      darkLogo={
                        theme === "light" ? (
                          <Image src={contact.logo} width={18} height={18} />
                        ) : (
                          <Image
                            src={contact.darkLogo}
                            width={18}
                            height={18}
                          />
                        )
                      }
                      darkIcon={
                        <Image src={contact.icon} width={18} height={18} />
                      }
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
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
