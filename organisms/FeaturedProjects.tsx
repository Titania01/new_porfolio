import Image from "next/image";
import React, { Fragment, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Card from "../molecules/ProjectCard";

import karasey from "../public/images/karaseyPic.png";
import koprative from "../public/images/koprativePic.png";
import hayak from "../public/images/hayakPic.png";
import kovid from "../public/images/kovidPic.png";
import lawparlance from "../public/images/lawparlancePic.png";
import admindashboard from "../public/images/admindashboardPic.png";
import ProjectCard from "../molecules/ProjectCard";

const projectArray = [
  {
    img: karasey,
    alt: "project-pic",
    title: "Karasey",
    desc: "karasey is a research awareness website that fund scientific researches and other academic research",
    techStack: [
      "NextJs",
      "TailwindCss",
      "Node",
      "Firebase",
      "Express",
      "MongoDB",
    ],
    href: "https://karasey.com/en",
  },
  {
    alt: "project-pic",
    title: "Koprative",
    img: koprative,
    desc: "Koprative is a cooperative society management application that helps financial institutions manage their members’ information and financial transactions and records. ",
    techStack: ["React", "Typescript", "Redux"],
    href: "",
  },
  {
    img: hayak,
    alt: "project-pic",
    title: "Hayak",
    desc: "hayak is a Saudi Arabian website where people can book a tour to traditional and historical places",
    techStack: ["NextJs", "TailwindCss", "Node", "Typescript"],
    href: "https://hayak.sa/en",
  },
  {
    img: lawparlance,
    alt: "project-pic",
    title: "Law Parlance",
    desc: "Law Parlance is legal website that contains a lot of e-books on legal practice, resources, and notes. You can read, take notes and download any resources on it",
    techStack: ["ReactJs", "Paas", "Node"],
    href: "https://www.lawparlance.com/",
  },
  {
    img: kovid,
    alt: "project-pic",
    title: "Kovid Tracker",
    desc: "This is a pet project that gives all data about menace of Covid-19 in all 36 states including FCT in Nigeria",
    techStack: ["React", "Typescript", "Redux"],
    href: "https://vermillion-trifle-231875.netlify.app/",
  },
  {
    img: admindashboard,
    alt: "project-pic",
    title: "Admin Dashboard",
    desc: "This is a side project to hone my skill on styling with MUI and dashboard layout with react-router-dom",
    techStack: ["React", "ContextAPI", "MUI", "Git"],
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const FeaturedProjects = ({ work = "" }) => {
  const carouselEl = useRef<any>(null);

  return (
    <div
      className="md:pt-[12.9375rem] third-bg dark:bg-[#1F2937E5] pt-[20rem] dark:bg-none "
      id="project"
    >
      {work ? (
        work
      ) : (
        <div className="text-lg mx-auto w-[90%] font-normal" id="work">
          <p className="text-[#1f2937] text-base dark:text-white">
            FEATURED PROJECTS
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="font-semibold  md:font-bold text-base md:text-[2.5rem] dark:text-white text-[#1f2937] pr-8">
                Stuffs I&apos;ve Worked On
              </h2>
              <div className="hidden md:flex">
                <Image
                  src="/images/file.png"
                  width={32}
                  height={32}
                  alt="file"
                />
              </div>
            </div>
            <div className="flex items-center md:pr-[6.75rem]">
              <div
                className="mr-6 arrow"
                onClick={() => carouselEl.current?.previous()}
              >
                <Image
                  src="/vectors/left-arr.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </div>
              <div className="arrow" onClick={() => carouselEl.current?.next()}>
                <Image
                  src="/vectors/right-arr.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16 mx-auto w-[90%]">
        <Carousel
          ref={carouselEl}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="margin-right"
          showDots={false}
          arrows={false}
          slidesToSlide={0}
          ssr={true}
          deviceType="laptop"
        >
          {projectArray.map(
            ({ title, desc, alt, img, techStack, href }, itemIndex) => (
              <Fragment key={`project-index-${itemIndex}`}>
                <ProjectCard
                  alt={alt}
                  text={title}
                  desc={desc}
                  src={img}
                  href={href}
                  techArr={techStack}
                />
              </Fragment>
            )
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;
