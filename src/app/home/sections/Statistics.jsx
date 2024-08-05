import { branchstats, Pie2024, pistats, VBar2024 } from "@/assets";
import Image from "next/image";
import React from "react";

function Statistics() {
  return (
    <div className=" w-full px-3 md:px-0 py-10 md:w-4/5 mx-auto  my-4 text-xl">
      <h3 className="text-xl font-semibold mb-2">Internships at NITD</h3>

      <h3 className="text-lg font-semibold mb-2">
        Project Semester Internships:
      </h3>

      <ul className="list-disc list-inside mb-4">
        <li>
          BE/B.Tech: Full semester in the industry, jointly supervised by
          industry and faculty.
        </li>
        <li>PG Students: One-year internship in the industry.</li>
        <li>MCA: 16-week Systems Development Project (SDP).</li>
        <li>M.Sc.: Six-week summer training.</li>
      </ul>

   

      <h3 className="text-xl font-semibold mb-2">Summer Internships:</h3>

      <p className="mb-4">
        Optional for 2nd/3rd-year students, summer internships offer practical
        industry exposure. Many top-notch companies use this as an opportunity
        to assess students and offer Pre-Placement Offers (PPOs).
      </p>
      <div className=" flex w-full justify-center my-3">
        <Image src={VBar2024} className=" w-1/2" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Industry Institute Interactions
      </h3>

      <p className="mb-2">
        NITD actively engages with industries for curriculum development, expert
        lectures, workshops, research collaborations, and resource sharing.
        These interactions enhance the learning experience and provide students
        with valuable industry insights.
      </p>
      <p className="mb-4">
        With its commitment to academic excellence and innovation, NITD
        continues to propel its students towards achieving remarkable academic
        and professional success.
      </p>
    </div>
  );
}

export default Statistics;
