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
          <div className="flex items-center justify-between gradient pl-2 md:pl-[3rem]">
            <div>
              <p className="text-lg text-[#E5E7EB] dark:text-[#1F2937]">
                CONTACT
              </p>
              <p className="mb-6 text-lg md:text-3xl dark:text-[#1F2937] text-white text-[2rem] font-bold">
                Let's Work Together
              </p>
              <div className="bg font-normal md:font-semibold">
                <a
                  href="mailto:adegbitebidmus@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="button w-[8rem] flex justify-center md:w-none">
                    <Button font text="adegbitebidmus@gmail.com" />
                  </div>
                </a>
              </div>
            </div>
            <div className="enve hidden md:flex">
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
              {/* <div className="flex flex-wrap gap-10">
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
              </div> */}
            </div>
          </div>

          <div className=" w-[80%] mx-auto dark:text-white">
            <p className="pb-4 textl">SOCIALS</p>
            <div className="grid grid-cols-none md:grid-cols-2 gap-8">
              <a
                href="https://github.com/Titania01"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center cursor-pointer px-4 last-bg">
                  <Image
                    src={`/vectors/${
                      theme == `light` ? "github" : "sun-github"
                    }.svg`}
                    alt="github"
                    height={32}
                    width={32}
                  />
                  <p className="pl-8">Github</p>
                  <span className="flex-grow" />
                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/badmus-adegbite-905747166/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center cursor-pointer px-4 last-bg">
                  <Image
                    alt="linkedIn"
                    height={32}
                    width={32}
                    src={`/vectors/${
                      theme == `light` ? "linkd" : "linkdin1"
                    }.svg`}
                  />
                  <p className="pl-8">Linkedin</p>
                  <span className="flex-grow" />

                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </a>

              <a
                href="https://codepen.io/titania01"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex cursor-pointer items-center px-4 last-bg">
                  <Image
                    src={`/vectors/${theme == `light` ? "pen" : "sun-pen"}.svg`}
                    alt="codepen"
                    height={32}
                    width={32}
                  />
                  <p className="pl-8">Codepen</p>
                  <span className="flex-grow" />

                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </a>

              <a
                href="https://twitter.com/BadmusAdegbite"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center px-4 last-bg">
                  <Image
                    src={`/vectors/${
                      theme == `light` ? "bird" : "sun-bird"
                    }.svg`}
                    alt="twiter"
                    height={32}
                    width={32}
                  />
                  <p className="pl-8">Twitter</p>
                  <span className="flex-grow" />

                  <Image
                    src="/vectors/red-arr.svg"
                    alt="red"
                    width={18}
                    height={18}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-32 text-center">
            <p className=" dark:text-white">
              Copyright © 2022 <b>BADMUS ADEGBITE</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
