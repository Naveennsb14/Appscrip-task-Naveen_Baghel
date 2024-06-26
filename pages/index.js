
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headmain from "@/components/Headmain";
import { Description } from "@/components/Description";
import Filter from "@/components/Filter";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [show, setShow] = useState(true);
  return (
    <>
    <Headmain/>
    <Description/>
    <Filter show={show} setShow={setShow}/>
    <Products show={show} setShow={setShow}/>
    <Footer/>
    </>
  );
}
