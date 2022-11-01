import Image from "next/image";

const languages = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JAVASCRIPT",
  },
  {
    name: "TYPESCRIPT",
  },
];
const techStack = [
  {
    name: "REACT",
  },
  {
    name: "NODE",
  },
  {
    name: "EXPRESS",
  },
  {
    name: "REDUX",
  },
];

const AboutSection = ({ about = "" }) => {
  return (
    <div className="second-bg flex justify-center" id="about">
      <div className=" pt-[16.75rem] mx-4 dark:bg-[#1F2937E5] mt-[22rem] md:mt-0 dark:bg-none">
        <div>
          <p className="dark:text-white">ABOUT ME</p>
          <p className="font-bold text-[2.5rem] text-[#1f2037] dark:text-white">
            A bit about me.
          </p>
          <p className="text-[#4f4f4f] md:font-semibold max-w-none md:max-w-[40rem] text-sm md:text-lg pt-6 dark:text-white">
            {about
              ? about
              : "I try as much as possible to maintain knowledge and a keen understanding of design trends and practices and assisting in the implementation of new design innovations in all the projects I work on. I am always open for collaborations on projects. I also work effectively on solo projects on timely basis"}
          </p>

          <div className="flex mt-12">
            <div className="mr-6">
              <p className="font-bold text-2xl mb-6">Languages</p>
              {languages.map((lang, indx) => (
                <div
                  className="leading-8 flex items-center ml-2"
                  key={`langindex-${indx}`}
                >
                  <div className="mr-3">
                    <Image
                      src="/vectors/pointer.svg"
                      alt="red-pointer"
                      height={18}
                      width={18}
                    />
                  </div>
                  {lang.name}
                </div>
              ))}
            </div>
            <div className="ml-6">
              <p className="font-bold text-2xl mb-6">Technologies</p>
              {techStack.map((stack, indx) => (
                <div
                  className="leading-8 flex items-center ml-2"
                  key={`langindex-${indx}`}
                >
                  <div className="mr-3">
                    <Image
                      src="/vectors/pointer.svg"
                      alt="red-pointer"
                      height={18}
                      width={18}
                    />
                  </div>
                  {stack.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
