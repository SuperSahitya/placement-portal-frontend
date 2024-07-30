import {
  accenture,
  adobe,
  Background,
  barstats,
  cisco,
  dgplogo,
  jpmc,
  microsoft,
  oracle,
  pwc,
  salesforce,
  texasInstruments,
  wellsFargo,
  zs,
} from "@/assets";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InternalNavbar from "./sections/InternalNavbar";
import Introduction from "./sections/Introduction";
import Statistics from "./sections/Statistics";
import Footer from "@/components/Footer";
import InfiniteLooper from "@/components/InfiniteLooper";

function HomePage() {
  return (
    <div className=" bg-white h-screen text-black w-screen overflow-y-scroll">
      <div className=" w-screen">
        <Image src={Background} />
      </div>
      <Introduction />
      <div className=" flex w-full justify-center my-3">
        <Image src={barstats} />
      </div>
      <Statistics />
      <div className=" w-screen mb-16 mt-5 relative">
        <div className=" mb-8 text-xl font-bold md:w-4/5 mx-auto w-full">
          Top Recruiting Companies
        </div>
        {/* <div className=" absolute bg-gradient-to-r from-white/80 from-0% via-transparent via-80% to-white z-10 w-full h-full"></div> */}
        <InfiniteLooper speed={15} direction={"left"}>
          {[
            accenture,
            adobe,
            cisco,
            jpmc,
            microsoft,
            oracle,
            pwc,
            salesforce,
            texasInstruments,
            wellsFargo,
            zs,
          ].map((ele, i) => {
            return (
              <div key={i} className=" w-full gap-3 mx-5">
                {" "}
                <Image src={ele} height={30} width={120} />
              </div>
            );
          })}
        </InfiniteLooper>
      </div>
    </div>
  );
}

export default HomePage;
