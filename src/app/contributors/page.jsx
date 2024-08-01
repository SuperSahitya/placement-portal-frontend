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
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {contributors.map((contributor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                <div className=" text-center  my-2 flex justify-center items-center gap-4">
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
