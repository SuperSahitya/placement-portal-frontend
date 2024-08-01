import Navbar from "@/components/Navbar";
import React from "react";
import InternalNavbar from "../home/sections/InternalNavbar";
import { student_forms } from "@/utils/constants";
import Image from "next/image";
import { pdf_image } from "@/assets";
import Link from "next/link";
import Footer from "@/components/Footer";

function StudentSection() {
  return (
    <div className="">
      <div className=" text-3xl font-bold my-4 px-2 md:w-4/5 mx-auto">
        {" "}
        Forms for Students
      </div>
      <div className=" my-4 w-full md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {student_forms.map((forms, i) => (
          <Link
            className=" text-3xl font-bold my-4 md:w-4/5 mx-auto flex flex-col justify-center items-center"
            key={i}
            href={forms.url}
            target="blank"
          >
            <Image src={pdf_image} height={120} width={120} />
            <div className=" text-lg font-normal text-nowrap overflow-x-hidden text-ellipsis">
              {forms.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StudentSection;
