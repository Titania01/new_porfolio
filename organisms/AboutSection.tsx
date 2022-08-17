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
      <div className=" pt-[16.75rem] dark:bg-[#1F2937E5] dark:bg-none">
        <div>
          <p className="dark:text-white">ABOUT ME</p>
          <p className="font-bold text-[2.5rem] text-[#1f2037] dark:text-white">
            A bit about me.
          </p>
          <p className="text-[#4f4f4f] font-semibold lg:max-w-[40rem]  text-sm lg:text-lg pt-6 dark:text-white">
            {about
              ? about
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet nunc eget consectetur diam felis justo. Tempor ornare   nunc facilisi amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet sagittis non. Pharetra purus quam mauris malesuada etiam nullam. Ultrices nec in massa consequat erat iaculis leo."}
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
