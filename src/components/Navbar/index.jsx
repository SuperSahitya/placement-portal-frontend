import { dgplogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" bg-secondary w-screen py-5 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
      <div className=" flex items-center">
        <Image src={dgplogo} height={65} width={65} />
        <div className=" text-2xl ps-3 font-bold">
          National Institute of Technology, Durgapur <br /> Training and
          Placement Cell
        </div>
      </div>
      <div className=" flex  gap-3  px-3">
        <div className=" text-2xl font-semibold">Mail Us :</div>
        <div className=" flex flex-col text-lg leading-6 ">
          <Link href="mailto:placementcell@nitdgp.ac.in" className="">
            {" "}
            placementcell@nitdgp.ac.in
          </Link>{" "}
          <Link href="mailto:cdc@nitdgp.ac.in" className="">
            {" "}
            cdc@nitdgp.ac.in
          </Link>{" "}
        </div>
      
      </div>
      <div className=" flex  gap-3  px-3">
        <div className=" text-2xl font-semibold">Call Us :</div>
        <div className=" flex flex-col justify-center items-center text-lg leading-6 ">
          <Link href="tel:+91 9800781162" className="">
            {" "}
            +91 9800781162
          </Link>{" "}
          <Link href="tel:+91 7989837958" className="">
            {" "}
            +91 7989837958
          </Link>{" "}
          <Link href="tel:+91 9434789024" className="">
            {" "}
            +91 9434789024
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
