import Image from "next/image";
import React, { Fragment, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../molecules/ProjectCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FeaturedProjects = ({ work = "" }) => {
  const carouselEl = useRef<any>(null);

  const projectNames = "Testify,Weather Forecast,Zonely,Fruitfy,Lasana".split(
    ","
  );

  return (
    <div className="pl-[12.9375rem] pt-[12.9375rem] pr-[6.4375rem] third-bg dark:bg-[#1F2937E5] dark:bg-none ">
      {work ? (
        work
      ) : (
        <div className="text-lg font-normal" id="work">
          <p className="text-[#1f2937] dark:text-white">FEATURED PROJECTS</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="font-bold text-[2.5rem] dark:text-white text-[#1f2937] pr-8">
                Stuff Ive Worked On
              </h2>
              <Image src="/images/file.png" width={32} height={32} alt="file" />
            </div>
            <div className="flex items-center pr-[13.75rem]">
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

      <div className=" mt-16  h-[35rem]">
        <Carousel
          ref={carouselEl}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          itemClass="margin-right"
          showDots={false}
          arrows={false}
          // slidesToSlide={2}
        >
          {projectNames.map((item, itemIndex) => (
            <Fragment key={`project-index-${itemIndex}`}>
              <Card projectName={item} />
            </Fragment>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;
