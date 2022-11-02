/*import Image from "next/image";

interface IProject {
  projectName?: string;
}

const Card = ({ projectName }: IProject) => {
  return (
    <div className="flex flex-col lg:flex mr-12 ">
      <div className="bg-white card dark:bg-[#1F2937]">
        <div className="flex items-center justify-center small-card">
          <Image src="/images/garden.png" alt="" width={88} height={88} />
        </div>

        <div className="pl-[2rem] pt-[2rem] ">
          <h2 className="text-2xl font-semibold dark:text-white">
            {projectName}
          </h2>
          <p className="pt-4 text-base font-normal colour dark:text-white">
            Fill your project brief here. It can be the outcome of the <br />
            project, or some success metrics, or a cheesy tagline.
          </p>
        </div>
        <div className="flex text-xs font-normal pb-4 pt-[1.375rem] pl-[2rem]">
          <span className="flex items-center justify-center">
            <p>Mobile App</p>
          </span>
          <span className="flex items-center justify-center ml-4">
            <p>Website</p>
          </span>
          <span className="flex items-center justify-center ml-4">
            <p>Sass</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card; */

import { ProjectCardTypes } from "../utils/types";
import Image from "next/image";

const ProjectCard = ({
  alt,
  src,
  text,
  desc,
  href,
  techArr,
}: ProjectCardTypes) => {
  return (
    <div className=" mr-6 border-2 border-[#E5E7EB] dark:border-[#313131]   dark:bg-[#1F2937] p-6 rounded-[2rem] ">
      <div className="mb-8">
        <a href={href} target="_blank" rel="noreferrer">
          <Image
            className="hover:scale-110 rounded-[2rem] transition ease-linear duration-300"
            alt={alt}
            src={src}
          />
        </a>
      </div>
      <p className="font-medium text-2xl mb-4">{text}</p>
      <p className="opacity-60 mb-4">{desc}</p>
      <div className="flex overflow-scroll">
        {techArr.map((text, index) => (
          <div
            className="bg-[#e5e4e4] dark:bg-transparent dark:border dark:border-[#4F4F4F] p-2 rounded-lg mr-2 text-sm"
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
