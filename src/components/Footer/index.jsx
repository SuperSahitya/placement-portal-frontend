"use client";
import { dgplogo, person_placeholder } from "@/assets";
import { contact_list, navbar_links } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome, FaLinkedin } from "react-icons/fa";
import { IoCallSharp, IoMailSharp } from "react-icons/io5";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#021738] text-white ">
      <div className=" w-full mx-auto flex flex-col md:flex-row md:items-center ps-4 md:px-0 justify-around py-6">
        <div className="mb-4 md:mb-0">
          <div className=" text-left">
            {/* <Image src={dgplogo} className=" h-20 w-20 invert" /> */}
            <h2 className="font-bold text-lg mt-2">
              Training and Placement Cell
            </h2>
            <p className=" my-2 flex gap-3 md:gap-2 items-center">
              <FaHome size={24} />
              NIT Durgapur , Mahatma Gandhi Rd, A-Zone, Durgapur,
              <br />
              West Bengal 713209
            </p>
            <p className=" my-2 flex text-ellipsis gap-3 md:gap-2 items-center">
              <IoMailSharp size={24} />{" "}
              <span className=" flex flex-col md:flex-row">
                <Link href="mailto:placementcell@nitdgp.ac.in">
                  placementcell@nitdgp.ac.in /
                </Link>

                <Link href="mailto:cdc@nitdgp.ac.in">cdc@nitdgp.ac.in</Link>
              </span>
            </p>
            <p className=" my-2 flex gap-3 md:gap-2 items-center">
              <IoCallSharp size={24} />{" "}
              <Link href="tel:+91 9800781162">+91 9800781162</Link> /
              <Link href="tel:+91 7989837958">+91 7989837958</Link>
            </p>
            <p className=" my-2 flex gap-3 md:gap-2 items-center">
              <FaLinkedin size={24} />{" "}
              <Link
                href="https://www.linkedin.com/company/cdc-nitdgp-official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </Link>
            </p>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold  text-2xl md:text-left">Important Links</h3>
          <div className=" grid grid-cols-1 gap-1 mt-4 ">
            <Link
              href="https://nitdgp.ac.in/uploads/userfiles/images/Placement%20Policy.pdf"
              className=" hover:underline"
              target="blank"
            >
              Placement Policy
            </Link>
            <Link
              href="https://nitdgp.ac.in/uploads/userfiles/images/CV%20Format%20for%20UG1.pdf"
              className=" hover:underline"
            >
              CV Format for UG
            </Link>
            <Link
              href="https://nitdgp.ac.in/uploads/userfiles/images/CV%20Format%20for%20PG1.pdf"
              className=" hover:underline"
            >
              CV Format for PG
            </Link>
            {/* <Link
              href="https://nitdgp.ac.in/"
              className=" hover:underline"
              target="blank"
            >
              NIT Durgapur
            </Link> */}
            <Link href="/contributors" className=" hover:underline">
              Contributors
            </Link>
          </div>
        </div>
        {/* <div className="mb-4 md:mb-0">
          <h3 className="font-bold  text-2xl md:text-left">Nav Links</h3>
          <div className=" grid grid-cols-1 gap-1 mt-4 ">
            {navbar_links
              .filter((obj) => obj.link !== pathname)
              .map((links, i) => (
                <Link
                  href={links.link}
                  key={i}
                  target={
                    links.name === "Recruiters Section" ? "_blank" : "_self"
                  }
                  className={`${
                    pathname === links.link ? "underline" : ""
                  } block font-semi-bold text-lg hover:underline`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {links.name}
                </Link>
              ))}
          </div>
        </div> */}
      </div>
      <div className="mt-4  text-center border-t border-gray-400 pt-4 px-2">
        <p>
          Copyright © {new Date().getFullYear()}. National Institute of Technology, Durgapur. All
          rights reserved.
        </p>
      </div>
      <div className="mt-4 text-center  md:flex md:justify-center gap-2 md:items-center w-full px-2 bg-black/50 text-md py-3">
        Developed and Maintained by
        <Image
          src={"https://nitdgplug.org/static/images/glug-logo.png"}
          className=" hidden md:block"
          height={30}
          width={30}
        />
        <span className=" font-semibold ps-1"><Link
              href="https://nitdgplug.org/"
              className=" hover:underline"
              target="blank"
            >
              GNU Linux Users&apos; Group,
              NIT Durgapur
            </Link></span> 
      </div>
    </footer>
  );
};

export default Footer;
