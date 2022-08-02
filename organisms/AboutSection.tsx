const AboutSection = ({ about = "" }) => {
  return (
    <div className="second-bg" id="about">
      <div className="pl-[33.1875rem] pt-[16.75rem] dark:bg-[#1F2937E5] dark:bg-none">
        <div>
          <p className="dark:text-white">ABOUT ME</p>
          <p className="font-bold text-[2.5rem] text-[#1f2037] dark:text-white">
            A bit about me.
          </p>
          <p className="text-[#4f4f4f] font-semibold max-w-[40rem] text-lg pt-6 dark:text-white">
            {about
              ? about
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet nunc eget consectetur diam felis justo. Tempor ornare   nunc facilisi amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet sagittis non. Pharetra purus quam mauris malesuada etiam nullam. Ultrices nec in massa consequat erat iaculis leo."}
          </p>

          <div className="grid grid-cols-4 mt-12 dark:text-white">
            <div className="space-y">
              <h2 className="text-[#1f2937] dark:text-white font-bold text-[1.5rem]">
                Languages
              </h2>
              <div className="flex items-center pt-4">
                {/* <Pointer /> */}
                <p className="ml-8">HTML</p>
              </div>
              <div className="flex items-center pt-4">
                {/* <Pointer /> */}
                <p className="ml-8">CSS</p>
              </div>
              <div className="flex items-center pt-4">
                {/* <Pointer /> */}
                <p className="ml-8">JAVASCRIPT</p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-[#1f2937] dark:text-white font-bold text-[1.5rem]">
                  Languages
                </h2>
                <div className="flex items-center pt-4">
                  {/* <Pointer /> */}
                  <p className="ml-8">HTML</p>
                </div>
                <div className="flex items-center pt-4">
                  {/* <Pointer /> */}
                  <p className="ml-8">CSS</p>
                </div>
                <div className="flex items-center pt-4">
                  {/* <Pointer /> */}
                  <p className="ml-8">JAVASCRIPT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
