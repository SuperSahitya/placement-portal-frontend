import { dgplogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" bg-secondary w-screen py-5 px-4 flex justify-between items-center">
      <div className=" flex items-center">
        <Image src={dgplogo} height={65} width={65} />
        <div className=" text-2xl ps-3 font-bold">
          National Institute of Technology, Durgapur <br /> Training and
          Placement Cell
        </div>
      </div>
      <div className=" flex flex-col items-end border-r-4 px-3 border-primary">
        <div>Contact us </div>{" "}
        <Link href="mailto:cdc@nitdgp.ac.in" className=" text-md">
          {" "}
          cdc@nitdgp.ac.in
        </Link>{" "}
        <div className=" text-md">+91 798983795</div>
      </div>
    </div>
  );
}

export default Navbar;
