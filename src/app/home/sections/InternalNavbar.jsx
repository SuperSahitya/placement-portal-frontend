"use client";
import { navbar_links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function InternalNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#021738] text-white shadow-blueLight">
      <div className="md:hidden py-4 px-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
      </div>
      <div
        className={`pb-4 md:flex justify-center ${
          isOpen ? "block" : "hidden"
        } md:space-x-8 md:py-4`}
      >
        {navbar_links.map((links, i) => (
          <Link
            href={links.link}
            key={i}
            target={links.name === "Recruiters Section" ? "_blank" : "_self"}
            className={`${
              pathname === links.link ? "underline" : ""
            } block py-1 px-2 md:py-0 font-semi-bold md:text-lg`}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {links.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InternalNavbar;
