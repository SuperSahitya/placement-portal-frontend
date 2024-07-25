// components/Introduction.js
import { industries } from "@/utils/constants";
import React from "react";

const Introduction = () => {
  return (
    <div className=" w-full px-3 md:px-0 py-10 md:w-4/5 mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
      <p className="mb-4">
        Since its inception in 1960 as Regional Engineering College, Durgapur,
        NITD has consistently strived for academic excellence and innovation.
        Elevated to a National Institute of Technology, it now stands as an
        Institute of National Importance. NITD, the only institute of its kind
        in West Bengal, has crossed significant milestones and created a vibrant
        academic environment, inspiring students to achieve great feats.
      </p>

      <h3 className="text-xl font-semibold mb-2">Placements</h3>
      <p className="mb-4">
        Placements at NITD begin in the final year (Seventh Semester, July). The
        process starts with sending invitations to previous recruiters in May.
        Companies participate in pre-placement talks, conduct tests and
        interviews, and select the best candidates. The institute's placement
        policy is available on the portal. Industries participating in
        placements include:
      </p>

      <ul className="list-disc list-inside mb-4">
        {industries.map((industry, index) => (
          <li key={index}>{industry}</li>
        ))}
      </ul>

      <p>
        Sector-wise hiring and the average Cost To Company (CTC) offered for the
        2023 batch are provided, showcasing the institute's robust placement
        record.
      </p>
    </div>
  );
};

export default Introduction;
