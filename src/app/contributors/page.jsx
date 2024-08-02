"use client";
import { contributors } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { IoMailSharp } from "react-icons/io5";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contributors() {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contributors</h2>
      <div className=" w-full md:w-4/5 mx-auto my-7 text-lg">
        The Training and Placement Portal, developed by a team of enthusiastic undergraduates
        for use during Placement and Internship drives at NIT Durgapur, aims to
        streamline the recruitment process through essential automation
        resources. This portal facilitates seamless flow of information among
        Students, Companies, and the Placement Office.{" "}
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 w-full md:w-4/5 mx-auto gap-10 my-5">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-blueLight bg-blue-300/20"
          >
            <div className=" flex flex-col md:flex-row items-center gap-3 ">
              <img
                src={contributor.image}
                alt={contributor.name}
                className="rounded-full w-24 h-24"
              />
              <div>
                {" "}
                <div className="text-xl font-semibold mt-4">
                  {contributor.name} <br />{" "}
                  <span className=" text-gray-800 text-md">
                    {contributor.branch}, Class of {contributor.year}
                  </span>
                </div>
                <div className="   my-2 flex justify-start items-center gap-4">
                  <Link href={contributor.linkedin} target="blank">
                    <FaLinkedin size={24} />
                  </Link>
                  <Link href={`mailto:${contributor.email}`}>
                    <IoMailSharp size={24} />
                  </Link>
                  <Link href={contributor.github} target="_blank">
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;
