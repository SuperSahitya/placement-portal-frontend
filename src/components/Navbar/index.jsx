"use client"

import { dgplogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-secondary w-screen py-5 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
      <div className="flex items-center">
        <Image src={dgplogo} height={65} width={65} />
        <div className="text-lg md:text-2xl ps-3 font-bold">
          National Institute of Technology, Durgapur <br /> Training and Placement Cell
        </div>
      </div>
      <div className="hidden md:flex gap-3 px-3">
        <div className="text-2xl font-semibold">Mail Us :</div>
        <div className="flex flex-col text-lg leading-6">
          <Link href="mailto:placementcell@nitdgp.ac.in">placementcell@nitdgp.ac.in</Link>
          <Link href="mailto:cdc@nitdgp.ac.in">cdc@nitdgp.ac.in</Link>
        </div>
      </div>
      <div className="hidden md:flex gap-3 px-3">
        <div className="text-2xl font-semibold">Call Us :</div>
        <div className="flex flex-col justify-center items-center text-lg leading-6">
          <Link href="tel:+91 9800781162">+91 9800781162</Link>
          <Link href="tel:+91 7989837958">+91 7989837958</Link>
          {/* <Link href="tel:+91 9434789024">+91 9434789024</Link> */}
        </div>
      </div>
      {/* <div className="md:hidden flex flex-col gap-3 px-3 items-start relative">
        <div 
          className="text-2xl font-semibold cursor-pointer" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Contact Us
        </div>
        <div 
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } flex flex-col text-lg leading-6 absolute bg-secondary mt-2 z-10`}
        >
          <div className="px-3 py-2">
            <div className="font-semibold">Mail Us :</div>
            <Link href="mailto:placementcell@nitdgp.ac.in">placementcell@nitdgp.ac.in</Link>
            <Link href="mailto:cdc@nitdgp.ac.in">cdc@nitdgp.ac.in</Link>
          </div>
          <div className="px-3 py-2">
            <div className="font-semibold">Call Us :</div>
            <Link href="tel:+91 9800781162">+91 9800781162</Link>
            <Link href="tel:+91 7989837958">+91 7989837958</Link>
            <Link href="tel:+91 9434789024">+91 9434789024</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
