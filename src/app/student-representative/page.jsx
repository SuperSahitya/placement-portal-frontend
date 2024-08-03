import { tprs_list } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function StudentRepresentative() {
  return (
    <div className=" mx-auto p-4">
      {tprs_list.map((degreeData, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center capitalize">
            {degreeData.degree}
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {degreeData.branches.map((branchData, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold text-center mb-5">
                  {branchData.branch}
                </h3>
                <div className="  my-3 gap-10">
                  {branchData.people.map((person, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-100 md:w-[90%] flex flex-col gap-1 my-3 mx-auto py-4 px-5 rounded-lg shadow-md"
                    >
                      <div className=" flex gap-2 items-center">
                        {" "}
                        <p className="font-bold">{person.name}</p>
                        {person.linkedin_url && (
                          <Link
                            href={person.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            <FaLinkedin size={24} />
                          </Link>
                        )}
                      </div>
                      <p>
                        <span className=" font-semibold">Mobile Number:</span>{" "}
                        {person.phone_number}
                      </p>
                      <p>
                        <span className=" font-semibold me-1">Email ID:</span>

                        <Link href={`mailto:${person.email_id}`}>
                          {person.email_id}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentRepresentative;
