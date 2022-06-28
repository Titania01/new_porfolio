import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { navData } from "../atoms/data";
import Navbar from "../molecules/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar {...navData} />
    </div>
  );
};

export default Home;
