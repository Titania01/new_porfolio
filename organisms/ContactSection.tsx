/* eslint-disable react/no-unescaped-entities */

const Contact = ({ contact = "" }) => {
  return (
    <div id="contact">
      {contact ? (
        contact
      ) : (
        <div className="fourth-bg dark:bg-[#1F2937E5] dark:bg-none pt-[13.625rem]">
          <div className="flex items-center justify-between gradient pl-[3rem]">
            <div>
              <p className="mb-4 text-white">CONTACT</p>
              <p className="mb-4 text-white text-[2rem] font-bold">
                Let's Work Together
              </p>
              <div className="bg">
                <p className="text-[#1f2937] font-bold text-2xl">
                  kemianikulapo@gmail.com
                </p>
              </div>
            </div>
            <div className="enve">
              {/* <img src="/image/message.png" alt="" /> */}
            </div>
          </div>

          <div className="ml-[16.5rem] mr-[22.5rem] dark:text-white">
            <p className="pb-4">SOCIAL</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center pl-4 last-bg">
                  {/* <img
                src={`/image/${theme == `light` ? "github" : "sun-github"}.svg`}
                alt=""
              /> */}
                  <p className="pl-8 pr-[20rem]">Github</p>
                  {/* <RedArrow /> */}
                </div>
              </div>
              <div>
                <div className="flex items-center pl-4 last-bg">
                  {/* <img
                src={`/image/${theme == `light` ? "linkd" : "linkdin1"}.svg`}
              /> */}
                  <p className="pl-8 pr-[20rem]">Linkedin</p>
                  {/* <RedArrow /> */}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mt-10">
                <div>
                  <div className="flex items-center pl-4 last-bg">
                    {/* <img
                  src={`/image/${theme == `light` ? "pen" : "sun-pen"}.svg`}
                  alt=""
                /> */}
                    <p className="pl-8 pr-[20rem]">Github</p>
                    {/* <RedArrow /> */}
                  </div>
                </div>
                <div className="flex items-center pl-4 last-bg">
                  <div className="flex">
                    {/* <img
                  src={`/image/${theme == `light` ? "bird" : "sun-bird"}.svg`}
                  alt=""
                /> */}
                    <p className="pl-8 pr-[20rem]">Twitter</p>
                    {/* <RedArrow /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
