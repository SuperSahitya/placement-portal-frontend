import {
  accenture,
  adobe,
  azadiamrit,
  Background,
  barstats,
  cisco,
  dgplogo,
  HBar2024,
  jpmc,
  microsoft,
  oracle,
  Pie2024,
  pwc,
  salesforce,
  texasInstruments,
  wellsFargo,
  zs,
  bpcl,
  deloitte,
  hero,
  jsw,
  reliance,
  samsung,
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
    <div className=" bg-white text-black w-screen">
      <div className="w-screen">
        <Image src={azadiamrit} layout="responsive" objectFit="cover" />
      </div>
      <Introduction />
      <div className=" flex flex-col md:flex-row w-full justify-center my-3">
        <div className=" w-full md:w-1/2">
          <Image src={HBar2024} className=" w-3/4 mx-auto" />
        </div>
        <div className=" w-full md:w-1/2">
          <Image src={Pie2024} className=" w-3/4 mx-auto" />
        </div>
      </div>
      <Statistics />
      <div className=" w-screen mb-16 mt-5 relative">
        <div className=" mb-8 text-xl font-bold md:w-4/5 mx-auto w-full ps-2 md:ps-0">
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
            bpcl, 
            deloitte,
            hero,
            jsw,
            reliance,
            samsung
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

      <div className=" my-2 text-center">All data are associated and provided by Training and Placement Cell , NIT Durgapur.</div>
    </div>
  );
}

export default HomePage;
