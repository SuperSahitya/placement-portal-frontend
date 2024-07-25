import { Background, barstats, dgplogo } from "@/assets";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InternalNavbar from "./sections/InternalNavbar";
import Introduction from "./sections/Introduction";
import Statistics from "./sections/Statistics";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div className=" bg-white h-screen text-black w-screen overflow-y-scroll">
      <Navbar />
      <InternalNavbar />
      <div className=" w-screen">
        <Image src={Background} />
      </div>
      <Introduction />
      <div className=" flex w-full justify-center my-3">
        <Image src={barstats} />
      </div>
      <Statistics />
      <Footer />
    </div>
  );
}

export default HomePage;
