import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { aboutData } from "../atoms/data";
import AboutSection from "../organisms/AboutSection";
import Contact from "../organisms/ContactSection";
import FeaturedProjects from "../organisms/FeaturedProjects";
import Intro from "../organisms/Introduction";

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <AboutSection />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;
