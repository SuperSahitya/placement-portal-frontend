
"use client"
import { navbar_links } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function InternalNavbar() {
  const pathname  = usePathname()
  return (
    <div className=" bg-primary text-white flex justify-center space-x-8 py-4">
      {navbar_links.map((links, i) => (
        <Link
          href={links.link}
          key={i}
          target={links.name === "Recruiters Section" && "blank"}
          className={pathname === links.link && " underline"}
        >
          {links.name}
        </Link>
      ))}
    </div>
  );
}

export default InternalNavbar;
